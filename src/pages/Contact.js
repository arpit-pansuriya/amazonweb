import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { BsInfoCircle } from "react-icons/bs";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
      <Meta title={"Contact us"}></Meta>
      <BreadCrumb title={"Contact Us"}></BreadCrumb>

      <Container class1="contact-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5774.705281871485!2d-79.383558!3d43.640831!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68bf33a9b%3A0x15edd8c4de1c7581!2sCN%20Tower!5e0!3m2!1sen!2sca!4v1682949709474!5m2!1sen!2sca"
              className="w-100 border-0"
              height="450"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Embed"
            ></iframe>
          </div>
          <div className="col-12 mt-5">
            <div className="contact-inner-wrapper d-flex justify-content-between">
              <div>
                <h3 className="contact-title">Contact</h3>
                <form className="d-flex flex-column gap-15" action="">
                  <div>
                    <input
                      type="text"
                      name=""
                      placeholder="Name"
                      className="form-control"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="abcd@gmail.ca"
                      className="form-control"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      className="form-control"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      required
                      name=""
                      id=""
                      placeholder="Message"
                      className="w-100 form-control"
                      cols="30"
                      rows="4"
                    ></textarea>
                  </div>
                  <div>
                    <button className="button border-0">Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className="contact-title">Get in touch with us</h3>
                <div>
                  <ul className="ps-0">
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <AiOutlineHome className="fs-5"></AiOutlineHome>
                      <address className="mb-0 ">
                        962, cardington st. , Mississauga, ON L5V1Z8
                      </address>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <BiPhoneCall className="fs-5"></BiPhoneCall>
                      <a href="tel:+1 123-456-7890">+1 123-456-7890</a>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <GoMail className="fs-5"></GoMail>
                      <a href="mailto:abcd@gmail.ca">abcd@gmail.ca</a>
                    </li>
                    <li className="mb-3 d-flex align-items-center gap-15">
                      <BsInfoCircle className="fs-5"></BsInfoCircle>
                      <p className="mb-0">Monday To Friday</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact;
