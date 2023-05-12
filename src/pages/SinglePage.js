import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { GoGitCompare } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "../components/Container";
import { Link } from "react-router-dom";

const SinglePage = () => {
  const [orderedProduct, setOrderedProduct] = useState(true);
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg",
  };

  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };

  return (
    <>
      <Meta title={"Dynamic Page"}></Meta>
      <BreadCrumb title={"Dynamic Page"}></BreadCrumb>

      <Container class1="main-product-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-fernando-arcos-190819.jpg&fm=jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Kids Headphones Bulk 10 Pack Multi Colored For Students
                </h3>
              </div>

              <div className="border-bottom py-3">
                <p className="price">$ 100.00</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={20}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">(2 Reviews)</p>
                </div>
                <a href="#review" className="review-btn">
                  Write a Review
                </a>
              </div>

              <div className="border-bottom py-3">
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data">Apple</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data"></p>
                </div>
                <div className="d-flex align-items-center gap-10 my-2">
                  <h3 className="product-heading">Availablity :</h3>
                  <p className="product-data">in Stocks</p>
                </div>
                <div className="d-flex flex-column gap-10 mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      L
                    </span>
                    <span className="badge border border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                  </div>
                </div>
                <div className="d-flex flex-column gap-10 mt-2 mb-3">
                  <h3 className="product-heading">Color :</h3>
                  <Color></Color>
                </div>
                <div className="d-flex align-items-center flex-row gap-15 mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      className="form-control"
                      max={10}
                      style={{ width: "70px" }}
                      id=""
                      defaultValue={1}
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0">Add To Cart</button>
                    <button to="/signup" className="button signup border-0">
                      Buy It Now
                    </button>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15 py-2  ">
                  <div>
                    <Link href="">
                      <GoGitCompare className="fe-2 fs-5"></GoGitCompare> Add to
                      Compare
                    </Link>
                  </div>
                  <div>
                    <Link href="">
                      <AiOutlineHeart className="fe-2 fs-5"></AiOutlineHeart>
                      Add to Wishlist
                    </Link>
                  </div>
                </div>
                <div className="d-flex flex-column gap-10 my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br />
                    We ship all Us Domestic Orders within{" "}
                    <b>5 to 10 Business days</b>
                  </p>
                </div>
                <div className="d-flex align-items-center gap-10 my-3">
                  <h3 className="product-heading"> Product Link :</h3>
                  <a
                    href="javascript:void(0)"
                    onClick={() => {
                      copyToClipboard("www.google.com");
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>

              <div className="border-bottom py-3"></div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="discription-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4>Discription</h4>
            <div className="p-3 bg-white">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
                quam et id quo dolore architecto soluta ut facilis rem rerum
                enim ea minima, voluptate excepturi, consequuntur quibusdam
                fugit nam magni! Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Maxime, nisi laudantium explicabo rem aliquid
                accusantium quo velit autem consequuntur dignissimos.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <Container className="reviews-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 id="review">Reviews</h3>
            <div className="review-inner-wrapper">
              <div className="review-head d-flex justify-content-between align-items-end">
                <div>
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div className="d-flex gap-10 align-items-center">
                    <ReactStars
                      count={5}
                      size={20}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">Based On 2 Reviews</p>
                  </div>
                </div>
                {orderedProduct && (
                  <div>
                    <a href="" className="text-dark text-decoration-underline">
                      Write A Review
                    </a>
                  </div>
                )}
              </div>
              <div className="review-form py-4">
                <form className="d-flex flex-column gap-15" action="">
                  <h4 className="">Write a Review</h4>
                  <div>
                    <ReactStars
                      count={5}
                      size={20}
                      value={4}
                      edit={true}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      name=""
                      id=""
                      placeholder="Comments"
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button className="button border-0">Submit Review</button>
                  </div>
                </form>
              </div>

              <div className="reviews mt-4">
                <div className="review">
                  <div className="d-flex align-items-center gap-10">
                    <h6 className="mb-0">Jay patel </h6>
                    <ReactStars
                      count={5}
                      size={20}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Consequatur recusandae reiciendis eligendi tempore, ratione
                    autem ea dolores fugiat molestias, iste quos blanditiis
                    pariatur iusto natus nobis modi perferendis earum maxime.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading   ">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </Container>
    </>
  );
};

export default SinglePage;
