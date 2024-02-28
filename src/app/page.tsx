/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { topSliders } from "@config/constants";
import LoginForm from "../components/login/LoginForm";
type ISlider = {
  imgSrc: string;
};
export default function Home() {
  const [widthWindow, setWidthWindow] = useState(0);
  const [topNews, setTopNews] = useState<ISlider[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidthWindow(window.innerWidth);
    }
    setTopNews(topSliders);
  }, []);
  const settingTopnews = {
    dots: true,
    dotsClass: "slick-dots slick-top-news",
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };
  return (
    <div className="home-page">
      <div className="top-news">
        <LoginForm />
        <Slider {...settingTopnews}>
          {topNews.map((item, index) => (
            <div key={index}>
              <Link href={"/"} key={index} className="top-news-item">
                <img src={item.imgSrc} alt="top-new" />
                {/* <div className="top-news-content">
                    <h2>{item.title}</h2>
                  </div> */}
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
