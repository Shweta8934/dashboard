import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import c2 from "../assets/images/food-icon/c-2.png";
import c6 from "../assets/images/food-icon/c-6.png";
import c5 from "../assets/images/food-icon/c-5.png";
import c9 from "../assets/images/food-icon/c-9.png";
import pic12 from "../assets/images/food-icon/pic12.png";
import pic13 from "../assets/images/food-icon/pic13.png";
import pic14 from "../assets/images/food-icon/pic14.png";
import pic15 from "../assets/images/food-icon/pic15.png";
import pic16 from "../assets/images/food-icon/pic16.png";
import pic17 from "../assets/images/food-icon/pic17.png";
import pic18 from "../assets/images/food-icon/pic18.png";
import Footer from '../components/Footer';

const ProductListing = () => {
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
              <div className="card card-full-height">
                <div className="card-body ">
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={c2}
                      alt=""
                      className="img-fluid"
                    />
                    <div>
                      <a href="#!" className="fw-bold text-dark fs-15">
                        Starter Course
                      </a>
                      <p>23 Items Available</p>
                      <span className="text-success me-1">
                        <i className="ri-circle-fill fs-10" /> Veg
                      </span>
                      <span className="text-danger ms-1">
                        <i className="ri-circle-fill fs-10" /> Non Veg
                      </span>
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
                      src={c5}
                      alt=""
                      className="img-fluid"
                    />
                    <div>
                      <a href="#!" className="fw-bold text-dark fs-15">
                        Main Course
                      </a>
                      <p>20 Items Available</p>
                      <span className="text-success me-1">
                        <i className="ri-circle-fill fs-10" /> Veg
                      </span>
                      <span className="text-danger ms-1">
                        <i className="ri-circle-fill fs-10" /> Non Veg
                      </span>
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
                      src={c9}
                      alt=""
                      className="img-fluid"
                    />
                    <div>
                      <a href="#!" className="fw-bold text-dark fs-15">
                        Coldrinks
                      </a>
                      <p> 18 Items Available</p>
                      <span className="text-success me-1">
                        <i className="ri-circle-fill fs-10" /> Veg
                      </span>
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
                      src={c6}
                      alt=""
                      className="img-fluid"
                    />
                    <div>
                      <a href="#!" className="fw-bold text-dark fs-15">
                        Sweet Desserts
                      </a>
                      <p>30 Items Available</p>
                      <span className="text-success me-1">
                        <i className="ri-circle-fill fs-10" /> Veg
                      </span>
                      <span className="text-danger ms-1">
                        <i className="ri-circle-fill fs-10" /> Non Veg
                      </span>
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
                    <p className="card-title mb-0">Menu Products</p>
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
                      <thead className="bg-light-subtle fs-12 text-uppercase">
                        <tr>
                          <th className="py-2">Photo</th>
                          <th className="py-2">Product Name</th>
                          <th className="w-25 py-2">Description</th>
                          <th className="w-25 py-2">Ingredients</th>
                          <th className="py-2">Price</th>
                          <th className="py-2">Rating</th>
                          <th className="py-2">Cuisine Type</th>
                          <th className="py-2">Food Type</th>
                          <th className="py-2">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <a href="assets/images/food-icon/pic12.png">
                              <img
                                src={pic12}
                                alt=""
                                className="avatar-lg"
                              />
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <div>
                                <a
                                  href="#!"
                                  className="link-dark fw-semibold fs-15"
                                >
                                  Italian Burata Pizza
                                </a>
                                <p className="mb-0 mt-1">12-Inch</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            Pizza is a traditional Italian dish typically
                            consisting of a flat base of...{" "}
                          </td>
                          <td>
                            Mushrooms , Bell Peppers , Onions , Italian Sausage ,
                            Olives , Fresh Basil , Fresh Mozzarella...
                          </td>
                          <td>$12.00</td>
                          <td>
                            <p className="mb-0">
                              <i className="ri-star-fill text-warning me-1 fs-16" />
                              4.3/5
                            </p>
                          </td>
                          <td>Italian</td>
                          <td>
                            <div className="avatar-sm">
                              <span className="avatar-title rounded-2 fw-semibold border border-danger text-danger">
                                <i className="ri-circle-fill fs-16" />
                              </span>
                            </div>
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
                          <td>
                            <a href="assets/images/food-icon/pic13.png">
                              <img
                                src={pic13}
                                alt=""
                                className="avatar-lg"
                              />
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <div>
                                <a
                                  href="#!"
                                  className="link-dark fw-semibold fs-15"
                                >
                                  Shanghai Noodles
                                </a>
                                <p className="mb-0 mt-1">Large bowl</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            Shanghai noodles are a specific type of noodle that
                            are a wheat flour...
                          </td>
                          <td>
                            Green Onions , Sesame Seeds , Soy Sauce , Sesame Oil ,
                            Cilantro , Chili Oil or Sriracha , Bean Sprouts...
                          </td>
                          <td>$13.00</td>
                          <td>
                            <p className="mb-0">
                              <i className="ri-star-fill text-warning me-1 fs-16" />
                              4.1/5
                            </p>
                          </td>
                          <td>Thai</td>
                          <td>
                            <div className="avatar-sm">
                              <span className="avatar-title rounded-2 fw-semibold border border-success text-success">
                                <i className="ri-circle-fill fs-16" />
                              </span>
                            </div>
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
                          <td>
                            <a href="assets/images/food-icon/pic14.png">
                              <img
                                src={pic14}
                                alt=""
                                className="avatar-lg"
                              />
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <div>
                                <a
                                  href="#!"
                                  className="link-dark fw-semibold fs-15"
                                >
                                  Gourmet Burger
                                </a>
                                <p className="mb-0 mt-1">-</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            A burger is a patty of ground meat grilled and placed
                            between two...
                          </td>
                          <td>
                            Lettuce , Tomato , Onion , Avocado , Roasted Bell
                            Peppers , Mushrooms , Sprouts or Micrograms ,
                            Coleslaw...
                          </td>
                          <td>$14.00</td>
                          <td>
                            <p className="mb-0">
                              <i className="ri-star-fill text-warning me-1 fs-16" />
                              4.5/5
                            </p>
                          </td>
                          <td>Hamburger</td>
                          <td>
                            <div className="avatar-sm">
                              <span className="avatar-title rounded-2 fw-semibold border border-success text-success">
                                <i className="ri-circle-fill fs-16" />
                              </span>
                            </div>
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
                          <td>
                            <a href="assets/images/food-icon/pic15.png">
                              <img
                                src={pic15}
                                alt=""
                                className="avatar-lg"
                              />
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <div>
                                <a
                                  href="#!"
                                  className="link-dark fw-semibold fs-15"
                                >
                                  Meat Tacos
                                </a>
                                <p className="mb-0 mt-1">3 tacos</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            Tacos, an popular hand-sized food item of Mexican
                            origin combining...
                          </td>
                          <td>
                            Ground Meat , Shredded Lettuce , Diced Tomatoes ,
                            Shredded Cheese , Vegetables...
                          </td>
                          <td>$15.00</td>
                          <td>
                            <p className="mb-0">
                              <i className="ri-star-fill text-warning me-1 fs-16" />
                              4.3/5
                            </p>
                          </td>
                          <td>Mexican</td>
                          <td>
                            <div className="avatar-sm">
                              <span className="avatar-title rounded-2 fw-semibold border border-danger text-danger">
                                <i className="ri-circle-fill fs-16" />
                              </span>
                            </div>
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
                          <td>
                            <a href="assets/images/food-icon/pic16.png">
                              <img
                                src={pic16}
                                alt=""
                                className="avatar-lg"
                              />
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <div>
                                <a
                                  href="#!"
                                  className="link-dark fw-semibold fs-15"
                                >
                                  Spaghetti{" "}
                                </a>
                                <p className="mb-0 mt-1">Large bowl</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            Spaghetti is a long, thin, solid, cylindrical pasta.
                            It is a staple food ...
                          </td>
                          <td>
                            Spaghetti , Garlic , Onion , Zucchini , Mushrooms ,
                            Italian Seasoning , Cheddar cheese...
                          </td>
                          <td>$13.00</td>
                          <td>
                            <p className="mb-0">
                              <i className="ri-star-fill text-warning me-1 fs-16" />
                              4.2/5
                            </p>
                          </td>
                          <td>Italian</td>
                          <td>
                            <div className="avatar-sm">
                              <span className="avatar-title rounded-2 fw-semibold border border-success text-success">
                                <i className="ri-circle-fill fs-16" />
                              </span>
                            </div>
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
                          <td>
                            <a href="assets/images/food-icon/pic17.png">
                              <img
                                src={pic17}
                                alt=""
                                className="avatar-lg"
                              />
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center gap-1">
                              <div>
                                <a
                                  href="#!"
                                  className="link-dark fw-semibold fs-15"
                                >
                                  Chocolate Lava Cake{" "}
                                </a>
                                <p className="mb-0 mt-1">Single</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            Spaghetti is a long, thin, solid, cylindrical pasta.
                            It is a staple food ...
                          </td>
                          <td>Chocolate, Flour, Eggs , Milk...</td>
                          <td>$10.00</td>
                          <td>
                            <p className="mb-0">
                              <i className="ri-star-fill text-warning me-1 fs-16" />
                              4.2/5
                            </p>
                          </td>
                          <td>Global</td>
                          <td>
                            <div className="avatar-sm">
                              <span className="avatar-title rounded-2 fw-semibold border border-danger text-danger">
                                <i className="ri-circle-fill fs-16" />
                              </span>
                            </div>
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
                          <td>
                            <a href="assets/images/food-icon/pic18.png">
                              <img
                                src={pic18}
                                alt=""
                                className="avatar-lg rounded-circle border border-light border-5"
                              />
                            </a>
                          </td>
                          <td>
                            <div className="d-flex align-items-center gap-2">
                              <div>
                                <a
                                  href="#!"
                                  className="link-dark fw-semibold fs-15"
                                >
                                  Cocktail
                                </a>
                                <p className="mb-0 mt-1">300 ML</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            A cocktail is any beverage that mixes one or more
                            alcoholic drinks and other flavors ...
                          </td>
                          <td>
                            White Rum , Fresh Lime Juice , Fresh Mint Leaves , Ice
                            ...
                          </td>
                          <td>$21.00</td>
                          <td>
                            <p className="mb-0">
                              <i className="ri-star-fill text-warning me-1 fs-16" />
                              4.5/5
                            </p>
                          </td>
                          <td>Global</td>
                          <td>
                            <div className="avatar-sm">
                              <span className="avatar-title rounded-2 fw-semibold border border-success text-success">
                                <i className="ri-circle-fill fs-16" />
                              </span>
                            </div>
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

export default ProductListing
