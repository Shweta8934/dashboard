import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./SideBar.css";
const Sidebar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isInvoiceOpen, setIsInvoiceOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  return (
    <div
      className="main-nav"
      style={{
        overflowY: "auto",
        maxHeight: "100vh",
        scrollbarWidth: "thin", // Firefox support
        scrollbarColor: "#ccc transparent",
      }}
    >
      <div className="logo-box">
        <Link to="/" className="logo-dark">
          <img
            src="assets/images/logo-sm.png"
            className="logo-sm"
            alt="logo sm"
          />
          <img
            src="assets/images/logo-dark.png"
            className="logo-lg"
            alt="logo dark"
          />
        </Link>
        <Link to="/" className="logo-light">
          <img
            src="assets/images/logo-sm.png"
            className="logo-sm"
            alt="logo sm"
          />
          <img
            src="assets/images/logo-white.png"
            className="logo-lg"
            alt="logo light"
          />
        </Link>
      </div>

      <div className="h-100" data-simplebar>
        <ul className="navbar-nav" id="navbar-nav">
          <li className="menu-item pt-2">
            <Link className="menu-link" to="/">
              <span className="nav-icon">
                <i className="ri-dashboard-2-line" />
              </span>
              <span className="nav-text"> Dashboard </span>
              <span className="badge bg-success badge-pill text-end">9+</span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link" to="/orders">
              <span className="nav-icon">
                <i className="ri-shopping-cart-line" />
              </span>
              <span className="nav-text"> Orders </span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link" to="/customer">
              <span className="nav-icon">
                <i className="ri-group-2-line" />
              </span>
              <span className="nav-text"> Customers </span>
            </Link>
          </li>

          <li className={`menu-item ${isProductOpen ? "open" : ""}`}>
            <div
              className="menu-link"
              onClick={() => setIsProductOpen(!isProductOpen)}
              style={{ cursor: "pointer" }}
            >
              <span className="nav-icon">
                <i className="ri-group-2-line" />
              </span>
              <span className="nav-text">Products</span>
              <span className="dropdown-arrow">
                {isProductOpen ? "▲" : "▼"}
              </span>
            </div>

            {isProductOpen && (
              <ul className="menu-links">
                <li className="nav-text">
                  <Link to="/product/listing">Listing</Link>
                </li>
                <li>
                  <Link to="/product/add-edit-product">Add/Edit Product</Link>
                </li>
              </ul>
            )}
          </li>

          <li className={`menu-item ${isCategoryOpen ? "open" : ""}`}>
            <div
              className="menu-link"
              onClick={() => setIsCategoryOpen(!isCategoryOpen)}
              style={{ cursor: "pointer" }}
            >
              <span className="nav-icon">
                <i className="ri-group-2-line" />
              </span>
              <span className="nav-text">Category</span>
              <span className="dropdown-arrow">
                {isCategoryOpen ? "▲" : "▼"}
              </span>
            </div>

            {isCategoryOpen && (
              <ul className="menu-links">
                <li className="nav-text">
                  <Link to="/category/listing">Listing</Link>
                </li>
                <li>
                  <Link to="/category/add-edit-category">
                    Add/Edit Category
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="menu-item">
            <Link className="menu-link" to="/menu-cards">
              <span className="nav-icon">
                <i className="ri-restaurant-line" />
              </span>
              <span className="nav-text"> Menu Cards </span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link" to="/pos">
              <span className="nav-icon">
                <i className="ri-mac-line" />
              </span>
              <span className="nav-text"> POS </span>
            </Link>
          </li>

          <li className="menu-item">
            <Link className="menu-link" to="/report">
              <span className="nav-icon">
                <i className="ri-bar-chart-box-ai-line" />
              </span>
              <span className="nav-text"> Reports </span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link" to="/rider">
              <span className="nav-icon">
                <i className="ri-motorbike-line" />
              </span>
              <span className="nav-text"> Riders </span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link" to="/offers">
              <span className="nav-icon">
                <i className="ri-discount-percent-line" />
              </span>
              <span className="nav-text"> Offers </span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link" to="/locations">
              <span className="nav-icon">
                <i className="ri-map-pin-range-line" />
              </span>
              <span className="nav-text"> Locations </span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link" to="/media">
              <span className="nav-icon">
                <i className="ri-image-circle-ai-line" />
              </span>
              <span className="nav-text"> Media </span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link" to="/store-setting">
              <span className="nav-icon">
                <i className="ri-store-3-line" />
              </span>
              <span className="nav-text"> Store Setting </span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link" to="/todo">
              <span className="nav-icon">
                <i className="ri-task-line" />
              </span>
              <span className="nav-text"> TODO </span>
            </Link>
          </li>
          <li className="menu-item">
            <Link className="menu-link" to="/manage-app">
              <span className="nav-icon">
                {/* <i class="ri-store-3-line"></i> */}
                <i className="ri-apps-2-ai-line" />
              </span>
              <span className="nav-text"> Manage App </span>
            </Link>
          </li>
          {/* invoice  */}
          <li className={`menu-item ${isInvoiceOpen ? "open" : ""}`}>
            <div
              className="menu-link"
              onClick={() => setIsInvoiceOpen(!isInvoiceOpen)}
              style={{ cursor: "pointer" }}
            >
              <span className="nav-icon">
                <i className="ri-file-list-3-line" />
              </span>
              <span className="nav-text">Invoice</span>
              <span className="dropdown-arrow">
                {isInvoiceOpen ? "▲" : "▼"}
              </span>
            </div>

            {isInvoiceOpen && (
              <ul className="menu-links">
                <li className="nav-text">
                  <Link to="/invoice/listing">Invoices</Link>
                </li>
                <li>
                  <Link to="/invoice/details">Invoice Details</Link>
                </li>
              </ul>
            )}
          </li>

          {/* pages  */}
          <li className={`menu-item ${isPagesOpen ? "open" : ""}`}>
            <div
              className="menu-link"
              onClick={() => setIsPagesOpen(!isPagesOpen)}
              style={{ cursor: "pointer" }}
            >
              <span className="nav-icon">
                <i className="ri-pages-line" />
              </span>
              <span className="nav-text">Pages</span>
              <span className="dropdown-arrow">{isPagesOpen ? "▲" : "▼"}</span>
            </div>

            {isPagesOpen && (
              <ul className="menu-links">
                <li>
                  <Link to="/welcome">Welcome</Link>
                </li>
                <li>
                  <Link to="/pages/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/pages/404">404</Link>
                </li>
                <li>
                  <Link to="/pages/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/pages/timeline">Timeline</Link>
                </li>
                <li>
                  <Link to="/pages/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/pages/coming-soon">Coming Soon</Link>
                </li>
                <li>
                  <Link to="pages/galllery">Gallery</Link>
                </li>
                <li>
                  <Link to="/pages/maintenance">Maintenance</Link>
                </li>
              </ul>
            )}
          </li>

          <li className={`menu-item ${isAuthOpen ? "open" : ""}`}>
            <div
              className="menu-link"
              onClick={() => setIsAuthOpen(!isAuthOpen)}
              style={{ cursor: "pointer" }}
            >
              <span className="nav-icon">
                <i className="ri-shield-user-line" />
              </span>
              <span className="nav-text">Authentication</span>
              <span className="dropdown-arrow">{isAuthOpen ? "▲" : "▼"}</span>
            </div>

            {isAuthOpen && (
              <ul className="menu-links">
                <li className="nav-text">
                  <Link to="/auth/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/auth/signin">Sign In</Link>
                </li>
                <li>
                  <Link to="/auth/reset-password">Reset Password</Link>
                </li>
                <li>
                  <Link to="/auth/lock-screen">Lock Screen</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
