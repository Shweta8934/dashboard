import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import "../assets/css/app.min.css";
import "../assets/css/icons.min.css";
import "../assets/css/vendor.min.css";
import avatar1 from "../assets/images/users/avatar-1.jpg";
import avatar2 from "../assets/images/users/avatar-2.jpg";
import avatar7 from "../assets/images/users/avatar-7.jpg";
import avatar4 from "../assets/images/users/avatar-4.jpg";
import avatar9 from "../assets/images/users/avatar-9.jpg";
import avatar8 from "../assets/images/users/avatar-8.jpg";
import avatar10 from "../assets/images/users/avatar-10.jpg";
import avatar6 from "../assets/images/users/avatar-6.jpg";
import avatar5 from "../assets/images/users/avatar-5.jpg";



import image11 from "../assets/images/small/img-11.jpg";
import image1 from "../assets/images/small/img-1.jpg";
import image15 from "../assets/images/small/img-15.jpg";
import image7 from "../assets/images/small/img-7.jpg";
import image3 from "../assets/images/small/img-3.jpg";
import image4 from "../assets/images/small/img-4.jpg";
import image5 from "../assets/images/small/img-5.jpg";
import image6 from "../assets/images/small/img-6.jpg";
import image9 from "../assets/images/small/img-9.jpg";
import image8 from "../assets/images/small/img-8.jpg";
import image10 from "../assets/images/small/img-10.jpg";
import Footer from '../components/Footer';

