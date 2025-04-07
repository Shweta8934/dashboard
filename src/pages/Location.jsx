import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import Footer from '../components/Footer'

const Location = () => {
  return (
    <div className="wrapper">
        <Navbar/>
        <Sidebar/>
  <div className="page-container">
    {/* Start Container Fluid */}
    <div className="page-content">
      <div className="row">
        <div className="col-lg-12">
          <div className="card bg-location text-center">
            <div className="bg-overlay rounded" />
            <div className="row align-items-end justify-content-center">
              <div className="col-lg-6">
                <h1 className="text-white fw-bold">
                  Visit Us At Los Angeles Locations
                </h1>
                <p className="text-white fw-semibold fs-15">
                  1607 Columbia Road Aurora, Smith Street West CO 80014
                </p>
                <a href="#!" className="btn btn-danger">
                  <i className="ri-direction-line me-2" /> Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="card">
            <div className="card-body">
              <img
                src="assets/images/r-2.jpg"
                alt=""
                className="img-fluid rounded"
              />
              <div className="mt-3">
                <div className="d-flex gap-2 align-items-center mb-2">
                  <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                  </ul>
                  <p className="mb-0 fw-medium fs-15 mt-1">4.9</p>
                </div>
                <span className="fw-medium text-dark fs-18">
                  <i className="ri-map-pin-range-line" />
                </span>
                <span className="fw-medium text-dark ms-1">
                  311 Owen Lane Traverse City, <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; MI 49686
                </span>
                <div className="mt-1 mb-3">
                  <span className="fw-medium text-dark fs-18">
                    <i className="ri-phone-line" />
                  </span>
                  <a href="#!" className="fw-medium link-primary ms-1">
                    + 231-912-3301
                  </a>
                </div>
                <a href="#!" className="btn btn-primary">
                  <i className="ri-direction-line me-2" /> Get Direction
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="card">
            <div className="card-body">
              <img
                src="assets/images/r-5.jpg"
                alt=""
                className="img-fluid rounded"
              />
              <div className="mt-3">
                <div className="d-flex gap-2 align-items-center mb-2">
                  <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-half-fill" />
                    </li>
                    <li>
                      <i className="ri-star-line" />
                    </li>
                  </ul>
                  <p className="mb-0 fw-medium fs-15 mt-1">3.5</p>
                </div>
                <span className="fw-medium text-dark fs-18">
                  <i className="ri-map-pin-range-line" />
                </span>
                <span className="fw-medium text-dark ms-1">
                  1607 Columbia Road Aurora, <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; CO 80014
                </span>
                <div className="mt-1 mb-3">
                  <span className="fw-medium text-dark fs-18">
                    <i className="ri-phone-line" />
                  </span>
                  <a href="#!" className="fw-medium link-primary ms-1">
                    + 303-200-7037
                  </a>
                </div>
                <a href="#!" className="btn btn-primary">
                  <i className="ri-direction-line me-2" /> Get Direction
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="card">
            <div className="card-body">
              <img
                src="assets/images/r-4.jpg"
                alt=""
                className="img-fluid rounded"
              />
              <div className="mt-3">
                <div className="d-flex gap-2 align-items-center mb-2">
                  <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-half-fill" />
                    </li>
                  </ul>
                  <p className="mb-0 fw-medium fs-15 mt-1">4.1</p>
                </div>
                <span className="fw-medium text-dark fs-18">
                  <i className="ri-map-pin-range-line" />
                </span>
                <span className="fw-medium text-dark ms-1">
                  Walkers Ridge Way Westchester, <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; IL 60154
                </span>
                <div className="mt-1 mb-3">
                  <span className="fw-medium text-dark fs-18">
                    <i className="ri-phone-line" />
                  </span>
                  <a href="#!" className="fw-medium link-primary ms-1">
                    + 630-255-2934
                  </a>
                </div>
                <a href="#!" className="btn btn-primary">
                  <i className="ri-direction-line me-2" /> Get Direction
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-lg-6 col-md-6">
          <div className="card">
            <div className="card-body">
              <img
                src="assets/images/r-3.jpg"
                alt=""
                className="img-fluid rounded"
              />
              <div className="mt-3">
                <div className="d-flex gap-2 align-items-center mb-2">
                  <ul className="d-flex text-warning m-0 fs-18 list-unstyled">
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-fill" />
                    </li>
                    <li>
                      <i className="ri-star-half-fill" />
                    </li>
                  </ul>
                  <p className="mb-0 fw-medium fs-15 mt-1">4.2</p>
                </div>
                <span className="fw-medium text-dark fs-18">
                  <i className="ri-map-pin-range-line" />
                </span>
                <span className="fw-medium text-dark ms-1">
                  Pike Street San Diego, <br />
                  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; CA 92126
                </span>
                <div className="mt-1 mb-3">
                  <span className="fw-medium text-dark fs-18">
                    <i className="ri-phone-line" />
                  </span>
                  <a href="#!" className="fw-medium link-primary ms-1">
                    + 858-586-5574
                  </a>
                </div>
                <a href="#!" className="btn btn-primary">
                  <i className="ri-direction-line me-2" /> Get Direction
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4 className="mt-3 mb-4 fw-bold">Get Direction</h4>
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div
                style={{
                  maxWidth: "100%",
                  overflow: "hidden",
                  color: "red",
                  width: 2000,
                  height: 500
                }}
                className="rounded"
              >
                <div
                  id="canvas-for-googlemap"
                  style={{ height: "100%", width: "100%", maxWidth: "100%" }}
                >
                  <iframe
                    style={{ height: "100%", width: "100%", border: 0 }}
                    frameBorder={0}
                    src="https://www.google.com/maps/embed/v1/directions?origin=los+angeles&destination=los+angeles&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                  />
                </div>
                <a
                  className="embedded-map-code"
                  rel="nofollow"
                  href="https://www.bootstrapskins.com/themes"
                  id="get-data-for-embed-map"
                >
                  premium bootstrap themes
                </a>
                <style
                  dangerouslySetInnerHTML={{
                    __html:
                      "\n                                                  #canvas-for-googlemap img {\n                                                       max-height: none;\n                                                       max-width: none !important;\n                                                       background: none !important;\n                                                  }\n                                             "
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
<Footer/>
  </div>
  {/* END Wrapper */}
</div>

  )
}

export default Location
