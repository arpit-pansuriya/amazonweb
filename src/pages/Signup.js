import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

import Container from "../components/Container";
import Custominput from "../components/Custominput";

const Signup = () => {
  return (
    <>
      <Meta title={"Sign Up"}></Meta>
      <BreadCrumb title={"Sign Up"}></BreadCrumb>

      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-3">Create An Account</h3>
              <form action="" className="d-flex flex-column gap-30">
                <Custominput
                  type="text"
                  name="fname"
                  placeholder="First Name"
                  className="form-control"
                />

                <Custominput
                  type="text"
                  name="lname"
                  placeholder="Last Name"
                  className="form-control"
                />

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
                  <div className="d-flex justify-content-center gap-15">
                    <button className="button border-0">Sign Up</button>
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

export default Signup;
