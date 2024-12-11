"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import FormRetail from "../../components/formRetail/form-retail";

const Page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      // Chuyển hướng người dùng đến trang đăng nhập nếu không đăng nhập
      router.push("/login");
    }
  }, [status, router]);

  useEffect(() => {
    let sun = document.querySelector(".sun");
    let body = document.querySelector("body");
    // console.log("sun", sun);
    // sun.onclick = function () {
    //   body.classList.toggle("dark");
    // };
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>; // Hiển thị trong khi kiểm tra trạng thái đăng nhập
  }

  if (!session) {
    return null; // Tránh render nội dung khi chưa xác định trạng thái
  }

  return (
    <div className="scene">
      <div className=""></div>
      <div className=""></div>
      <div className="">
        <div className="">
          <div className="flex flex-1">
            <div className="w-full">
              <FormRetail />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
