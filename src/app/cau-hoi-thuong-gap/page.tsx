"use client";
import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const tabs = document.querySelectorAll(".tab_btn");
    const contents = document.querySelectorAll(".content");
    tabs.forEach((tab, index) => {
      tab.addEventListener("click", (e) => {
        tabs.forEach((tab1) => {
          tab1.classList.remove("active");
        });
        contents.forEach((content) => {
          content.classList.remove("active");
        });
        tab.classList.add("active");
        contents[index].classList.add("active");
      });
    });
  }, []);
  return (
    <div className="questions">
      <div className="container">
        <div className="tab_box">
          <button className="tab_btn">Gói cước</button>
          <button className="tab_btn">Dịch vụ</button>
          <button className="tab_btn">Thanh toán cước</button>
          <button className="tab_btn">Nạp tiền</button>
          <div className="line"></div>
        </div>
        <div className="content_box">
          <div className="content">
            <h2>Gói cước</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              molestiae ipsa cupiditate reiciendis aliquam expedita unde esse,
              culpa quidem blanditiis, dolor assumenda deserunt reprehenderit
              eos sunt, ipsum maiores dolorem nihil.
            </p>
          </div>
          <div className="content">
            <h2>Dịch vụ</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              molestiae ipsa cupiditate reiciendis aliquam expedita unde esse,
              culpa quidem blanditiis, dolor assumenda deserunt reprehenderit
              eos sunt, ipsum maiores dolorem nihil.
            </p>
          </div>
          <div className="content">
            <h2>Thanh toán cước</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              molestiae ipsa cupiditate reiciendis aliquam expedita unde esse,
              culpa quidem blanditiis, dolor assumenda deserunt reprehenderit
              eos sunt, ipsum maiores dolorem nihil.
            </p>
          </div>
          <div className="content">
            <h2>Nạp tiền</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              molestiae ipsa cupiditate reiciendis aliquam expedita unde esse,
              culpa quidem blanditiis, dolor assumenda deserunt reprehenderit
              eos sunt, ipsum maiores dolorem nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
