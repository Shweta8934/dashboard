import React from "react";
import "../assets/css/app.min.css";
import "../assets/css/icons.min.css";
import "../assets/css/vendor.min.css";
// import "../assets/js/config.min.js"
import { Link } from "react-router-dom";
import Sidebar from "../components/SideBar";

import Navbar from "../components/Navbar";
import AddToCart from "./AddToCart";
import Footer from "../components/Footer";
const Home = () => {
  
  return (
    <>
      <div className="wrapper">
        <Navbar/>
       <Sidebar/>
      
        {/* Start Content here */}
        <div className="page-container">
          {/* Start Container Fluid */}
          <div className="page-content">
            <div className="row">
              <div className="col-xl-6 col-lg-12">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-3 card-title">Total Revenue</p>
                            <h4 className="fw-bold text-primary d-flex align-items-center gap-2 mb-0">
                              $35,428.09
                            </h4>
                          </div>
                          <div>
                            <div>
                              <i className="ri-money-dollar-circle-line fs-32 text-muted" />
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center mt-5">
                          <div className="col-12">
                            <div
                              id="sales_funnel"
                              data-colors="#604ae3"
                              className="apex-charts"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-3 card-title">Total Orders</p>
                            <h4 className="fw-bold d-flex align-items-center gap-2 mb-0">
                              4526
                            </h4>
                          </div>
                          <div>
                            <div>
                              <i className="ri-restaurant-2-line fs-32 text-muted" />
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center mt-5">
                          <div className="col-12">
                        
                            <div
                              id="order_funnel"
                              data-colors="#604ae3"
                              className="apex-charts"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-3 card-title">Total Customers</p>
                            <h4 className="fw-bold d-flex align-items-center gap-2 mb-0">
                              5736
                            </h4>
                          </div>
                          <div>
                            <div>
                              <i className="ri-group-2-line fs-32 text-muted" />
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center mt-5">
                          <div className="col-12">
                            <div
                              id="customer_funnel"
                              data-colors="#604ae3"
                              className="apex-charts"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <p className="mb-3 card-title">Cancelled Orders</p>
                            <h4 className="fw-bold text-primary d-flex align-items-center gap-2 mb-0">
                              1310
                            </h4>
                          </div>
                          <div>
                            <div>
                              <i className="ri-calendar-close-line fs-32 text-muted" />
                            </div>
                          </div>
                        </div>
                        <div className="row align-items-center mt-5">
                          <div className="col-12">
                            <div
                              id="cancel_funnel"
                              data-colors="#604ae3"
                              className="apex-charts"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div>
                      <h4 className="card-title mb-0">Revenue Summary</h4>
                    </div>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle btn btn-sm btn-outline-light rounded"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Monthly
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        {/* item*/}
                        <a href="#!" className="dropdown-item">
                          Week
                        </a>
                        {/* item*/}
                        <a href="#!" className="dropdown-item">
                          Months
                        </a>
                        {/* item*/}
                        <a href="#!" className="dropdown-item">
                          Years
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center g-0">
                      <div className="col-lg-6">
                        <div id="order_summary" className="apex-charts" />
                      </div>
                      <div className="col-lg-6">
                        <div className="ps-lg-3">
                          <h2 className="fw-bold text-primary mt-2 d-flex align-items-center gap-3">
                            $56184.22{" "}
                            <span className="badge text-success bg-success-subtle fs-12">
                              <i className="ri-arrow-up-line" />
                              31.08%
                            </span>
                          </h2>
                          <p className="mb-2 fw-medium">From $600,765.00</p>
                          <p className="mb-3 fw-medium">❋❋❋</p>
                          <p>
                            Restaurant has successfully completed a substantial
                            number of orders, totaling 4,500 orders.
                          </p>
                          <a href="#!" className="btn btn-dark btn-sm mt-3">
                            View Reports
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-12">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div>
                      <h4 className="card-title mb-0">Order Chart</h4>
                    </div>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle btn btn-sm btn-link text-uppercase fw-semibold"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Weekly
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        {/* item*/}
                        <a href="#!" className="dropdown-item">
                          Week
                        </a>
                        {/* item*/}
                        <a href="#!" className="dropdown-item">
                          Months
                        </a>
                        {/* item*/}
                        <a href="#!" className="dropdown-item">
                          Years
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="text-center">
                      <p className="text-muted mb-0">
                        Yeah! You have received{" "}
                        <span className="text-success fw-bold">+33</span> new
                        orders today
                      </p>
                    </div>
                    <div
                      id="datalabels-column2"
                      className="apex-charts"
                      data-colors="#604ae3"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div>
                      <h4 className="card-title mb-0">Daily Delivery Chart</h4>
                    </div>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle btn btn-sm btn-link text-uppercase fw-semibold"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Weekly
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        {/* item*/}
                        <a href="#!" className="dropdown-item">
                          Week
                        </a>
                        {/* item*/}
                        <a href="#!" className="dropdown-item">
                          Months
                        </a>
                        {/* item*/}
                        <a href="#!" className="dropdown-item">
                          Years
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body ps-0">
                    <div className="text-center">
                      <p className="text-muted mb-0">
                        Yeah! You have delivered{" "}
                        <span className="text-primary fw-bold">910</span> orders
                        today
                      </p>
                    </div>
                    <div id="basic-heatmap" className="apex-charts" />
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div>
                      <h4 className="card-title mb-0">Daily Trending Menu</h4>
                    </div>
                    <div>
                      <a
                        href="#!"
                        className="text-dark btn btn-sm btn-link text-uppercase fw-semibold px-0"
                      >
                        View Menu <i className="ri-arrow-right-line" />
                      </a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-wrap align-items-center gap-3 border-bottom pb-4">
                      <div className="rounded bg-warning-subtle avatar-lg d-flex align-items-center justify-content-center">
                        <img
                          src="assets/images/food-icon/pic12.png"
                          alt=""
                          className="avatar-lg"
                        />
                      </div>
                      <div>
                        <a href="#!" className="text-dark fs-14 fw-medium">
                          Italian Burata Pizza
                        </a>
                        <p className="fs-14 my-1">$12.00</p>
                        <a
                          href="#!"
                          className="link-dark link-offset-2 text-decoration-underline fw-medium"
                        >
                          View Details <i className="ri-arrow-right-up-line" />
                        </a>
                      </div>
                      <div className="ms-auto text-lg-end">
                        <p className="text-primary fs-16 fw-medium">#1</p>
                        <p className="mb-0 fw-medium">Orders: 22x</p>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-3 border-bottom py-4">
                      <div className="rounded bg-warning-subtle avatar-lg d-flex align-items-center justify-content-center">
                        <img
                          src="assets/images/food-icon/pic19.png"
                          alt=""
                          className="avatar-lg"
                        />
                      </div>
                      <div>
                        <a href="#!" className="text-dark fs-14 fw-medium">
                          Veg Indian Thali
                        </a>
                        <p className="fs-14 my-1">$14.00</p>
                        <a
                          href="#!"
                          className="link-dark link-offset-2 text-decoration-underline fw-medium"
                        >
                          View Details <i className="ri-arrow-right-up-line" />
                        </a>
                      </div>
                      <div className="ms-auto text-lg-end">
                        <p className="text-primary fs-16 fw-medium">#2</p>
                        <p className="mb-0 fw-medium">Orders: 13x</p>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-3 pt-4">
                      <div className="rounded bg-warning-subtle avatar-lg d-flex align-items-center justify-content-center">
                        <img
                          src="assets/images/food-icon/pic17.png"
                          alt=""
                          className="avatar-lg"
                        />
                      </div>
                      <div>
                        <a href="#!" className="text-dark fs-14 fw-medium">
                          Chocolate Lava Cake
                        </a>
                        <p className="fs-14 my-1">$10.00</p>
                        <a
                          href="#!"
                          className="link-dark link-offset-2 text-decoration-underline fw-medium"
                        >
                          View Details <i className="ri-arrow-right-up-line" />
                        </a>
                      </div>
                      <div className="ms-auto text-lg-end">
                        <p className="text-primary fs-16 fw-medium">#3</p>
                        <p className="mb-0 fw-medium">Orders: 10x</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-3 col-lg-6">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div>
                      <h4 className="card-title mb-0">Special Menu</h4>
                    </div>
                    <div>
                      <a
                        href="#!"
                        className="text-dark btn btn-sm btn-link text-uppercase fw-semibold px-0"
                      >
                        View Menu <i className="ri-arrow-right-line" />
                      </a>
                    </div>
                  </div>
                  <div style={{ height: 375 }} data-simplebar="">
                    <div className="d-flex flex-wrap align-items-center gap-2 border-bottom p-3">
                      <div>
                        <img
                          src="assets/images/food-icon/pic16.png"
                          alt=""
                          className="avatar-lg"
                        />
                      </div>
                      <div>
                        <a href="#!" className="text-dark fs-15 fw-medium">
                          Pasta &amp; Spaghetti
                        </a>
                        <p className="mb-2">16+ Options</p>
                        <p className="mb-0 fw-semibold">
                          <i className="ri-star-fill text-warning me-1 fs-15" />
                          4.3/5
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-2 border-bottom p-3">
                      <div>
                        <img
                          src="assets/images/food-icon/pic13.png"
                          alt=""
                          className="avatar-lg"
                        />
                      </div>
                      <div>
                        <a href="#!" className="text-dark fs-15 fw-medium">
                          Chinese Platter
                        </a>
                        <p className="mb-2">35+ Options</p>
                        <p className="mb-0 fw-semibold">
                          <i className="ri-star-fill text-warning me-1 fs-15" />
                          4.3/5
                        </p>
                      </div>
                    </div>
                    <div className="d-flex flex-wrap align-items-center gap-2 border-bottom p-3">
                      <div>
                        <img
                          src="assets/images/food-icon/pic13.png"
                          alt=""
                          className="avatar-lg"
                        />
                      </div>
                      <div>
                        <a href="#!" className="text-dark fs-15 fw-medium">
                          Chinese Platter
                        </a>
                        <p className="mb-2">35+ Options</p>
                        <p className="mb-0 fw-semibold">
                          <i className="ri-star-fill text-warning me-1 fs-15" />
                          4.3/5
                        </p>
                      </div>
                    </div>
                    {/* <div className="d-flex flex-wrap align-items-center gap-2 border-bottom p-3">
                  <div>
                    <img
                      src="assets/images/food-icon/pic17.png"
                      alt=""
                      className="avatar-lg"
                    />
                  </div>
                  <div>
                    <a href="#!" className="text-dark fs-15 fw-medium">
                      Chocolate Lava Cake
                    </a>
                    <p className="mb-2">40+ Options</p>
                    <p className="mb-0 fw-semibold">
                      <i className="ri-star-fill text-warning me-1 fs-15" />
                      4.3/5
                    </p>
                  </div>
                </div> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-6">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div>
                      <h4 className="card-title mb-0">Other Outlets</h4>
                    </div>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle rounded arrow-none"
                        data-bs-toggle="dropdown"
                        aria-expanded="true"
                      >
                        <i className="ri-edit-box-line fs-20" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        {/* item*/}
                        <a href="javascript:void(0);" className="dropdown-item">
                          Create New Outet
                        </a>
                        {/* item*/}
                        <a href="javascript:void(0);" className="dropdown-item">
                          New Areas
                        </a>
                      </div>
                    </div>
                  </div>
                  <div style={{ height: 333 }} data-simplebar="">
                    <div className="border-bottom p-3">
                      <div>
                        <h6 className="text-uppercase fw-bold">
                          Miami - USA{" "}
                          <span className="ms-auto fw-medium float-end">
                            {" "}
                            <i className="ri-star-fill text-warning" /> 4.3
                          </span>
                        </h6>
                        <span className="fw-medium fs-18">
                          <i className="ri-map-pin-range-line" />
                        </span>
                        <span className="fw-medium ms-1">
                          101 Ocean Dr, Miami, FL 33139
                        </span>
                        <div className="mt-1">
                          <span className="fw-medium fs-18">
                            <i className="ri-phone-line" />
                          </span>
                          <a href="#!" className="fw-medium link-primary ms-1">
                            + 305-555-7890
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="border-bottom p-3">
                      <div>
                        <h6 className="text-uppercase fw-bold">
                          New York - USA{" "}
                          <span className="ms-auto fw-medium float-end">
                            {" "}
                            <i className="ri-star-fill text-warning" /> 4.8
                          </span>
                        </h6>
                        <span className="fw-medium fs-18">
                          <i className="ri-map-pin-range-line" />
                        </span>
                        <span className="fw-medium ms-1">
                          123 Broadway Ave, New York, NY 10001
                        </span>
                        <div className="mt-1">
                          <span className="fw-medium fs-18">
                            <i className="ri-phone-line" />
                          </span>
                          <a href="#!" className="fw-medium link-primary ms-1">
                            + 212-555-1234
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="p-3">
                      <div>
                        <h6 className="text-uppercase fw-bold">
                          Chicago - USA{" "}
                          <span className="ms-auto fw-medium float-end">
                            {" "}
                            <i className="ri-star-fill text-warning" /> 4.6
                          </span>
                        </h6>
                        <span className="fw-medium fs-18">
                          <i className="ri-map-pin-range-line" />
                        </span>
                        <span className="fw-medium ms-1">
                          789 Michigan Ave, Chicago, IL 60611
                        </span>
                        <div className="mt-1">
                          <span className="fw-medium fs-18">
                            <i className="ri-phone-line" />
                          </span>
                          <a href="#!" className="fw-medium link-primary ms-1">
                            + 312-555-4321
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer border-top text-center p-3">
                    <a
                      href="#!"
                      className="link-primary text-decoration-underline fw-medium"
                    >
                      Show More <i className="ri-arrow-right-up-line" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-12">
                <div className="card">
                  <div className="card-header d-flex align-items-center justify-content-between">
                    <div>
                      <h4 className="card-title mb-0">Delivered Status</h4>
                    </div>
                    <div className="dropdown">
                      <a
                        href="#"
                        className="dropdown-toggle text-dark btn btn-sm btn-link text-uppercase fw-semibold px-0"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Daily
                      </a>
                      <div className="dropdown-menu dropdown-menu-end">
                        {/* item*/}
                        <a href="#!" className="dropdown-item">
                          Week
                        </a>
                        {/* item*/}
                        <a href="#!" className="dropdown-item">
                          Months
                        </a>
                        {/* item*/}
                        <a href="#!" className="dropdown-item">
                          Years
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <table className="table table-sm table-hover mb-0">
                        <thead>
                          <tr>
                            <th>Date</th>
                            <th>Payment Via</th>
                            <th>Status</th>
                            <th>Amount ($)</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2025-01-29</td>
                            <td>PayPal</td>
                            <td>
                              <span className="badge badge-soft-success">
                                Success
                              </span>
                            </td>
                            <td>150.75</td>
                          </tr>
                          <tr>
                            <td>2025-01-28</td>
                            <td>Bank Transfer</td>
                            <td>
                              <span className="badge badge-soft-danger">
                                Failed
                              </span>
                            </td>
                            <td>320.50</td>
                          </tr>
                          <tr>
                            <td>2025-01-27</td>
                            <td>Debit Card</td>
                            <td>
                              <span className="badge badge-soft-warning">
                                Pending
                              </span>
                            </td>
                            <td>98.00</td>
                          </tr>
                          <tr>
                            <td>2025-01-26</td>
                            <td>Credit Card</td>
                            <td>
                              <span className="badge badge-soft-success">
                                Success
                              </span>
                            </td>
                            <td>275.25</td>
                          </tr>
                          <tr>
                            <td>2025-01-25</td>
                            <td>Google Pay</td>
                            <td>
                              <span className="badge badge-soft-danger">
                                Failed
                              </span>
                            </td>
                            <td>180.00</td>
                          </tr>
                          <tr>
                            <td>2025-01-24</td>
                            <td>Apple Pay</td>
                            <td>
                              <span className="badge badge-soft-success">
                                Success
                              </span>
                            </td>
                            <td>500.00</td>
                          </tr>
                          <tr>
                            <td>2025-01-23</td>
                            <td>Bank Transfer</td>
                            <td>
                              <span className="badge badge-soft-warning">
                                Pending
                              </span>
                            </td>
                            <td>200.40</td>
                          </tr>
                          <tr>
                            <td>2025-01-22</td>
                            <td>Credit Card</td>
                            <td>
                              <span className="badge badge-soft-success">
                                Success
                              </span>
                            </td>
                            <td>350.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="card-footer border-top text-center p-3">
                    <a
                      href="#!"
                      className="link-primary text-decoration-underline fw-medium"
                    >
                      Show More <i className="ri-arrow-right-up-line" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Container Fluid */}
        <Footer/>
        </div>
        {/* End Page Content */}
      </div>
        </>
  );
};

export default Home;
