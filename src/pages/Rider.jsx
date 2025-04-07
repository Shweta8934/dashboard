import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'

const Rider = () => {
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
                  <p className="card-title mb-0">Riders</p>
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
                        <th>Rider ID</th>
                        <th>Rider Name</th>
                        <th>Contact No.</th>
                        <th>Vehicle Type</th>
                        <th>Delivery Area</th>
                        <th>Status</th>
                        <th>Shift Time</th>
                        <th>Ratings</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>#R-001</td>
                        <td>
                          <img
                            src="assets/images/users/avatar-2.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          <a href="#!" className="link-dark fw-semibold">
                            James Vanhorne
                          </a>{" "}
                        </td>
                        <td>+ 234-567-8901</td>
                        <td>Bicycle</td>
                        <td>Downtown</td>
                        <td>Available</td>
                        <td>9 AM - 5 PM</td>
                        <td>
                          <p className="mb-0">
                            <i className="ri-star-fill text-warning me-1 fs-16" />
                            4.2/5
                          </p>
                        </td>
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
                        <td>#R-002</td>
                        <td>
                          <img
                            src="assets/images/users/avatar-3.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          <a href="#!" className="link-dark fw-semibold">
                            Andrea Nelson
                          </a>{" "}
                        </td>
                        <td>+ 334-355-2756</td>
                        <td>Scooter</td>
                        <td>Uptown</td>
                        <td>On Delivery</td>
                        <td>10 AM - 6 PM</td>
                        <td>
                          <p className="mb-0">
                            <i className="ri-star-fill text-warning me-1 fs-16" />
                            4.3/5
                          </p>
                        </td>
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
                        <td>#R-003</td>
                        <td>
                          <img
                            src="assets/images/users/avatar-4.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          <a href="#!" className="link-dark fw-semibold">
                            Lester C. Dicrs
                          </a>{" "}
                        </td>
                        <td>+ 574-773-8792</td>
                        <td>Car</td>
                        <td>Suburbs</td>
                        <td>Available</td>
                        <td>11 AM - 7 PM</td>
                        <td>
                          <p className="mb-0">
                            <i className="ri-star-fill text-warning me-1 fs-16" />
                            3.7/5
                          </p>
                        </td>
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
                        <td>#R-004</td>
                        <td>
                          <img
                            src="assets/images/users/avatar-5.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          <a href="#!" className="link-dark fw-semibold">
                            Anne S. Molina
                          </a>{" "}
                        </td>
                        <td>+ 619-204-6604</td>
                        <td>Motorcycle</td>
                        <td>Eastside</td>
                        <td>On Break</td>
                        <td>12 PM - 8 PM</td>
                        <td>
                          <p className="mb-0">
                            <i className="ri-star-fill text-warning me-1 fs-16" />
                            4.1/5
                          </p>
                        </td>
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
                        <td>#R-005</td>
                        <td>
                          <img
                            src="assets/images/users/avatar-6.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          <a href="#!" className="link-dark fw-semibold">
                            Ruth J. McCloud
                          </a>{" "}
                        </td>
                        <td>+ 785-650-9186</td>
                        <td>Motorcycle</td>
                        <td>Westside</td>
                        <td>On Delivery</td>
                        <td>1 PM - 9 PM</td>
                        <td>
                          <p className="mb-0">
                            <i className="ri-star-fill text-warning me-1 fs-16" />
                            4.3/5
                          </p>
                        </td>
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
                        <td>#R-006</td>
                        <td>
                          <img
                            src="assets/images/users/avatar-7.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          <a href="#!" className="link-dark fw-semibold">
                            Antonio A. Youn
                          </a>{" "}
                        </td>
                        <td>+ 719-651-0296</td>
                        <td>Bicycle</td>
                        <td>Midtown</td>
                        <td>On Leave</td>
                        <td>2 PM - 10 PM</td>
                        <td>
                          <p className="mb-0">
                            <i className="ri-star-fill text-warning me-1 fs-16" />
                            4.5/5
                          </p>
                        </td>
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
                        <td>#R-007</td>
                        <td>
                          <img
                            src="assets/images/users/avatar-8.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          <a href="#!" className="link-dark fw-semibold">
                            Robert J. Mc
                          </a>{" "}
                        </td>
                        <td>+ 803-306-7753</td>
                        <td>Scooter</td>
                        <td>Downtown</td>
                        <td>Available</td>
                        <td>3 PM - 11 PM</td>
                        <td>
                          <p className="mb-0">
                            <i className="ri-star-fill text-warning me-1 fs-16" />
                            4.2/5
                          </p>
                        </td>
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
                        <td>#R-008</td>
                        <td>
                          <img
                            src="assets/images/users/avatar-9.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          <a href="#!" className="link-dark fw-semibold">
                            Jill R. Smith
                          </a>{" "}
                        </td>
                        <td>+ 914-469-0980</td>
                        <td>Car</td>
                        <td>Uptown</td>
                        <td>On Break</td>
                        <td>4 PM - 12 AM</td>
                        <td>
                          <p className="mb-0">
                            <i className="ri-star-fill text-warning me-1 fs-16" />
                            4.8/5
                          </p>
                        </td>
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
                        <td>#R-009</td>
                        <td>
                          <img
                            src="assets/images/users/avatar-10.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          <a href="#!" className="link-dark fw-semibold">
                            Mary W. Hayes
                          </a>{" "}
                        </td>
                        <td>+ 218-766-6544</td>
                        <td>Motorcycle</td>
                        <td>Eastside</td>
                        <td>On Delivery</td>
                        <td>9 AM - 5 PM</td>
                        <td>
                          <p className="mb-0">
                            <i className="ri-star-fill text-warning me-1 fs-16" />
                            4.34/5
                          </p>
                        </td>
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
                        <td>#R-0010</td>
                        <td>
                          <img
                            src="assets/images/users/avatar-1.jpg"
                            className="avatar-sm rounded-circle me-2"
                            alt="..."
                          />
                          <a href="#!" className="link-dark fw-semibold">
                            Tasha D. Mitch
                          </a>{" "}
                        </td>
                        <td>+ 410-309-6920</td>
                        <td>Bicycle</td>
                        <td>Downtown</td>
                        <td>On Leave</td>
                        <td>1 PM - 9 PM</td>
                        <td>
                          <p className="mb-0">
                            <i className="ri-star-fill text-warning me-1 fs-16" />
                            4.6/5
                          </p>
                        </td>
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
      {/* ========== Footer Start ========== */}
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              © Metor. All rights reserved by FoxPixel
            </div>
          </div>
        </div>
      </footer>
      {/* ========== Footer End ========== */}
    </div>
    {/* END Wrapper */}
    {/* Mirrored from foxpixel.vercel.app/metor/riders.html by HTTrack Website Copier/3.x [XR&CO'2014], Fri, 21 Mar 2025 06:21:07 GMT */}
  </div>

  )
}

export default Rider;
