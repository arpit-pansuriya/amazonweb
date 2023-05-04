import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Custominput from "../components/Custominput";

const Forgotpassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"}></Meta>
      <BreadCrumb title={"Forgot Password"}></BreadCrumb>

      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-3">Reset Your Password</h3>
              <p className="text-center mt-2 mb-3">
                We will send you an email to reset your password
              </p>
              <form action="" className="d-flex flex-column gap-15">
                <Custominput
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                />

                <div className="">
                  <div className="d-flex justify-content-center gap-15 flex-column align-items-center">
                    <button className="button border-0" type="submit">
                      Submit
                    </button>
                    <Link to="/login">Cancel</Link>
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

export default Forgotpassword;
