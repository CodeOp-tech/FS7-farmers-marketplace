import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "../App.css";
import "./Home.css";

export default class Home extends Component {
  changeOpacityUp(e) {
    e.target.style.opacity = "100%";
  }

  changeOpacityDown(e) {
    e.target.style.opacity = "60%";
  }

  render() {
    return (
      <div className="body">
        <div className="row">
          {" "}
          <div
            className="homeTitle buy"
            onMouseOver={(e) => this.changeOpacityUp(e)}
            onMouseLeave={(e) => this.changeOpacityDown(e)}
          >
            <Link to="/products">BUY ONLINE</Link>
          </div>
          <div
            className="homeTitle markets"
            onMouseOver={(e) => this.changeOpacityUp(e)}
            onMouseLeave={(e) => this.changeOpacityDown(e)}
          >
            <Link to="/markets">FIND YOUR MARKET</Link>
          </div>
        </div>

        <div>
          <h1 className="support my-3">SUPPORT LOCAL BUSINESS</h1>
        </div>

        <div className="row my-3">
          <div
            className="homeTitle suppliers my-3"
            onMouseOver={(e) => this.changeOpacityUp(e)}
            onMouseLeave={(e) => this.changeOpacityDown(e)}
          >
            <Link to="/suppliers">OUR SUPPLIERS</Link>
          </div>
          <div
            className="homeTitle recipe my-3"
            onMouseOver={(e) => this.changeOpacityUp(e)}
            onMouseLeave={(e) => this.changeOpacityDown(e)}
          >
            <Link to="/recipe">FIND YOUR RECIPES</Link>
          </div>
        </div>
      </div>
    );
  }
}
