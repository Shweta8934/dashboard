import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import Footer from '../components/Footer'

const Media = () => {
  return (
    <div className="wrapper">
        <Navbar/>
        <Sidebar/>
    <div className="page-container">
      {/* Start Container Fluid */}
      <div className="page-content">
        <div className="row">
          <div className="col-xl-12">
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center">
                <div>
                  <p className="card-title mb-0">Media</p>
                </div>
                <div className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle btn btn-sm btn-outline-light rounded"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Reports
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    {/* item*/}
                    <a href="#!" className="dropdown-item">
                      Export
                    </a>
                    {/* item*/}
                    <a href="#!" className="dropdown-item">
                      Import
                    </a>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="table-responsive">
                  <table className="table align-middle mb-0 table-hover table-centered">
                    <thead className="bg-light-subtle">
                      <tr>
                        <th className="w-25">Photo</th>
                        <th>Media Typee</th>
                        <th>File Name</th>
                        <th>Path</th>
                        <th>Size</th>
                        <th>Upload Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <a href="assets/images/favicon.ico">
                            <img
                              src="assets/images/favicon.ico"
                              alt=""
                              className="avatar-md"
                            />
                          </a>
                        </td>
                        <td>favicon</td>
                        <td>favicon.ico</td>
                        <td>assets/images/favicon.ico</td>
                        <td> 101 KB </td>
                        <td>01/07/2024</td>
                        <td>
                          <div className="d-flex gap-3">
                            <a href="#!" className="text-muted">
                              <i className="ri-eye-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-dark">
                              <i className="ri-edit-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-danger">
                              <i className="ri-delete-bin-5-line align-middle fs-20" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="assets/images/logo-dark.png">
                            <img
                              src="assets/images/logo-dark.png"
                              alt=""
                              className="img-fluid w-25"
                            />
                          </a>
                        </td>
                        <td>logo</td>
                        <td>logo-dark.png</td>
                        <td>assets/images/logo-dark.png</td>
                        <td> 5.53 KB </td>
                        <td>04/07/2024</td>
                        <td>
                          <div className="d-flex gap-3">
                            <a href="#!" className="text-muted">
                              <i className="ri-eye-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-dark">
                              <i className="ri-edit-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-danger">
                              <i className="ri-delete-bin-5-line align-middle fs-20" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="assets/images/logo-white.png">
                            <img
                              src="assets/images/logo-white.png"
                              alt=""
                              className="img-fluid w-25"
                            />
                          </a>
                        </td>
                        <td>logo</td>
                        <td>logo-white.png</td>
                        <td>assets/images/logo-white.png</td>
                        <td> 5.67 KB </td>
                        <td>05/07/2024</td>
                        <td>
                          <div className="d-flex gap-3">
                            <a href="#!" className="text-muted">
                              <i className="ri-eye-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-dark">
                              <i className="ri-edit-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-danger">
                              <i className="ri-delete-bin-5-line align-middle fs-20" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="assets/images/banner-1.jpg">
                            <img
                              src="assets/images/banner-1.jpg"
                              alt=""
                              className="img-fluid w-50"
                            />
                          </a>
                        </td>
                        <td>image</td>
                        <td>banner-1.jpg</td>
                        <td>assets/images/banner-1.jpg</td>
                        <td> 2.24 MB </td>
                        <td>06/07/2024</td>
                        <td>
                          <div className="d-flex gap-3">
                            <a href="#!" className="text-muted">
                              <i className="ri-eye-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-dark">
                              <i className="ri-edit-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-danger">
                              <i className="ri-delete-bin-5-line align-middle fs-20" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="assets/images/banner-3.jpg">
                            <img
                              src="assets/images/banner-3.jpg"
                              alt=""
                              className="img-fluid w-50"
                            />
                          </a>
                        </td>
                        <td>image</td>
                        <td>banner-3.jpg</td>
                        <td>assets/images/banner-3.jpg</td>
                        <td> 2.02 MB </td>
                        <td>06/07/2024</td>
                        <td>
                          <div className="d-flex gap-3">
                            <a href="#!" className="text-muted">
                              <i className="ri-eye-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-dark">
                              <i className="ri-edit-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-danger">
                              <i className="ri-delete-bin-5-line align-middle fs-20" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="assets/images/food-icon/offer-1.png">
                            <img
                              src="assets/images/food-icon/offer-1.png"
                              alt=""
                              className="img-fluid w-50"
                            />
                          </a>
                        </td>
                        <td>image</td>
                        <td>offer-1.png</td>
                        <td>assets/images/food-icon/offer-1.png</td>
                        <td> 3 MB </td>
                        <td>08/07/2024</td>
                        <td>
                          <div className="d-flex gap-3">
                            <a href="#!" className="text-muted">
                              <i className="ri-eye-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-dark">
                              <i className="ri-edit-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-danger">
                              <i className="ri-delete-bin-5-line align-middle fs-20" />
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="assets/images/r-2.jpg">
                            <img
                              src="assets/images/r-2.jpg"
                              alt=""
                              className="img-fluid w-50"
                            />
                          </a>
                        </td>
                        <td>image</td>
                        <td>r-2.jpg</td>
                        <td>assets/images/r-2.jpg</td>
                        <td> 1.35 MB </td>
                        <td>08/07/2024</td>
                        <td>
                          <div className="d-flex gap-3">
                            <a href="#!" className="text-muted">
                              <i className="ri-eye-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-dark">
                              <i className="ri-edit-line align-middle fs-20" />
                            </a>
                            <a href="#!" className="link-danger">
                              <i className="ri-delete-bin-5-line align-middle fs-20" />
                            </a>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* end table-responsive */}
              </div>
              <div className="card-footer border-0">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-end mb-0">
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0);">
                        <i className="ri-arrow-left-s-line" />
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="javascript:void(0);">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0);">
                        2
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0);">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="javascript:void(0);">
                        <i className="ri-arrow-right-s-line" />
                      </a>
                    </li>
                  </ul>
                </nav>
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

export default Media
