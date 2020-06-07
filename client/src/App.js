import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import Suppliers from "./components/Suppliers";
import ContactUs from "./components/ContactUs";
import Markets from "./components/Markets";

import "./App.css";

class App extends Component {
  componentDidMount() {
    this.closeNav();
  }
  openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  };

  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "20px";
  };

  render() {
    return (
      <Router>
        <div className="App">
          {/* SIDENAV CONTAINER */}
          <div id="mySidenav" className="sidenav">
            <a className="closebtn" onClick={() => this.closeNav()}>
              &times;
            </a>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/markets">Markets</Link>
            <Link to="/suppliers">Suppliers</Link>
            <Link to="/recipe">Recipe Of The Week</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div id="main">
          {/* TOP CONTAINER */}
          <div className="header">
            <h1> FARMER'S MARKETPLACE</h1>
            <div className="d-flex align-items-center">
              <h4>Register</h4>
              <i className="fas fa-sign-in-alt mx-3 blue fa-2x"></i>
              <h4>Login</h4>
              <i className="fas fa-sign-in-alt mx-3 blue fa-2x"></i>
              {/* If there are a username */}
              {/* Hi username!<i className="fas fa-user-circle mx-3"></i> */}
            </div>
          </div>
          <div id="body" className="row my-5">
            <span className="navBarButton" onClick={() => this.openNav()}>
              <i className="fas fa-chevron-circle-down fa-rotate-90 blue fa-3x"></i>
            </span>
            <Switch>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/markets">
                <Markets />
              </Route>
              <Route path="/suppliers">
                <Suppliers />
              </Route>
              <Route path="/recipe">{/* <RecipeWeek /> */}</Route>
              <Route path="/contact">
                <ContactUs />
              </Route>
              <Route path="/">
                {/* BODY CONTAINER */}
                <div className="row body">
                  <span className="homeTitle buy">
                    <Link to="/products">BUY ONLINE</Link>
                  </span>
                  <span className="homeTitle markets">
                    <Link to="/markets">FIND YOUR MARKET</Link>
                  </span>
                  <span className="homeTitle suppliers">
                    <Link to="/suppliers">OUR SUPPLIERS</Link>
                  </span>
                  <span className="homeTitle recipe">
                    <Link to="/recipe">RECIPE OF THE DAY</Link>
                  </span>
                </div>
              </Route>
            </Switch>
          </div>

          {/* FOOTER CONTAINER */}
          <div className="d-flex justify-content-end my-5 mx-5">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-whatsapp"></i>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
