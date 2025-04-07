import React from "react";
import "../assets/css/app.min.css";
import "../assets/css/icons.min.css";
import "../assets/css/vendor.min.css";
import logoDark from "../assets/images/logo-dark.png"
const Page404 = () => {
  return (
    <div 
    className="h-screen w-screen flex justify-center items-center"
    style={{ background: "linear-gradient(to top, #5e5d83 0%, #597e87 100%)" }}
  >
    <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5" style={{ width: "1400px", margin: "0 auto" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="card auth-card">
              <div className="card-body p-0">
                <div className="row align-items-center g-0">
                  <div className="col">
                    <div className="p-4">
                      <div className="mx-auto mb-4 text-center">
                        <div className="mx-auto text-center auth-logo">
                          <a href="index-2.html" className="logo-dark">
                            <img
                              src={logoDark}
                              height={30}
                              alt="logo dark"
                            />
                          </a>
                          <a href="index-2.html" className="logo-light">
                            <img
                              src="../assets/images/logo-white.png"
                              height={30}
                              alt="logo light"
                            />
                          </a>
                        </div>
                        <img
                          src="../assets/images/404.svg"
                          alt="auth"
                          height={250}
                          className="mt-5 mb-3"
                        />
                        <h2 className="fs-22 lh-base fw-bold">
                          Page Not Found !
                        </h2>
                        <p className="text-muted mt-1 mb-4">
                          The page you're trying to reach seems to have gone{" "}
                          <br /> missing in the digital wilderness.
                        </p>
                        <div className="text-center">
                          <a href="index-2.html" className="btn btn-success">
                            Back to Home
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end col */}
                </div>{" "}
                {/* end row */}
              </div>{" "}
              {/* end card-body */}
            </div>{" "}
            {/* end card */}
          </div>{" "}
          {/* end col */}
        </div>{" "}
        {/* end row */}
      </div>
    </div>
    </div>
  );
};

export default Page404;
