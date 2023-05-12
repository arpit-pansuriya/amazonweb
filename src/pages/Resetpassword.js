import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

import Container from "../components/Container";
import Custominput from "../components/Custominput";

const Resetpassword = () => {
  return (
    <>
      <Meta title={"Reset Password"}></Meta>
      <BreadCrumb title={"Reset Password"}></BreadCrumb>

      <Container class1="login-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="login-card">
              <h3 className="text-center mb-3">Reset Password</h3>
              <form action="" className="d-flex flex-column gap-15">
                <Custominput
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control mt-1"
                />

                <Custominput
                  type="password"
                  name="confpassword"
                  placeholder="Confirm Password"
                  className="form-control mt-1"
                />

                <div className="mt-1">
                  <div className="d-flex justify-content-center gap-15">
                    <button className="button border-0">Change Password</button>
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

export default Resetpassword;
