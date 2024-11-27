"use client";
import React, { useEffect } from "react";
import { Chat } from "@/components/chat";

const Page = () => {
  useEffect(() => {
    let sun = document.querySelector(".sun");
    let body = document.querySelector("body");
    console.log("sun", sun);
    sun.onclick = function () {
      body.classList.toggle("dark");
    };
  }, []);
  return (
    <div className="scene">
      <div className="sun"></div>
      <div className="bg-chat"></div>
      <div className="container container-position">
        <div className="chat-content">
          {/* <div className=" d-flex bg-transparent">
            <span className="font-bold">Chat-with-MobiFone 7</span>
          </div> */}
          <div className="flex flex-1">
            <div className="w-full">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
