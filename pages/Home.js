import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProducts from "../components/SpecialProducts";
import Container from "../components/Container";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src="images/main-banner-1.jpg"
                className="rounded-3 img-fluid"
                alt="main banner"
              />
              <div className="main-banner-content position-absolute">
                <h4>SUPER CHARGED FOR PROS.</h4>
                <h5>IPHONE 14 PRO.</h5>
                <p>From $1999 Or $100/mo.</p>
                <Link className="button">BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex justify-content-between gap-10 flex-wrap align-items-center">
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-01.jpg"
                  className="rounded-3 img-fluid"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Best Sale</h4>
                  <h5>Macbook Air</h5>
                  <p>
                    From $999 <br />
                    Or $10/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-02.jpg"
                  className="rounded-3 img-fluid"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>New Arrival</h4>
                  <h5>iWATCH SERIES 8.</h5>
                  <p>
                    From $799 <br />
                    Or $80/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-03.jpg"
                  className="rounded-3 img-fluid"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>50% OFF</h4>
                  <h5>iPAD AIR 5TH GEN</h5>
                  <p>
                    From $999 <br />
                    Or $99/mo.
                  </p>
                </div>
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="images/catbanner-04.jpg"
                  className="rounded-3 img-fluid"
                  alt="main banner"
                />
                <div className="small-banner-content position-absolute">
                  <h4>Most ordered item</h4>
                  <h5>AIRPOD PRO MAX</h5>
                  <p>
                    From $888 <br />
                    Or $89/mo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-10" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6> {i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex align-items-center flex-wrap justify-content-between">
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Cameras </h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Music & Gaming </h6>
                  <p>19 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Smart TV </h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>

              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Cameras </h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Cameras </h6>
                  <p>10 Items</p>
                </div>
                <img src="images/laptop.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Laptop </h6>
                  <p>19 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Speakers </h6>
                  <p>10 Items</p>
                </div>
                <img src="images/speaker.jpg" alt="camera" />
              </div>

              <div className="d-flex gap-30 align-items-center">
                <div>
                  <h6>Watch </h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading   ">Featured Collection</h3>
          </div>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading   ">Famous Products</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="famous-card bg-dark  position-relative">
              <img src="images/famous-1.png" className="img-fluid" alt="" />
              <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 6</h6>
                <p>From $399 or $16.54/mo. for 24 mo. </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-dark  position-relative">
              <img src="images/famous-2.png" className="img-fluid" alt="" />
              <div className="famous-content position-absolute">
                <h5>Studio Display</h5>
                <h6>600 Nits Of Brightness</h6>
                <p>27-inch 5K Display</p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-dark  position-relative">
              <img src="images/famous-3.png" className="img-fluid" alt="" />
              <div className="famous-content position-absolute">
                <h5>Smartphones</h5>
                <h6>Iphone 14 Pro Max 128 Gb</h6>
                <p>Now In Green Color </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card bg-dark  position-relative">
              <img src="images/famous-4.png" className="img-fluid" alt="" />
              <div className="famous-content position-absolute">
                <h5>Home Speakers</h5>
                <h6>Room Feeling Sound</h6>
                <p>From $699 or $26.54/mo. for 24 mo. </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading  ">Special Products</h3>
          </div>
          <div className="row">
            <SpecialProducts></SpecialProducts>
            <SpecialProducts></SpecialProducts>
            <SpecialProducts></SpecialProducts>
            <SpecialProducts></SpecialProducts>
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

      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/brand-01.png" alt="Brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-02.png" alt="Brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-03.png" alt="Brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-04.png" alt="Brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-05.png" alt="Brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-06.png" alt="Brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-07.png" alt="Brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/brand-08.png" alt="Brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading d-flex justify-content-center align-items-center py-5">
              Our Latest News
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <BlogCard></BlogCard>
          </div>
          <div className="col-3">
            <BlogCard></BlogCard>
          </div>
          <div className="col-3">
            <BlogCard></BlogCard>
          </div>
          <div className="col-3">
            <BlogCard></BlogCard>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