const Gallery = () => {
  return (
    <div className="wrapper">
        <Navbar/>
        <Sidebar/>
  <div className="page-container">
    {/* Start Container Fluid */}
    <div className="page-content">
      <div className="row">
        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
              <div className="row justify-content-center g-3">
                <div className="col-xl-3 col-lg-6">
                  <div className="picture-item">
                    <div className="rounded work-container">
                      <a
                        className="image-popup position-relative"
                        href="../assets/images/small/img-1.jpg"
                      >
                        <div className="overflow-hidden position-relative">
                          <img
                            src={image1}
                            className="img-fluid rounded"
                          />
                          <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 ">
                            <div className="bg-black bg-opacity-25 w-100 p-2 rounded-bottom rounded-top-0">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                  <img
                                    src={avatar2}
                                    alt=""
                                    className="rounded-circle avatar-sm"
                                  />
                                  <div>
                                    <p className="fw-semibold mb-0 text-white">
                                      Daavid Nummi
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="position-absolute top-0 end-0 m-1">
                            <span className="badge bg-black bg-opacity-25 text-white py-1 px-2 fs-12 rounded">
                              Simple Image Gallery
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="picture-item">
                    <div className="rounded work-container">
                      <a
                        className="image-popup position-relative"
                        href="assets/images/small/img-11.jpg"
                      >
                        <div className="overflow-hidden position-relative">
                          <img
                            src={image11}
                            className="img-fluid rounded"
                          />
                          <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 ">
                            <div className="bg-black bg-opacity-25 w-100 p-2 rounded-bottom rounded-top-0">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                  <img
                                    src={avatar1}
                                    alt=""
                                    className="rounded-circle avatar-sm"
                                  />
                                  <div>
                                    <p className="fw-semibold mb-0 text-white">
                                      Charles Cook
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="position-absolute top-0 end-0 m-1">
                            <span className="badge bg-black bg-opacity-25 text-white py-1 px-2 fs-12 rounded">
                              Simple Image Gallery
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="picture-item">
                    <div className="rounded work-container">
                      <a
                        className="image-popup position-relative"
                        href="assets/images/small/img-15.jpg"
                      >
                        <div className="overflow-hidden position-relative">
                          <img
                            src={image15}
                            className="img-fluid rounded"
                          />
                          <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 ">
                            <div className="bg-black bg-opacity-25 w-100 p-2 rounded-bottom rounded-top-0">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                  <img
                                    src={avatar1}
                                    alt=""
                                    className="rounded-circle avatar-sm"
                                  />
                                  <div>
                                    <p className="fw-semibold mb-0 text-white">
                                      Pedro Crader
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="position-absolute top-0 end-0 m-1">
                            <span className="badge bg-black bg-opacity-25 text-white py-1 px-2 fs-12 rounded">
                              Simple Image Gallery
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6 ">
                  <div className="picture-item">
                    <div className="rounded work-container">
                      <a
                        className="image-popup position-relative"
                        href="assets/images/small/img-7.jpg"
                        data-glightbox="title: Description Right; description: .custom-desc2; descPosition: right;"
                      >
                        <div className="overflow-hidden  position-relative">
                          <img
                            src={image7}
                            className="img-fluid rounded"
                          />
                          <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 ">
                            <div className="bg-black bg-opacity-25 w-100 p-2 rounded-bottom rounded-top-0">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                  <img
                                    src={avatar7}
                                    alt=""
                                    className="rounded-circle avatar-sm"
                                  />
                                  <div>
                                    <p className="fw-semibold mb-0 text-white">
                                      Shane Sines
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="position-absolute top-0 end-0 m-1">
                            <span className="badge bg-black bg-opacity-25 text-white py-1 px-2 fs-12 rounded">
                              Images with Description
                            </span>
                          </div>
                        </div>
                      </a>
                   
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="picture-item">
                    <div className="rounded work-container">
                      <a
                        className="image-popup position-relative"
                        href="assets/images/small/img-3.jpg"
                        data-glightbox="title: ; description: .custom-desc3; descPosition: bottom;"
                      >
                        <div className="overflow-hidden  position-relative">
                          <img
                            src={image3}
                            className="img-fluid rounded"
                          />
                          <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 ">
                            <div className="bg-black bg-opacity-25 w-100 p-2 rounded-bottom rounded-top-0">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                  <img
                                    src={avatar4}
                                    alt=""
                                    className="rounded-circle avatar-sm"
                                  />
                                  <div>
                                    <p className="fw-semibold mb-0 text-white">
                                      Jeffrey McNer
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="position-absolute top-0 end-0 m-1">
                            <span className="badge bg-black bg-opacity-25 text-white py-1 px-2 fs-12 rounded">
                              Images with Description
                            </span>
                          </div>
                        </div>
                      </a>
                      <div className="glightbox-desc custom-desc3">
                        <div className="d-flex justify-content-between mb-3">
                          <div className="d-flex align-items-center gap-3">
                        
                          
                          </div>
                   
                        </div>
                     
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="picture-item">
                    <div className="rounded work-container">
                      <a
                        className="image-popup position-relative"
                        href="assets/images/small/img-4.jpg"
                        data-glightbox="title: Description Left; description: .custom-desc4; descPosition: left;"
                      >
                        <div className="overflow-hidden position-relative">
                          <img
                            src={image4}
                            className="img-fluid rounded"
                          />
                          <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 ">
                            <div className="bg-black bg-opacity-25 w-100 p-2 rounded-bottom rounded-top-0">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                  <img
                                    src={avatar5}
                                    alt=""
                                    className="rounded-circle avatar-sm"
                                  />
                                  <div>
                                    <p className="fw-semibold mb-0 text-white">
                                      Marcie Purcell
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="position-absolute top-0 end-0 m-1">
                            <span className="badge bg-black bg-opacity-25 text-white py-1 px-2 fs-12 rounded">
                              Images with Description
                            </span>
                          </div>
                        </div>
                      </a>
                      {/* <div className="glightbox-desc custom-desc4">
                        <p>
                          You can set the position of the description in
                          different ways for example
                          <strong style={{ textDecoration: "underline" }}>
                            top, bottom, left or right
                          </strong>
                        </p>
                        <p>
                          <a
                            href="http://google.com/"
                            target="_blank"
                            style={{
                              textDecoration: "underline",
                              fontWeight: "bold"
                            }}
                          >
                            Example Google link
                          </a>
                          ipsum vehicula eros ultrices lacinia Vestibulum ante
                          ipsum primis in faucibus orci luctus et ultrices
                          posuere cubilia Curae Duis quis ipsum vehicula eros
                          ultrices lacinia. Vestibulum ante ipsum primis in
                          faucibus orci luctus et ultrices posuere
                        </p>
                        <p>
                          Primis pharetra facilisis lorem quis penatibus ad
                          nulla inceptos, dui per tempor taciti aliquet
                          consequat sodales, curae tristique gravida auctor
                          interdum malesuada sagittis. Felis pretium eros ligula
                          natoque ad ante rutrum himenaeos, adipiscing urna
                          mauris porta quam efficitur odio, sagittis morbi
                          tellus nisi molestie mus faucibus.
                        </p>
                        <p>
                          Primis pharetra facilisis lorem quis penatibus ad
                          nulla inceptos, dui per tempor taciti aliquet
                          consequat sodales, curae tristique gravida auctor
                          interdum malesuada sagittis. Felis pretium eros ligula
                          natoque ad ante rutrum himenaeos, adipiscing urna
                          mauris porta quam efficitur odio, sagittis morbi
                          tellus nisi molestie mus faucibus.
                        </p>
                      </div> */}
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="picture-item">
                    <div className="rounded work-container">
                      <a
                        className="image-popup position-relative"
                        href="https://vimeo.com/524933864"
                      >
                        <div className="overflow-hidden  position-relative">
                          <img
                            src={image5}
                            className="img-fluid rounded"
                          />
                          <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 ">
                            <div className="bg-black bg-opacity-25 w-100 p-2 rounded-bottom rounded-top-0">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                  <img
                                    src={avatar6}
                                    alt=""
                                    className="rounded-circle avatar-sm"
                                  />
                                  <div>
                                    <p className="fw-semibold mb-0 text-white">
                                      Eloise Murray
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="position-absolute top-0 end-0 m-1">
                            <span className="badge bg-black bg-opacity-25 text-white py-1 px-2 fs-12 rounded">
                              Videos Gallery
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="picture-item">
                    <div className="rounded work-container">
                      <a
                        className="image-popup position-relative"
                        href="https://vimeo.com/524933864"
                      >
                        <div className="overflow-hidden position-relative">
                          <img
                            src={image6}
                            className="img-fluid rounded"
                          />
                          <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 ">
                            <div className="bg-black bg-opacity-25 w-100 p-2 rounded-bottom rounded-top-0">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                  <img
                                    src={avatar7}
                                    alt=""
                                    className="rounded-circle avatar-sm"
                                  />
                                  <div>
                                    <p className="fw-semibold mb-0 text-white">
                                      John N. Kimmel
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="position-absolute top-0 end-0 m-1">
                            <span className="badge bg-black bg-opacity-25 text-white py-1 px-2 fs-12 rounded">
                              Videos Gallery
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="picture-item">
                    <div className="rounded work-container">
                      <a
                        className="image-popup position-relative"
                        href="https://vimeo.com/524933864"
                      >
                        <div className="overflow-hidden position-relative">
                          <img
                            src={image8}
                            className="img-fluid rounded"
                          />
                          <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 ">
                            <div className="bg-black bg-opacity-25 w-100 p-2 rounded-bottom rounded-top-0">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                  <img
                                    src={avatar8}
                                    alt=""
                                    className="rounded-circle avatar-sm"
                                  />
                                  <div>
                                    <p className="fw-semibold mb-0 text-white">
                                      Max J. Copley
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="position-absolute top-0 end-0 m-1">
                            <span className="badge bg-black bg-opacity-25 text-white py-1 px-2 fs-12 rounded">
                              Videos Gallery
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="picture-item">
                    <div className="rounded work-container">
                      <a
                        className="image-popup position-relative"
                        href="https://vimeo.com/524933864"
                      >
                        <div className="overflow-hidden position-relative">
                          <img
                            src={image8}
                            className="img-fluid rounded"
                          />
                          <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 ">
                            <div className="bg-black bg-opacity-25 w-100 p-2 rounded-bottom rounded-top-0">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                  <img
                                    src={avatar9}
                                    alt=""
                                    className="rounded-circle avatar-sm"
                                  />
                                  <div>
                                    <p className="fw-semibold mb-0 text-white">
                                      Mildred J. Matth
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="position-absolute top-0 end-0 m-1">
                            <span className="badge bg-black bg-opacity-25 text-white py-1 px-2 fs-12 rounded">
                              Videos Gallery
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="picture-item">
                    <div className="rounded work-container">
                      <a
                        className="image-popup position-relative"
                        href="#inline-example"
                        data-glightbox="width: 700; height: auto;"
                      >
                        <div className="overflow-hidden position-relative">
                          <img
                            src={image9}
                            className="img-fluid rounded"
                          />
                          <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 ">
                            <div className="bg-black bg-opacity-25 w-100 p-2 rounded-bottom rounded-top-0">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                  <img
                                    src={avatar10}
                                    alt=""
                                    className="rounded-circle avatar-sm"
                                  />
                                  <div>
                                    <p className="fw-semibold mb-0 text-white">
                                      Edith M. Marks
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="position-absolute top-0 end-0 m-1">
                            <span className="badge bg-black bg-opacity-25 text-white py-1 px-2 fs-12 rounded">
                              Iframes and Inline Elements
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                  {/* <div id="inline-example" style={{ display: "none" }}>
                    <div className="inline-inner text-center">
                      <h4 className="text-center">Example of inline content</h4>
                      <div className="text-center">
                        <p>
                          Duis quis ipsum vehicula eros ultrices lacinia.
                          Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia Curae; Donec nec
                          sollicitudin felis. Donec vel nulla vel leo varius
                          tempor. Duis suscipit pharetra quam id imperdiet.
                          Praesent vitae eros metus. Donec placerat sagittis
                          rhoncus. In condimentum eleifend ante et ornare.
                          Curabitur pharetra nibh non purus gravida.
                        </p>
                      </div>
                      <a
                        className="gtrigger-close inline-close-btn btn btn-primary"
                        href="#"
                      >
                        Close Box
                      </a>
                    </div>
                  </div> */}
                </div>
                <div className="col-xl-3 col-lg-6">
                  <div className="picture-item">
                    <div className="rounded work-container">
                      <a
                        className="image-popup position-relative"
                        href="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&callback=myMap"
                      >
                        <div className="overflow-hidden position-relative">
                          <img
                            src={image10}
                            className="img-fluid rounded"
                          />
                          <div className="position-absolute bottom-0 start-50 translate-middle-x w-100 ">
                            <div className="bg-black bg-opacity-25 w-100 p-2 rounded-bottom rounded-top-0">
                              <div className="d-flex justify-content-between">
                                <div className="d-flex align-items-center gap-3">
                                  <img
                                    src={avatar1}
                                    alt=""
                                    className="rounded-circle avatar-sm"
                                  />
                                  <div>
                                    <p className="fw-semibold mb-0 text-white">
                                      Evelyn O. Ramos
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="position-absolute top-0 end-0 m-1">
                            <span className="badge bg-black bg-opacity-25 text-white py-1 px-2 fs-12 rounded">
                              Iframes and Inline Elements
                            </span>
                          </div>
                        </div>
                      </a>
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
</div>

  )
}

export default Gallery
