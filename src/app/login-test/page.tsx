"use client";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [typePassword, setTypePassword] = useState("password");
  useEffect(() => {}, []);
  const handleNextClick = (e: any) => {
    e.preventDefault();
    const pageBox = document.querySelector(".page-box");
    pageBox?.classList.add("active-pass");
  };
  const handleBackClick = (e: any) => {
    e.preventDefault();
    const pageBox = document.querySelector(".page-box");
    pageBox?.classList.remove("active-pass");
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
                <h2>Login</h2>
                <p>Please login to use platform</p>
              </div>
              <div className="page email-page">
                <div className="input-box">
                  <input type="text" className="email" autoFocus required />
                  <label htmlFor="email">Enter your email</label>
                </div>
                <div className="forgot">
                  <a href="#">Forgot email?</a>
                </div>
                <div className="guest-mode">
                  <p>Not your computer? Use guest mode to login privately</p>
                  <a href="#">Learn more</a>
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
                <div className="guest-mode">
                  <p>Not your computer? Use guest mode to login privately</p>
                  <a href="#">Learn more</a>
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
