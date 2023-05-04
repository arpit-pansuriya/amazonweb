import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import watch from "../images/watch.jpg";
import Container from "../components/Container";

const Checkout = () => {
  return (
    <>
      <Container class1="checkout-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-7">
            <div className="checkout-left-data">
              <h3 className="website-name">Web APP</h3>

              <nav aria-label="breadcrumb">
                <ol className="breadcrumb  ">
                  <li className="breadcrumb-item">
                    <Link to="/" className="total-price text-dark">
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/cart" className="total-price text-dark">
                      Information
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item total-price active text-dark"
                    aria-current="page"
                  >
                    Shipping
                  </li>
                  <li
                    className="breadcrumb-item total-price active"
                    aria-current="page"
                  >
                    Payment
                  </li>
                </ol>
              </nav>

              <h4 className="title total">Contact Information </h4>
              <p className="user-details total">
                Arpit Pansuriya (arpitpatel@gmail.com)
              </p>
              <h4 className="mb-3">Shipping Address</h4>
              <form
                action=""
                className="d-flex gap-15 flex-wrap justify-content-between"
              >
                <div className="w-100">
                  <select name="" className="form-control  form-sele" id="">
                    <option value="" selected disabled>
                      Select Country
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <input
                    type="text"
                    placeholder="Appartment, Suite, etc."
                    className="form-control"
                  />
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                  />
                </div>
                <div className="flex-grow-1">
                  <select name="" className="form-control  form-sele" id="">
                    <option value="" selected disabled>
                      Select State
                    </option>
                  </select>
                </div>
                <div className="flex-grow-1">
                  <input
                    type="text"
                    placeholder="Zip Code"
                    className="form-control"
                  />
                </div>
                <div className="w-100">
                  <div className="d-flex justify-content-between align-items-center">
                    <Link to="/cart" className="text-dark">
                      <BiArrowBack className="me-2"></BiArrowBack>Return To Cart
                    </Link>
                    <Link to="/shipping" className="button">
                      Contiune To Shipping
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="col-5">
            <div className="border-bottom py-4">
              <div className="d-flex mb-2 align-items-center gap-10">
                <div className="w-75 d-flex gap-10">
                  <div className="w-25 position-relative">
                    <span
                      style={{ top: "-7px", right: "-7px" }}
                      className="badge bg-secondary text-white rounded-circle p-2 position-absolute "
                    >
                      1
                    </span>
                    <img className="img-fluid" src={watch} alt="" />
                  </div>
                  <div>
                    <h5 className="total-price">lorem</h5>
                    <p className="total-price">S / #12345</p>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5>$ 100.00</h5>
                </div>
              </div>
            </div>

            <div className="border-bottom py-4">
              <div className="d-flex justify-content-between align-items-center">
                <p>SubTotal</p>
                <p>$ 1000.00</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-0">Shipping</p>
                <p className="mb-0">$ 100.00</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center py-4">
              <h4>Total</h4>
              <h5 className="total">$ 1100.00</h5>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Checkout;
