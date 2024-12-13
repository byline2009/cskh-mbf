import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    console.log("req.method ", req.method);
    const formData = await req.json();
    const formDataToSend = new FormData();

    // Duyệt qua formData và thêm vào FormData object
    Object.keys(formData).forEach((key, index) => {
      if (Array.isArray(formData[key])) {
        // Nếu là mảng (ví dụ như ảnh), thêm ảnh vào FormData
        formData[key].forEach((image: string | File, index: number) => {
          formDataToSend.append(key, image); // Đảm bảo ảnh được gửi chính xác
        });
      } else {
        formDataToSend.append(key, formData[key]); // Thêm từng trường vào FormData
      }

    });
    // not needed in NextJS v12+
    console.log("formDataToSend", formDataToSend)
    const API_URL_FORM = process.env.NEXTAUTH_APP_API_URL_LOCAL;
    console.log("API_URL_FORM", API_URL_FORM);
    const result = await axios
      .post(`${API_URL_FORM}/website/createSalePoint`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    if (result) {
      console.log("csdcfsdfds", result)
      return NextResponse.json({ status: 200, message: result })

    } else {
      return NextResponse.json(
        { message: "An error occurred while get code." },
        { status: 500 }
      );
    }

  } catch (error: any) {
    console.log(error)
    const errorMsg = error.response?.data?.errors

    return NextResponse.json(
      { message: errorMsg },
      { status: 400 }
    );
  }
  // the rest of your code
}
export async function GET(req: NextRequest) {
  console.log("req.method ", req.method);
  return NextResponse.json({ messsage: "heello" });


}
