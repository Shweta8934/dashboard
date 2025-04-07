import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import Footer from '../components/Footer'

const MenuCard = () => {
  return (
    <>
  
  {/* START Wrapper */}
  <div className="wrapper">
    
  <Navbar/>
  <Sidebar/>
    <div className="page-container">
      {/* Start Container Fluid */}
      <div className="page-content">
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="picture-item">
                  <div className="rounded work-container">
                    <a
                      className="image-popup position-relative"
                      href="assets/images/banner-1.jpg"
                    >
                      <div className="overflow-hidden position-relative">
                        <img
                          src="assets/images/banner-1.jpg"
                          className="img-fluid rounded"
                        />
                      </div>
                    </a>
                    <div className="mt-3">
                      <div className="d-flex justify-content-between mb-0">
                        <div>
                          <p className="text-dark fw-bold mb-0 fs-18">
                            {" "}
                            Non Veg Menu
                          </p>
                        </div>
                        <div>
                          <div className="d-flex gap-3">
                            <a href="#!" className="link-dark">
                              <i className="ri-edit-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-danger">
                              <i className="ri-delete-bin-5-line align-middle fs-20" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted mb-4">
                        <span className="text-dark fw-semibold">Branch : </span>{" "}
                        All Branch Restaurant
                      </p>
                      <p className="text-muted mb-3">
                        <span className="text-dark fw-semibold">
                          Visit Us Today! :{" "}
                        </span>{" "}
                        Experience culinary excellence in a warm and inviting
                        atmosphere.
                      </p>
                      <p className="text-muted mb-0">
                        <span className="text-dark fw-semibold">
                          Order Online :{" "}
                        </span>{" "}
                        Fast, fresh, and delivered right to your door. Enjoy our
                        mouth-watering meals at home!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="picture-item">
                  <div className="rounded work-container">
                    <a
                      className="image-popup position-relative"
                      href="assets/images/banner-2.jpg"
                    >
                      <div className="overflow-hidden position-relative">
                        <img
                          src="assets/images/banner-2.jpg"
                          className="img-fluid rounded"
                        />
                      </div>
                    </a>
                    <div className="mt-3">
                      <div className="d-flex justify-content-between mb-0">
                        <div>
                          <p className="text-dark fw-bold mb-0 fs-18">
                            {" "}
                            Fast Food Menu
                          </p>
                        </div>
                        <div>
                          <div className="d-flex gap-3">
                            <a href="#!" className="link-dark">
                              <i className="ri-edit-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-danger">
                              <i className="ri-delete-bin-5-line align-middle fs-20" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted mb-4">
                        <span className="text-dark fw-semibold">Branch : </span>{" "}
                        Los Angeles Restaurant
                      </p>
                      <p className="text-muted mb-3">
                        <span className="text-dark fw-semibold">
                          Visit Us Today! :{" "}
                        </span>{" "}
                        Experience culinary excellence in a warm and inviting
                        atmosphere.
                      </p>
                      <p className="text-muted mb-0">
                        <span className="text-dark fw-semibold">
                          Order Online :{" "}
                        </span>{" "}
                        Fast, fresh, and delivered right to your door. Enjoy our
                        mouth-watering meals at home!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="picture-item">
                  <div className="rounded work-container">
                    <a
                      className="image-popup position-relative"
                      href="assets/images/banner-3.jpg"
                    >
                      <div className="overflow-hidden position-relative">
                        <img
                          src="assets/images/banner-3.jpg"
                          className="img-fluid rounded"
                        />
                      </div>
                    </a>
                    <div className="mt-3">
                      <div className="d-flex justify-content-between mb-0">
                        <div>
                          <p className="text-dark fw-bold mb-0 fs-18">
                            {" "}
                            Starter
                          </p>
                        </div>
                        <div>
                          <div className="d-flex gap-3">
                            <a href="#!" className="link-dark">
                              <i className="ri-edit-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-danger">
                              <i className="ri-delete-bin-5-line align-middle fs-20" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted mb-4">
                        <span className="text-dark fw-semibold">Branch : </span>{" "}
                        All Branch Restaurant
                      </p>
                      <p className="text-muted mb-3">
                        <span className="text-dark fw-semibold">
                          Visit Us Today! :{" "}
                        </span>{" "}
                        Experience culinary excellence in a warm and inviting
                        atmosphere.
                      </p>
                      <p className="text-muted mb-0">
                        <span className="text-dark fw-semibold">
                          Order Online :{" "}
                        </span>{" "}
                        Fast, fresh, and delivered right to your door. Enjoy our
                        mouth-watering meals at home!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="picture-item">
                  <div className="rounded work-container">
                    <a
                      className="image-popup position-relative"
                      href="assets/images/banner-4.jpg"
                    >
                      <div className="overflow-hidden position-relative">
                        <img
                          src="assets/images/banner-4.jpg"
                          className="img-fluid rounded"
                        />
                      </div>
                    </a>
                    <div className="mt-3">
                      <div className="d-flex justify-content-between mb-0">
                        <div>
                          <p className="text-dark fw-bold mb-0 fs-18">
                            {" "}
                            Special VIP Menu
                          </p>
                        </div>
                        <div>
                          <div className="d-flex gap-3">
                            <a href="#!" className="link-dark">
                              <i className="ri-edit-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-danger">
                              <i className="ri-delete-bin-5-line align-middle fs-20" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted mb-4">
                        <span className="text-dark fw-semibold">Branch : </span>{" "}
                        All Branch Restaurant
                      </p>
                      <p className="text-muted mb-3">
                        <span className="text-dark fw-semibold">
                          Visit Us Today! :{" "}
                        </span>{" "}
                        Experience culinary excellence in a warm and inviting
                        atmosphere.
                      </p>
                      <p className="text-muted mb-0">
                        <span className="text-dark fw-semibold">
                          Order Online :{" "}
                        </span>{" "}
                        Fast, fresh, and delivered right to your door. Enjoy our
                        mouth-watering meals at home!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="picture-item">
                  <div className="rounded work-container">
                    <a
                      className="image-popup position-relative"
                      href="assets/images/banner-5.jpg"
                    >
                      <div className="overflow-hidden position-relative">
                        <img
                          src="assets/images/banner-5.jpg"
                          className="img-fluid rounded"
                        />
                      </div>
                    </a>
                    <div className="mt-3">
                      <div className="d-flex justify-content-between mb-0">
                        <div>
                          <p className="text-dark fw-bold mb-0 fs-18">
                            Vegetarian Menu
                          </p>
                        </div>
                        <div>
                          <div className="d-flex gap-3">
                            <a href="#!" className="link-dark">
                              <i className="ri-edit-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-danger">
                              <i className="ri-delete-bin-5-line align-middle fs-20" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted mb-4">
                        <span className="text-dark fw-semibold">Branch : </span>{" "}
                        Los Angeles Restaurant
                      </p>
                      <p className="text-muted mb-3">
                        <span className="text-dark fw-semibold">
                          Visit Us Today! :{" "}
                        </span>{" "}
                        Experience culinary excellence in a warm and inviting
                        atmosphere.
                      </p>
                      <p className="text-muted mb-0">
                        <span className="text-dark fw-semibold">
                          Order Online :{" "}
                        </span>{" "}
                        Fast, fresh, and delivered right to your door. Enjoy our
                        mouth-watering meals at home!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="picture-item">
                  <div className="rounded work-container">
                    <a
                      className="image-popup position-relative"
                      href="assets/images/banner-6.jpg"
                    >
                      <div className="overflow-hidden position-relative">
                        <img
                          src="assets/images/banner-6.jpg"
                          className="img-fluid rounded"
                        />
                      </div>
                    </a>
                    <div className="mt-3">
                      <div className="d-flex justify-content-between mb-0">
                        <div>
                          <p className="text-dark fw-bold mb-0 fs-18">
                            Vegan Menu
                          </p>
                        </div>
                        <div>
                          <div className="d-flex gap-3">
                            <a href="#!" className="link-dark">
                              <i className="ri-edit-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-danger">
                              <i className="ri-delete-bin-5-line align-middle fs-20" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <p className="text-muted mb-4">
                        <span className="text-dark fw-semibold">Branch : </span>{" "}
                        All Branch Restaurant
                      </p>
                      <p className="text-muted mb-3">
                        <span className="text-dark fw-semibold">
                          Visit Us Today! :{" "}
                        </span>{" "}
                        Experience culinary excellence in a warm and inviting
                        atmosphere.
                      </p>
                      <p className="text-muted mb-0">
                        <span className="text-dark fw-semibold">
                          Order Online :{" "}
                        </span>{" "}
                        Fast, fresh, and delivered right to your door. Enjoy our
                        mouth-watering meals at home!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Page Content */}
 
   <Footer/>
  </div>
</>

  )
}

export default MenuCard;
