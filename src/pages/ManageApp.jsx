import React from 'react'
import "../assets/css/app.min.css";
import "../assets/css/icons.min.css";
import "../assets/css/vendor.min.css";
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';
import Footer from '../components/Footer';
const ManageApp = () => {
  return (
    <>
  {/* START Wrapper */}
  <div className="wrapper">
    <Navbar/>
    <Sidebar/>
    <div className="page-container">
      {/* Start Container Fluid */}
      <div className="page-content">
        <div className="row mt-3">
          <div className="col-lg-6">
            <h4 className="card-title text-dark mb-2">Authorized Apps</h4>
            <p className="mb-0">
              You have used 3/3 free integrations. To add more integrations{" "}
              <a
                href="#!"
                className="link-primary text-decoration-underline fw-semibold"
              >
                Upgrade to PRO
              </a>
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <div className="avatar-md d-flex me-2 bg-light align-items-center justify-content-center rounded">
                    <img
                      src="assets/images/apps/app-1.svg"
                      alt=""
                      className="avatar-sm"
                    />
                  </div>
                  <div>
                    <div className="form-check form-switch checkbox-xl">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        defaultChecked=""
                      />
                    </div>
                  </div>
                </div>
                <h4 className="fw-semibold">
                  Google Analytics{" "}
                  <a
                    href="#!"
                    className="link-warning fs-13 fw-normal ms-1 fw-normal"
                  >
                    analytics.google.com
                  </a>
                </h4>
                <p className="mb-0">
                  Google Analytics is a free web analytics service offered by
                  Google that tracks and reports website traffic ...
                </p>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <div>
                    <p className="mb-0 fw-semibold text-dark">Free</p>
                    <p className="text-muted mb-0">
                      Last Sync: 12:56pm, 12 May
                    </p>
                  </div>
                  <div>
                    <span className="badge bg-success-subtle text-success fs-12 py-1 px-2">
                      <i className="bx bx-check-double" /> Connected
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex gap-1 align-items-center">
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-danger btn-sm fw-semibold"
                    >
                      <i className="bx bxs-folder-minus" /> Remove
                    </a>
                  </div>
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-primary btn-sm fw-semibold"
                    >
                      <i className="bx bxs-detail" /> Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <div className="avatar-md d-flex me-2 bg-light align-items-center justify-content-center rounded">
                    <img
                      src="assets/images/apps/app-2.svg"
                      alt=""
                      className="avatar-sm"
                    />
                  </div>
                  <div className="form-check form-switch checkbox-xl">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      defaultChecked=""
                    />
                  </div>
                </div>
                <h4 className="fw-semibold">
                  Dropbox{" "}
                  <a href="#!" className="link-warning fw-normal fs-13 ms-1">
                    dropbox.com
                  </a>
                </h4>
                <p className="mb-0">
                  Dropbox is a cloud-based file storage and collaboration
                  platform designed to facilitate easy file sharing ...
                </p>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <div>
                    <p className="mb-0 fw-semibold text-dark">Premium</p>
                    <p className="text-muted mb-0">
                      Last Sync: 11:23pm, 08 Dec
                    </p>
                  </div>
                  <div>
                    <span className="badge bg-success-subtle text-success fs-12 py-1 px-2">
                      <i className="bx bx-check-double" /> Connected
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex gap-1 align-items-center">
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-danger btn-sm fw-semibold"
                    >
                      <i className="bx bxs-folder-minus" /> Remove
                    </a>
                  </div>
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-primary btn-sm fw-semibold"
                    >
                      <i className="bx bxs-detail" /> Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <div className="avatar-md d-flex me-2 bg-light align-items-center justify-content-center rounded">
                    <img
                      src="assets/images/apps/app-3.svg"
                      alt=""
                      className="avatar-sm"
                    />
                  </div>
                  <div className="form-check form-switch checkbox-xl">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                      defaultChecked=""
                    />
                  </div>
                </div>
                <h4 className="fw-semibold">
                  Google Ads{" "}
                  <a href="#!" className="link-warning fs-13 fw-normal ms-1">
                    ads.google.com
                  </a>
                </h4>
                <p className="mb-0">
                  Google Ads is an online advertising platform developed by
                  Google, where advertisers can create ads to...{" "}
                </p>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <div>
                    <p className="mb-0 fw-semibold text-dark">Premium</p>
                    <p className="text-muted mb-0">
                      Last Sync: 02:12pm, 03 Jan
                    </p>
                  </div>
                  <div>
                    <span className="badge bg-success-subtle text-success fs-12 py-1 px-2">
                      <i className="bx bx-check-double" /> Connected
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex gap-1 align-items-center">
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-danger btn-sm fw-semibold"
                    >
                      <i className="bx bxs-folder-minus" /> Remove
                    </a>
                  </div>
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-primary btn-sm fw-semibold"
                    >
                      <i className="bx bxs-detail" /> Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-6">
            <h4 className="card-title text-dark mb-2">Brows Library</h4>
            <p className="mb-0">200+ available integrations</p>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <div className="avatar-md d-flex me-2 bg-light align-items-center justify-content-center rounded">
                    <img
                      src="assets/images/apps/app-4.svg"
                      alt=""
                      className="avatar-sm"
                    />
                  </div>
                  <div className="form-check form-switch checkbox-xl">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                    />
                  </div>
                </div>
                <h4 className="fw-semibold">
                  Mailchimp{" "}
                  <a href="#!" className="link-warning fs-13 fw-normal ms-1">
                    mailchimp.com
                  </a>
                </h4>
                <p className="mb-0">
                  Mailchimp is a comprehensive marketing automation platform
                  designed primarily for email marketing ...{" "}
                </p>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <div>
                    <p className="mb-0 fw-semibold text-dark">Premium</p>
                  </div>
                  <div>
                    <span className="badge bg-warning-subtle text-warning fs-12 py-1 px-2">
                      Connect
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex gap-1 align-items-center">
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-danger btn-sm fw-semibold"
                    >
                      <i className="bx bxs-folder-minus" /> Remove
                    </a>
                  </div>
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-primary btn-sm fw-semibold"
                    >
                      <i className="bx bxs-detail" /> Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <div className="avatar-md d-flex me-2 bg-light align-items-center justify-content-center rounded">
                    <img
                      src="assets/images/apps/app-5.svg"
                      alt=""
                      className="avatar-sm"
                    />
                  </div>
                  <div className="form-check form-switch checkbox-xl">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                    />
                  </div>
                </div>
                <h4 className="fw-semibold">
                  MS Excel{" "}
                  <a href="#!" className="link-warning fs-13 fw-normal ms-1">
                    microsoft.com
                  </a>
                </h4>
                <p className="mb-0">
                  Microsoft Excel is a powerful spreadsheet application that is
                  part of the Microsoft Office suite. It is widely ...{" "}
                </p>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <div>
                    <p className="mb-0 fw-semibold text-dark">Premium</p>
                  </div>
                  <div>
                    <span className="badge bg-warning-subtle text-warning fs-12 py-1 px-2">
                      Connect
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex gap-1 align-items-center">
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-danger btn-sm fw-semibold"
                    >
                      <i className="bx bxs-folder-minus" /> Remove
                    </a>
                  </div>
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-primary btn-sm fw-semibold"
                    >
                      <i className="bx bxs-detail" /> Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <div className="avatar-md d-flex me-2 bg-light align-items-center justify-content-center rounded">
                    <img
                      src="assets/images/apps/app-6.svg"
                      alt=""
                      className="avatar-sm"
                    />
                  </div>
                  <div className="form-check form-switch checkbox-xl">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                    />
                  </div>
                </div>
                <h4 className="fw-semibold">
                  MS Team{" "}
                  <a href="#!" className="link-warning fs-13 fw-normal ms-1">
                    microsoft.com
                  </a>
                </h4>
                <p className="mb-0">
                  Microsoft Teams is a collaboration and communication platform
                  designed to facilitate teamwork and improve ...{" "}
                </p>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <div>
                    <p className="mb-0 fw-semibold text-dark">Free</p>
                  </div>
                  <div>
                    <span className="badge bg-warning-subtle text-warning fs-12 py-1 px-2">
                      Connect
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex gap-1 align-items-center">
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-danger btn-sm fw-semibold"
                    >
                      <i className="bx bxs-folder-minus" /> Remove
                    </a>
                  </div>
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-primary btn-sm fw-semibold"
                    >
                      <i className="bx bxs-detail" /> Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <div className="avatar-md d-flex me-2 bg-light align-items-center justify-content-center rounded">
                    <img
                      src="assets/images/brands/bitbucket.svg"
                      alt=""
                      className="avatar-sm"
                    />
                  </div>
                  <div className="form-check form-switch checkbox-xl">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                    />
                  </div>
                </div>
                <h4 className="fw-semibold">
                  Bitbucket{" "}
                  <a href="#!" className="link-warning fs-13 fw-normal ms-1">
                    bitbucket.org
                  </a>
                </h4>
                <p className="mb-0">
                  Bitbucket is a web-based version control repository hosting
                  service owned by Atlassian. It is designed ...{" "}
                </p>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <div>
                    <p className="mb-0 fw-semibold text-dark">Free</p>
                  </div>
                  <div>
                    <span className="badge bg-warning-subtle text-warning fs-12 py-1 px-2">
                      Connect
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex gap-1 align-items-center">
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-danger btn-sm fw-semibold"
                    >
                      <i className="bx bxs-folder-minus" /> Remove
                    </a>
                  </div>
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-primary btn-sm fw-semibold"
                    >
                      <i className="bx bxs-detail" /> Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <div className="avatar-md d-flex me-2 bg-light align-items-center justify-content-center rounded">
                    <img
                      src="assets/images/brands/dribbble.svg"
                      alt=""
                      className="avatar-sm"
                    />
                  </div>
                  <div className="form-check form-switch checkbox-xl">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                    />
                  </div>
                </div>
                <h4 className="fw-semibold">
                  Dribbble{" "}
                  <a href="#!" className="link-warning fs-13 fw-normal ms-1">
                    dribble.com
                  </a>
                </h4>
                <p className="mb-0">
                  Dribbble is an online community and platform for showcasing
                  and discovering creative work in design ...{" "}
                </p>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <div>
                    <p className="mb-0 fw-semibold text-dark">Premium</p>
                  </div>
                  <div>
                    <span className="badge bg-warning-subtle text-warning fs-12 py-1 px-2">
                      Connect
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex gap-1 align-items-center">
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-danger btn-sm fw-semibold"
                    >
                      <i className="bx bxs-folder-minus" /> Remove
                    </a>
                  </div>
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-primary btn-sm fw-semibold"
                    >
                      <i className="bx bxs-detail" /> Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-6">
            <div className="card">
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                  <div className="avatar-md d-flex me-2 bg-light align-items-center justify-content-center rounded">
                    <img
                      src="assets/images/brands/slack.svg"
                      alt=""
                      className="avatar-sm"
                    />
                  </div>
                  <div className="form-check form-switch checkbox-xl">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                    />
                  </div>
                </div>
                <h4 className="fw-semibold">
                  Slack{" "}
                  <a href="#!" className="link-warning fs-13 fw-normal ms-1">
                    slack.com
                  </a>
                </h4>
                <p className="mb-0">
                  Slack is a collaboration and messaging platform designed to
                  facilitate team communication and productivity ...{" "}
                </p>
                <div className="d-flex align-items-center justify-content-between mt-3">
                  <div>
                    <p className="mb-0 fw-semibold text-dark">Premium</p>
                  </div>
                  <div>
                    <span className="badge bg-warning-subtle text-warning fs-12 py-1 px-2">
                      Connect
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="d-flex gap-1 align-items-center">
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-danger btn-sm fw-semibold"
                    >
                      <i className="bx bxs-folder-minus" /> Remove
                    </a>
                  </div>
                  <div>
                    <a
                      href="#!"
                      className="btn btn-outline-primary btn-sm fw-semibold"
                    >
                      <i className="bx bxs-detail" /> Details
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-end">
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
      {/* End Page Content */}
      <Footer/>
    </div>
    {/* END Wrapper */}
  </div>
</>

  )
}

export default ManageApp
