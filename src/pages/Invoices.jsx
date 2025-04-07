import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import avatar1 from "../assets/images/users/avatar-1.jpg";
import avatar2 from "../assets/images/users/avatar-2.jpg";
import avatar7 from "../assets/images/users/avatar-7.jpg";
import avatar4 from "../assets/images/users/avatar-4.jpg";
import avatar9 from "../assets/images/users/avatar-9.jpg";
import avatar8 from "../assets/images/users/avatar-8.jpg";
import avatar10 from "../assets/images/users/avatar-10.jpg";
import avatar6 from "../assets/images/users/avatar-6.jpg";
import avatar5 from "../assets/images/users/avatar-5.jpg";
import avatar3 from "../assets/images/users/avatar-3.jpg";
import Footer from '../components/Footer';
const Invoices = () => {
  return (
    <div className="wrapper">
        <Navbar/>
        <Sidebar/>
  <div className="page-container">
    {/* Start Container Fluid */}
    <div className="page-content">
      {/* Start here.... */}
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-3">
                <h5 className="card-title mb-0">My Invoices</h5>
                <div className="search-bar ms-auto">
                  <span style={{ top: 5 }}>
                    <i className="bx bx-search" />
                  </span>
                  <input
                    type="search"
                    className="form-control form-control-sm"
                    id="search"
                    placeholder="Search..."
                  />
                </div>
                <div>
                  <a href="#!" className="btn btn-sm btn-success">
                    <i className="bx bx-plus me-1" />
                    New Invoice
                  </a>
                </div>
              </div>{" "}
              {/* end row */}
            </div>
            <div>
              <div className="table-responsive table-centered">
                <table className="table table-striped text-nowrap mb-0">
                  <thead className="text-uppercase fs-12">
                    <tr>
                      <th className="border-0 py-2 text-dark">Invoice ID</th>
                      <th className="border-0 py-2 text-dark">Customer</th>
                      <th className="border-0 py-2 text-dark">Created Date</th>
                      <th className="border-0 py-2 text-dark">Due Date</th>
                      <th className="border-0 py-2 text-dark">Amount</th>
                      <th className="border-0 py-2 text-dark">
                        Payment Status
                      </th>
                      <th className="border-0 py-2 text-dark">Via</th>
                      <th className="border-0 py-2 text-dark">Action</th>
                    </tr>
                  </thead>{" "}
                  {/* end thead*/}
                  <tbody>
                    <tr>
                      <td>
                        <a href="invoice-details.html" className="fw-medium">
                          #IN9023
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={avatar8}
                            alt=""
                            className="avatar-xs rounded-circle me-2"
                          />
                          <div>
                            <h5 className="fs-14 m-0 fw-normal">
                              Ethan Walker
                            </h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        15 Mar, 2025 <small>10:30 AM</small>
                      </td>
                      <td>22 Mar, 2025</td>
                      <td>$1,250.75</td>
                      <td>
                        <span className="badge badge-soft-warning">Unpaid</span>
                      </td>
                      <td>Credit Card</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-secondary me-1"
                        >
                          <i className="bx bx-edit fs-16" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-danger"
                        >
                          <i className="bx bx-trash fs-16" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-details.html" className="fw-medium">
                          #IN3147
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={avatar9}
                            alt=""
                            className="avatar-xs rounded-circle me-2"
                          />
                          <div>
                            <h5 className="fs-14 m-0 fw-normal">
                              Sophia Adams
                            </h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        07 Feb, 2025 <small>02:45 PM</small>
                      </td>
                      <td>15 Feb, 2025</td>
                      <td>$980.00</td>
                      <td>
                        <span className="badge badge-soft-danger">Overdue</span>
                      </td>
                      <td>PayPal</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-secondary me-1"
                        >
                          <i className="bx bx-edit fs-16" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-danger"
                        >
                          <i className="bx bx-trash fs-16" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-details.html" className="fw-medium">
                          #IN7654
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={avatar10}
                            alt=""
                            className="avatar-xs rounded-circle me-2"
                          />
                          <div>
                            <h5 className="fs-14 m-0 fw-normal">
                              Daniel Carter
                            </h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        28 Jan, 2025 <small>11:10 AM</small>
                      </td>
                      <td>05 Feb, 2025</td>
                      <td>$715.25</td>
                      <td>
                        <span className="badge badge-soft-success">Paid</span>
                      </td>
                      <td>Wire Transfer</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-secondary me-1"
                        >
                          <i className="bx bx-edit fs-16" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-danger"
                        >
                          <i className="bx bx-trash fs-16" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-details.html" className="fw-medium">
                          #IN5532
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={avatar1}
                            alt=""
                            className="avatar-xs rounded-circle me-2"
                          />
                          <div>
                            <h5 className="fs-14 m-0 fw-normal">Mia Johnson</h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        10 Apr, 2025 <small>09:50 AM</small>
                      </td>
                      <td>18 Apr, 2025</td>
                      <td>$560.90</td>
                      <td>
                        <span className="badge badge-soft-warning">Unpaid</span>
                      </td>
                      <td>Bank Transfer</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-secondary me-1"
                        >
                          <i className="bx bx-edit fs-16" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-danger"
                        >
                          <i className="bx bx-trash fs-16" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-details.html" className="fw-medium">
                          #IN7823
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={avatar2}
                            alt=""
                            className="avatar-xs rounded-circle me-2"
                          />
                          <div>
                            <h5 className="fs-14 m-0 fw-normal">
                              James Anderson
                            </h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        20 Feb, 2025 <small>02:15 PM</small>
                      </td>
                      <td>28 Feb, 2025</td>
                      <td>$1230.50</td>
                      <td>
                        <span className="badge badge-soft-warning">Unpaid</span>
                      </td>
                      <td>Stripe</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-secondary me-1"
                        >
                          <i className="bx bx-edit fs-16" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-danger"
                        >
                          <i className="bx bx-trash fs-16" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-details.html" className="fw-medium">
                          #IN9124
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={avatar3}
                            alt=""
                            className="avatar-xs rounded-circle me-2"
                          />
                          <div>
                            <h5 className="fs-14 m-0 fw-normal">
                              Charlotte Brown
                            </h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        18 Feb, 2025 <small>11:45 AM</small>
                      </td>
                      <td>28 Mar, 2025</td>
                      <td>$875.00</td>
                      <td>
                        <span className="badge badge-soft-success">Paid</span>
                      </td>
                      <td>Payoneer</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-secondary me-1"
                        >
                          <i className="bx bx-edit fs-16" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-danger"
                        >
                          <i className="bx bx-trash fs-16" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-details.html" className="fw-medium">
                          #IN2345
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={avatar4}
                            alt=""
                            className="avatar-xs rounded-circle me-2"
                          />
                          <div>
                            <h5 className="fs-14 m-0 fw-normal">
                              Benjamin Wilson
                            </h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        15 Feb, 2025 <small>03:30 PM</small>
                      </td>
                      <td>25 Feb, 2025</td>
                      <td>$650.75</td>
                      <td>
                        <span className="badge badge-soft-danger">Overdue</span>
                      </td>
                      <td>Bank Transfer</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-secondary me-1"
                        >
                          <i className="bx bx-edit fs-16" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-danger"
                        >
                          <i className="bx bx-trash fs-16" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-details.html" className="fw-medium">
                          #IN5689
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={avatar5}
                            alt=""
                            className="avatar-xs rounded-circle me-2"
                          />
                          <div>
                            <h5 className="fs-14 m-0 fw-normal">
                              Amelia Clark
                            </h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        10 Feb, 2025 <small>01:10 PM</small>
                      </td>
                      <td>20 Feb, 2025</td>
                      <td>$350.00</td>
                      <td>
                        <span className="badge badge-soft-warning">Unpaid</span>
                      </td>
                      <td>Wise</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-secondary me-1"
                        >
                          <i className="bx bx-edit fs-16" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-danger"
                        >
                          <i className="bx bx-trash fs-16" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-details.html" className="fw-medium">
                          #IN7482
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={avatar6}
                            alt=""
                            className="avatar-xs rounded-circle me-2"
                          />
                          <div>
                            <h5 className="fs-14 m-0 fw-normal">
                              Lucas Harris
                            </h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        08 Feb, 2025 <small>09:20 AM</small>
                      </td>
                      <td>18 Feb, 2025</td>
                      <td>$780.99</td>
                      <td>
                        <span className="badge badge-soft-success">Paid</span>
                      </td>
                      <td>Stripe</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-secondary me-1"
                        >
                          <i className="bx bx-edit fs-16" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-danger"
                        >
                          <i className="bx bx-trash fs-16" />
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="invoice-details.html" className="fw-medium">
                          #IN9823
                        </a>
                      </td>
                      <td>
                        <div className="d-flex align-items-center">
                          <img
                            src={avatar7}
                            alt=""
                            className="avatar-xs rounded-circle me-2"
                          />
                          <div>
                            <h5 className="fs-14 m-0 fw-normal">
                              Mia Robinson
                            </h5>
                          </div>
                        </div>
                      </td>
                      <td>
                        05 Feb, 2025 <small>05:45 PM</small>
                      </td>
                      <td>15 Feb, 2025</td>
                      <td>$920.00</td>
                      <td>
                        <span className="badge badge-soft-danger">Overdue</span>
                      </td>
                      <td>PayPal</td>
                      <td>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-secondary me-1"
                        >
                          <i className="bx bx-edit fs-16" />
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-soft-danger"
                        >
                          <i className="bx bx-trash fs-16" />
                        </button>
                      </td>
                    </tr>
                  </tbody>{" "}
                  {/* end tbody */}
                </table>{" "}
                {/* end table */}
              </div>{" "}
              {/* table responsive */}
              <div className="align-items-center justify-content-between row g-0 text-center text-sm-start p-3 border-top">
                <div className="col-sm">
                  <div className="text-muted">
                    Showing <span className="fw-semibold">10</span> of{" "}
                    <span className="fw-semibold">52</span> invoices
                  </div>
                </div>
                <div className="col-sm-auto mt-3 mt-sm-0">
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
                </div>
              </div>
            </div>{" "}
            {/* end card body */}
          </div>{" "}
          {/* end card */}
        </div>{" "}
        {/* end col */}
      </div>{" "}
      {/* end row */}
    </div>
    {/* End Container Fluid */}
 <Footer/>
  </div>
</div>

  )
}

export default Invoices
