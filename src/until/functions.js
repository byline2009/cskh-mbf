"use server";
const API_URL = process.env.NEXTAUTH_APP_API_URL;
const CHECK_PACKAGE_URL = `${API_URL}/website/package`;
export const getSearchSubscriber = async (e) => {
  const response = await fetch(`${CHECK_PACKAGE_URL}/checkPackage?isdn=${e}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const responseBody = await response.json();
  return responseBody;
};
