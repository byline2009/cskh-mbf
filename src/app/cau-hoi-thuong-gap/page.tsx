"use client";
import { errorMsale, questions1 } from "@config/constants";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import React, { useEffect } from "react";

const Page = () => {
  const params = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    console.log("check");
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

    var accordions = document.querySelectorAll("accordion");
    accordions.forEach((acc, index) => {
      accordions.forEach((acc1) => {
        acc1.classList.remove("active");
      });
      acc.addEventListener("click", (e) => {
        acc.classList.add("active");
      });
    });
    console.log(params.get("type"));
    if (!params.get("type")) {
      router.push("cau-hoi-thuong-gap?type=goi-cuoc", undefined);
      tabs[0].classList.add("active");
      contents[0].classList.add("active");
    } else {
      if (params.get("type") == "msale") {
        tabs[1].classList.add("active");
        contents[1].classList.add("active");
      }
    }

    return () => {
      tabs.forEach((tab, index) => {
        tab.removeEventListener("click", () => {});
      });
    };
  }, []);
  return (
    <div className="questions">
      <div className="container">
        <div className="tab_box">
          <Link
            className="tab_btn"
            href={"/cau-hoi-thuong-gap?type=goi-cuoc"}
            passHref
          >
            <div className="nav-item__thumb">
              <img
                className="img-active"
                src="https://www.mobifone.vn/assets/source/image/i_charge_active.svg"
                alt="goi-cuoc"
              />
              <img
                className="img-inactive"
                src="https://www.mobifone.vn/assets/source/image/i_charge.svg"
                alt="goi-cuoc"
              />
            </div>

            <p>Gói cước</p>
          </Link>
          <Link
            className="tab_btn"
            href={"/cau-hoi-thuong-gap?type=msale"}
            passHref
          >
            <div className="nav-item__thumb">
              <img
                className="img-active"
                src="https://www.mobifone.vn/assets/source/image/i_service_active.svg"
                alt="dich-vu"
              />
              <img
                className="img-inactive"
                src="https://www.mobifone.vn/assets/source/image/i_service.svg"
                alt="dich-vu"
              />
            </div>

            <p>Msale</p>
          </Link>{" "}
          <Link
            className="tab_btn"
            href={"/cau-hoi-thuong-gap?type=thanh-toan-cuoc"}
            passHref
          >
            <div className="nav-item__thumb">
              <img
                className="img-active"
                src="https://www.mobifone.vn/assets/source/image/i_paycharge_active.svg"
                alt="thanh-toan-cuoc"
              />
              <img
                className="img-inactive"
                src="https://www.mobifone.vn/assets/source/image/i_paycharge.svg"
                alt="thanh-toan-cuoc"
              />
            </div>

            <p>Thanh toán cước</p>
          </Link>{" "}
          <Link
            className="tab_btn"
            href={"/cau-hoi-thuong-gap?type=nap-tien"}
            passHref
          >
            <div className="nav-item__thumb">
              <img
                className="img-active"
                src="https://www.mobifone.vn/assets/source/image/i_naptien_active.svg"
                alt="nap-tien"
              />
              <img
                className="img-inactive"
                src="https://www.mobifone.vn/assets/source/image/i_naptien.svg"
                alt="nap-tien"
              />
            </div>

            <p>Nạp tiền</p>
          </Link>{" "}
          <div className="line"></div>
        </div>
        <div className="content_box">
          <div className="content">
            <h4 className="title">Câu hỏi thường gặp</h4>
            {/* {questions1.map((item, index) => (
              <div className="faq" key={index}>
                <button className="accordion">
                  {item.q} <i className="fa-solid fa-chevron-down"></i>
                </button>
                <div className="pannel">
                  <p>{item.a}</p>
                </div>
              </div>
            ))} */}
            <div id="accordion1">
              {questions1.map((item, index) => (
                <div className="card" key={index}>
                  <div className="card-header" id={`heading${index}`}>
                    <button
                      className="btn btn-link btn-collapse"
                      data-toggle="collapse"
                      data-target={`#collapse${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse${index}`}
                    >
                      <p>{item.q}</p>
                      <i className="fa-solid fa-chevron-down"></i>
                    </button>
                  </div>

                  <div
                    id={`collapse${index}`}
                    className="collapse"
                    aria-labelledby={`heading${index}`}
                    data-parent="#accordion1"
                  >
                    <div className="card-body">{item.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="content">
            <h2>Msale</h2>
            <div id="accordion2">
              {errorMsale.map((item, index) => (
                <div className="card" key={index}>
                  <div className="card-header" id={`heading2${index}`}>
                    <button
                      className="btn btn-link btn-collapse"
                      data-toggle="collapse"
                      data-target={`#collapse2${index}`}
                      aria-expanded="false"
                      aria-controls={`collapse2${index}`}
                    >
                      <p>{item.error}</p>
                      <i className="fa-solid fa-chevron-down"></i>
                    </button>
                  </div>

                  <div
                    id={`collapse2${index}`}
                    className="collapse"
                    aria-labelledby={`heading2${index}`}
                    data-parent="#accordion2"
                  >
                    <div className="card-body">{item.explain}</div>
                  </div>
                </div>
              ))}
            </div>
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
