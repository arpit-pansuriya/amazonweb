import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";

const Singleblog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Card"}></Meta>
      <BreadCrumb title={"Dynamic Blog Card"}></BreadCrumb>

      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/blogs">
                <BsArrowLeft className="fs-4"></BsArrowLeft>Go Back To Blogs
              </Link>
              <h3 className="title">A Beautiful Sunday Morning</h3>
              <img src={blog} className="w-100 my-4 img-fluid" alt="blog" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laudantium, corrupti amet. Modi animi commodi, esse doloribus
                excepturi velit cumque officiis sint iure architecto repellat?
                Aspernatur tempore voluptatibus quibusdam aut voluptatum!
              </p>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Singleblog;
