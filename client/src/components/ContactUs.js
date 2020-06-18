import React, { Component } from "react";
import "../App.css";
import "./ContactUs.css";

// https://mdbootstrap.com/docs/jquery/forms/contact/

export default class ContactUs extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div>
            <i className="fas fa-envelope CCbeige fa-2x"></i>
            <h5 className="title">CONTACT US </h5>
            <h5 className="subtitle">Do you have any questions? </h5>
            <p className="text my-2">
              Please do not hesitate to contact us directly. Our team will come
              back to you within
            </p>
          </div>
        </div>
        <div className="text-center borderCard p-5 my-3" action="#!">
          <div className="row">
            <div className="col mb-md-0 mb-5">
              <div className="row">
                <div className="col">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form-control"
                    />
                    <label htmlFor="name">Your name</label>
                  </div>
                </div>
                <div className="col">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="email"
                      name="email"
                      className="form-control"
                    />
                    <label htmlFor="email">Your email</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="form-control"
                    />
                    <label htmlFor="subject">Subject</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form">
                    <textarea
                      type="text"
                      id="message"
                      name="message"
                      rows="3"
                      className="form-control md-textarea"
                    ></textarea>
                    <label htmlFor="message">Your message</label>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <button className="button">Send</button>
              </div>
              {/* <div className="status"></div> */}
            </div>
          </div>
        </div>
        {/* <div className="d-flex justify-content-center  my-5">
          <div className="square">GOOGLE MAP HERE</div>
        </div> */}
        <div className="row mt-4">
          <div className="col text-center">
            <i className="fas fa-map-marker-alt mt-4 fa-2x CCbeige"></i>
            <p className="text">Tintagel House, LONDON, SE1 7TY</p>
          </div>
          <div className="col text-center">
            <i className="fas fa-phone mt-4 fa-2x CCbeige"></i>
            <p className="text">+44 1632 960230</p>
          </div>

          <div className="col text-center">
            <i className="fas fa-envelope mt-4 fa-2x CCbeige"></i>
            <p className="text">info@farmersmarketplace.com</p>
          </div>
        </div>
      </div>
    );
  }
}
