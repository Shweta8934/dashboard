import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/SideBar'
import Footer from '../components/Footer'

const Pricing = () => {
  return (
    <div className="wrapper">
 <Navbar/>
 <Sidebar/>
  {/* Start right Content here */}
 
  <div className="page-container">
    {/* Start Container xxl */}
    <div className="container-xxl">
      <div className="row">
        <div className="col-12">
          <div className="text-center my-5">
            <h3 className="fw-bold mt-5">Flexible Pricing Plans</h3>
            <p className="text-muted text-center">
              Choose the perfect plan that fits your needs and scale your
              business effortlessly.
            </p>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-3">
              <div className="card card-pricing">
                <div className="card-body">
                  <h5 className="mt-0 mb-3 fs-14 text-uppercase fw-semibold">
                    Starter Pack
                  </h5>
                  <h2 className="mt-0 mb-3 fw-bold">
                    $5{" "}
                    <span className="fs-14 fw-medium text-muted">/ Month</span>
                  </h2>
                  <ul className="card-pricing-features text-muted border-top pt-2 mt-2 ps-0 list-unstyled">
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      10 GB Storage
                    </li>
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      200 GB Bandwidth
                    </li>
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      1 Domain
                    </li>
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      Email Support
                    </li>
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      1 User
                    </li>
                  </ul>
                  <div className="mt-4 text-center">
                    <button className="btn btn-primary px-sm-4 w-100">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card-pricing">
                <div className="card-body">
                  <div className="pricing-ribbon pricing-ribbon-primary float-end">
                    Best Value
                  </div>
                  <h5 className="mt-0 mb-3 fs-14 text-uppercase fw-semibold">
                    Growth Pack
                  </h5>
                  <h2 className="mt-0 mb-3 fw-bold">
                    $15{" "}
                    <span className="fs-14 fw-medium text-muted">/ Month</span>
                  </h2>
                  <ul className="card-pricing-features text-muted border-top pt-2 mt-2 ps-0 list-unstyled">
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      100 GB Storage
                    </li>
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      1 TB Bandwidth
                    </li>
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      5 Domains
                    </li>
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      Email &amp; Chat Support
                    </li>
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      10 Users
                    </li>
                  </ul>
                  <div className="mt-4 text-center">
                    <button className="btn btn-primary px-sm-4 disabled w-100">
                      Current Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card-pricing">
                <div className="card-body">
                  <h5 className="mt-0 mb-3 fs-14 text-uppercase fw-semibold">
                    Business Pack
                  </h5>
                  <h2 className="mt-0 mb-3 fw-bold">
                    $30{" "}
                    <span className="fs-14 fw-medium text-muted">/ Month</span>
                  </h2>
                  <ul className="card-pricing-features text-muted border-top pt-2 mt-2 ps-0 list-unstyled">
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      500 GB Storage
                    </li>
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      5 TB Bandwidth
                    </li>
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      10 Domains
                    </li>
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      Priority Support
                    </li>
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      25 Users
                    </li>
                  </ul>
                  <div className="mt-4 text-center">
                    <button className="btn btn-primary px-sm-4 w-100">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card card-pricing">
                <div className="card-body">
                  <h5 className="mt-0 mb-3 fs-14 text-uppercase fw-semibold">
                    Enterprise Pack
                  </h5>
                  <h2 className="mt-0 mb-3 fw-bold">
                    $50{" "}
                    <span className="fs-14 fw-medium text-muted">/ Month</span>
                  </h2>
                  <ul className="card-pricing-features text-muted border-top pt-2 mt-2 ps-0 list-unstyled">
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      Unlimited Storage
                    </li>
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      Unlimited Bandwidth
                    </li>
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      Unlimited Domains
                    </li>
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      Dedicated Support
                    </li>
                    <li className="text-dark">
                      <i className="bx bx-check-circle text-primary fs-15 me-1" />
                      Unlimited Users
                    </li>
                  </ul>
                  <div className="mt-4 text-center">
                    <button className="btn btn-primary px-sm-4 w-100">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <h3 className="fw-bold mt-5">FAQ</h3>
        <p className="text-muted text-center">
          Choose the perfect plan that fits your needs and scale your business
          effortlessly.
        </p>
      </div>
      <div className="row g-xl-4 mb-4">
        <div className="col-xl-6">
          {/* FAQs */}
          <div className="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq1"
                  aria-expanded="true"
                  aria-controls="faq1"
                >
                  Can I use Dummy FAQs for my website or project?
                </button>
              </h2>
              <div
                id="faq1"
                className="accordion-collapse collapse show"
                aria-labelledby="faq1"
              >
                <div className="accordion-body">
                  Yes, you can use Dummy FAQs to populate your website or
                  project during development or testing phases. They help
                  simulate the appearance and functionality of a real FAQ
                  section without requiring actual content.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-medium collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq2"
                  aria-expanded="false"
                  aria-controls="faq2"
                >
                  Are Dummy FAQs suitable for customer support purposes?
                </button>
              </h2>
              <div
                id="faq2"
                className="accordion-collapse collapse"
                aria-labelledby="faq2"
              >
                <div className="accordion-body">
                  While Dummy FAQs can be used internally for training customer
                  support teams, they are not suitable for public-facing
                  customer support. Real FAQs should be based on genuine
                  customer inquiries to provide accurate and helpful
                  information.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-medium collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq3"
                  aria-expanded="false"
                  aria-controls="faq3"
                >
                  Do Dummy FAQs require attribution?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse">
                <div className="accordion-body">
                  No, Dummy FAQs do not require attribution since they are not
                  based on real questions or contributed by individuals. You can
                  use them freely for internal testing or demonstration
                  purposes.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-6">
          {/* FAQs */}
          <div className="accordion">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-medium"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq7"
                  aria-expanded="true"
                  aria-controls="faq7"
                >
                  Can I test my website/app with Dummy Payments?
                </button>
              </h2>
              <div
                id="faq7"
                className="accordion-collapse collapse show"
                aria-labelledby="faq7"
              >
                <div className="accordion-body">
                  Yes, Dummy Payments are commonly used by developers and
                  businesses to test the functionality of e-commerce platforms,
                  mobile apps, and payment gateways. They help identify and
                  resolve issues without risking real transactions.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-medium collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq8"
                  aria-expanded="false"
                  aria-controls="faq8"
                >
                  Are Dummy Payments secure?
                </button>
              </h2>
              <div
                id="faq8"
                className="accordion-collapse collapse"
                aria-labelledby="faq8"
              >
                <div className="accordion-body">
                  Dummy Payments used in controlled environments for training or
                  demonstration purposes are generally secure. However, it's
                  crucial not to confuse them with real transactions and avoid
                  entering genuine financial information.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button fw-medium collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#faq9"
                  aria-expanded="false"
                  aria-controls="faq9"
                >
                  How can I differentiate between a Dummy Payment and a real
                  one?
                </button>
              </h2>
              <div id="faq9" className="accordion-collapse collapse">
                <div className="accordion-body">
                  Real payments involve the transfer of actual funds, resulting
                  in a change in financial balances. Dummy Payments, on the
                  other hand, do not involve any monetary exchange and are
                  typically labeled or indicated as test transactions. Always
                  verify the authenticity of transactions before proceeding with
                  any action.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* end row*/}
    </div>
    <Footer/>
  </div>
</div>

  )
}

export default Pricing
