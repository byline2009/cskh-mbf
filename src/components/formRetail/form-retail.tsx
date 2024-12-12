"use client";
"use strict";
// pages/index.tsx
import React, { useState, useEffect } from "react";
import "./styles.scss"; // Import file SCSS
import MapComponent from "@components/map/map";
import tinhData from "../../mock/tinh-tp/tinh_tp.json"; // Dữ liệu tỉnh
import { useFormData } from "@/state/useFormData";
import Image from "next/image";

import { Modal, Button } from "react-bootstrap";

const FormRetail: React.FC = () => {
  const {
    formData,
    submittedData, // Sử dụng submittedData từ hook
    districts,
    wards,
    imagePreview,
    modalShow,
    errorModalShow,
    handleChange,
    handleProvinceChange,
    handleDistrictChange,
    handleMapClick,
    handleSubmit,
    handleWardChange,
    handleImageAvata,
    handleImages,
    setModalShow,
    setErrorModalShow,
    errorMessage,
  } = useFormData();

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
        <div className="map">
          {/* code cho map */}
          <h3>Xem Trước Địa Chỉ Được Ghim:</h3>
          <MapComponent
            latitude={formData.latitude}
            longitude={formData.longitude}
            onMapClick={handleMapClick}
          />
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
              required
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
              placeholder="Chủ Sở Hữu"
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
              type="number"
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
              type="number"
              id="longitude"
              name="longitude"
              step="any"
              value={formData.longitude}
              onChange={handleChange}
              required
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
