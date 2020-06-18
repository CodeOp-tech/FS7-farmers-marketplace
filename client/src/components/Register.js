import React, { Component } from "react";
import "./ContactUs.css";
import apiRegister from "../utils/apiRegister";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      email: "",
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch(`/users`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ users: response });
      });
  };

  addUsers = () => {
    const { firstname, lastname, email, password, username } = this.state;

    apiRegister
      .postUser(firstname, lastname, email, password, username)
      .then((response) => {
        console.log(response.data);
      });
    this.getUsers();
    window.location.href = "/";
  };

  handleInput = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const {
      users,
      username,
      password,
      firstname,
      lastname,
      email,
    } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div>
            <i className="fas fa-file-alt CCbeige fa-2x"></i>
            <h5 className="title">IT'S TIME TO KNOW ABOUT YOU! </h5>
            <h5 className="subtitle">Create your account...</h5>
          </div>
        </div>
        <div className="text-center borderCard p-5 my-3" action="#!">
          <div className="row">
            <div className="col mb-md-0 mb-5">
              <div className="row">
                <div className="col">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="firstname"
                      className="form-control"
                      value={firstname}
                      name="firstname"
                      onChange={this.handleInput}
                    />
                    <label htmlFor="firstname">First Name</label>
                  </div>
                </div>
                <div className="col">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="lastname"
                      className="form-control"
                      value={lastname}
                      name="lastname"
                      onChange={this.handleInput}
                    />
                    <label htmlFor="lastname">Last Name</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="md-form mb-0">
                    <input
                      type="text"
                      id="username"
                      className="form-control"
                      value={username}
                      name="username"
                      onChange={this.handleInput}
                    />
                    <label htmlFor="username">UserName</label>
                  </div>
                </div>
                <div className="col">
                  <div className="md-form mb-0">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      value={password}
                      name="password"
                      onChange={this.handleInput}
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="md-form mb-0">
                    <input
                      type="email"
                      id="email"
                      className="form-control mb-4"
                      value={email}
                      name="email"
                      onChange={this.handleInput}
                    />
                    <label htmlFor="email">E-mail</label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center">
            <button className="button" onClick={() => this.addUsers()}>
              Sign in
            </button>
          </div>

          {/* This is not working! */}
          {/* <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="defaultRegisterFormNewsletter"
            />
            <label
              className="custom-control-label"
              for="defaultRegisterFormNewsletter"
            >
              Subscribe to our newsletter
            </label>
          </div> */}

          {/* <p>or sign up with:</p>
          <a href="#" className="mx-2" role="button">
            <i class="fab fa-facebook-f light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i class="fab fa-twitter light-blue-text"></i>
          </a>
          <a href="#" className="mx-2" role="button">
            <i class="fab fa-linkedin-in light-blue-text"></i>
          </a>
          <hr></hr>
          <p>By clicking</p> */}
          {/* <em>Sign up</em> you agree to our
          <Link href="/terms" target="_blank">
            terms of service
          </Link> */}
        </div>
      </div>
    );
  }
}
