import React, { Component } from "react";
import "../App.css";

export default class MarketsCard extends Component {
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
        <h5 className="mt-2">
          {/* Product Name */}
          <strong>MARKET'S NAME</strong>
        </h5>
        {/* Description */}
        CP - City
        <br />
        <br />
        Suppliers:
        <ul>
          <li>One supplier</li>
          <li>Another supplier</li>
          <li>Another supplier</li>
        </ul>
      </div>
    );
  }
}
