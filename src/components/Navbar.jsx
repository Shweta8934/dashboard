import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import avatar1 from "../assets/images/users/avatar-1.jpg";
import logoWhite from "../assets/images/logo-white.png";
import logoSm from "../assets/images/logo-sm.png";
import logoDark from "../assets/images/logo-dark.png";
const Navbar = ({ toggleSidebar }) => {
  return (
    <header className="topbar d-flex" style={{ backgroundColor: "#663ffa" }}>
      {/* Sidebar Logo */}
      <div className="logo-box">
        <a href="index-2.html" className="logo-dark">
          <img
            src={logoSm}
            className="logo-sm"
            alt="logo sm"
          />
          <img
            src={logoDark}
            className="logo-lg"
            alt="logo dark"
          />
        </a>
        <a href="index-2.html" className="logo-light">
          <img
            src="assets/images/logo-sm.png"
            className="logo-sm"
            alt="logo sm"
          />
          <img
            src={logoWhite}
            className="logo-lg"
            alt="logo light"
          />
        </a>
      </div>
      <div className="container">
        <div className="navbar-header">
        <button
        type="button"
        className="btn btn-link d-flex button-sm-hover button-toggle-menu"
        aria-label="Show Full Sidebar"
        onClick={toggleSidebar}
      >
            <i className="ri-menu-2-line button-sm-hover-icon text-white" />
          </button>
          <div className="d-flex align-items-center gap-2">
            <form className="app-search d-none d-md-block me-auto">
              <div className="position-relative">
                <input
                  type="search"
                  className="form-control bg-transparent text-white"
                  placeholder="Start typing..."
                  autoComplete="off"
                />
                <i className="ri-search-line search-widget-icon text-white" />
              </div>
            </form>
          </div>
          <div className="d-flex align-items-center gap-2 ms-auto">
            <div className="topbar-item">
              <button
                type="button"
                className="topbar-button text-white"
                id="light-dark-mode"
              >
                <i className="ri-moon-line fs-20 align-middle light-mode text-white" />
                <i className="ri-sun-line fs-20 align-middle dark-mode text-white" />
              </button>
            </div>
            <div className="dropdown topbar-item">
              <button
                type="button"
                className="topbar-button"
                id="page-header-notifications-dropdown"
                data-bs-toggle="dropdown"
              >
                <span className="topbar-badge border border-2 border-info rounded-pill">
                  18
                </span>
              </button>
              <div className="dropdown-menu pt-0 dropdown-lg dropdown-menu-end">
                <div className="p-3 border-top-0 border-start-0 border-end-0 border-dashed border">
                  <h6 className="m-0 fs-16 fw-semibold">Notifications</h6>
                </div>
                <div data-simplebar style={{ maxHeight: 280 }}>
                  <a
                    href="#"
                    className="dropdown-item py-3 border-bottom text-wrap"
                  >
                    <p className="mb-0">
                      <span className="fw-medium text-white">
                        Olivia Bennett
                      </span>{" "}
                      mentioned you in a comment
                    </p>
                  </a>
                </div>
              </div>
            </div>
            {/* User */}
            <div className="dropdown topbar-item">
              {/* <a className="topbar-button p-0" id="page-header-user-dropdown" data-bs-toggle="dropdown">
                <span className="d-flex align-items-center gap-2">
                  <img className="rounded-circle" width={32} src="assets/images/users/avatar-1.jpg" alt="user" />
                  <span className="d-lg-flex flex-column gap-1 d-none">
                    <h5 className="my-0 fs-13 text-uppercase text-reset fw-bold text-white">Doris Lietz</h5>
                  </span>
                </span>
              </a> */}
              <a
                className="topbar-button p-0 text-white"
                id="page-header-user-dropdown"
                data-bs-toggle="dropdown"
              >
                <span className="d-flex align-items-center gap-2">
                  {/* User Avatar */}
                  <img
                    className="rounded-circle border border-white"
                    width={32}
                    src={avatar1}
                    alt="user"
                  />

                  {/* User Name */}
                  <span className="d-lg-flex flex-column gap-1 d-none">
                    <h5 className="my-0 fs-13 text-uppercase fw-bold text-white">
                      Doris Lietz
                    </h5>
                  </span>
                </span>
              </a>

              <div className="dropdown-menu dropdown-menu-end">
                <Link className="dropdown-item" to="/profile">
                  <i className="bx bx-user-circle fs-18 align-middle me-2" /> My
                  Account
                </Link>
                <Link className="dropdown-item" to="/pricing">
                  <i className="bx bx-wallet fs-18 align-middle me-2" /> Pricing
                </Link>
                <Link className="dropdown-item" to="/logout">
                  <i className="bx bx-log-out fs-18 align-middle me-2" /> Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
