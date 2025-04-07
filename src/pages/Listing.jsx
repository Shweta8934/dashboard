import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import c1 from "../assets/images/food-icon/c-1.png";
import c2 from "../assets/images/food-icon/c-2.png"
import c3 from "../assets/images/food-icon/c-3.png"
import c4 from "../assets/images/food-icon/c-4.png"
import c5 from "../assets/images/food-icon/c-5.png"
import c6 from "../assets/images/food-icon/c-6.png"
import Footer from '../components/Footer';
const Listing = () => {
  return (
    <>
    {/* START Wrapper */}
    <div className="wrapper">
        <Navbar/>
        <Sidebar/>
      <div className="page-container">
        {/* Start Container Fluid */}
        <div className="page-content">
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="card">
                <div className="card-body ">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={c1}
                      alt=""
                      className="img-fluid"
                    />
                    <div>
                      <a href="#!" className="fw-semibold text-dark fs-18">
                        Caesar Salad
                      </a>
                      <p className="mb-0">Green Salad</p>
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
                      src={c2}
                      alt=""
                      className="img-fluid"
                    />
                    <div>
                      <a href="#!" className="fw-semibold text-dark fs-18">
                        Dimsums
                      </a>
                      <p className="mb-0">Delicious and Spicy</p>
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
                      src={c3}
                      alt=""
                      className="img-fluid"
                    />
                    <div>
                      <a href="#!" className="fw-semibold text-dark fs-18">
                        Pasta
                      </a>
                      <p className="mb-0"> Creamy Garlic Pasta</p>
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
                      src={c4}
                      alt=""
                      className="img-fluid"
                    />
                    <div>
                      <a href="#!" className="fw-semibold text-dark fs-18">
                        Curry Tofu
                      </a>
                      <p className="mb-0">Delicious and Spicy</p>
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
                      src={c5}
                      alt=""
                      className="img-fluid"
                    />
                    <div>
                      <a href="#!" className="fw-semibold text-dark fs-18">
                        Burrata Rice
                      </a>
                      <p className="mb-0">Tangy And Spicy</p>
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
                      src={c6}
                      alt=""
                      className="img-fluid"
                    />
                    <div>
                      <a href="#!" className="fw-semibold text-dark fs-18">
                        Pancake Stack
                      </a>
                      <p className="mb-0">Sweet Cake</p>
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
                      src="assets/images/food-icon/c-7.png"
                      alt=""
                      className="img-fluid"
                    />
                    <div>
                      <a href="#!" className="fw-semibold text-dark fs-18">
                        Italian Pizza
                      </a>
                      <p className="mb-0">Delicious and Spicy</p>
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
                      src="assets/images/food-icon/c-8.png"
                      alt=""
                      className="img-fluid"
                    />
                    <div>
                      <a href="#!" className="fw-semibold text-dark fs-18">
                        Burger
                      </a>
                      <p className="mb-0">Cheese Burger</p>
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
                    <p className="card-title mb-0">Total Categories</p>
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
                <div className="">
                  <div className="table-responsive">
                    <table className="table align-middle mb-0 table-hover table-centered">
                      <thead className="bg-light-subtle">
                        <tr>
                          <th>Categories ID</th>
                          <th>Categories Photo</th>
                          <th>Categories Name</th>
                          <th>Price Range</th>
                          <th>Typical Ingredients</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>#CAT-001</td>
                          <td>
                            <img src="assets/images/food-icon/pic1.png" alt="" />
                          </td>
                          <td>
                            <a
                              href="#!"
                              className="fw-semibold link-primary fs-15"
                            >
                              Burger
                            </a>
                          </td>
                          <td> $13.00 to $30.00</td>
                          <td>Cheese, Vegetables</td>
                          <td>
                            {" "}
                            <span className="badge bg-success-subtle border border-success text-success  px-2 py-1 fs-11">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-3">
                              <a href="#!" className="text-muted">
                                <i className="ri-eye-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-dark">
                                <i className="ri-edit-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-danger">
                                <i className="ri-delete-bin-5-line align-middle fs-20" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#CAT-002</td>
                          <td>
                            <img src="assets/images/food-icon/pic2.png" alt="" />
                          </td>
                          <td>
                            <a
                              href="#!"
                              className="fw-semibold link-primary fs-15"
                            >
                              Green Salads
                            </a>
                          </td>
                          <td> $9.00 to $18.00</td>
                          <td>Lettuce, Tomatoes</td>
                          <td>
                            {" "}
                            <span className="badge bg-success-subtle border border-success text-success  px-2 py-1 fs-11">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-3">
                              <a href="#!" className="text-muted">
                                <i className="ri-eye-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-dark">
                                <i className="ri-edit-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-danger">
                                <i className="ri-delete-bin-5-line align-middle fs-20" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#CAT-003</td>
                          <td>
                            <img src="assets/images/food-icon/pic3.png" alt="" />
                          </td>
                          <td>
                            <a
                              href="#!"
                              className="fw-semibold link-primary fs-15"
                            >
                              Dimsums
                            </a>
                          </td>
                          <td> $13.00 to $20.00</td>
                          <td>Lettuce, Onion , Tofu</td>
                          <td>
                            {" "}
                            <span className="badge bg-success-subtle border border-success text-success  px-2 py-1 fs-11">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-3">
                              <a href="#!" className="text-muted">
                                <i className="ri-eye-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-dark">
                                <i className="ri-edit-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-danger">
                                <i className="ri-delete-bin-5-line align-middle fs-20" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#CAT-004</td>
                          <td>
                            <img src="assets/images/food-icon/pic4.png" alt="" />
                          </td>
                          <td>
                            <a
                              href="#!"
                              className="fw-semibold link-primary fs-15"
                            >
                              Pasta &amp; Spaghetti
                            </a>
                          </td>
                          <td> $14.00 to $25.00</td>
                          <td>Cheese, Tomatoes , Souse</td>
                          <td>
                            {" "}
                            <span className="badge bg-success-subtle border border-success text-success  px-2 py-1 fs-11">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-3">
                              <a href="#!" className="text-muted">
                                <i className="ri-eye-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-dark">
                                <i className="ri-edit-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-danger">
                                <i className="ri-delete-bin-5-line align-middle fs-20" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#CAT-005</td>
                          <td>
                            <img src="assets/images/food-icon/pic5.png" alt="" />
                          </td>
                          <td>
                            <a
                              href="#!"
                              className="fw-semibold link-primary fs-15"
                            >
                              Veg Meals
                            </a>
                          </td>
                          <td> $11.00 to $30.00</td>
                          <td>Tangy Curry , Tofu Or Panner</td>
                          <td>
                            {" "}
                            <span className="badge bg-success-subtle border border-success text-success  px-2 py-1 fs-11">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-3">
                              <a href="#!" className="text-muted">
                                <i className="ri-eye-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-dark">
                                <i className="ri-edit-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-danger">
                                <i className="ri-delete-bin-5-line align-middle fs-20" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#CAT-006</td>
                          <td>
                            <img src="assets/images/food-icon/pic6.png" alt="" />
                          </td>
                          <td>
                            <a
                              href="#!"
                              className="fw-semibold link-primary fs-15"
                            >
                              Rice Bowl
                            </a>
                          </td>
                          <td> $8.00 to $16.00</td>
                          <td>Tangy Curry , Rice</td>
                          <td>
                            {" "}
                            <span className="badge bg-success-subtle border border-success text-success  px-2 py-1 fs-11">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-3">
                              <a href="#!" className="text-muted">
                                <i className="ri-eye-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-dark">
                                <i className="ri-edit-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-danger">
                                <i className="ri-delete-bin-5-line align-middle fs-20" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#CAT-007</td>
                          <td>
                            <img src="assets/images/food-icon/pic7.png" alt="" />
                          </td>
                          <td>
                            <a
                              href="#!"
                              className="fw-semibold link-primary fs-15"
                            >
                              Tangy Meals
                            </a>
                          </td>
                          <td> $10.00 to $20.00</td>
                          <td>Tomatoes , Lemonade Flavour</td>
                          <td>
                            {" "}
                            <span className="badge bg-success-subtle border border-success text-success  px-2 py-1 fs-11">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-3">
                              <a href="#!" className="text-muted">
                                <i className="ri-eye-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-dark">
                                <i className="ri-edit-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-danger">
                                <i className="ri-delete-bin-5-line align-middle fs-20" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#CAT-008</td>
                          <td>
                            <img src="assets/images/food-icon/pic8.png" alt="" />
                          </td>
                          <td>
                            <a
                              href="#!"
                              className="fw-semibold link-primary fs-15"
                            >
                              Stater Meals
                            </a>
                          </td>
                          <td> $14.00 to $30.00</td>
                          <td>Mlk , Tomatoes Flavour</td>
                          <td>
                            {" "}
                            <span className="badge bg-success-subtle border border-success text-success  px-2 py-1 fs-11">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-3">
                              <a href="#!" className="text-muted">
                                <i className="ri-eye-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-dark">
                                <i className="ri-edit-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-danger">
                                <i className="ri-delete-bin-5-line align-middle fs-20" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#CAT-009</td>
                          <td>
                            <img src="assets/images/food-icon/pic9.png" alt="" />
                          </td>
                          <td>
                            <a
                              href="#!"
                              className="fw-semibold link-primary fs-15"
                            >
                              Italian Pizza
                            </a>
                          </td>
                          <td> $12.00 to $21.00</td>
                          <td>Cheese , Souse , Olive Oil</td>
                          <td>
                            {" "}
                            <span className="badge bg-success-subtle border border-success text-success  px-2 py-1 fs-11">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-3">
                              <a href="#!" className="text-muted">
                                <i className="ri-eye-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-dark">
                                <i className="ri-edit-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-danger">
                                <i className="ri-delete-bin-5-line align-middle fs-20" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#CAT-010</td>
                          <td>
                            <img src="assets/images/food-icon/pic10.png" alt="" />
                          </td>
                          <td>
                            <a
                              href="#!"
                              className="fw-semibold link-primary fs-15"
                            >
                              Sweet Dessert
                            </a>
                          </td>
                          <td> $11.00 to $28.00</td>
                          <td>Honey , Chocolate , Milk</td>
                          <td>
                            {" "}
                            <span className="badge bg-success-subtle border border-success text-success  px-2 py-1 fs-11">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-3">
                              <a href="#!" className="text-muted">
                                <i className="ri-eye-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-dark">
                                <i className="ri-edit-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-danger">
                                <i className="ri-delete-bin-5-line align-middle fs-20" />
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>#CAT-011</td>
                          <td>
                            <img src="assets/images/food-icon/pic11.png" alt="" />
                          </td>
                          <td>
                            <a
                              href="#!"
                              className="fw-semibold link-primary fs-15"
                            >
                              Beverages Section
                            </a>
                          </td>
                          <td> $20.00 to $40.00</td>
                          <td>Coffee beans, Alcohol</td>
                          <td>
                            {" "}
                            <span className="badge bg-success-subtle border border-success text-success  px-2 py-1 fs-11">
                              Active
                            </span>
                          </td>
                          <td>
                            <div className="d-flex gap-3">
                              <a href="#!" className="text-muted">
                                <i className="ri-eye-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-dark">
                                <i className="ri-edit-line align-middle fs-20" />
                              </a>
                              <a href="#!" className="link-danger">
                                <i className="ri-delete-bin-5-line align-middle fs-20" />
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* end table-responsive */}
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
      {/* END Wrapper */}
    </div>
  </>
  
  )
}

export default Listing;
