import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Orders from "./pages/Order";
import Home from "./pages/Home";
import Customer from "./pages/Customer";
import MenuCard from "./pages/MenuCard";
import Pos from "./pages/Pos";
import Rider from "./pages/Rider";
import Offers from "./pages/Offers";
import Report from "./pages/Report";
import Location from "./pages/Location";
import Media from "./pages/Media";
import Listing from "./pages/Listing";
import AddEditCatgeory from "./pages/AddEditCatgeory";
import ProductAddEdit from "./pages/ProductAddEdit";
import ProductListing from "./pages/ProductListing";
import StoreSetting from "./pages/StoreSetting";
import Todo from "./pages/Todo";
import ManageApp from "./pages/ManageApp";
import Profile from "./pages/Profile";
import Page404 from "./pages/Page404";
import ComingSoon from "./pages/ComingSoon";
import FAQ from "./pages/FAQ";
import Pricing from "./pages/Pricing";
import Maintenance from "./pages/Maintenance";
import Gallery from "./pages/Gallery";
import InvoideDetails from "./pages/InvoideDetails";
import Invoices from "./pages/Invoices";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import LockScreen from "./pages/LockScreen";
import ResetPassword from "./pages/ResetPassword";
import TimeLine from "./pages/TimeLine";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu-cards" element={<MenuCard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/pos" element={<Pos />} />
        <Route path="/rider" element={<Rider />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/report" element={<Report />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/media" element={<Media />} />
        <Route path="/category/listing" element={<Listing />} />
        <Route
          path="/category/add-edit-category"
          element={<AddEditCatgeory />}
        />
        <Route path="/product/listing" element={<ProductListing />} />
        <Route path="/product/add-edit-product" element={<ProductAddEdit />} />
        <Route path="/store-setting" element={<StoreSetting />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/manage-app" element={<ManageApp />} />
        <Route path="/pages/profile" element={<Profile />} />
        <Route path="/pages/404" element={<Page404 />} />
        <Route path="/pages/coming-soon" element={<ComingSoon />} />
        <Route path="pages/faq" element={<FAQ />} />
        <Route path="/pages/pricing" element={<Pricing />} />
        <Route path="pages/maintenance" element={<Maintenance />} />
        <Route path="pages/galllery" element={<Gallery />} />
        <Route path="/pages/timeline" element ={<TimeLine/>} />
        <Route path="/invoice/details" element={<InvoideDetails />} />
        <Route path="/invoice/listing" element={<Invoices />} />
        <Route path="/auth/signin" element={<SignIn />} />
        <Route path="/auth/lock-screen" element={<LockScreen />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/auth/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
