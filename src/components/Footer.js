import React from "react";

import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newslatter from "../images/newsletter.png";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-data d-flex align-items-center">
                <img src={newslatter} alt="newslatter" />
                <h2 className="mb-0 text-white">Sign Up For Newslatter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="col-5">
                <div className="input-group ">
                  <input
                    type="text"
                    className="form-control py-1"
                    placeholder="Write Your Email Here"
                    aria-label="Write Your Email Here"
                    aria-describedby="basic-addon2"
                  />
                  <span
                    className="input-group-text p-2 text-white"
                    id="basic-addon2"
                  >
                    Subscribe
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white">
                  962, Cardington Street. <br /> Mississauga ON. L5V1Z8
                </address>
                <a
                  href="tel:+1 123-456-7890"
                  className="mt-3 d-block mb-2 text-white"
                >
                  123-456-7890
                </a>

                <a
                  href="mailto:abcd@gmail.com"
                  className="mt-2 mb-0 d-block text-white"
                >
                  abcd@gmail.com
                </a>
              </div>
              <div className="social-icons d-flex align-items-center gap-30 mt-4">
                <Link href="" className="text-white">
                  <BsLinkedin className="fs-4"></BsLinkedin>
                </Link>
                <Link href="" className="text-white">
                  <BsGithub className="fs-4"></BsGithub>
                </Link>
                <Link href="" className="text-white">
                  <BsYoutube className="fs-4"></BsYoutube>
                </Link>
                <Link href="" className="text-white">
                  <BsInstagram className="fs-4"></BsInstagram>
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacypolicy" className="text-white mb-1 py-2">
                  Privacy Policy
                </Link>
                <Link to="refundpolicy" className="text-white mb-1 py-2">
                  Refund Policy
                </Link>
                <Link to="shippingpolicy" className="text-white mb-1 py-2">
                  Shipping Policy
                </Link>
                <Link to="termandcondition" className="text-white mb-1 py-2">
                  Terms Of Services{" "}
                </Link>
                <Link to="/blogs" className="text-white mb-1 py-2">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white mb-1 py-2">Search</Link>
                <Link className="text-white mb-1 py-2">About Us</Link>
                <Link className="text-white mb-1 py-2">Faq</Link>
                <Link to="/contact" className="text-white mb-1 py-2">
                  Contact
                </Link>
                <Link className="text-white mb-1 py-2">Size Chart</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white mb-1 py-2">Laptops</Link>
                <Link className="text-white mb-1 py-2">Headphones</Link>
                <Link className="text-white mb-1 py-2">Tablets</Link>
                <Link className="text-white mb-1 py-2">Watches</Link>
                <Link className="text-white mb-1 py-2">Accessories</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="mb-0 text-center text-white">
                &copy; {new Date().getFullYear()}; Powerd by Arpit Pansuriya
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
