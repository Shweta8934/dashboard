import React from "react";
import "../assets/css/app.min.css";
import "../assets/css/icons.min.css";
import "../assets/css/vendor.min.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
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

import image15 from "../assets/images/small/img-15.jpg";
import image12 from "../assets/images/small/img-12.jpg";
import image14 from "../assets/images/small/img-13.jpg"; 
import image16 from "../assets/images/small/img-16.jpg";
import image13 from "../assets/images/small/img-13.jpg";
import image4 from "../assets/images/small/img-4.jpg";
import image10 from "../assets/images/small/img-10.jpg";
import profile from "../assets/images/profile-bg-2.jpg"
import Footer from "../components/Footer";
const Profile = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Sidebar />
      <div className="page-container">
        {/* Start Container Fluid */}
        <div className="page-content">
          <div className="row">
            <div className="col-lg-12">
              <div className="card overflow-hidden">
                <div className="card-body p-0">
                  <div className="bg-primary profile-bg rounded-top position-relative">
                    <img 
                      src={avatar1}
                      alt=""
                      className="avatar-xl mx-auto border border-light border-3 rounded-circle position-absolute top-100 start-50 translate-middle"
                    />
                  </div>
                  <div className="mt-3 px-4 d-flex flex-wrap align-items-end justify-content-between">
                    <div>
                      <h4 className="mb-1 fw-semibold">
                        Gaston Lapierre{" "}
                        <i className="bx bxs-badge-check text-success align-middle" />
                      </h4>
                      <p className="mb-4">gastonlapierre333@rhyta.com</p>
                      <p className="text-muted fw-medium mb-2 d-flex align-items-start gap-2">
                        <span className="text-dark fs-12 fw-bold text-uppercase d-flex align-items-center gap-1">
                          Occupation:{" "}
                        </span>{" "}
                        Senior Web Developer In Joins LLP
                      </p>
                      <p className="text-muted fw-medium mb-3 d-flex align-items-start gap-2">
                        <span className="text-dark fs-12 fw-bold text-uppercase d-flex align-items-center gap-1">
                          Location:{" "}
                        </span>{" "}
                        2182 Arron Smith Drive Honolulu, HI 96813{" "}
                      </p>
                    </div>
                    <div>
                      <div className="row text-center g-2 mb-4">
                        <div className="col-lg-3 col-4 border-end">
                          <h5 className="mb-1 fw-bold">80</h5>
                          <p className="text-muted mb-0">Posts</p>
                        </div>
                        <div className="col-lg-3 col-4 border-end">
                          <h5 className="mb-1 fw-bold">3.6k</h5>
                          <p className="text-muted mb-0">Followers</p>
                        </div>
                        <div className="col-lg-3 col-4 border-end">
                          <h5 className="mb-1 fw-bold">1.1k</h5>
                          <p className="text-muted mb-0">Following</p>
                        </div>
                        <div className="col-lg-3 col-4">
                          <h5 className="mb-1 fw-bold">6.7k</h5>
                          <p className="text-muted mb-0">Views</p>
                        </div>
                      </div>
                      <ul className="nav nav-tabs gap-4">
                        <li className="nav-item">
                          <a
                            href="#profilePill"
                            data-bs-toggle="tab"
                            aria-expanded="false"
                            className="nav-link active"
                          >
                            <span className="d-block d-sm-none">
                              <i className="bx bx-user" />
                            </span>
                            <span className="d-none d-sm-block">Profile</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#networkPill"
                            data-bs-toggle="tab"
                            aria-expanded="true"
                            className="nav-link "
                          >
                            <span className="d-block d-sm-none">
                              <i className="bx bx-link" />
                            </span>
                            <span className="d-none d-sm-block">Network</span>
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            href="#subscriptionPill"
                            data-bs-toggle="tab"
                            aria-expanded="false"
                            className="nav-link"
                          >
                            <span className="d-block d-sm-none">
                              <i className="bx bx-card" />
                            </span>
                            <span className="d-none d-sm-block">
                              Subscription
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-content pt-0 text-muted">
                <div className="tab-pane show active" id="profilePill">
                  <div className="row">
                    <div className="col-xl-3 col-lg-6">
                      <div className="card">
                        <div className="card-header">
                          <h4 className="card-title mb-0">Personal Info</h4>
                        </div>
                        <div className="card-body">
                          <div className="pb-3 border-bottom">
                            <h5 className="text-dark fs-12 text-uppercase fw-bold">
                              About Me :
                            </h5>
                            <p className="fw-medium mb-0">
                              Hi, Gaston Lapierre I'm 36 and I work as a Digital
                              Designer for the “debater” Agency in Ontario,
                              Canada
                            </p>
                          </div>
                          <div className="py-3 border-bottom">
                            <h5 className="text-dark fs-12 text-uppercase fw-bold">
                              Birth Date :{" "}
                            </h5>
                            <p className="fw-medium mb-0">December 17, 1985</p>
                          </div>
                          <div className="py-3 border-bottom">
                            <h5 className="text-dark fs-12 text-uppercase fw-bold">
                              Phone Number :
                            </h5>
                            <p className="fw-medium mb-0">+1-989-232435234</p>
                          </div>
                          <div className="py-3 border-bottom">
                            <h5 className="text-dark fs-12 text-uppercase fw-bold">
                              Gender :
                            </h5>
                            <p className="fw-medium mb-0">Male</p>
                          </div>
                          <div className="py-3 border-bottom">
                            <h5 className="text-dark fs-12 text-uppercase fw-bold">
                              Country :
                            </h5>
                            <p className="fw-medium mb-0">
                              2182 Arron Smith Drive Honolulu, USA
                            </p>
                          </div>
                          <div className="py-3 border-bottom">
                            <h5 className="text-dark fs-12 text-uppercase fw-bold">
                              Occupation :
                            </h5>
                            <p className="fw-medium mb-0">Web Designer</p>
                          </div>
                          <div className="pt-3">
                            <h5 className="text-dark fs-12 text-uppercase fw-bold">
                              Joined :
                            </h5>
                            <p className="fw-medium mb-0">December 20, 2001</p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header">
                          <div className="d-flex align-items-center">
                            <h4 className="card-title mb-0">Activity</h4>
                            <div className="ms-auto">
                              <a href="#!" className="text-muted fw-semibold">
                                See all
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="">
                            <h6 className="text-dark fw-semibold">
                              Stories about you
                            </h6>
                            <a href="#!">
                              <div className="d-flex user-chat align-items-center my-2 pt-2 ps-1 rounded">
                                <div className="position-relative">
                                  <img
                                    src={image4}
                                    alt=""
                                    className="avatar-sm rounded-circle flex-shrink-0"
                                  />
                                </div>
                                <div className="d-block ms-3 flex-grow-1">
                                  <h5 className="text-dark fw-semibold mb-0">
                                    Mentions
                                  </h5>
                                  <p className="mb-0 text-muted fw-medium">
                                    2 stories mention you
                                  </p>
                                </div>
                              </div>
                            </a>
                          </div>
                          <div className="mt-4">
                            <h6 className="text-dark fw-semibold">New</h6>
                            <a href="#!">
                              <div className="d-flex user-chat align-items-center my-2 pt-2 ps-1 rounded gap-1">
                                <div className="position-relative">
                                  <img
                                    src={avatar2}
                                    alt=""
                                    className="avatar-sm rounded-circle flex-shrink-0"
                                  />
                                </div>
                                <div className="d-block ms-2 flex-grow-1">
                                  <h5 className="text-dark fs-13 fw-semibold mb-1 lh-sm">
                                    uiamjad{" "}
                                    <span className="text-dark fw-normal">
                                      started following you.{" "}
                                      <span className="text-muted">1m</span>
                                    </span>
                                  </h5>
                                </div>
                                <div className="avatar-sm flex-shrink-0">
                                  <span className="avatar-title bg-primary-subtle text-primary fw-semibold fs-3 rounded-circle">
                                    <i className="bx bx-user-plus" />
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a href="#!">
                              <div className="d-flex user-chat align-items-center my-2 pt-2 ps-1 rounded gap-1">
                                <div className="position-relative">
                                  <img
                                    src={avatar6}
                                    alt=""
                                    className="avatar-sm rounded-circle flex-shrink-0"
                                  />
                                </div>
                                <div className="d-block ms-2 flex-grow-1">
                                  <h5 className="text-dark fs-13 fw-semibold mb-0 lh-sm">
                                    mr.alidoost{" "}
                                    <span className="text-dark fw-normal">
                                      liked your photo{" "}
                                      <span className="text-muted">2m</span>
                                    </span>
                                  </h5>
                                </div>
                                <div className="avatar flex-shrink-0">
                                  <img
                                    src={image10}
                                    alt=""
                                    className="avatar-sm rounded-3 flex-shrink-0"
                                  />
                                </div>
                              </div>
                            </a>
                            <a href="#!">
                              <div className="d-flex user-chat align-items-center my-2 pt-2 ps-1 rounded gap-1">
                                <div className="position-relative">
                                  <img
                                    src={avatar8}
                                    alt=""
                                    className="avatar-sm rounded-circle flex-shrink-0"
                                  />
                                </div>
                                <div className="d-block ms-2 flex-grow-1">
                                  <h5 className="text-dark fs-13 fw-semibold mb-0 lh-sm">
                                    afshint2y{" "}
                                    <span className="text-dark fw-normal">
                                      liked your photo{" "}
                                      <span className="text-muted">3m</span>
                                    </span>
                                  </h5>
                                </div>
                                <div className="avatar flex-shrink-0 ms-auto">
                                  <img
                                    src={image14}
                                    alt=""
                                    className="avatar-sm rounded-3 flex-shrink-0"
                                  />
                                </div>
                              </div>
                            </a>
                            <a href="#!">
                              <div className="d-flex user-chat align-items-center my-2 pt-2 ps-1 rounded">
                                <div className="position-relative">
                                  <img
                                    src={avatar9}
                                    alt=""
                                    className="avatar-sm rounded-circle flex-shrink-0"
                                  />
                                </div>
                                <div className="d-block ms-2 flex-grow-1">
                                  <h5 className="text-dark fs-13 fw-semibold mb-1 lh-sm">
                                    Anna Rice{" "}
                                    <span className="text-dark fw-normal">
                                      started following you.{" "}
                                      <span className="text-muted">4m</span>
                                    </span>
                                  </h5>
                                </div>
                                <div className="avatar-sm flex-shrink-0">
                                  <span className="avatar-title bg-primary-subtle text-primary fw-semibold fs-3 rounded-circle">
                                    <i className="bx bx-user-plus" />
                                  </span>
                                </div>
                              </div>
                            </a>
                            <a href="#!">
                              <div className="d-flex user-chat align-items-center my-2 pt-2 ps-1 rounded gap-1">
                                <div className="position-relative">
                                  <img
                                    src={avatar1}
                                    alt=""
                                    className="avatar-sm rounded-circle flex-shrink-0"
                                  />
                                </div>
                                <div className="d-block ms-2 flex-grow-1">
                                  <h5 className="text-dark fs-13 fw-semibold mb-0 lh-sm">
                                    sepide_moqadasi{" "}
                                    <span className="text-dark fw-normal">
                                      liked your photo{" "}
                                      <span className="text-muted">4m</span>
                                    </span>
                                  </h5>
                                </div>
                                <div className="avatar flex-shrink-0">
                                  <img
                                    src={image15}
                                    alt=""
                                    className="avatar-sm rounded-3 flex-shrink-0"
                                  />
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <a href="#!">
                              <img
                                src={avatar1}
                                alt=""
                                className="avatar rounded-circle flex-shrink-0"
                              />
                            </a>
                            <div>
                              <a
                                href="#!"
                                className="text-dark fw-semibold fs-5"
                              >
                                Gaston Lapierre{" "}
                              </a>
                              <p className="mt-1 mb-0 text-muted fs-12">
                                {" "}
                                20 May at 01:12 PM{" "}
                              </p>
                            </div>
                            <div className="ms-auto">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="dropdown-toggle arrow-none card-drop"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="bx bx-dots-horizontal-rounded fs-24" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-animated dropdown-menu-end shadow-sm">
                                  {/* item*/}
                                  <a
                                    href="javascript:void(0);"
                                    className="dropdown-item"
                                  >
                                    Edit Post
                                  </a>
                                  {/* item*/}
                                  <a
                                    href="javascript:void(0);"
                                    className="dropdown-item"
                                  >
                                    Delete Post
                                  </a>
                                  {/* item*/}
                                  <a
                                    href="javascript:void(0);"
                                    className="dropdown-item"
                                  >
                                    Share Post
                                  </a>
                                  {/* item*/}
                                  <a
                                    href="javascript:void(0);"
                                    className="dropdown-item"
                                  >
                                    Action
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="mb-0">
                            Hi, I am flying to Los Angeles to attend castings. I
                            hope it will happen and my dream comes true. Wish me
                            luck 👋👍
                          </p>
                          <div className="row mt-1 g-3">
                            <div className="col-lg-6">
                              <img
                                src={image15}
                                alt=""
                                className="img-fluid rounded"
                              />
                            </div>
                            <div className="col-lg-6">
                              <img
                                src={image16}
                                alt=""
                                className="img-fluid rounded"
                              />
                            </div>
                            <div className="col-lg-6">
                              <img
                                src={image12}
                                alt=""
                                className="img-fluid rounded"
                              />
                            </div>
                            <div className="col-lg-6">
                              <img
                                src={image13}
                                alt=""
                                className="img-fluid rounded"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="card-footer pt-0">
                          <div className="d-flex flex-wrap justify-content-between gap-3">
                            <div className="d-flex align-items-center gap-4">
                              <a
                                href="#!"
                                className="link-dark d-flex align-items-center gap-1 fw-medium"
                              >
                                <i className="ri-heart-fill text-danger fs-16" />{" "}
                                Love it
                              </a>
                              <a
                                href="#!"
                                className="link-dark d-flex align-items-center gap-1 fw-medium"
                              >
                                <i className="ri-chat-1-fill fs-16" /> Comment
                              </a>
                              <a
                                href="#!"
                                className="link-dark d-flex align-items-center gap-1 fw-medium"
                              >
                                <i className="ri-share-line fs-16" /> Share
                              </a>
                            </div>
                            <div className="d-flex flex-wrap align-items-center">
                              <p className="mb-0 fs-13">
                                4.5k People Love it, including
                              </p>
                              <div className="avatar-group ps-3">
                                <div className="avatar h-auto w-auto">
                                  <img
                                    src={avatar1}
                                    alt=""
                                    className="rounded-circle avatar-sm border border-light border-2"
                                  />
                                </div>
                                <div className="avatar h-auto w-auto">
                                  <img
                                    src={avatar2}
                                    alt=""
                                    className="rounded-circle avatar-sm border border-light border-2"
                                  />
                                </div>
                                <div className="avatar h-auto w-auto">
                                  <img
                                    src={avatar3}
                                    alt=""
                                    className="rounded-circle avatar-sm border border-light border-2"
                                  />
                                </div>
                                <div className="avatar h-auto w-auto">
                                  <img
                                    src={avatar4}
                                    alt=""
                                    className="rounded-circle avatar-sm border border-light border-2"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-sm-flex align-items-top my-3">
                            <img
                              src={avatar5}
                              alt=""
                              className="avatar-sm rounded-circle flex-shrink-0"
                            />
                            <div className="flex-grow-1 ms-sm-3">
                              <span className="">
                                <a
                                  href="#!"
                                  className="text-dark fw-semibold fs-13"
                                >
                                  Timothy Herby
                                </a>
                              </span>
                              <p className="text-muted mb-2 fs-12">
                                22 May at 05:40 AM
                              </p>
                              <p className="text-muted">
                                Even though we're aware the voices in our minds
                                aren't tangible, there are moments when their
                                suggestions are simply too compelling to
                                overlook.
                              </p>
                              <div className="d-flex gap-3 fs-14">
                                <a
                                  href="#!"
                                  className="d-flex align-items-center text-dark"
                                >
                                  <i className="ri-thumb-up-line fs-16 me-2" />{" "}
                                  Like
                                </a>
                                <a
                                  href="#!"
                                  className="d-flex align-items-center text-dark"
                                >
                                  <i className="ri-reply-line fs-16 me-2" />{" "}
                                  Reply
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center g-2 mt-3">
                            <div className="col-lg-10">
                              <div className="position-relative">
                                <input
                                  type="text"
                                  className="form-control bg-light ps-5 rounded"
                                  placeholder="Write your comment here"
                                />
                                <a
                                  href="#!"
                                  className="link-primary search-icon text-primary fs-22 align-middle translate-middle-y position-absolute top-50 start-0 ms-2"
                                >
                                  <i className="bx bx-smile" />
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <button
                                type="submit"
                                className="btn btn-primary chat-send d-inline-flex align-items-center justify-content-center gap-1"
                              >
                                {" "}
                                <i className="bx bx-send" />
                                Comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-body">
                          <div className="d-flex align-items-center gap-3 mb-3">
                            <a href="#!">
                              <img
                                src={avatar5}
                                alt=""
                                className="avatar rounded-circle flex-shrink-0"
                              />
                            </a>
                            <div>
                              <a
                                href="#!"
                                className="text-dark fw-semibold fs-5"
                              >
                                Amelia Johnson
                              </a>
                              <p className="mt-1 mb-0 text-muted fs-12">
                                15 March at 03:45 PM
                              </p>
                            </div>
                            <div className="ms-auto">
                              <div className="dropdown">
                                <a
                                  href="#"
                                  className="dropdown-toggle arrow-none card-drop"
                                  data-bs-toggle="dropdown"
                                  aria-expanded="false"
                                >
                                  <i className="bx bx-dots-horizontal-rounded fs-24" />
                                </a>
                                <div className="dropdown-menu dropdown-menu-animated dropdown-menu-end shadow-sm">
                                  <a
                                    href="javascript:void(0);"
                                    className="dropdown-item"
                                  >
                                    Edit Post
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="dropdown-item"
                                  >
                                    Delete Post
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="dropdown-item"
                                  >
                                    Share Post
                                  </a>
                                  <a
                                    href="javascript:void(0);"
                                    className="dropdown-item"
                                  >
                                    Action
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="mb-3">
                            Excited to explore Paris! Can't wait to capture some
                            amazing moments. Any recommendations? 😊📸
                          </p>
                          <img
                            src={profile}
                            alt=""
                            className="img-fluid rounded"
                          />
                        </div>
                        <div className="card-footer pt-0">
                          <div className="d-flex flex-wrap justify-content-between gap-3">
                            <div className="d-flex align-items-center gap-4">
                              <a
                                href="#!"
                                className="link-dark d-flex align-items-center gap-1 fw-medium"
                              >
                                <i className="ri-heart-fill text-danger fs-16" />{" "}
                                Love it
                              </a>
                              <a
                                href="#!"
                                className="link-dark d-flex align-items-center gap-1 fw-medium"
                              >
                                <i className="ri-chat-1-fill fs-16" /> Comment
                              </a>
                              <a
                                href="#!"
                                className="link-dark d-flex align-items-center gap-1 fw-medium"
                              >
                                <i className="ri-share-line fs-16" /> Share
                              </a>
                            </div>
                            <div className="d-flex flex-wrap align-items-center">
                              <p className="mb-0 fs-13">
                                7.2k People Love it, including
                              </p>
                              <div className="avatar-group ps-3">
                                <div className="avatar h-auto w-auto">
                                  <img
                                    src={avatar6}
                                    alt=""
                                    className="rounded-circle avatar-sm border border-light border-2"
                                  />
                                </div>
                                <div className="avatar h-auto w-auto">
                                  <img
                                    src={avatar7}
                                    alt=""
                                    className="rounded-circle avatar-sm border border-light border-2"
                                  />
                                </div>
                                <div className="avatar h-auto w-auto">
                                  <img
                                    src={avatar8}
                                    alt=""
                                    className="rounded-circle avatar-sm border border-light border-2"
                                  />
                                </div>
                                <div className="avatar h-auto w-auto">
                                  <img
                                    src={avatar9}
                                    alt=""
                                    className="rounded-circle avatar-sm border border-light border-2"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="d-sm-flex align-items-top my-3">
                            <img
                              src={avatar10}
                              alt=""
                              className="avatar-sm rounded-circle flex-shrink-0"
                            />
                            <div className="flex-grow-1 ms-sm-3">
                              <span className="">
                                <a
                                  href="#!"
                                  className="text-dark fw-semibold fs-13"
                                >
                                  David Carter
                                </a>
                              </span>
                              <p className="text-muted mb-2 fs-12">
                                16 March at 09:15 AM
                              </p>
                              <p className="text-muted">
                                Paris is beautiful! Be sure to check out
                                Montmartre and the Seine River at sunset. Safe
                                travels!
                              </p>
                              <div className="d-flex gap-3 fs-14">
                                <a
                                  href="#!"
                                  className="d-flex align-items-center text-dark"
                                >
                                  <i className="ri-thumb-up-line fs-16 me-2" />{" "}
                                  Like
                                </a>
                                <a
                                  href="#!"
                                  className="d-flex align-items-center text-dark"
                                >
                                  <i className="ri-reply-line fs-16 me-2" />{" "}
                                  Reply
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="row align-items-center g-2 mt-3">
                            <div className="col-lg-10">
                              <div className="position-relative">
                                <input
                                  type="text"
                                  className="form-control bg-light ps-5 rounded"
                                  placeholder="Write your comment here"
                                />
                                <a
                                  href="#!"
                                  className="link-primary search-icon text-primary fs-22 align-middle translate-middle-y position-absolute top-50 start-0 ms-2"
                                >
                                  <i className="bx bx-smile" />
                                </a>
                              </div>
                            </div>
                            <div className="col-lg-2">
                              <button
                                type="submit"
                                className="btn btn-primary chat-send d-inline-flex align-items-center justify-content-center gap-1"
                              >
                                <i className="bx bx-send" /> Comment
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                      <div className="card">
                        <div className="card-header">
                          <h4 className="card-title mb-0">People Associated</h4>
                        </div>
                        <div className="card-body">
                          <div className="border-bottom pb-3">
                            <div className="avatar-group">
                              <div className="avatar h-auto w-auto">
                                <img
                                  src={avatar1}
                                  alt=""
                                  className="rounded-circle avatar border border-light border-2"
                                />
                              </div>
                              <div className="avatar">
                                <span className="avatar-title bg-danger rounded-circle fw-semibold border border-light border-2">
                                  <i className="bx bxl-google fs-20" />
                                </span>
                              </div>
                            </div>
                            <h5 className="mt-3 mb-2 fw-semibold fs-14">
                              Gaston Lapierre
                            </h5>
                            <p className="mb-0">
                              Future Program Designer at{" "}
                              <a
                                href="#!"
                                className="link-primary fw-semibold text-decoration-underline"
                              >
                                Google
                              </a>
                            </p>
                          </div>
                          <div className="border-bottom py-3">
                            <div className="avatar-group">
                              <div className="avatar h-auto w-auto">
                                <img
                                  src={avatar4}
                                  alt=""
                                  className="rounded-circle avatar border border-light border-2"
                                />
                              </div>
                              <div className="avatar">
                                <span className="avatar-title bg-primary rounded-circle fw-semibold border border-light border-2">
                                  <i className="bx bxl-facebook fs-20" />
                                </span>
                              </div>
                            </div>
                            <h5 className="mt-3 mb-2 fw-semibold fs-14">
                              Jason P. Mona
                            </h5>
                            <p className="mb-0">
                              Dynamic Directives Architect at{" "}
                              <a
                                href="#!"
                                className="link-primary fw-semibold text-decoration-underline"
                              >
                                Facebook
                              </a>
                            </p>
                          </div>
                          <div className="border-bottom py-3">
                            <div className="avatar-group">
                              <div className="avatar h-auto w-auto">
                                <img
                                  src={avatar2}
                                  alt=""
                                  className="rounded-circle avatar border border-light border-2"
                                />
                              </div>
                              <div className="avatar">
                                <span className="avatar-title bg-dark rounded-circle fw-semibold border border-light border-2">
                                  <i className="bx bxl-github fs-20" />
                                </span>
                              </div>
                            </div>
                            <h5 className="mt-3 mb-2 fw-semibold fs-14">
                              Jerry R. Lee
                            </h5>
                            <p className="mb-0">
                              Lead Configuration Architect at{" "}
                              <a
                                href="#!"
                                className="link-primary fw-semibold text-decoration-underline"
                              >
                                GitHub
                              </a>
                            </p>
                          </div>
                          <div className="pt-3">
                            <div className="avatar-group">
                              <div className="avatar h-auto w-auto">
                                <img
                                  src={avatar3}
                                  alt=""
                                  className="rounded-circle avatar border border-light border-2"
                                />
                              </div>
                              <div className="avatar">
                                <span className="avatar-title bg-warning rounded-circle fw-semibold border border-light border-2">
                                  <i className="bx bxl-gitlab fs-20" />
                                </span>
                              </div>
                            </div>
                            <h5 className="mt-3 mb-2 fw-semibold fs-14">
                              Louise M. Jenkins
                            </h5>
                            <p className="mb-0">
                              Future Applications Consultant at{" "}
                              <a
                                href="#!"
                                className="link-primary fw-semibold text-decoration-underline"
                              >
                                Gitlab
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header">
                          <div className="d-flex">
                            <h4 className="card-title mb-0">
                              Friends{" "}
                              <span className="badge bg-primary-subtle fs-13 text-primary">
                                897
                              </span>
                            </h4>
                            <div className="ms-auto">
                              <a href="#!" className="text-muted fw-semibold">
                                See all
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="card-body">
                          <div className="">
                            <div className="row g-2">
                              <div className="col-lg-4">
                                <a href="#!">
                                  <img
                                    src={avatar2}
                                    alt=""
                                    className="img-fluid rounded"
                                  />
                                </a>
                              </div>
                              <div className="col-lg-4">
                                <a href="#!">
                                  <img
                                    src={avatar1}
                                    alt=""
                                    className="img-fluid rounded"
                                  />
                                </a>
                              </div>
                              <div className="col-lg-4">
                                <a href="#!">
                                  <img
                                    src={avatar4}
                                    alt=""
                                    className="img-fluid rounded"
                                  />
                                </a>
                              </div>
                              <div className="col-lg-4">
                                <a href="#!">
                                  <img
                                    src={avatar5}
                                    alt=""
                                    className="img-fluid rounded"
                                  />
                                </a>
                              </div>
                              <div className="col-lg-4">
                                <a href="#!">
                                  <img
                                    src={avatar6}
                                    alt=""
                                    className="img-fluid rounded"
                                  />
                                </a>
                              </div>
                              <div className="col-lg-4">
                                <a href="#!">
                                  <img
                                    src={avatar7}
                                    alt=""
                                    className="img-fluid rounded"
                                  />
                                </a>
                              </div>
                              <div className="col-lg-4">
                                <a href="#!">
                                  <img
                                    src={avatar8}
                                    alt=""
                                    className="img-fluid rounded"
                                  />
                                </a>
                              </div>
                              <div className="col-lg-4">
                                <a href="#!">
                                  <img
                                    src={avatar10}
                                    alt=""
                                    className="img-fluid rounded"
                                  />
                                </a>
                              </div>
                              <div className="col-lg-4">
                                <a href="#!">
                                  <img
                                    src={avatar9}
                                    alt=""
                                    className="img-fluid rounded"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane " id="profilePill">
                    <p className="mb-0"></p>
                  </div>
                  <div className="tab-pane" id="subscriptionPill">
                    <p className="mb-0"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Container xxl */}
        </div>
    <Footer/>
      </div>
    </div>
  );
};

export default Profile;
