"use client";
"use strict";
// pages/index.tsx
import React, { useState, useEffect, ChangeEvent } from "react";
import { useSession } from "next-auth/react";
import "./styles.scss"; // Import file SCSS
import MapComponent from "@components/map/map";
import tinhData from "../../mock/tinh-tp/tinh_tp.json"; // Dữ liệu tỉnh
import Image from "next/image";
import { ProvinceData, DistrictData, WardData } from "@/types/locationTypes";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
const API_URL_FORM = process.env.NEXTAUTH_APP_API_URL_SSL;
const defaultCenter = { lat: 12.6883602, lng: 108.0557606 };
import { FormRetailData } from "@/types/formRetailTypes";
const https = require("https");

const FormRetail: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<any>(null);
  const [province, setProvince] = useState<ProvinceData[]>([]);
  const [districts, setDistricts] = useState<DistrictData[]>([]);
  const [wards, setWards] = useState<WardData[]>([]);
  const { data: session } = useSession(); // Lấy thông tin session người dùng

  const agent = new https.Agent({
    rejectUnauthorized: false,
  });
  // In ra session để kiểm tra thông tin
  useEffect(() => {
    console.log("Thông tin session: ", session);
  }, [session]);

  // Khởi tạo formData, bao gồm createdBy
  const [formData, setFormData] = useState<FormRetailData>({
    avatar: null,
    nameShop: "",
    shopID: "",
    staffSupport: "",
    personalID: "",
    staffCode: "",
    shopCode: "",
    email: "",
    phone: "",
    provinceCode: "",
    districtCode: "",
    wardCode: "",
    province: "",
    district: "",
    ward: "",
    address: "",
    latitude: defaultCenter.lat,
    longitude: defaultCenter.lng,
    images: [],
    createdBy: session?.user?.email || "", // Lưu toàn bộ thông tin session dưới dạng chuỗi,
  });

  // Hàm xử lý thay đổi tỉnh
  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const provinceCode = e.target.value;

    import(`../../mock/tinh-tp/tinh_tp.json`)
      .then((module) => {
        const provinces = Object.values(module.default);
        const provinceData = provinces.find(
          (item) => item.code === provinceCode
        );
        const provinceName = provinceData
          ? provinceData.name_with_type
          : "Tên tỉnh không có";

        setFormData({
          ...formData,
          province: provinceName,
          provinceCode: provinceCode,
          districtCode: "", // Reset quận
          wardCode: "", // Reset xã/phường
          address: "", // Reset địa chỉ
        });

        import(`../../mock/quan-huyen/${provinceCode}.json`)
          .then((module) => {
            setDistricts(Object.values(module.default));
            setWards([]); // Reset xã/phường khi thay đổi tỉnh
          })
          .catch((error) => {
            console.error("Không tìm thấy dữ liệu huyện:", error);
            setDistricts([]); // Reset districts khi có lỗi
            setWards([]); // Reset wards khi có lỗi
          });
      })
      .catch((error) => {
        console.error("Không tìm thấy dữ liệu tỉnh:", error);
      });
  };

  // Hàm xử lý thay đổi quận
  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const districtCode = e.target.value;
    const districtData = districts.find((item) => item.code === districtCode);
    const districtName = districtData
      ? districtData.name_with_type
      : "Tên quận không có";

    setFormData({
      ...formData,
      districtCode: districtCode,
      district: districtName,
      wardCode: "", // Reset xã/phường
      address: "", // Reset địa chỉ
    });

    import(`../../mock/xa-phuong/${districtCode}.json`)
      .then((module) => {
        setWards(Object.values(module.default));
      })
      .catch((error) => {
        console.error("Không tìm thấy dữ liệu xã:", error);
        setWards([]); // Reset wards khi có lỗi
      });
  };

  // Hàm xử lý thay đổi xã/phường
  const handleWardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const wardCode = e.target.value;
    const wardData = wards.find((item) => item.code === wardCode);
    const wardName = wardData
      ? wardData.name_with_type
      : "Tên xã/phường không có";

    setFormData({
      ...formData,
      wardCode: wardCode,
      ward: wardName,
      address: "", // Reset địa chỉ khi thay đổi xã/phường
    });
  };

  // Hàm để resize ảnh
  const resizeImage = (
    file: File,
    maxWidth: number,
    maxHeight: number,
    maxSizeKB: number = 100
  ): Promise<File> => {
    return new Promise((resolve, reject) => {
      const img = new window.Image(); // Dùng `window.Image`
      const reader = new FileReader();

      reader.onload = () => {
        img.src = reader.result as string;
      };

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (ctx) {
          let quality = 0.8; // Chất lượng ban đầu (80%)
          let resizedFile: File;

          const processImage = () => {
            // Tính toán tỷ lệ để resize
            const ratio = Math.min(
              maxWidth / img.width,
              maxHeight / img.height
            );
            const width = img.width * ratio;
            const height = img.height * ratio;

            canvas.width = width;
            canvas.height = height;
            ctx.clearRect(0, 0, width, height);
            ctx.drawImage(img, 0, 0, width, height);

            canvas.toBlob(
              (blob) => {
                if (blob) {
                  if (blob.size / 1024 <= maxSizeKB || quality <= 0.1) {
                    // Tạo file cuối cùng khi đạt yêu cầu hoặc giảm chất lượng xuống quá thấp
                    resizedFile = new File([blob], file.name, {
                      type: file.type,
                      lastModified: Date.now(),
                    });
                    resolve(resizedFile);
                  } else {
                    // Giảm chất lượng và thử lại
                    quality -= 0.1;
                    processImage();
                  }
                } else {
                  reject(new Error("Failed to resize image"));
                }
              },
              file.type,
              quality
            );
          };

          processImage(); // Bắt đầu quá trình xử lý ảnh
        } else {
          reject(new Error("Canvas context not available"));
        }
      };

      img.onerror = reject;
      reader.readAsDataURL(file); // Đọc file ảnh dưới dạng DataURL
    });
  };

  // Hàm xử lý thay đổi dữ liệu các trường khác
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleMapClick = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();
      setFormData({ ...formData, latitude: lat, longitude: lng });
    }
  };

  // Upload ảnh avatar
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [avatarFile, setAvatarFile] = useState<File | null>(null); // Để theo dõi file avatar

  // Cập nhật giá trị khi người dùng chọn ảnh
  const handleImageAvata = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const maxSizeMB = 3; // Kích thước tối đa 3MB
      const maxSizeBytes = maxSizeMB * 1024 * 1024; // Chuyển đổi thành byte

      // Bước 1: Cập nhật ảnh gốc để hiển thị trong phần xem trước
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);

      // Bước 2: Kiểm tra và resize ảnh nếu vượt quá 3MB
      if (file.size > maxSizeBytes) {
        console.log(`Ảnh vượt quá ${maxSizeMB}MB. Đang tiến hành resize...`);

        try {
          const resizedImage = await resizeImage(file, 500, 500, 100); // Resize với max 100KB
          setFormData({
            ...formData,
            avatar: resizedImage, // Lưu ảnh đã resize vào formData
          });

          console.log("Ảnh đã được resize thành công:", resizedImage);
        } catch (error) {
          console.error("Lỗi khi resize ảnh:", error);
        }
      } else {
        // Ảnh không cần resize, giữ nguyên ảnh gốc
        setFormData({
          ...formData,
          avatar: file,
        });
        console.log("Ảnh dưới 3MB, không cần resize.");
      }
    } else {
      // Reset nếu không có file nào được chọn
      setImagePreview(null);
      setAvatarFile(null);
      console.log("Không có ảnh nào được chọn.");
    }
  };
  // Upload nhiều ảnh
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const previews: string[] = []; // Mảng chứa URL xem trước
      const fileList: File[] = []; // Mảng chứa các file đã xử lý

      const maxAllowedSize = 3 * 1024 * 1024; // Kích thước tối đa: 3MB
      const targetSizeKB = 100; // Mục tiêu resize: dưới 100KB

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Tạo preview từ ảnh gốc
        previews.push(URL.createObjectURL(file));

        // Kiểm tra kích thước ảnh, resize nếu vượt quá 3MB
        if (file.size > maxAllowedSize) {
          console.log(`Ảnh ${file.name} vượt quá 3MB. Đang resize...`);
          try {
            const resizedImage = await resizeImage(
              file,
              500,
              500,
              targetSizeKB
            );
            fileList.push(resizedImage); // Lưu ảnh đã resize
            console.log(`Ảnh ${file.name} đã được resize thành công.`);
          } catch (error) {
            console.error(`Lỗi khi resize ảnh ${file.name}:`, error);
            fileList.push(file); // Trong trường hợp lỗi, giữ nguyên ảnh gốc
          }
        } else {
          fileList.push(file); // Nếu ảnh < 3MB, giữ nguyên ảnh gốc
        }
      }

      // Cập nhật formData với danh sách ảnh đã xử lý
      setFormData({
        ...formData,
        images: fileList,
      });

      // Cập nhật phần xem trước ảnh
      setImagePreviews(previews);
    } else {
      // Reset nếu không có ảnh nào được chọn
      setImagePreviews([]);
      setFormData({
        ...formData,
        images: [],
      });
    }
  };

  const [modalShow, setModalShow] = useState(false); // State điều khiển việc hiển thị modal
  const [errorModalShow, setErrorModalShow] = useState(false); // Modal không thành công
  const [errorMessage, setErrorMessage] = useState<string>(""); // State chứa lỗi từ serve

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    console.log("check submit");
    console.log("check session", session);

    const formDataToSend = new FormData();

    // Resize ảnh đại diện (avatar) nếu có
    if (avatarFile && avatarFile instanceof File) {
      try {
        const resizedAvatar = await resizeImage(avatarFile, 500, 500); // Resize ảnh
        formDataToSend.append("avatar", resizedAvatar); // Đính kèm avatar đã resize vào FormData
      } catch (error) {
        console.error("Error resizing avatar:", error);
      }
    }

    // Resize các ảnh trong mảng images nếu có
    if (formData.images && Array.isArray(formData.images)) {
      const resizedImagesPromises = formData.images.map(
        (image: File) => resizeImage(image, 500, 500) // Resize từng ảnh
      );

      try {
        const resizedImages = await Promise.all(resizedImagesPromises);
        resizedImages.forEach((image: File) => {
          formDataToSend.append("images", image); // Đính kèm ảnh đã resize vào FormData
        });
      } catch (error) {
        console.error("Error resizing images:", error);
      }
    }

    // Duyệt qua các trường formData khác và thêm vào FormData
    Object.keys(formData).forEach((key) => {
      const value = formData[key];
      if (Array.isArray(value)) {
        value.forEach((image: string | File) => {
          if (image instanceof File) {
            formDataToSend.append(key, image); // Đảm bảo ảnh được gửi chính xác
          }
        });
      } else {
        formDataToSend.append(key, value); // Thêm từng trường vào FormData
      }
    });

    console.log("Dữ liệu FormData sẽ được gửi:", formDataToSend);

    try {
      const response = await axios.post(
        `${API_URL_FORM}/website/createSalePoint`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response from server:", response);
      setModalShow(true);

      // Reset formData và các thông tin liên quan
      setFormData({
        avatar: null,
        nameShop: "",
        shopID: "",
        staffSupport: "",
        personalID: "",
        staffCode: "",
        shopCode: "",
        email: "",
        phone: "",
        provinceCode: "",
        districtCode: "",
        wardCode: "",
        province: "",
        district: "",
        ward: "",
        address: "",
        latitude: defaultCenter.lat,
        longitude: defaultCenter.lng,
        images: [],
        createdBy: session?.user?.email || "",
      });

      // Reset ảnh xem trước (preview)
      setImagePreview(null);
      setImagePreviews([]);
      setAvatarFile(null);
    } catch (error: any) {
      console.error("Error response:", error.response);
      console.log("API URL:", `${API_URL_FORM}/website/createSalePoint`);

      const errorMsg = error.response?.data?.errors
        ? error.response.data.errors.map((err: any) => err.msg).join(", ")
        : error.message || "Lỗi không xác định.";

      setErrorMessage(errorMsg);
      setErrorModalShow(true);
    }
  };

  return (
    <div className="container">
      <div className="map-column">
        <div className="avata">
          <h3>Xem Trước Ảnh Đại Diện:</h3>
          {imagePreview ? (
            <div className="image-wrapper">
              <Image
                src={imagePreview}
                alt="Preview"
                width={500}
                height={300}
                layout="responsive"
              />
            </div>
          ) : (
            <div className="placeholder">Vui lòng chọn ảnh để hiển thị</div>
          )}
        </div>
      </div>

      <div className="form-container">
        <h2>Khai Báo Thông Tin Điểm Bán Lẻ</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="Avata">Ảnh đại diện điểm bán</label>
            <input
              id="avata"
              type="file"
              accept="image/*"
              onChange={handleImageAvata}
            />
          </div>
          <div>
            <label htmlFor="firstName">Tên Điểm Bán</label>
            <input
              type="text"
              id="nameShop"
              name="nameShop"
              value={formData.nameShop}
              onChange={handleChange}
              placeholder="Tên Điểm Bán"
              required
            />
          </div>
          <div>
            <label htmlFor="idDiemBan">Mã Điểm Bán</label>
            <input
              type="text"
              id="shopID"
              name="shopID"
              value={formData.shopID}
              onChange={handleChange}
              placeholder="Mã Điểm Bán"
              required
            />
          </div>
          <div>
            <label htmlFor="staffSupport">
              Nhân viên phát triển và hỗ trợ điểm bán
            </label>
            <input
              type="text"
              id="staffSupport"
              name="staffSupport"
              value={formData.staffSupport}
              onChange={handleChange}
              placeholder="Nhân viên phát triển và hỗ trợ điểm bán"
              required
            />
          </div>
          <div>
            <label htmlFor="">Số CCCD</label>
            <input
              type="text"
              id="personalID"
              name="personalID"
              value={formData.personalID}
              onChange={handleChange}
              placeholder="Số CCCD"
              required
            />
          </div>
          <div>
            <label htmlFor="staffCode">Mã User</label>
            <input
              type="text"
              id="staffCode"
              name="staffCode"
              value={formData.staffCode}
              onChange={handleChange}
              placeholder="Mã User"
              required
            />
          </div>
          <div>
            <label htmlFor="idDiemBan">Mã Shopcode</label>
            <input
              type="text"
              id="shopCode"
              name="shopCode"
              value={formData.shopCode}
              onChange={handleChange}
              placeholder="Mã Shopcode"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email của bạn"
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Số điện thoại của bạn"
              required
            />
          </div>
          <div className="form-row">
            {/* Province Selection */}
            <div className="">
              <label htmlFor="province">Tỉnh/Thành phố:</label>
              <select
                id="provinceCode"
                name="provinceCode"
                value={formData.provinceCode || ""} // Đảm bảo giá trị không phải undefined
                onChange={handleProvinceChange}
                required
              >
                <option value="">Chọn tỉnh/thành phố</option>
                {Object.values(tinhData).map((province: any) => (
                  <option key={province.code} value={province.code}>
                    {province.name} {/* Hiển thị tên tỉnh */}
                  </option>
                ))}
              </select>
            </div>

            {/* District Selection */}
            <div className="">
              <label htmlFor="district">Quận/Huyện:</label>
              <select
                id="district"
                name="district"
                value={formData.districtCode}
                onChange={handleDistrictChange}
                required
              >
                <option value="">Chọn quận/huyện</option>
                {districts.length > 0 ? (
                  districts.map((district: any) => (
                    <option key={district.code} value={district.code}>
                      {district.name}
                    </option>
                  ))
                ) : (
                  <option disabled>Chọn tỉnh để thấy các quận/huyện</option>
                )}
              </select>
            </div>

            {/* Ward Selection */}
            <div>
              <label htmlFor="ward">Xã/Phường:</label>
              <select
                id="ward"
                name="ward"
                value={formData.wardCode}
                onChange={handleWardChange}
                required
              >
                <option value="">Chọn xã/phường</option>
                {wards.length > 0 ? (
                  wards.map((ward: any) => (
                    <option key={ward.code} value={ward.code}>
                      {ward.name}
                    </option>
                  ))
                ) : (
                  <option disabled>Chọn quận để thấy các xã/phường</option>
                )}
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="phone">Địa chỉ cụ thể</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Địa chỉ cụ thể"
              required
            />
          </div>

          <div>
            <label htmlFor="latitude">Latitude</label>
            <input
              type="text"
              id="latitude"
              name="latitude"
              step="any"
              value={formData.latitude}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="longitude">Longitude</label>
            <input
              type="text"
              id="longitude"
              name="longitude"
              step="any"
              value={formData.longitude}
              onChange={handleChange}
              required
            />
          </div>
          <div className="map">
            {/* code cho map */}
            <h3>Xem Trước Địa Chỉ Được Ghim:</h3>
            <MapComponent
              latitude={formData.latitude}
              longitude={formData.longitude}
              onMapClick={handleMapClick}
            />
          </div>
          <div>
            <label htmlFor="multipleImages">Ảnh minh họa (nhiều ảnh)</label>
            <input
              type="file"
              id="multipleImages"
              accept="image/*"
              multiple
              onChange={handleImages}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        <Modal show={modalShow} onHide={() => setModalShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Nhập liệu thành công!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Dữ liệu của bạn đã được gửi thành công.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setModalShow(false)}>
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>

        {/* Modal thông báo lỗi */}
        <Modal show={errorModalShow} onHide={() => setErrorModalShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Lỗi khi gửi dữ liệu!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Đã có lỗi xảy ra khi gửi dữ liệu. Vui lòng thử lại.
            <br />
            <span style={{ color: "red" }}>{errorMessage}</span>{" "}
            {/* Hiển thị lỗi từ backend */}
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => setErrorModalShow(false)}
            >
              Đóng
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default FormRetail;
