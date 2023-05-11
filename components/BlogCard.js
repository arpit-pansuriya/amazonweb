import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <>
      <div>
        <div className="blog-card">
          <div className="card-image">
            <img src="images/blog-1.jpg" className="img-fluid w-100" alt="" />
          </div>
          <div className="blog-content">
            <p className="date">1 Dec, 2023</p>
            <h5 className="title">Lorem ipsum dolor sit amet.</h5>
            <p className="desc">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
              cum consectetur, sequi aut quod
            </p>
            <Link className="button " to="/blog/:id">
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
