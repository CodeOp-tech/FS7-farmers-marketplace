import React, { Component } from "react";
import axios from "axios";
import "./ContactUs.css";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  login = () => {
    const { username, password } = this.state;
    axios("/users/login", {
      method: "POST",
      data: {
        username,
        password,
      },
    })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        // console.log(response);
        this.props.history.push("/");
        // console.log(this.props);
        localStorage.setItem("username", username);
        // console.log(response);
        this.props.onLogin(username, this.props.history);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount = () => {
    if (localStorage.getItem("username"))
      this.setState({ username: localStorage.getItem("username") });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div>
            <i className="fas fa-sign-in-alt CCbeige fa-2x"></i>
            <h5 className="title">IT'S TIME TO SAY HELLO! </h5>
            <h5 className="subtitle">Welcome! Sign in...</h5>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="text-center borderCard p-5 my-3 w-75" action="#!">
            <div className="row">
              <div className="col mb-md-0 mb-5">
                <div className="row">
                  <div className="col">
                    <div className="md-form mb-0">
                      <input
                        type="email"
                        id="username"
                        className="form-control mb-4"
                        name="username"
                        value={username}
                        onChange={this.handleChange}
                      />
                      <label htmlFor="username">UserName</label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="md-form mb-0">
                      <input
                        type="password"
                        id="defaultLoginFormPassword"
                        className="form-control mb-4"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                      />
                      <label htmlFor="password">Password</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button
                className="button"
                type="submit"
                onClick={this.login}
                disabled={!username || !password}
              >
                Sign in
              </button>
            </div>
            <div className="text mt-4">
              <p>
                Not a member?
                <a href="/register"> Register</a>
              </p>
            </div>
          </div>
        </div>

        {/* This is not working! */}
        {/* <div className="text-center border border-light p-5" action="#!">
          <div className="d-flex justify-content-around">
            <div>
              <div className="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="defaultLoginFormRemember"
                />
                <label
                  className="custom-control-label"
                  htmlFor="defaultLoginFormRemember"
                >
                  Remember me
                </label>
              </div>
            </div>
            <div>
              <a href="">Forgot password?</a>
            </div>
          </div>
          <p>or sign in with:</p>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-facebook-f light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-twitter light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i className="fab fa-linkedin-in light-blue-text"></i>
          </a>
        </div> */}
      </div>
    );
  }
}
