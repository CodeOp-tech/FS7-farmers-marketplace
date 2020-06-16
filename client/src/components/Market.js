import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../utils/apiProducts";
import ProductsList from "./ProductsList";

export default function Market(props) {
  const [products, setProducts] = useState([]);
  const [name, setSearch] = useState("");
  const { id } = useParams();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getProductsFiltered = () => {
    api.getProductsFiltered(name, id).then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    getProductsFiltered();
  }, [name]);

  return (
    <div className="container">
      <div className="row">
        <div>
          <i className="fas fa-shopping-basket CCbeige fa-2x"></i>
          <h5 className="title">IT'S TIME TO GO TO *****MARKET NAME*****? </h5>
          <h5 className="subtitle">Get your products!</h5>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 d-flex">
          <div className="row">
            <div className="md-form mb-0">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={name}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor="name">Search...</label>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-9">
        <ProductsList products={products} />
      </div>
    </div>
  );
}
