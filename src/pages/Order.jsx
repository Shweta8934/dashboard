import React, { useEffect, useState } from "react";

import "../assets/css/app.min.css";
import "../assets/css/icons.min.css";
import "../assets/css/vendor.min.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import { Navigate } from "react-router-dom";
import Footer from "../components/Footer";

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");

  // all orders get from database
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (!token) {
          console.error("No token found. Redirecting to login...");
          Navigate("/login");
          return;
        }

        const response = await fetch(
          "http://localhost:4001/order/site/apis/order",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = await response.json();
        console.log("Orders API Response:", data);

        if (response.ok) {
          setOrders(data.data);
        } else {
          setError(data.message || "Failed to fetch orders.");
        }
      } catch (error) {
        console.error("API Fetch Error:", error);
        setError("Something went wrong.");
      }
    };

    fetchOrders();
  }, []);

  // veiw all details about orders 
  const handleViewClick = (order) => {
    setSelectedOrder(order);
    setShowModal(true);
  };

  // for delete icon
  const handleDeleteClick = async (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      try {
        const response = await fetch(
          `http://localhost:4001/admin/site/apis/order/${orderId}`,
          {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("authToken")}`, // If authentication is needed
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();
        if (data.success) {
          alert("Order deleted successfully!");
          setOrders((prevOrders) =>
            prevOrders.filter((order) => order.id !== orderId)
          ); // Update UI
        } else {
          alert("Failed to delete order.");
        }
      } catch (error) {
        console.error("Error deleting order:", error);
        alert("An error occurred while deleting the order.");
      }
    }
  };

  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="page-container">
          {/* Start Container Fluid */}
          <div className="page-content">
            <div className="row">
              <div className="col-md-6 col-xl-3">
                <div className="card card-full-height">
                  <div className="card-body ">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/food-icon/i-2.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div>
                        <p className="text-dark fw-semibold fs-26 mb-1">80</p>
                        <p className="card-title mb-0">Total Orders</p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#!"
                          className="btn btn-primary avatar-sm rounded-circle d-flex align-items-center justify-content-center"
                        >
                          <i className="ri-eye-line align-middle fs-16 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card card-full-height">
                  <div className="card-body ">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/food-icon/i-3.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div>
                        <p className="text-dark fw-semibold fs-26 mb-1">21</p>
                        <p className="card-title mb-0">Cancelled</p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#!"
                          className="btn btn-primary avatar-sm rounded-circle d-flex align-items-center justify-content-center"
                        >
                          <i className="ri-eye-line align-middle fs-16 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card card-full-height">
                  <div className="card-body ">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/food-icon/i-1.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div>
                        <p className="text-dark fw-semibold fs-26 mb-1">78</p>
                        <p className="card-title mb-0">Confirm</p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#!"
                          className="btn btn-primary avatar-sm rounded-circle d-flex align-items-center justify-content-center"
                        >
                          <i className="ri-eye-line align-middle fs-16 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card card-full-height">
                  <div className="card-body">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/food-icon/i-4.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div>
                        <p className="text-dark fw-semibold fs-26 mb-1">48</p>
                        <p className="card-title mb-0">Preparing </p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#!"
                          className="btn btn-primary avatar-sm rounded-circle d-flex align-items-center justify-content-center"
                        >
                          <i className="ri-eye-line align-middle fs-16 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card card-full-height">
                  <div className="card-body ">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/food-icon/i-5.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div>
                        <p className="text-dark fw-semibold fs-26 mb-1">42</p>
                        <p className="card-title mb-0">Ready For Delivery</p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#!"
                          className="btn btn-primary avatar-sm rounded-circle d-flex align-items-center justify-content-center"
                        >
                          <i className="ri-eye-line align-middle fs-16 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card card-full-height">
                  <div className="card-body ">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/food-icon/i-6.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div>
                        <p className="text-dark fw-semibold fs-26 mb-1">20</p>
                        <p className="card-title mb-0">Order On Its Way</p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#!"
                          className="btn btn-primary avatar-sm rounded-circle d-flex align-items-center justify-content-center"
                        >
                          <i className="ri-eye-line align-middle fs-16 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card card-full-height">
                  <div className="card-body ">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/food-icon/i-8.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div>
                        <p className="text-dark fw-semibold fs-26 mb-1">30</p>
                        <p className="card-title mb-0">Pending Orders</p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#!"
                          className="btn btn-primary avatar-sm rounded-circle d-flex align-items-center justify-content-center"
                        >
                          <i className="ri-eye-line align-middle fs-16 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
                <div className="card card-full-height">
                  <div className="card-body ">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/food-icon/i-9.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div>
                        <p className="text-dark fw-semibold fs-26 mb-1">25</p>
                        <p className="card-title mb-0">Delivered Order</p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#!"
                          className="btn btn-primary avatar-sm rounded-circle d-flex align-items-center justify-content-center"
                        >
                          <i className="ri-eye-line align-middle fs-16 text-white" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header d-flex justify-content-between align-items-center">
                    <div>
                      <p className="card-title mb-0">Orders Summary</p>
                    </div>
                    <div className="d-flex gap-3">
                      <a href="#!" className="btn btn-sm btn-primary">
                        Create Order
                      </a>
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
                  </div>
                  <div className="">
                    <div className="">
                      <div className="table-responsive">
                        <table className="table align-middle mb-0 table-hover table-centered">
                          <thead className="bg-light-subtle fs-12 text-uppercase">
                            <tr>
                              <th>Order No.</th>
                              <th>User Name</th>
                              <th>Items Name</th>
                              <th>Quantity</th>
                              <th>Total Price</th>
                              <th>Payment Method</th>
                              <th>Order Date & Time</th>
                              <th>Shipping Address</th>
                              <th>Delivery Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {orders.length > 0 ? (
                              orders.map((order) => (
                                <tr key={order.id}>
                                  <td>{order.order_id}</td>
                                  <td>
                                    {order.user ? order.user.user_name : "N/A"}
                                  </td>{" "}
                                  <td>
                                    {order.user ? order.user.item_name : "N/A"}
                                  </td>{" "}
                                  <td>{order.product_qty}</td>
                                  <td>${order.total_amount.toFixed(2)}</td>
                                  <td>{order.payment_method}</td>
                                  <td>
                                    {new Date(
                                      order.order_date_time
                                    ).toLocaleString("en-GB", {
                                      day: "2-digit",
                                      month: "2-digit",
                                      year: "numeric",
                                      hour: "2-digit",
                                      minute: "2-digit",
                                      hour12: true,
                                    })}
                                  </td>
                                  <td>{order.shipping_address || "N/A"}</td>
                                  <td>
                                    <span className="badge bg-primary text-white px-2 py-1 fs-11">
                                      {order.delivery_status || "N/A"}
                                    </span>
                                  </td>
                                  <td>
                                    <div className="d-flex gap-3">
                                      <a
                                        href="#!"
                                        title="View"
                                        onClick={() => handleViewClick(order)}
                                      >
                                        <i className="ri-eye-line text-primary align-middle fs-20" />
                                      </a>
                                      <a href="#!" title="Edit">
                                        <i className="ri-edit-line text-success align-middle fs-20" />
                                      </a>
                                      <a
                                        href="#!"
                                        title="Delete"
                                        onClick={() =>
                                          handleDeleteClick(order.id)
                                        }
                                      >
                                        <i className="ri-delete-bin-5-line text-danger align-middle fs-20" />
                                      </a>
                                    </div>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="10" className="text-center">
                                  No Orders Found
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* Modal for Order Details */}
                    {showModal && selectedOrder && (
                      <div
                        className="modal fade show d-block"
                        tabIndex="-1"
                        role="dialog"
                      >
                        <div className="modal-dialog">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title">User Details</h5>
                              <button
                                type="button"
                                className="btn-close"
                                onClick={() => setShowModal(false)}
                              ></button>
                            </div>
                            <div className="modal-body">
                              <p>
                                <strong>Order ID:</strong>{" "}
                                {selectedOrder.order_id}
                              </p>
                              <p>
                                <strong>Shipping Method:</strong>{" "}
                                {selectedOrder.shipping_method}
                              </p>
                              <p>
                                <strong>Date & Time:</strong>{" "}
                                {selectedOrder.order_date_time}
                              </p>
                              <p>
                                <strong>Total Amount:</strong>{" "}
                                {selectedOrder.total_amount}
                              </p>
                              <p>
                                <strong>User ID:</strong>{" "}
                                {selectedOrder.user?.id || "N/A"}
                              </p>
                              <p>
                                <strong>User Name:</strong>{" "}
                                {selectedOrder.user?.user_name || "N/A"}
                              </p>
                              <p>
                                <strong>Payment Method:</strong>{" "}
                                {selectedOrder.payment_method}
                              </p>
                              <p>
                                <strong>Delivery Status:</strong>{" "}
                                {selectedOrder.delivery_status}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
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
      {/* END Wrapper */}
    </>
  );
};

export default Order;
