import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from "../images/watch.jpg";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title={" Cart"}></Meta>
      <BreadCrumb title={" Cart"}></BreadCrumb>

      <Container class1="cart-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="cart-header py-3 d-flex justify-content-between align-items-center">
              <h4 className="cart-col-1">Product</h4>
              <h4 className="cart-col-2">Price</h4>
              <h4 className="cart-col-3">Quantity</h4>
              <h4 className="cart-col-4">Total</h4>
            </div>
            <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
              <div className="cart-col-1 gap-15 d-flex align-items-center">
                <div className="w-25">
                  <img src={watch} className="img-fluid" alt="watch" />
                </div>
                <div className="w-75">
                  <p className="title">
                    Lorem ipsum dolor, sit amet consectetur adipisicing.
                  </p>
                  <p className="color">Color : Red</p>
                  <p className="size">Size : M</p>
                </div>
              </div>
              <div className="cart-col-2">
                <h5 className="price">$ 100.00</h5>
              </div>
              <div className="cart-col-3 d-flex align-items-center gap-15">
                <div>
                  <input
                    type="number"
                    name=""
                    className="form-control"
                    id=""
                    min={1}
                    defaultValue={1}
                  />
                </div>
                <div>
                  <AiFillDelete className="fs-5 text-danger"></AiFillDelete>
                </div>
              </div>
              <div className="cart-col-4">
                <h5 className="price">$ 100.00</h5>
              </div>
            </div>

            <div className="col-12 py-2">
              <div className="d-flex align-items-baseline justify-content-between">
                <Link to="/product" className="button">
                  Continue To Shopping
                </Link>
                <div className="d-flex flex-column align-items-end">
                  <h4>Sub Total : $100.00</h4>
                  <p>Taxes and shipping calculates at checkout</p>
                  <Link to="/checkout" className="button">
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Cart;
