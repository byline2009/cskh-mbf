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
  console.log("FormRetail");
  const response = await axios.post("http://localhost:8100/website/createSalePoint", {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    next: { revalidate: 10 },
  });
  const responseBody = await response.json();
  return responseBody;
};