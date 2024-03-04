import React from "react";

const page = () => {
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
              <div className="page">
                <div className="input-box">
                  <input type="text" className="email" required />
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
                  <button className="bnt-next">Next</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
