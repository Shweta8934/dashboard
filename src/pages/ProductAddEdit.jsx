import React from 'react'
import Sidebar from '../components/SideBar'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ProductAddEdit = () => {
  return (
    <div className="wrapper">
        <Navbar/>
        <Sidebar/>
  <div className="page-container">
    {/* Start Container Fluid */}
    <div className="page-content">
      <div className="row">
        <div className="col-xl-6 col-lg-8">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Add Product Photo</h4>
            </div>
            <div className="card-body">
              <div className="dropzone bg-light-subtle py-5">
                <div className="fallback">
                  <input name="file" type="file" multiple="multiple" />
                </div>
                <div className="dz-message needsclick">
                  <i className="bx bx-cloud-upload fs-48 text-primary" />
                  <h3 className="mt-4">Drop your images here, or <span className="text-primary">click to browse</span></h3>
                  <span className="text-muted fs-13">
                    1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed
                  </span>
                </div>
              </div>
              <ul className="list-unstyled mb-0" id="dropzone-preview">
                <li className="mt-2" id="dropzone-preview-list">
                  {/* This is used as the file preview template */}
                  <div className="border rounded">
                    <div className="d-flex p-2">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar-sm bg-light rounded">
                          <img data-dz-thumbnail className="img-fluid rounded d-block" src="#" alt="Dropzone-Image" />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <div className="pt-1">
                          <h5 className="fs-14 mb-1" data-dz-name>&amp;</h5>
                          <p className="fs-13 text-muted mb-0" data-dz-size />
                          <strong className="error text-primary" data-dz-errormessage />
                        </div>
                      </div>
                      <div className="flex-shrink-0 ms-3">
                        <button data-dz-remove className="btn btn-sm btn-primary">Delete</button>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              {/* end dropzon-preview */}
            </div>
          </div>
        </div>
        <div className="col-xl-6 col-lg-8">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">General Information</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-6">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="product-name" className="form-label">Product Name</label>
                      <input type="text" id="product-name" className="form-control" placeholder="Enter Name" defaultValue />
                    </div>
                  </form>
                </div>
                <div className="col-lg-6">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="crater" className="form-label">Categories Created By</label>
                      <select className="form-control" id="crater" data-choices data-choices-groups data-placeholder="Select Crater">
                        <option value>Select Crater</option>
                        <option value="Seller">Seller</option>
                        <option value="Admin">Admin</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </form>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control bg-light-subtle" id="description" rows={5} placeholder="Type description" defaultValue={""} />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="mb-3">
                    <label htmlFor="ingredients" className="form-label"> Ingredients</label>
                    <textarea className="form-control bg-light-subtle" id="ingredients" rows={5} placeholder="Type Ingredients Name" defaultValue={""} />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="mb-3">
                    <label htmlFor="product-id" className="form-label">Price Range</label>
                    <div id="product-price-range"  className="my-3" />
                    <div className="formCost d-flex gap-2 align-items-center mt-2">
                      <input className="form-control form-control-sm text-center" type="text" id="minCost" defaultValue={13} />
                      <span className="fw-semibold text-muted">to</span>
                      <input className="form-control form-control-sm text-center" type="text" id="maxCost" defaultValue={30} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="cuisine-type" className="form-label">Cuisine Type</label>
                      <input type="text" id="cuisine-type" className="form-control" placeholder="Enter Type" defaultValue />
                    </div>
                  </form>
                </div>
                <div className="col-lg-6">
                  <form>
                    <div className="mb-3">
                      <label htmlFor="food-type" className="form-label">Food Type</label>
                      <select className="form-control" id="food-type" data-choices data-choices-groups data-placeholder="Select Food-type">
                        <option value>Select Food Type</option>
                        <option value="Veg">Veg</option>
                        <option value="Non-vag">Non-veg</option>                                                             
                      </select>
                    </div>
                  </form>
                </div>
                <div className="col-lg-6">
                  <form>
                    <div className>
                      <label htmlFor="rating" className="form-label mb-2">Rating</label>
                      <div>
                        <div id="rater-message" dir="ltr" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="p-3 mb-3 rounded">
            <div className="row justify-content-end g-2">
              <div className="col-lg-3">
                <a href="#!" className="btn btn-outline-secondary w-100"><i className="ri-save-line" /> Save Change</a>
              </div>
              <div className="col-lg-2">
                <a href="#!" className="btn btn-primary w-100"><i className="ri-close-circle-line" /> Cancel</a>
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
  )
}

export default ProductAddEdit
