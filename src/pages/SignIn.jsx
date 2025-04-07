// import React from 'react'
// import logoDark from "../assets/images/logo-dark.png"
// const SignIn = () => {
//   return (
//   <div 
//     className="h-screen w-screen flex justify-center items-center"
//     style={{ background: "linear-gradient(to top, #5e5d83 0%, #597e87 100%)" }}
//   >
//       <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5" style={{ width: "1400px", margin: "0 auto" }}>
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-xl-5">
//             <div className="card auth-card">
//               <div className="card-body">
//                 <div className="p-3">
//                   <div className="mx-auto mb-5 auth-logo text-center">
//                     <a href="index-2.html" className="logo-dark">
//                       <img
//                         src={logoDark}
//                         height={30}
//                         alt="logo dark"
//                       />
//                     </a>
//                     <a href="index-2.html" className="logo-light">
//                       <img
//                         src="assets/images/logo-white.png"
//                         height={30}
//                         alt="logo light"
//                       />
//                     </a>
//                   </div>
//                   <div className="text-center">
//                     <h3 className="fw-bold text-dark fs-20">Hi , Sign Up 👋 </h3>
//                     <p className="text-muted mt-1 mb-4">
//                       New to our platform? Sign up now! It only takes a minute.
//                     </p>
//                   </div>
//                   <div className="p-3">
//                     <form
//                       action="https://foxpixel.vercel.app/metor/index.html"
//                       className="authentication-form"
//                     >
                      
//                       <div className="mb-3">
//                         <label className="form-label" htmlFor="example-email">
//                           Email
//                         </label>
//                         <input
//                           type="email"
//                           id="example-email"
//                           name="example-email"
//                           className="form-control"
//                           placeholder="Enter your email"
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <label className="form-label" htmlFor="example-password">
//                           Password
//                         </label>
//                         <input
//                           type="text"
//                           id="example-password"
//                           className="form-control"
//                           placeholder="Enter your password"
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <div className="form-check">
//                           <input
//                             type="checkbox"
//                             className="form-check-input"
//                             id="checkbox-signin"
//                           />
//                           <label
//                             className="form-check-label"
//                             htmlFor="checkbox-signin"
//                           >
//                             I accept Terms and Condition
//                           </label>
//                         </div>
//                       </div>
//                       <div className="mb-1 text-center d-grid">
//                         <button className="btn btn-primary" type="submit">
//                           Sign Up
//                         </button>
//                       </div>
//                     </form>
//                     <p className="mt-3 fw-semibold no-span">Or Sign In with</p>
//                     <div className="row align-items-center justify-content-center g-3 text-center">
//                       <div className="col-lg-3">
//                         <a
//                           href="javascript:void(0);"
//                           className="btn btn-outline-danger shadow w-100 d-flex align-items-center justify-content-center gap-1 fw-medium"
//                         >
//                           <i className="bx bxl-google fs-20" /> Google
//                         </a>
//                       </div>
//                       <div className="col-lg-3">
//                         <a
//                           href="javascript:void(0);"
//                           className="btn btn-outline-primary shadow w-100 d-flex align-items-center justify-content-center gap-1 fw-medium"
//                         >
//                           <i className="bx bxl-facebook fs-20" />
//                           Facebook
//                         </a>
//                       </div>
//                       <div className="col-lg-3">
//                         <a
//                           href="javascript:void(0);"
//                           className="btn btn-outline-dark shadow w-100 d-flex align-items-center justify-content-center gap-1 fw-medium"
//                         >
//                           <i className="bx bxl-github fs-20" />
//                           Github
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                   <p className="text-muted text-center mt-4 mb-0">
//                     I already have an account{" "}
//                     <a href="auth-signin.html" className="text-reset fw-bold ms-1">
//                       Sign Up
//                     </a>
//                   </p>
//                 </div>{" "}
//                 {/* end col */}
//               </div>{" "}
//               {/* end card-body */}
//             </div>{" "}
//             {/* end card */}
//           </div>{" "}
//           {/* end col */}
//         </div>{" "}
//         {/* end row */}
//       </div>
//     </div>
//     </div>
//   )
// }

// export default SignIn
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Page Redirect ke liye
import logoDark from "../assets/images/logo-dark.png";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Redirect ke liye

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch("http://localhost:4001/admin/site/apis/signin", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ email, password }),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       localStorage.setItem("authToken", data.token); // JWT Token Save karein
  //       navigate("/orders"); // Dashboard par Redirect karein
  //     } else {
  //       setError(data.error || "Login failed. Please try again.");
  //     }
  //   } catch (err) {
  //     setError("Something went wrong. Please try again." , err);
  //   }
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset previous error
  
    try {
      const response = await fetch("http://localhost:4001/admin/site/apis/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("API Response:", data); // ✅ Debugging ke liye response check karein
  
      if (response.ok) {
        localStorage.setItem("authToken", data.token); // ✅ Token store karein
        console.log("Token stored:", localStorage.getItem("authToken")); // ✅ Verify storage
        navigate("/orders"); // ✅ Dashboard par redirect karein
      } else {
        setError(data.error || "Login failed. Please try again.");
      }
    } catch (err) {
      console.error("Login Error:", err);
      setError("Something went wrong. Please try again.");
    }
  };
  
  return (
    <div
      className="h-screen w-screen flex justify-center items-center"
      style={{ background: "linear-gradient(to top, #5e5d83 0%, #597e87 100%)" }}
    >
      <div className="account-pages pt-2 pt-sm-5 pb-4 pb-sm-5" style={{ width: "1400px", margin: "0 auto" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5">
              <div className="card auth-card">
                <div className="card-body">
                  <div className="p-3">
                    <div className="mx-auto mb-5 auth-logo text-center">
                      <img src={logoDark} height={30} alt="logo dark" />
                    </div>
                    <div className="text-center">
                      <h3 className="fw-bold text-dark fs-20">Welcome Back! 👋</h3>
                      <p className="text-muted mt-1 mb-4">
                        Sign in to continue to your dashboard.
                      </p>
                    </div>
                    <div className="p-3">
                      {error && <p style={{ color: "red" }}>{error}</p>}
                      <form onSubmit={handleLogin}>
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            placeholder="Enter your password"
                            required
                          />
                        </div>
                        <div className="mb-1 text-center">
                          <button className="btn btn-primary" type="submit">Sign In</button>
                        </div>
                      </form>
                    </div>
                    <p className="text-muted text-center mt-4 mb-0">
                      Don't have an account? <a href="/signup" className="text-reset fw-bold">Sign Up</a>
                    </p>
                  </div> 
                </div>
              </div> 
            </div> 
          </div> 
        </div>
      </div>
    </div>
  );
};

export default SignIn;
