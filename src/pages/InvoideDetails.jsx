import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import logoDark from "../assets/images/logo-dark.png";
import logoWhite from "../assets/images/logo-white.png"
import Footer from '../components/Footer';
const InvoideDetails = () => {
  return (
    <div className="wrapper">
       
  {/* Start Container Fluid */}
  <div className="page-content">
    <div className="row">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            {/* Logo & title */}
            <div className="clearfix">
              <div className="float-sm-end">
                <div className="auth-logo">
                  <img
                    className="logo-dark me-1"
                    src={logoDark}
                    alt="logo-dark"
                    height={24}
                  />
                  <img
                    className="logo-light me-1"
                    src={logoWhite}
                    alt="logo-dark"
                    height={24}
                  />
                </div>
                <address className="mt-3">
                  123 E-Commerce St,
                  <br />
                  New York, NY, 10001 <br />
                  <abbr title="Phone">P:</abbr> (212) 555-7890
                </address>
              </div>
              <div className="float-sm-start">
                <h5 className="card-title mb-2">Invoice: #EC20241234</h5>
                <p>20 Feb, 2025</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <h6 className="fw-normal text-muted">Customer</h6>
                <h6 className="fs-14 fw-bold"> Jessica Carter</h6>
                <address>
                  567 Market Ave,
                  <br />
                  Los Angeles, CA, 90012
                  <br />
                  <abbr title="Phone">P:</abbr> (310) 555-1234
                </address>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="table-responsive table-borderless text-nowrap mt-3 table-centered">
                  <table className="table mb-0">
                    <thead className="bg-light bg-opacity-50">
                      <tr>
                        <th className="border-0 py-2">Product Name</th>
                        <th className="border-0 py-2">Quantity</th>
                        <th className="border-0 py-2">Price</th>
                        <th className="text-end border-0 py-2">Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Wireless Bluetooth Earbuds</td>
                        <td>2</td>
                        <td>$79.99</td>
                        <td className="text-end">$159.98</td>
                      </tr>
                      <tr>
                        <td>Smartwatch Series 7</td>
                        <td>1</td>
                        <td>$299.99</td>
                        <td className="text-end">$299.99</td>
                      </tr>
                      <tr>
                        <td>4K Ultra HD Smart TV - 55"</td>
                        <td>1</td>
                        <td>$699.99</td>
                        <td className="text-end">$699.99</td>
                      </tr>
                      <tr>
                        <td>Gaming Keyboard RGB</td>
                        <td>3</td>
                        <td>$49.99</td>
                        <td className="text-end">$149.97</td>
                      </tr>
                      <tr>
                        <td>Wireless Charging Station</td>
                        <td>2</td>
                        <td>$39.99</td>
                        <td className="text-end">$79.98</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-sm-7">
                <div className="clearfix pt-xl-3 pt-0">
                  <h6 className="text-muted">Notes:</h6>
                  <small className="text-muted">
                    Payment is due within 7 days from the date of invoice.
                    Payments can be made via credit card, PayPal, or bank
                    transfer. Late payments may be subject to additional
                    charges.
                  </small>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="float-end">
                  <p>
                    <span className="fw-medium">Sub-total :</span>
                    <span className="float-end">$1389.91</span>
                  </p>
                  <p>
                    <span className="fw-medium">Discount (5%) :</span>
                    <span className="float-end">&nbsp;&nbsp;&nbsp; $69.50</span>
                  </p>
                  <h3>$1320.41 USD</h3>
                </div>
                <div className="clearfix" />
              </div>
            </div>
            <div className="mt-5 mb-1">
              <div className="text-end d-print-none">
                <a href="javascript:window.print()" className="btn btn-primary">
                  Print
                </a>
                <a
                  href="javascript:void(0);"
                  className="btn btn-outline-primary"
                >
                  Submit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end col */}
    </div>{" "}
    {/* end row */}
  </div>
  {/* End Container Fluid */}
<Footer/>
</div>

  )
}

export default InvoideDetails
