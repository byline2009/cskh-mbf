"use client";
import React, { useEffect, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const Page = () => {
  const [typePassword, setTypePassword] = useState("password");
  const [password, usePassword] = useState("");
  const [loginTitle, setLoginTitle] = useState("Please login to use platform");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      setLoading(false);
      if (res && res.error) {
        setError("Invalid credentials");
        return;
      }
      router.replace("/");
      router.refresh();
    } catch (e) {}
  };
  useEffect(() => {}, []);
  const handleNextClick = (e) => {
    e.preventDefault();
    let re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email)) {
      const pageBox = document.querySelector(".page-box");
      const loginTitle = document.querySelector(".loginTitle-text");
      pageBox?.classList.add("active-pass");
      if (loginTitle != undefined) {
        loginTitle.innerHTML = "Wellcome";
      }
      setLoginTitle(email);
      setErrorEmail("");
    } else {
      setErrorEmail("Kiểm tra lại định dạng email");
    }

    // const passwordInput = document.querySelector<HTMLInputElement>(".password");
    // if (passwordInput) {
    //   passwordInput.focus();
    // }
  };
  const handleBackClick = (e) => {
    e.preventDefault();
    const pageBox = document.querySelector(".page-box");
    pageBox?.classList.remove("active-pass");
    const loginTitle = document.querySelector(".loginTitle-text");
    if (loginTitle != undefined) {
      loginTitle.innerHTML = "Login";
    }
    // const emailInput = document.querySelector<HTMLInputElement>(".email");
    // if (emailInput) {
    //   emailInput.focus();
    // }
  };
  const handleShowPass = (e) => {
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
          <form onSubmit={handleSubmit}>
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
                <div className="caption">
                  <p>Sử dụng email MobiFone để login vào hệ thống</p>
                </div>

                <div className="btn-box">
                  <a href="#">Create account</a>
                  <button onClick={handleNextClick} className="bnt-next">
                    Next
                  </button>
                </div>
                {errorEmail && (
                  <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-4">
                    {errorEmail}
                  </div>
                )}
              </div>
              <div className="page password-page">
                <div className="input-box">
                  <input type={typePassword} className="password" required />
                  <label htmlFor="password">Enter your password</label>
                </div>
                <div className="forgot show">
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
                  {loading && (
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  )}
                  {!loading && (
                    <button className="bnt-next" type="submit">
                      Login
                    </button>
                  )}
                </div>
                {error && (
                  <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-4">
                    {error}
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
