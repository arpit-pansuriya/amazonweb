import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "../components/Container";

const Wishlist = () => {
  return (
    <>
      <Meta title={"Wishlist"}></Meta>
      <BreadCrumb title={"Wishlist"}></BreadCrumb>

      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                className="cross img-fluid position-absolute"
                alt="cross"
              />
              <div className="wishlist-card-image ">
                <img
                  src="images/watch.jpg"
                  className="w-100 img-fluid"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 0.1 GB RAM 8 GB ROM 7 Inch With Wi-fi + 3G Tablet
                </h5>
                <h6 className="price">$100.00</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                className="cross img-fluid position-absolute"
                alt="cross"
              />
              <div className="wishlist-card-image ">
                <img
                  src="images/watch.jpg"
                  className="w-100 img-fluid"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 0.1 GB RAM 8 GB ROM 7 Inch With Wi-fi + 3G Tablet
                </h5>
                <h6 className="price">$100.00</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                className="cross img-fluid position-absolute"
                alt="cross"
              />
              <div className="wishlist-card-image ">
                <img
                  src="images/watch.jpg"
                  className="w-100 img-fluid"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 0.1 GB RAM 8 GB ROM 7 Inch With Wi-fi + 3G Tablet
                </h5>
                <h6 className="price">$100.00</h6>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="wishlist-card position-relative">
              <img
                src="images/cross.svg"
                className="cross img-fluid position-absolute"
                alt="cross"
              />
              <div className="wishlist-card-image ">
                <img
                  src="images/watch.jpg"
                  className="w-100 img-fluid"
                  alt="watch"
                />
              </div>
              <div className="py-3 px-3">
                <h5 className="title">
                  Honor T1 0.1 GB RAM 8 GB ROM 7 Inch With Wi-fi + 3G Tablet
                </h5>
                <h6 className="price">$100.00</h6>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
