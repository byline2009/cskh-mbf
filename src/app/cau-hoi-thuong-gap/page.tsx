"use client";
import { questions1 } from "@config/constants";
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
    tabs[0].classList.add("active");
    contents[0].classList.add("active");
    var accordions = document.querySelectorAll("accordion");
    accordions.forEach((acc, index) => {
      accordions.forEach((acc1) => {
        acc1.classList.remove("active");
      });
      acc.addEventListener("click", (e) => {
        acc.classList.add("active");
      });
    });

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
          <button className="tab_btn">Gói cước</button>
          <button className="tab_btn">Dịch vụ</button>
          <button className="tab_btn">Thanh toán cước</button>
          <button className="tab_btn">Nạp tiền</button>
          <div className="line"></div>
        </div>
        <div className="content_box">
          <div className="content">
            <h2>Gói cước</h2>
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
            <div id="accordion">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      Collapsible Group Item #1
                    </button>
                  </h5>
                </div>

                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    {`Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.`}
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingTwo">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Collapsible Group Item #2
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    {`Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.`}
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingThree">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link collapsed"
                      data-toggle="collapse"
                      data-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Collapsible Group Item #3
                    </button>
                  </h5>
                </div>
                <div
                  id="collapseThree"
                  className="collapse"
                  aria-labelledby="headingThree"
                  data-parent="#accordion"
                >
                  <div className="card-body">
                    {` Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.`}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <h2>Dịch vụ</h2>
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
