import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logoDark from "../assets/images/logo-dark.png"
const Maintenance = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center vh-100 bg-gradient"
      style={{ background: "linear-gradient(to right, #6a85b6, #bac8e0)" }}
    >
      <div className="container" style={{ width: "1400px" }}>
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 bg-white p-5 rounded shadow-lg d-flex flex-column flex-md-row align-items-center">
            <div className="col-md-6 text-center">
              <img
                src="	http://127.0.0.1:5500/metor/assets/images/maintenance.svg"
                alt="Maintenance"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 text-center text-md-start mt-4 mt-md-0" style={{marginLeft :"20px"}}>
              <h2 className="fw-bold">
                <img src={logoDark} alt="" srcset="" />
                
              </h2>
              <h3 className="fw-bold">We&apos;ll be back soon!</h3>
              <p>
                Our website is currently undergoing scheduled maintenance. We
                appreciate your patience and will be back online shortly.
              </p>
              <button className="btn btn-primary">Get Updates</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;
