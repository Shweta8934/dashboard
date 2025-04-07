import React, { useEffect, useState } from "react";
import "../assets/css/app.min.css";
import "../assets/css/icons.min.css";
import "../assets/css/vendor.min.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import Footer from "../components/Footer";
const Customer = () => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("authToken"); // Token fetch karein

    if (!token) {
      console.error("No token found, redirecting to login...");
      window.location.href = "/login"; // Redirect if no token found
      return;
    }
// get all users 
    fetch("http://localhost:4001/admin/site/apis/user", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Token send karein
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("API Response:", data);
        setCustomers(
          Array.isArray(data) ? data : data.users || data.results || []
        );
      })
      .catch((error) => console.error("Error fetching customers:", error));
  }, []);

  const actions = [
    {
      icon: "ri-eye-line",
      color: "text-muted",
      tooltip: "View",
      onClick: () => console.log("View clicked"),
    },
    {
      icon: "ri-edit-line",
      color: "link-dark",
      tooltip: "Edit",
      onClick: () => console.log("Edit clicked"),
    },
    {
      icon: "ri-delete-bin-5-line",
      color: "link-danger",
      tooltip: "Delete",
      onClick: () => console.log("Delete clicked"),
    },
  ];

  return (
    <>
      {/* START Wrapper */}
      <div className="wrapper">
        <Navbar />
        <Sidebar />
        <div className="page-container">
          {/* Start Container Fluid */}
          <div className="page-content">
            <div className="row">
              <div className="col-md-6 col-xl-3">
                <div className="card">
                  <div className="card-body ">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/food-icon/cus-1.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div>
                        <p className="text-dark fw-semibold fs-26 mb-1">2301</p>
                        <p className="card-title mb-0">Customers</p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#!"
                          style={{
                            width: "30px", // Reduce size
                            height: "30px", // Reduce size
                            fontSize: "12px", // Adjust font size
                            position: "relative",
                            left: "-5px", // Move slightly to the left
                            padding: "0", // Remove extra padding
                            borderRadius: "50%", // Ensure it's circular
                          }}
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
                <div className="card">
                  <div className="card-body ">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/food-icon/i-2.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div>
                        <p className="text-dark fw-semibold fs-26 mb-1">1896</p>
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
                <div className="card">
                  <div className="card-body ">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/food-icon/cus-2.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div>
                        <p className="text-dark fw-semibold fs-26 mb-1">
                          $46,770
                        </p>
                        <p className="card-title mb-0">Total Revenue</p>
                      </div>
                      <div className="ms-auto">
                        <a
                          href="#!"
                          style={{
                            width: "30px", // Reduce size
                            height: "30px", // Reduce size
                            fontSize: "12px", // Adjust font size
                            position: "relative",
                            left: "-5px", // Move slightly to the left
                            padding: "0", // Remove extra padding
                            borderRadius: "50%", // Ensure it's circular
                          }}
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
                <div className="card">
                  <div className="card-body ">
                    <div className="d-flex align-items-center gap-3">
                      <img
                        src="assets/images/food-icon/cus-3.png"
                        alt=""
                        className="img-fluid"
                      />
                      <div>
                        <p className="text-dark fw-semibold fs-26 mb-1">
                          $1,342
                        </p>
                        <p className="card-title mb-0">Tip Amount</p>
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
                      <p className="card-title mb-0">Customers</p>
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
                  {/* customer details  */}
                  <div className="">
                    <div className="table-responsive">
                      <table className="table align-middle mb-0 table-hover table-centered">
                        <thead className="bg-light-subtle">
                          <tr>
                            <th>ID</th>
                            <th>Customer Name</th>
                            <th>Conatct No.</th>
                            <th>Address</th>
                            <th>Total Spent</th>

                            <th>Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {customers.length > 0 ? (
                            customers.map((customer, index) => (
                              <tr key={index}>
                                <td>#{customer.id}</td>
                                <td>
                                  <div className="d-flex align-items-center gap-2">
                                    {/* Profile Image */}
                                    <img
                                      src={
                                        customer.image
                                          ? `http://localhost:4001${customer.image}` // API se image path
                                          : "../assets/images/users/avatar-1.jpg" // Default image
                                      }
                                      className="avatar-sm rounded-circle"
                                      alt="User Avatar"
                                      style={{
                                        width: "40px",
                                        height: "40px",
                                        objectFit: "cover",
                                      }} // Styling
                                    />
                                    {/* User Name */}
                                    <span>{customer.user_name || "N/A"}</span>
                                  </div>
                                </td>

                                {/* <td>{customer.user_name || "N/A"}</td> */}
                                <td>{customer.user_mobile || "N/A"}</td>
                                <td>{customer.user_address || "N/A"}</td>
                                <td>
                                  {customer.user_gullak_money_used || "N/A"}
                                </td>
                                <td>{new Date(customer.created_at).toLocaleDateString("en-GB")}</td>

                                <td>
                                  <div className="d-flex gap-3">
                                    {actions.map((action, index) => (
                                      <a
                                        key={index}
                                        href="#!"
                                        className={action.color}
                                        title={action.tooltip}
                                        onClick={action.onClick} // Function Call
                                      >
                                        <i
                                          className={`${action.icon} align-middle fs-20`}
                                        />
                                      </a>
                                    ))}
                                  </div>
                                </td>
                              </tr>
                            ))
                          ) : (
                            <tr>
                              <td colSpan="4" className="text-center">
                                No customers found.
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
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
    </>
  );
};

export default Customer;
