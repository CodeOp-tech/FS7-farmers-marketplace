import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default class SuppliersCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;

    return (
      <div className="productCard">
        <Link
          to={`/suppliers/${user.id}`}
          product={user}
          // start={locationStart}
          // end={locationEnd}
        >
          <div
            className="container d-flex justify-content-center my-3"
            style={{
              background: `url(${user.img}) center/cover`,
              height: "100px",
            }}
          ></div>
          <div className="container d-flex justify-content-center mt-3"></div>
          <br />
          Ref. 00{user.id}
          <h6 className="mt-2">
            <strong>{user.company_name}</strong>
          </h6>
          {user.address1 && `${user.address1}`}
          {user.postcode && ` - ${user.postcode}`}
          {user.city && ` - ${user.city}`}
          <br />
          {user.email && `${user.email}`}
          <br />
          {user.website && <p>{user.website}</p>}
          <br />
          <div className="d-flex justify-content-between mt-3">
            <div className="ml-1 row">
              <i className="fas fa-car-side fa-2x CCbeige mr-2"></i>{" "}
              <strong>Food Miles: </strong>
              {/* <FoodMilesNumber start={locationStart} end={locationEnd} /> */}
            </div>
            <i className="fas fa-cart-plus mx-3 CCcherry fa-2x"></i>
          </div>
        </Link>
      </div>
    );
  }
}
