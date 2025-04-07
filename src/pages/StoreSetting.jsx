import React from "react";
import "../assets/css/app.min.css";
import "../assets/css/icons.min.css";
import "../assets/css/vendor.min.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import Footer from "../components/Footer";

const StoreSetting = () => {
  return (
    <div className="wrapper">
    <Navbar/>
   <Sidebar/>
      <div className="page-container">
        {/* Start Container Fluid */}
        <div className="page-content">
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Restaurant Settings</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="mb-3">
                        <p className="fw-medium mb-2">Upload Restaurant Logo</p>
                        <div className="profile-photo-edit w-50 auth-logo border bg-light-subtle p-2 rounded">
                          <input
                            id="profile-img-file-input"
                            type="file"
                            className="profile-img-file-input"
                          />
                          <label
                            htmlFor="profile-img-file-input"
                            className="profile-photo-edit px-4 py-2"
                          >
                            <img
                              src="assets/images/logo-dark.png"
                              className="logo-dark me-1"
                              alt="user-profile-image"
                              height={24}
                            />{" "}
                            <img
                              src="assets/images/logo-white.png"
                              className="logo-light me-1"
                              alt="user-profile-image"
                              height={24}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <form>
                        <div className="mb-3">
                          <label
                            htmlFor="restaurant-name"
                            className="form-label"
                          >
                            Restaurant Name
                          </label>
                          <input
                            type="text"
                            id="restaurant-name"
                            className="form-control"
                            placeholder="Enter name"
                            defaultValue="Admin"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-6">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="owner-name" className="form-label">
                            Restaurant Owner Full Name
                          </label>
                          <input
                            type="text"
                            id="owner-name"
                            className="form-control"
                            placeholder="Full name"
                            defaultValue="Randy P. Ralph"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="schedule-number" className="form-label">
                          Owner Phone number
                        </label>
                        <input
                          type="text"
                          id="schedule-number"
                          name="schedule-number"
                          className="form-control"
                          placeholder="Number"
                          defaultValue="+ 312-494-3321"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <form>
                        <div className="mb-3">
                          <label
                            htmlFor="schedule-email"
                            className="form-label"
                          >
                            Owner Email
                          </label>
                          <input
                            type="email"
                            id="schedule-email"
                            name="schedule-email"
                            className="form-control"
                            placeholder="Email"
                            defaultValue="randypralph@jourrapide.com"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label htmlFor="address" className="form-label">
                          Full Address
                        </label>
                        <textarea
                          className="form-control bg-light-subtle"
                          id="address"
                          rows={3}
                          placeholder="Type address"
                          defaultValue={"4822 West Drive Chicago, IL 60610"}
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="your-zipcode" className="form-label">
                            Zip-Code
                          </label>
                          <input
                            type="number"
                            id="your-zipcode"
                            className="form-control"
                            placeholder="zip-code"
                            defaultValue={60610}
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="choices-city" className="form-label">
                            City
                          </label>
                          <select
                            className="form-select"
                            id="choices-city"
                            data-choices=""
                            data-choices-groups=""
                            data-placeholder="Select City"
                            name="choices-city"
                          >
                            <option value="">Choose a city</option>
                            <optgroup label="UK">
                              <option value="London">London</option>
                              <option value="Manchester">Manchester</option>
                              <option value="Liverpool">Liverpool</option>
                            </optgroup>
                            <optgroup label="FR">
                              <option value="Paris">Paris</option>
                              <option value="Lyon">Lyon</option>
                              <option value="Marseille">Marseille</option>
                            </optgroup>
                            <optgroup label="DE" disabled="">
                              <option value="Hamburg">Hamburg</option>
                              <option value="Munich">Munich</option>
                              <option value="Berlin">Berlin</option>
                            </optgroup>
                            <optgroup label="US">
                              <option value="New York" selected="">
                                New York
                              </option>
                              <option value="Washington" disabled="">
                                Washington
                              </option>
                              <option value="Michigan">Michigan</option>
                            </optgroup>
                            <optgroup label="SP">
                              <option value="Madrid">Madrid</option>
                              <option value="Barcelona">Barcelona</option>
                              <option value="Malaga">Malaga</option>
                            </optgroup>
                            <optgroup label="CA">
                              <option value="Montreal">Montreal</option>
                              <option value="Toronto">Toronto</option>
                              <option value="Vancouver">Vancouver</option>
                            </optgroup>
                          </select>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-4">
                      <form>
                        <label htmlFor="choices-country" className="form-label">
                          Country
                        </label>
                        <select
                          className="form-control"
                          id="choices-country"
                          data-choices=""
                          data-choices-groups=""
                          data-placeholder="Select Country"
                          name="choices-country"
                        >
                          <option value="">Choose a country</option>
                          <optgroup label="">
                            <option value="">United Kingdom</option>
                            <option value="Fran">France</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="U.S.A" selected="">
                              U.S.A
                            </option>
                            <option value="Denmark">Denmark</option>
                            <option value="Canada">Canada</option>
                            <option value="Australia">Australia</option>
                            <option value="India">India</option>
                            <option value="Germany">Germany</option>
                            <option value="Spain">Spain</option>
                            <option value="United Arab Emirates">
                              United Arab Emirates
                            </option>
                          </optgroup>
                        </select>
                      </form>
                    </div>
                    <div className="col-lg-6">
                      <div className="">
                        <label htmlFor="from-time" className="form-label">
                          Restaurant Opening Time
                        </label>
                        <input
                          type="text"
                          id="preloading-timepicker"
                          className="form-control"
                          placeholder="Pick a time"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="">
                        <label htmlFor="to-time" className="form-label">
                          Restaurant Close Time
                        </label>
                        <input
                          type="text"
                          id="preloading-timepicker2"
                          className="form-control"
                          placeholder="Pick a time"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">General Settings</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-name" className="form-label">
                            Meta Title
                          </label>
                          <input
                            type="text"
                            id="meta-name"
                            className="form-control"
                            placeholder="Title"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-6">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="meta-tag" className="form-label">
                            Meta Tag Keyword
                          </label>
                          <input
                            type="text"
                            id="meta-tag"
                            className="form-control"
                            placeholder="Enter word"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-6">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="themes" className="form-label">
                            Restaurant Themes
                          </label>
                          <select
                            className="form-control"
                            id="themes"
                            data-choices=""
                            data-choices-groups=""
                            data-placeholder="Select Themes"
                          >
                            <option value="">Default</option>
                            <option value="Dark">Dark</option>
                            <option value="Minimalist" selected="">
                              Minimalist
                            </option>
                            <option value="High Contrast">High Contrast</option>
                          </select>
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-12">
                      <div className="">
                        <label htmlFor="description" className="form-label">
                          Description
                        </label>
                        <textarea
                          className="form-control bg-light-subtle"
                          id="description"
                          rows={4}
                          placeholder="Type description"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Social Settings</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="facebook-url" className="form-label">
                            Facebook URL
                          </label>
                          <input
                            type="url"
                            id="facebook-url"
                            className="form-control"
                            placeholder="Enter URL"
                            defaultValue="facebook.url"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="instagram-url" className="form-label">
                            Instagram URL
                          </label>
                          <input
                            type="url"
                            id="instagram-url"
                            className="form-control"
                            placeholder="Enter URL"
                            defaultValue="instagram.url"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-4">
                      <form>
                        <div className="mb-3">
                          <label htmlFor="twitter-url" className="form-label">
                            Twitter URL
                          </label>
                          <input
                            type="url"
                            id="twitter-url"
                            className="form-control"
                            placeholder="Enter URL"
                            defaultValue="twitter.url"
                          />
                        </div>
                      </form>
                    </div>
                    <div className="col-lg-6">
                      <form>
                        <div className="mb-2">
                          <label htmlFor="website-url" className="form-label">
                            Website URL
                          </label>
                          <input
                            type="url"
                            id="website-url"
                            className="form-control"
                            placeholder="Enter URL"
                            defaultValue="website.url"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Customer Settings</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="form-group mb-3">
                        <p className="fw-medium mb-2">Customers Online</p>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="customersOnline"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customersOnline"
                          >
                            Yes
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group mb-3">
                        <p className="fw-medium mb-2">Customers Activity</p>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="customersActivity"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customersActivity"
                          >
                            Yes
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group mb-3">
                        <p className="fw-medium mb-2">Customer Searches</p>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="customerSearches"
                            defaultChecked=""
                          />
                          <label
                            className="form-check-label"
                            htmlFor="customerSearches"
                          >
                            Yes
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <p className="fw-medium mb-2">Allow Guest Checkout</p>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="guestCheckout"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="guestCheckout"
                          >
                            Yes
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="form-group">
                        <p className="fw-medium mb-2">Login Display Price</p>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="loginDisplayPrice"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="loginDisplayPrice"
                          >
                            Yes
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Categories Settings</h4>
                </div>
                <div className="card-body">
                  <div className="form-group mb-3">
                    <p className="fw-medium mb-2">Category Product Count</p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="categoryProductCount"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="categoryProductCount"
                      >
                        Yes
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <form>
                      <div className="">
                        <label htmlFor="items-par-page" className="form-label">
                          Default Items Per Page
                        </label>
                        <input
                          type="number"
                          id="items-par-page"
                          className="form-control"
                          placeholder="000"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title mb-0">Reviews Settings</h4>
                </div>
                <div className="card-body">
                  <div className="form-group mb-3">
                    <p className="fw-medium mb-2">Allow Reviews</p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="allowReviews"
                        defaultChecked=""
                      />
                      <label
                        className="form-check-label"
                        htmlFor="allowReviews"
                      >
                        Yes
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <p className="fw-medium mb-2">Allow Guest Reviews</p>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gaustReviews"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="gaustReviews"
                      >
                        Yes
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Page Content */}
     <Footer/>
      </div>
    </div>
  );
};

export default StoreSetting;
