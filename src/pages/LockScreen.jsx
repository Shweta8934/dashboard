import React from "react";
import "../assets/css/app.min.css";
import "../assets/css/icons.min.css";
import "../assets/css/vendor.min.css";
import logoDark from "../assets/images/logo-dark.png";
const LockScreen = () => {
  return (
    
    <div
      className="account-pages pt-2 pb-4 pb-sm-5"
    >
      <div className="container"  style={{ width: "1400px", margin: "0 auto" }}>
        <div className="row justify-content-center">
          <div className="col-xl-5">
            <div className="card auth-card">
              <div className="card-body px-3 py-5">
                <div className="mx-auto mb-5 auth-logo text-center">
                  <a href="index-2.html" className="logo-dark">
                    <img
                      src={logoDark}
                      height={30}
                      alt="logo dark"
                    />
                  </a>
                  <a href="index-2.html" className="logo-light">
                    <img
                      src="assets/images/logo-white.png"
                      height={30}
                      alt="logo light"
                    />
                  </a>
                </div>
                <h2 className="fw-bold text-center fs-18">Hi ! Gaston</h2>
                <p className="text-muted text-center mt-1 mb-4">
                  Enter your password to access the admin.
                </p>
                <div className="px-4">
                  <form
                    action="https://foxpixel.vercel.app/metor/index.html"
                    className="authentication-form"
                  >
                    <div className="mb-3">
                      <label
                        className="form-label visually-hidden"
                        htmlFor="example-password"
                      >
                        Password
                      </label>
                      <input
                        type="text"
                        id="example-password"
                        className="form-control"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="mb-1 text-center d-grid">
                      <button className="btn btn-primary" type="submit">
                        Sign In
                      </button>
                    </div>
                  </form>
                </div>{" "}
                {/* end col */}
              </div>{" "}
              {/* end card-body */}
            </div>{" "}
            {/* end card */}
            <p className="mb-0 text-center">
              Not you? return{" "}
              <a href="auth-signup.html" className="text-reset fw-bold ms-1">
                Sign Up
              </a>
            </p>
          </div>{" "}
          {/* end col */}
        </div>{" "}
        {/* end row */}
      </div>
    </div>
  );
};

export default LockScreen;
