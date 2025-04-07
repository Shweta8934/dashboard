import React from "react";
import "../assets/css/app.min.css";
import "../assets/css/icons.min.css";
import "../assets/css/vendor.min.css";
const ComingSoon = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 authentication-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card auth-card text-center">
              <div className="card-body">
                <div className="mx-auto my-5 text-center">
                  <a href="index-2.html">
                    <img
                      src="/assets/images/logo-dark.png" // If image is inside 'public'
                      alt="logo-dark"
                      height={30}
                    />
                  </a>
                </div>
                <h3 className="fw-bold text-uppercase">
                  We Are Launching Soon...
                </h3>
                <p className="lead mt-3 w-75 mx-auto pb-4 fst-italic">
                  Exciting news is on the horizon! We're thrilled to announce
                  that something incredible is coming your way very soon.
                </p>
                <div className="row my-5">
                  <div className="col">
                    <h3 id="days" className="fw-bold fs-60">
                      00
                    </h3>
                    <p className="text-uppercase fw-semibold">Days</p>
                  </div>
                  <div className="col">
                    <h3 id="hours" className="fw-bold fs-60">
                      00
                    </h3>
                    <p className="text-uppercase fw-semibold">Hours</p>
                  </div>
                  <div className="col">
                    <h3 id="minutes" className="fw-bold fs-60">
                      00
                    </h3>
                    <p className="text-uppercase fw-semibold">Minutes</p>
                  </div>
                  <div className="col">
                    <h3 id="seconds" className="fw-bold fs-60">
                      00
                    </h3>
                    <p className="text-uppercase fw-semibold">Seconds</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default ComingSoon;
