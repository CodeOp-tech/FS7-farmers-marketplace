import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from "./components/Products";
import Suppliers from "./components/Suppliers";
import ContactUs from "./components/ContactUs";
import Markets from "./components/Markets";
import Home from "./components/Home";
import ApiRecipe from "./components/ApiRecipe";
import ProductToDisplay from "./components/ProductToDisplay";
import GeoLocator from "./components/GeoLocator";

import "./App.css";
import Login from "./components/Login";

import Register from "./components/Register";

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
            <div>
              <Link to="/">
                <h1 className=""> FARMER'S MARKETPLACE</h1>
              </Link>
            </div>

            <div className="d-flex align-items-center">
              <Link to={"/register"} className="d-flex align-items-center">
                Register
              </Link>
              <i className="fas fa-sign-in-alt mx-3 CCblue fa-2x"></i>
              <Link to={"/login"} className="d-flex align-items-center">
                Login
              </Link>
              <i className="fas fa-sign-in-alt mx-3 CCblue fa-2x"></i>
              {/* If there are a username */}
              {/* Hi username!<i className="fas fa-user-circle mx-3"></i> */}
            </div>
          </div>

          <div id="body" className="row my-5">
            <span className="navBarButton" onClick={() => this.openNav()}>
              <i className="fas fa-chevron-circle-down fa-rotate-90 CCblue fa-3x"></i>
            </span>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/products/:id">
                <ProductToDisplay />
              </Route>
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/markets">
                <Markets />
              </Route>
              <Route path="/suppliers">
                <Suppliers />
              </Route>
              <Route path="/recipe">
                <ApiRecipe />
              </Route>
              <Route path="/contact">
                <ContactUs />
              </Route>
              <Route path="/">
                <Home />
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
        <GeoLocator />
      </Router>
    );
  }
}

export default App;
