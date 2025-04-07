
import React from "react";

const AddEditCategory = () => {
  return (
    <div className="wrapper">
      <div className="page-container">
        <div className="page-content">
          <div className="row">
            <div className="col-xl-6 col-lg-8">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Add Categories Photo</h4>
                </div>
                <div className="card-body">
                  <div className="dropzone bg-light-subtle py-5">
                    <div className="fallback">
                      <input name="file" type="file" multiple />
                    </div>
                    <div className="dz-message needsclick">
                      <i className="bx bx-cloud-upload fs-48 text-primary"></i>
                      <h3 className="mt-4">Drop your images here, or <span className="text-primary">click to browse</span></h3>
                      <span className="text-muted fs-13">
                        1600 x 1200 (4:3) recommended. PNG, JPG and GIF files are allowed
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-8">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">General Information</h4>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="category-name" className="form-label">Categories Name</label>
                        <input type="text" id="category-name" className="form-control" placeholder="Enter Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="crater" className="form-label">Categories Created By</label>
                        <select className="form-control" id="crater">
                          <option value="">Select Crater</option>
                          <option value="Seller">Seller</option>
                          <option value="Admin">Admin</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="product-stock" className="form-label">Stock</label>
                        <input type="number" id="product-stock" className="form-control" placeholder="Quantity" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="product-id" className="form-label">Typical Ingredients</label>
                        <input type="text" id="product-id" className="form-control" placeholder="Use Ingredients" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="mb-3">
                        <label htmlFor="product-price-range" className="form-label">Price Range</label>
                        <div className="formCost d-flex gap-2 align-items-center mt-2">
                          <input className="form-control form-control-sm text-center" type="text" id="minCost" defaultValue="0" />
                          <span className="fw-semibold text-muted">to</span>
                          <input className="form-control form-control-sm text-center" type="text" id="maxCost" defaultValue="1000" />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="mb-3">
                        <label htmlFor="status" className="form-label">Status</label>
                        <select className="form-control" id="status">
                          <option value="">Select status</option>
                          <option value="Active">Active</option>
                          <option value="Inactive">Inactive</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 mb-3 rounded">
                <div className="row justify-content-end g-2">
                  <div className="col-lg-3">
                    <button className="btn btn-outline-secondary w-100"><i className="ri-save-line"></i> Save Change</button>
                  </div>
                  <div className="col-lg-2">
                    <button className="btn btn-primary w-100"><i className="ri-close-circle-line"></i> Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                {new Date().getFullYear()} &copy; Metor. All rights reserved by FoxPixel
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AddEditCategory;
