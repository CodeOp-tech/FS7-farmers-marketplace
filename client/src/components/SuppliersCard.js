import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./SupplierCard.css";

export default class SuppliersCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { user } = this.props;

    return (
      <div className="supplierCard">
        <Link to={`/suppliers/${user.id}`} product={user}>
          <div
            className="container d-flex justify-content-center my-1"
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
        </Link>
      </div>
    );
  }
}
