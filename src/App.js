import React from "react";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blogs from "./pages/Blogs";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import Singleblog from "./pages/Singleblog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndCondition from "./pages/TermAndCondition";
import SinglePage from "./pages/SinglePage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="product" element={<OurStore />}></Route>
            <Route path="product/:id" element={<SinglePage />}></Route>
            <Route path="blogs" element={<Blogs />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="blog/:id" element={<Singleblog />}></Route>
            <Route path="compare-product" element={<CompareProduct />}></Route>
            <Route path="wishlist" element={<Wishlist />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="forgotpassword" element={<Forgotpassword />}></Route>
            <Route path="signup" element={<Signup />}></Route>
            <Route path="resetpassword" element={<Resetpassword />}></Route>
            <Route path="privacypolicy" element={<PrivacyPolicy />}></Route>
            <Route path="refundpolicy" element={<RefundPolicy />}></Route>
            <Route path="shippingpolicy" element={<ShippingPolicy />}></Route>
            <Route path="checkout" element={<Checkout />}></Route>
            <Route
              path="termandcondition"
              element={<TermAndCondition />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
