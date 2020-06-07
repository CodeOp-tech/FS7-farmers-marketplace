import React, { Component } from "react";
import SuppliersCard from "./SuppliersCard";

export default class Suppliers extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center  my-5">
          <div className="square">GOOGLE MAP HERE</div>
        </div>
        <div className="d-flex justify-content-between">
          <SuppliersCard />
          <SuppliersCard />
          <SuppliersCard />
          <SuppliersCard />
        </div>
      </div>
    );
  }
}
