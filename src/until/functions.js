"use server";
import axios from "axios"
const API_URL = process.env.NEXTAUTH_APP_API_URL;
const CHECK_PACKAGE_URL = `${API_URL}/website/package`;
const CHECK_TYPE_URL = `${API_URL}/website/type`;

export const getSearchSubscriber = async (e) => {
  console.log("CHECK_PACKAGE_URL", CHECK_PACKAGE_URL);
  const response = await fetch(`${CHECK_PACKAGE_URL}?isdn=${e}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 10 },
  });
  const responseBody = await response.json();
  console.log("responseBody", responseBody);
  return responseBody;
};

export const getSearchTypeSubscriber = async (e) => {
  const response = await fetch(`${CHECK_TYPE_URL}?isdn=${e}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: { revalidate: 10 },
  });
  const responseBody = await response.json();
  return responseBody;
};


export const postFormRetail = async () => {
  const response = await axios.post( `${API_URL}/website/createSalePoint`, 
    {
      createdBy: "huy.pham2@mobifone.vn",
      shopID: "C2C_033833",
      nameShop: "Mỹ Nghiệm (Nguyễn Thị Mỹ)",
      staffSupport: "Mai Kiều Ngọc Hải",
      personalID: "066091015887",
      staffCode: "7DLABDOMBP0014",
      shopCode: "7DLABDOMBP0014",
      email: "tesst@gmail.com",
      phone: "782557883",
      province: "Tỉnh Nam Định",
      provinceCode: "36",
      district: "Huyện Hải Hậu",
      districtCode: "366",
      ward: "Xã Hải Lộc",
      wardCode: "14263",
      address: "Thôn 2, Krong Na, Buôn Đôn, Đăk Lăk",
      latitude: "12.6883602",
      longitude: "108.0557606",
    },{
    headers: {
      "Content-Type": "multipart/form-data",
    },
    next: { revalidate: 10 },
  });
  const responseBody = await response.json();
  return responseBody;
};