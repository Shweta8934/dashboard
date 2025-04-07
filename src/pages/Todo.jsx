import React from 'react'
import "../assets/css/app.min.css";
import "../assets/css/icons.min.css";
import "../assets/css/vendor.min.css";
import Navbar from '../components/Navbar';
import Sidebar from '../components/SideBar';
import Footer from '../components/Footer';
const Todo = () => {
  return (
    <div className="wrapper">
        <Navbar/>
        <Sidebar/>
 
  <div className="page-container">
    {/* Start Container Fluid */}
    <div className="page-content">
      {/* Start here.... */}
      <div className="row">
        <div className="col-xl-8">
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Recently Assigned</h5>
            </div>
            <div className="card-body">
              <div className="mb-1 border rounded">
                <div className="p-2">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-md-7">
                      <div className="d-flex align-items-center justify-content-start gap-2">
                        <input
                          type="checkbox"
                          className="form-check-input rounded-circle mt-0 fs-16"
                          id="task1"
                        />
                        <a href="#!" className="link-dark fw-medium">
                          <span className="text-primary fw-semibold">
                            Kickoff Meeting :{" "}
                          </span>{" "}
                          Draft the new contract document for sales team
                        </a>
                      </div>
                    </div>{" "}
                    {/* end col*/}
                    <div className="col-md-5">
                      <div className="d-flex align-items-center gap-3 justify-content-md-end">
                        <div className="flex-shrink-0">
                          <span className="badge badge-outline-warning">
                            New
                          </span>
                        </div>
                        <ul className="list-inline fs-13 text-end flex-shrink-0 mb-0">
                          <li className="list-inline-item">
                            <span className="fw-semibold">Today</span>
                          </li>
                        </ul>
                        <div className="flex-shrink-0">
                          <span className="badge badge-soft-danger p-1">
                            High
                          </span>
                        </div>
                        <div className="avatar-group ps-3">
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-5.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-6.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                        </div>
                        <div className="dropdown dropend">
                          <a
                            href="javascript: void(0);"
                            className="ps-1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded fs-18" />
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-edit-alt me-2" />
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-detail me-2" />
                              View Tasks
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-trash me-2" />
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end d-flex*/}
                    </div>{" "}
                    {/* end col*/}
                  </div>{" "}
                  {/* end row*/}
                </div>{" "}
                {/* end card-body*/}
              </div>
              <div className="mb-1 border rounded mt-3">
                <div className="p-2">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-md-7">
                      <div className="d-flex align-items-center justify-content-start gap-2">
                        <input
                          type="checkbox"
                          className="form-check-input rounded-circle mt-0 fs-16"
                          id="task1"
                        />
                        <a href="#!" className="link-dark fw-medium">
                          <span className="text-primary fw-semibold">
                            Client Proposal :{" "}
                          </span>{" "}
                          Draft and finalize the proposal for the new client.
                        </a>
                      </div>
                    </div>{" "}
                    {/* end col*/}
                    <div className="col-md-5">
                      <div className="d-flex align-items-center gap-3 justify-content-md-end">
                        <div className="flex-shrink-0">
                          <span className="badge badge-outline-warning">
                            New
                          </span>
                        </div>
                        <ul className="list-inline fs-13 text-end flex-shrink-0 mb-0">
                          <li className="list-inline-item">
                            <span className="fw-semibold">Yesterday</span>
                          </li>
                        </ul>
                        <div className="flex-shrink-0">
                          <span className="badge badge-soft-danger p-1">
                            High
                          </span>
                        </div>
                        <div className="avatar-group ps-3">
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-2.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-3.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-4.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                        </div>
                        <div className="dropdown dropend">
                          <a
                            href="javascript: void(0);"
                            className="ps-1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded fs-18" />
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-edit-alt me-2" />
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-detail me-2" />
                              View Tasks
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-trash me-2" />
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end d-flex*/}
                    </div>{" "}
                    {/* end col*/}
                  </div>{" "}
                  {/* end row*/}
                </div>{" "}
                {/* end card-body*/}
              </div>
              <div className="mb-1 border rounded mt-3">
                <div className="p-2">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-md-7">
                      <div className="d-flex align-items-center justify-content-start gap-2">
                        <input
                          type="checkbox"
                          className="form-check-input rounded-circle mt-0 fs-16"
                          id="task1"
                        />
                        <a href="#!" className="link-dark fw-medium">
                          <span className="text-primary fw-semibold">
                            Marketing Campaign :{" "}
                          </span>{" "}
                          Plan launch the upcoming marketing campaign.
                        </a>
                      </div>
                    </div>{" "}
                    {/* end col*/}
                    <div className="col-md-5">
                      <div className="d-flex align-items-center gap-3 justify-content-md-end">
                        <div className="flex-shrink-0">
                          <span className="badge badge-outline-warning">
                            New
                          </span>
                        </div>
                        <ul className="list-inline fs-13 text-end flex-shrink-0 mb-0">
                          <li className="list-inline-item">
                            <span className="fw-semibold">/</span>
                          </li>
                        </ul>
                        <div className="flex-shrink-0">
                          <span className="badge badge-soft-success p-1">
                            Low
                          </span>
                        </div>
                        <div className="dropdown dropend">
                          <a
                            href="javascript: void(0);"
                            className="ps-1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded fs-18" />
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-edit-alt me-2" />
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-detail me-2" />
                              View Tasks
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-trash me-2" />
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end d-flex*/}
                    </div>{" "}
                    {/* end col*/}
                  </div>{" "}
                  {/* end row*/}
                </div>{" "}
                {/* end card-body*/}
              </div>
              <div className="mb-1 border rounded mt-3">
                <div className="p-2">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-md-7">
                      <div className="d-flex align-items-center justify-content-start gap-2">
                        <input
                          type="checkbox"
                          className="form-check-input rounded-circle mt-0 fs-16"
                          id="task1"
                        />
                        <a href="#!" className="link-dark fw-medium">
                          <span className="text-primary fw-semibold">
                            Client Presentation :{" "}
                          </span>{" "}
                          Prepare and deliver a presentation for the client.
                        </a>
                      </div>
                    </div>{" "}
                    {/* end col*/}
                    <div className="col-md-5">
                      <div className="d-flex align-items-center gap-3 justify-content-md-end">
                        <div className="flex-shrink-0">
                          <span className="badge badge-outline-danger">
                            Old
                          </span>
                        </div>
                        <ul className="list-inline fs-13 text-end flex-shrink-0 mb-0">
                          <li className="list-inline-item">
                            <span className="fw-semibold">22 May</span>
                          </li>
                        </ul>
                        <div className="flex-shrink-0">
                          <span className="badge badge-soft-danger p-1">
                            <i className="bx bxs-circle fs-10" /> Urgent
                          </span>
                        </div>
                        <div className="avatar-group ps-3">
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-5.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-6.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-7.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-8.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                        </div>
                        <div className="dropdown dropend">
                          <a
                            href="javascript: void(0);"
                            className="ps-1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded fs-18" />
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-edit-alt me-2" />
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-detail me-2" />
                              View Tasks
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-trash me-2" />
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end d-flex*/}
                    </div>{" "}
                    {/* end col*/}
                  </div>{" "}
                  {/* end row*/}
                </div>{" "}
                {/* end card-body*/}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">In Progress</h5>
            </div>
            <div className="card-body">
              <div className="mb-1 border rounded">
                <div className="p-2">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center justify-content-start gap-2">
                        <input
                          type="checkbox"
                          className="form-check-input rounded-circle mt-0 fs-16"
                          id="task1"
                        />
                        <a href="#!" className="link-dark fw-medium">
                          <span className="text-primary fw-semibold">
                            Report Analysis :{" "}
                          </span>{" "}
                          Analyze the latest sales reports and generate.
                        </a>
                      </div>
                    </div>{" "}
                    {/* end col*/}
                    <div className="col-md-6">
                      <div className="d-flex align-items-center gap-3 justify-content-md-end">
                        <div className="flex-shrink-0">
                          <span className="badge badge-outline-success">
                            Completed <i className="bx bx-check-double" />
                          </span>
                        </div>
                        <ul className="list-inline fs-13 text-end flex-shrink-0 mb-0">
                          <li className="list-inline-item">
                            <span className="fw-semibold">18 May</span>
                          </li>
                        </ul>
                        <div className="flex-shrink-0">
                          <span className="badge badge-soft-danger p-1">
                            <i className="bx bxs-circle fs-10" /> Urgent
                          </span>
                        </div>
                        <div className="avatar-group ps-3">
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-3.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-8.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-9.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                        </div>
                        <div className="dropdown dropend">
                          <a
                            href="javascript: void(0);"
                            className="ps-1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded fs-18" />
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-edit-alt me-2" />
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-detail me-2" />
                              View Tasks
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-trash me-2" />
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end d-flex*/}
                    </div>{" "}
                    {/* end col*/}
                  </div>{" "}
                  {/* end row*/}
                </div>{" "}
                {/* end card-body*/}
              </div>
              <div className="mb-1 border rounded mt-3">
                <div className="p-2">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center justify-content-start gap-2">
                        <input
                          type="checkbox"
                          className="form-check-input rounded-circle mt-0 fs-16"
                          id="task1"
                        />
                        <a href="#!" className="link-dark fw-medium">
                          <span className="text-primary fw-semibold">
                            Design Review :{" "}
                          </span>{" "}
                          Review and approve the latest design drafts.
                        </a>
                      </div>
                    </div>{" "}
                    {/* end col*/}
                    <div className="col-md-6">
                      <div className="d-flex align-items-center gap-3 justify-content-md-end">
                        <div className="flex-shrink-0">
                          <span className="badge badge-outline-success">
                            Completed <i className="bx bx-check-double" />
                          </span>
                        </div>
                        <ul className="list-inline fs-13 text-end flex-shrink-0 mb-0">
                          <li className="list-inline-item">
                            <span className="fw-semibold">20 May</span>
                          </li>
                        </ul>
                        <div className="flex-shrink-0">
                          <span className="badge badge-soft-danger p-1">
                            High
                          </span>
                        </div>
                        <div className="avatar-group ps-3">
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-10.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-5.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-9.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-2.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                        </div>
                        <div className="dropdown dropend">
                          <a
                            href="javascript: void(0);"
                            className="ps-1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded fs-18" />
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-edit-alt me-2" />
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-detail me-2" />
                              View Tasks
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-trash me-2" />
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end d-flex*/}
                    </div>{" "}
                    {/* end col*/}
                  </div>{" "}
                  {/* end row*/}
                </div>{" "}
                {/* end card-body*/}
              </div>
              <div className="mb-1 border rounded mt-3">
                <div className="p-2">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center justify-content-start gap-2">
                        <input
                          type="checkbox"
                          className="form-check-input rounded-circle mt-0 fs-16"
                          id="task1"
                        />
                        <a href="#!" className="link-dark fw-medium">
                          <span className="text-primary fw-semibold">
                            Project Planning :{" "}
                          </span>{" "}
                          Outline the next steps for the ongoing project.
                        </a>
                      </div>
                    </div>{" "}
                    {/* end col*/}
                    <div className="col-md-6">
                      <div className="d-flex align-items-center gap-3 justify-content-md-end">
                        <div className="flex-shrink-0">
                          <span className="badge badge-outline-warning">
                            Progress
                          </span>
                        </div>
                        <ul className="list-inline fs-13 text-end flex-shrink-0 mb-0">
                          <li className="list-inline-item">
                            <span className="fw-semibold">18 May</span>
                          </li>
                        </ul>
                        <div className="flex-shrink-0">
                          <span className="badge badge-soft-danger p-1">
                            High
                          </span>
                        </div>
                        <div className="avatar-group ps-3">
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-5.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-8.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                        </div>
                        <div className="dropdown dropend">
                          <a
                            href="javascript: void(0);"
                            className="ps-1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded fs-18" />
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-edit-alt me-2" />
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-detail me-2" />
                              View Tasks
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-trash me-2" />
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end d-flex*/}
                    </div>{" "}
                    {/* end col*/}
                  </div>{" "}
                  {/* end row*/}
                </div>{" "}
                {/* end card-body*/}
              </div>
              <div className="mb-1 border rounded mt-3">
                <div className="p-2">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center justify-content-start gap-2">
                        <input
                          type="checkbox"
                          className="form-check-input rounded-circle mt-0 fs-16"
                          id="task1"
                        />
                        <a href="#!" className="link-dark fw-medium">
                          <span className="text-primary fw-semibold">
                            Email Responses :{" "}
                          </span>{" "}
                          Respond to all pending emails and inquiries.
                        </a>
                      </div>
                    </div>{" "}
                    {/* end col*/}
                    <div className="col-md-6">
                      <div className="d-flex align-items-center gap-3 justify-content-md-end">
                        <div className="flex-shrink-0">
                          <span className="badge badge-outline-warning">
                            Progress
                          </span>
                        </div>
                        <ul className="list-inline fs-13 text-end flex-shrink-0 mb-0">
                          <li className="list-inline-item">
                            <span className="fw-semibold">20 May</span>
                          </li>
                        </ul>
                        <div className="flex-shrink-0">
                          <span className="badge badge-soft-success p-1">
                            Low
                          </span>
                        </div>
                        <div className="avatar-group ps-3">
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-7.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                        </div>
                        <div className="dropdown dropend">
                          <a
                            href="javascript: void(0);"
                            className="ps-1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded fs-18" />
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-edit-alt me-2" />
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-detail me-2" />
                              View Tasks
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-trash me-2" />
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end d-flex*/}
                    </div>{" "}
                    {/* end col*/}
                  </div>{" "}
                  {/* end row*/}
                </div>{" "}
                {/* end card-body*/}
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <h5 className="card-title mb-0">Upcoming</h5>
            </div>
            <div className="card-body">
              <div className="mb-1 border rounded">
                <div className="p-2">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-md-7">
                      <div className="d-flex align-items-center justify-content-start gap-2">
                        <input
                          type="checkbox"
                          className="form-check-input rounded-circle mt-0 fs-16"
                          id="task1"
                        />
                        <a href="#!" className="link-dark fw-medium">
                          <span className="text-primary fw-semibold">
                            Morning Stand-up :{" "}
                          </span>{" "}
                          Host the daily stand-up meeting with the team.
                        </a>
                      </div>
                    </div>{" "}
                    {/* end col*/}
                    <div className="col-md-5">
                      <div className="d-flex align-items-center gap-3 justify-content-md-end">
                        <div className="flex-shrink-0">
                          <span className="badge badge-outline-primary">
                            Upcoming
                          </span>
                        </div>
                        <ul className="list-inline fs-13 text-end flex-shrink-0 mb-0">
                          <li className="list-inline-item">
                            <span className="fw-semibold">25 May</span>
                          </li>
                        </ul>
                        <div className="flex-shrink-0">
                          <span className="badge badge-soft-success p-1">
                            Low
                          </span>
                        </div>
                        <div className="avatar-group ps-3">
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-9.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                        </div>
                        <div className="dropdown dropend">
                          <a
                            href="javascript: void(0);"
                            className="ps-1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded fs-18" />
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-edit-alt me-2" />
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-detail me-2" />
                              View Tasks
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-trash me-2" />
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end d-flex*/}
                    </div>{" "}
                    {/* end col*/}
                  </div>{" "}
                  {/* end row*/}
                </div>{" "}
                {/* end card-body*/}
              </div>
              <div className="mb-1 border rounded mt-3">
                <div className="p-2">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center justify-content-start gap-2">
                        <input
                          type="checkbox"
                          className="form-check-input rounded-circle mt-0 fs-16"
                          id="task1"
                        />
                        <a href="#!" className="link-dark fw-medium">
                          <span className="text-primary fw-semibold">
                            Client Follow-up :{" "}
                          </span>{" "}
                          Send follow-up emails to potential clients.
                        </a>
                      </div>
                    </div>{" "}
                    {/* end col*/}
                    <div className="col-md-6">
                      <div className="d-flex align-items-center gap-3 justify-content-md-end">
                        <div className="flex-shrink-0">
                          <span className="badge badge-outline-primary">
                            Upcoming
                          </span>
                        </div>
                        <ul className="list-inline fs-13 text-end flex-shrink-0 mb-0">
                          <li className="list-inline-item">
                            <span className="fw-semibold">26 May</span>
                          </li>
                        </ul>
                        <div className="flex-shrink-0">
                          <span className="badge badge-soft-danger p-1">
                            <i className="bx bxs-circle fs-10" /> Urgent
                          </span>
                        </div>
                        <div className="avatar-group ps-3">
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-10.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-9.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-8.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-1.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                        </div>
                        <div className="dropdown dropend">
                          <a
                            href="javascript: void(0);"
                            className="ps-1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded fs-18" />
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-edit-alt me-2" />
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-detail me-2" />
                              View
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-trash me-2" />
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end d-flex*/}
                    </div>{" "}
                    {/* end col*/}
                  </div>{" "}
                  {/* end row*/}
                </div>{" "}
                {/* end card-body*/}
              </div>
              <div className="mb-1 border rounded mt-3">
                <div className="p-2">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center justify-content-start gap-2">
                        <input
                          type="checkbox"
                          className="form-check-input rounded-circle mt-0 fs-16"
                          id="task1"
                        />
                        <a href="#!" className="link-dark fw-medium">
                          <span className="text-primary fw-semibold">
                            Content Creation :{" "}
                          </span>{" "}
                          Write and edit content for the company blog.
                        </a>
                      </div>
                    </div>{" "}
                    {/* end col*/}
                    <div className="col-md-6">
                      <div className="d-flex align-items-center gap-3 justify-content-md-end">
                        <div className="flex-shrink-0">
                          <span className="badge badge-outline-primary">
                            Upcoming
                          </span>
                        </div>
                        <ul className="list-inline fs-13 text-end flex-shrink-0 mb-0">
                          <li className="list-inline-item">
                            <span className="fw-semibold">27 May</span>
                          </li>
                        </ul>
                        <div className="flex-shrink-0">
                          <span className="badge badge-soft-success p-1">
                            Low
                          </span>
                        </div>
                        <div className="avatar-group ps-3">
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-2.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-8.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                        </div>
                        <div className="dropdown dropend">
                          <a
                            href="javascript: void(0);"
                            className="ps-1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded fs-18" />
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-edit-alt me-2" />
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-detail me-2" />
                              View Tasks
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-trash me-2" />
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end d-flex*/}
                    </div>{" "}
                    {/* end col*/}
                  </div>{" "}
                  {/* end row*/}
                </div>{" "}
                {/* end card-body*/}
              </div>
              <div className="mb-1 border rounded mt-3">
                <div className="p-2">
                  <div className="row align-items-center justify-content-between">
                    <div className="col-md-6">
                      <div className="d-flex align-items-center justify-content-start gap-2">
                        <input
                          type="checkbox"
                          className="form-check-input rounded-circle mt-0 fs-16"
                          id="task1"
                        />
                        <a href="#!" className="link-dark fw-medium">
                          <span className="text-primary fw-semibold">
                            Software Update :{" "}
                          </span>{" "}
                          Install and test the latest software updates.
                        </a>
                      </div>
                    </div>{" "}
                    {/* end col*/}
                    <div className="col-md-6">
                      <div className="d-flex align-items-center gap-3 justify-content-md-end">
                        <div className="flex-shrink-0">
                          <span className="badge badge-outline-primary">
                            Upcoming
                          </span>
                        </div>
                        <ul className="list-inline fs-13 text-end flex-shrink-0 mb-0">
                          <li className="list-inline-item">
                            <span className="fw-semibold">27 May</span>
                          </li>
                        </ul>
                        <div className="flex-shrink-0">
                          <span className="badge badge-soft-danger p-1">
                            High
                          </span>
                        </div>
                        <div className="avatar-group ps-3">
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-5.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-6.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-7.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                        </div>
                        <div className="dropdown dropend">
                          <a
                            href="javascript: void(0);"
                            className="ps-1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <i className="bx bx-dots-vertical-rounded fs-18" />
                          </a>
                          <div className="dropdown-menu">
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-edit-alt me-2" />
                              Edit
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-detail me-2" />
                              View Tasks
                            </a>
                            <a
                              className="dropdown-item"
                              href="javascript: void(0);"
                            >
                              <i className="bx bx-trash me-2" />
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>{" "}
                      {/* end d-flex*/}
                    </div>{" "}
                    {/* end col*/}
                  </div>{" "}
                  {/* end row*/}
                </div>{" "}
                {/* end card-body*/}
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4">
          <div className="card">
            <div className="card-body">
              <div
                className="offcanvas-xxl offcanvas-start h-100"
                tabIndex={-1}
                id="EmailSidebaroffcanvas"
                aria-labelledby="EmailSidebaroffcanvasLabel"
              >
                <div className="card mb-0" data-simplebar="">
                  <div className="card-body">
                    <div className="d-grid mb-3">
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#compose-modal"
                      >
                        Add Tasks
                      </button>
                    </div>
                    <div className="search-bar">
                      <span>
                        <i className="bx bx-search-alt" />
                      </span>
                      <input
                        type="search"
                        className="form-control"
                        id="search"
                        placeholder="Search task..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h4 className="fw-semibold">
                Application Design{" "}
                <span className="badge badge-soft-danger p-1 fs-11 ms-1">
                  <i className="bx bxs-circle fs-10" /> Urgent
                </span>{" "}
              </h4>
              <p className="mb-0">
                The app has advanced, signaling the need to finalize our
                application for the upcoming phase of development. This crucial
                step ensures alignment with our objectives and user
                expectations, paving the way for a successful launch.
              </p>
              <div className="table-responsive mt-3">
                <table className="table mb-0">
                  <tbody>
                    <tr>
                      <td>
                        <p className="mb-0 fw-semibold mt-2"> Assigned : </p>
                      </td>
                      <td className="px-2 text-dark fw-medium fs-15">
                        <div className="avatar-group ps-3">
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-5.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-6.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-7.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-8.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-0 fw-semibold"> Date : </p>
                      </td>
                      <td className="px-2 text-dark fw-medium">
                        20 May 2024 - 23 May 2024
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-0 fw-semibold mt-2"> Create : </p>
                      </td>
                      <td className="px-2 text-dark fw-medium">
                        <div className="d-flex align-items-center gap-2">
                          <div className="avatar h-auto w-auto">
                            <img
                              src="assets/images/users/avatar-8.jpg"
                              alt=""
                              className="rounded-circle avatar-sm border border-light border-2"
                            />
                          </div>
                          <h5 className="mb-0 fs-13">Erma D. Rumph</h5>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-0 fw-semibold">Labels : </p>
                      </td>
                      <td className="px-2 text-dark fw-medium fs-15">
                        <span className="badge badge-soft-primary p-1">
                          Branding
                        </span>
                        <span className="badge badge-soft-info p-1">
                          UI / UX
                        </span>
                        <span className="badge badge-soft-success p-1">
                          Design
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="d-flex mb-0 align-items-center gap-1 fw-semibold">
                          Url Link :{" "}
                        </p>
                      </td>
                      <td className="px-2 text-dark fw-medium">
                        <a href="#!">https://website.com/ </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <p className="mb-0 fw-semibold">Progress : </p>
                      </td>
                      <td className="px-2">
                        <div className="progress progress-soft progress-md mt-2">
                          <div
                            className="progress-bar bg-success"
                            role="progressbar"
                            style={{ width: "70%" }}
                            aria-valuenow=""
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Container Fluid */}
<Footer/>
  </div>
</div>

  )
}

export default Todo
