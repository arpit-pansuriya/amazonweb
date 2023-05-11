import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";

const OurStore = () => {
  const [grid, setGrid] = useState(4);
  // alert(grid);
  return (
    <>
      <Meta title={"Our Store"}></Meta>
      <BreadCrumb title={"Our Store"}></BreadCrumb>

      <Container class1="store-wrapper py-5">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Shop By Categories</h3>
              <div>
                <ul className="ps-0">
                  <li>Watch</li>
                  <li>Tv</li>
                  <li>Phones</li>
                  <li>Laptops</li>
                </ul>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Filter By</h3>
              <div>
                <h5 className="sub-title">Availablity</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id=""
                      value=""
                    />
                    <label className="form-check-label" htmlFor="">
                      In stocks (1)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id=""
                      value=""
                    />
                    <label className="form-check-label" htmlFor="">
                      Out Of Stocks (0)
                    </label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div className="d-flex gap-10 align-items-center">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput1"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput">To</label>
                  </div>
                </div>
                <h5 className="sub-title">Price</h5>
                <div>
                  <Color></Color>
                </div>
                <h5 className="sub-title">Price</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="color-1"
                      value=""
                    />
                    <label className="form-check-label" htmlFor="color-1">
                      S (3)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="color-2"
                      value=""
                    />
                    <label className="form-check-label" htmlFor="color-2">
                      M (5)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title">Product Tags</h3>
              <div>
                <div className="d-flex flex-wrap align-items-center gap-10">
                  <span className="badge bg-light text-secondary rounded-3 px-3 py-2">
                    Headphones
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 px-3 py-2">
                    Phones
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 px-3 py-2">
                    Watches
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 px-3 py-2">
                    Mobile
                  </span>
                  <span className="badge bg-light text-secondary rounded-3 px-3 py-2">
                    Tv
                  </span>
                </div>
              </div>
            </div>
            <div className="filter-card mb-3">
              <h3 className="filter-title mb-3">Random Products</h3>
              <div>
                <div className="random-products d-flex mb-3">
                  <div className="w-50">
                    <img
                      src="images/watch-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids HeadPhones bulk 10 pack multicolourd for students
                    </h5>
                    <ReactStars
                      count={5}
                      size={20}
                      value={3.5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b className="price">$100</b>
                  </div>
                </div>
                <div className="random-products d-flex">
                  <div className="w-50">
                    <img
                      src="images/watch-1.png"
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                  <div className="w-50">
                    <h5>
                      Kids HeadPhones bulk 10 pack multicolourd for students
                    </h5>
                    <ReactStars
                      count={5}
                      size={20}
                      value={3.5}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <b className="price">$100</b>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-9">
            <div className="filter-sort-grid mb-4">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0" style={{ width: "101px" }}>
                    Short By:
                  </p>
                  <select
                    name=""
                    id=""
                    defaultValue={"manual"}
                    className="form-control form-select"
                  >
                    <option value="manual"> Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="title-ascending" selected="">
                      Alphabetacilly, A-Z
                    </option>
                    <option value="title-descending" selected="">
                      Alphabetacilly, Z-A
                    </option>
                    <option value="price-ascending" selected="">
                      price, low to high
                    </option>
                    <option value="price-descending" selected="">
                      price, high to low
                    </option>
                    <option value="created-ascending" selected="">
                      Date, old to new
                    </option>
                    <option value="created-descending" selected="">
                      Date, new to old
                    </option>
                  </select>
                </div>
                <div className="d-flex align-items-center gap-10 ">
                  <p className="totalproducts mb-0">21 Products</p>
                  <div className="d-flex align-items-center gap-10 grid">
                    <img
                      onClick={() => {
                        setGrid(3);
                      }}
                      src="images/gr4.svg"
                      alt=""
                      className="d-block img-fluid"
                    />
                    <img
                      onClick={() => {
                        setGrid(4);
                      }}
                      src="images/gr3.svg"
                      alt=""
                      className="d-block img-fluid"
                    />
                    <img
                      onClick={() => {
                        setGrid(6);
                      }}
                      src="images/gr2.svg"
                      alt=""
                      className="d-block img-fluid"
                    />
                    <img
                      onClick={() => {
                        setGrid(12);
                      }}
                      src="images/gr.svg"
                      alt=""
                      className="d-block img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="product-list pb-5">
              <div className="d-flex flex-wrap gap-10">
                <ProductCard grid={grid}></ProductCard>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurStore;
