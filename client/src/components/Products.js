import React, { Component } from "react";
import ProductsCard from "./ProductsCard";

export default class Products extends Component {
  render() {
    return (
      <div className="row my-5">
        <div className="d-flex align-items-center">
          <div className="square">FILTERS</div>
        </div>
        <div className="col d-flex align-items-center">
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          {/* Maybe we can use pagination */}
        </div>
      </div>
    );
  }
}
