import React, { Component } from "react";
import SuppliersCard from "./SuppliersCard";
import { SupplierMap } from "./SupplierMap";

export default class Suppliers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = () => {
    fetch(`/api/users`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({ users: response });
      });
  };

  render() {
    const { users } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div>
            <i className="fas fa-tractor CCbeige fa-2x"></i>
            <h5 className="title">IT'S TIME TO KNOW OUR SUPPLIERS </h5>
            <h5 className="subtitle">Look at our local suppliers</h5>
          </div>
        </div>
        {/* MAP CONTAINER */}
        {/* <div className="d-flex justify-content-center  my-5">
          <SupplierMap />
        </div> */}

        <div className="d-flex justify-content-between mt-3">
          {users?.length && (
            <div className="row">
              {users.map(
                (user, i) =>
                  !!user?.isSeller && (
                    <div key={i}>
                      <SuppliersCard user={user} />
                    </div>
                  )
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
