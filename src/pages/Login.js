import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Custominput from "../components/Custominput";

const Login = () => {
  return (
    <>
      <Meta title={"Wishlist"}></Meta>
      <BreadCrumb title={"Wishlist"}></BreadCrumb>

      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-3">Login</h3>
              <form action="" className="d-flex flex-column gap-30">
                <Custominput
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />

                <Custominput
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control mt-1"
                />

                <div className="mt-3">
                  <Link to="/forgotpassword">Forgot Password</Link>
                  <div className="d-flex justify-content-center gap-15">
                    <button className="button border-0">Login</button>
                    <Link to="/signup" className="button signup">
                      Signup
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Login;
