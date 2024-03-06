"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [typePassword, setTypePassword] = useState("password");
  const [email, setEmail] = useState("");
  const [password, usePassword] = useState("");
  const [loginTitle, setLoginTitle] = useState("Please login to use platform");
  useEffect(() => {}, []);
  const handleNextClick = (e: any) => {
    e.preventDefault();
    const pageBox = document.querySelector(".page-box");
    const loginTitle = document.querySelector(".loginTitle-text");

    pageBox?.classList.add("active-pass");
    if (loginTitle != undefined) {
      loginTitle!.innerHTML = "Wellcome";
    }
    setLoginTitle(email);
    // const passwordInput = document.querySelector<HTMLInputElement>(".password");
    // if (passwordInput) {
    //   passwordInput.focus();
    // }
  };
  const handleBackClick = (e: any) => {
    e.preventDefault();
    const pageBox = document.querySelector(".page-box");
    pageBox?.classList.remove("active-pass");
    const loginTitle = document.querySelector(".loginTitle-text");
    if (loginTitle != undefined) {
      loginTitle!.innerHTML = "Login";
    }
    // const emailInput = document.querySelector<HTMLInputElement>(".email");
    // if (emailInput) {
    //   emailInput.focus();
    // }
  };
  const handleShowPass = (e: any) => {
    let isChecked = e.target.checked;
    if (isChecked) {
      setTypePassword("text");
    } else {
      setTypePassword("password");
    }
    console.log(e);
  };
  return (
    <div className="login-test">
      <div className="container-login">
        <div className="login-box">
          <form action="#">
            <div className="page-box">
              <div className="login-title">
                <h2 className="loginTitle-text">Login</h2>
                <p>{loginTitle}</p>
              </div>
              <div className="page email-page">
                <div className="input-box">
                  <input
                    type="text"
                    className="email"
                    value={email}
                    autoFocus
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <label htmlFor="email">Enter your email</label>
                </div>
                <div className="forgot">
                  <a href="#">Forgot email?</a>
                </div>

                <div className="btn-box">
                  <a href="#">Create account</a>
                  <button onClick={handleNextClick} className="bnt-next">
                    Next
                  </button>
                </div>
              </div>
              <div className="page password-page">
                <div className="input-box">
                  <input type={typePassword} className="password" required />
                  <label htmlFor="password">Enter your password</label>
                </div>
                <div className="forgot show">
                  <a href="#">Forgot password?</a>
                  <label>
                    <input
                      type="checkbox"
                      className="checkbox-pass"
                      onClick={handleShowPass}
                    />
                    Show password
                  </label>
                </div>

                <div className="btn-box">
                  <button onClick={handleBackClick} className="bnt-back">
                    Back
                  </button>
                  <button className="bnt-next" type="submit">
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
