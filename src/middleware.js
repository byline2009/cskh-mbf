export { default } from "next-auth/middleware";
export const config = {
  matcher: [
    "/form-retail",
    "/dashboard",
    "/",
    "/kiem-tra-thue-bao",
    "/kiem-tra-loai-thue-bao",
    "/cau-hoi-thuong-gap",
  ],
};
