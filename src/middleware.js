export { default } from "next-auth/middleware";
export const config = {
  matcher: ["/dashboard", "/", "/kiem-tra-thue-bao", "/cau-hoi-thuong-gap"],
};
