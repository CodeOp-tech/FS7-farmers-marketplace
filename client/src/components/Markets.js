import React, { Component } from "react";
import MapContainer from "./MapContainer";

export default class Markets extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div>
            <i className="fas fa-store CCbeige fa-2x"></i>
            <h5 className="title">IT'S TIME TO GO TO THE MARKET? </h5>
          </div>
        </div>
        <div className="d-flex row">
          <MapContainer />
        </div>
        <div className="d-flex row"></div>
        <div className="d-flex justify-content-between"></div>
      </div>
    );
  }
}
