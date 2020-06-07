import React, { Component } from "react";
import "../App.css";

export default class SuppliersCard extends Component {
  render() {
    return (
      <div className="buyersCard">
        <div className="container d-flex justify-content-center my-3">
          <img
            src="https://color.romanuke.com/wp-content/uploads/2016/08/cvetovaya-palitra-2987.png"
            alt="Error"
            width="200px"
            height="200px"
          />
        </div>
        <br />
        {/* ID */}001
        <h5 className="mt-2">
          {/* Company Name */}
          <strong>COMPANY NAME</strong>
        </h5>
        {/* PostCode */}08241 - Manresa{/* City */}
        <br />
        {/* Telf */}93 555 12 12 · 627 13 15 19{/* Mob */}
        <br />
        {/* website */}www.website.com
      </div>
    );
  }
}
