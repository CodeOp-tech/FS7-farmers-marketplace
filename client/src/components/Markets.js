import React, { Component } from "react";
import MarketsCard from "./MarketsCard";

export default class Markets extends Component {
  render() {
    return (
      <div className="container">
        <div className="d-flex justify-content-center  my-5">
          <div className="square">GOOGLE MAP HERE</div>
        </div>
        <div className="d-flex justify-content-between">
          <MarketsCard />
          <MarketsCard />
          <MarketsCard />
          <MarketsCard />
        </div>
      </div>
    );
  }
}
