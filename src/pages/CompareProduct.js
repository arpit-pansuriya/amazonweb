import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Color from "../components/Color";
import Container from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare Products"}></Meta>
      <BreadCrumb title={"Compare Products"}></BreadCrumb>

      <Container class1="compare-product-wrapper home-wrapper-2 py-5 ">
        <div className="row">
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                className="cross img-fluid position-absolute"
                alt="cross"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 0.1 GB RAM 8 GB ROM 7 Inch With Wi-fi + 3G Tablet
                </h5>
                <h6 className="price mt-3">$100.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand : </h5>
                    <p>Havals</p>
                  </div>

                  <div className="product-detail">
                    <h5>Type : </h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Colors : </h5>
                    <Color></Color>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity : </h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                className="cross img-fluid position-absolute"
                alt="cross"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 0.1 GB RAM 8 GB ROM 7 Inch With Wi-fi + 3G Tablet
                </h5>
                <h6 className="price mt-3">$100.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand : </h5>
                    <p>Havals</p>
                  </div>

                  <div className="product-detail">
                    <h5>Type : </h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Colors : </h5>
                    <Color></Color>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity : </h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                className="cross img-fluid position-absolute"
                alt="cross"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 0.1 GB RAM 8 GB ROM 7 Inch With Wi-fi + 3G Tablet
                </h5>
                <h6 className="price mt-3">$100.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand : </h5>
                    <p>Havals</p>
                  </div>

                  <div className="product-detail">
                    <h5>Type : </h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Colors : </h5>
                    <Color></Color>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity : </h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-product-card position-relative">
              <img
                src="images/cross.svg"
                className="cross img-fluid position-absolute"
                alt="cross"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 0.1 GB RAM 8 GB ROM 7 Inch With Wi-fi + 3G Tablet
                </h5>
                <h6 className="price mt-3">$100.00</h6>
                <div>
                  <div className="product-detail">
                    <h5>Brand : </h5>
                    <p>Havals</p>
                  </div>

                  <div className="product-detail">
                    <h5>Type : </h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-detail">
                    <h5>Colors : </h5>
                    <Color></Color>
                  </div>
                  <div className="product-detail">
                    <h5>Availablity : </h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProduct;
