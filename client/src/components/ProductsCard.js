import React, { Component } from "react";
import "../App.css";
import InputNumber from "./InputNumber";

export default class ProductsCard extends Component {
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
        <div className="container d-flex justify-content-center mt-3">
          {/* We need to save the value of the Input Number for each product */}
          <InputNumber />
        </div>
        <br />
        {/* ID */}001
        <h5 className="mt-2">
          {/* Product Name */}
          <strong>NAME</strong>
        </h5>
        {/* Description */}
        Blabla blabla blabla blabla <br />
        blabla blabla blabla blabla
        <br />
        {/* Unit Price */}00,00 €/u
        <br />
        <div className="d-flex justify-content-between mt-3">
          <div>
            <i className="fas fa-car-side fa-2x blue"></i>
            {/* Food Miles */} 10 km
          </div>
          <i className="fas fa-cart-plus mx-3 blue fa-2x"></i>
        </div>
      </div>
    );
  }
}
