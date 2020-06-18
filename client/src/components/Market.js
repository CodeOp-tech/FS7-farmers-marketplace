import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiProducts from "../utils/apiProducts";
import apiMarkets from "../utils/apiMarkets";
import FoodMilesNumber from "./FoodMilesNumber";

import ProductsList from "./ProductsList";

export default function Market({ start, end }) {
  const [products, setProducts] = useState([]);
  const [market, setMarket] = useState([]);
  const [name, setSearch] = useState("");
  const { id } = useParams();
  const [locationStart, setLocationStart] = useState({
    lat: parseFloat(localStorage.getItem("lat")),
    lng: parseFloat(localStorage.getItem("lng")),
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getOneMarket = () => {
    apiMarkets.getOneMarket(id).then((response) => {
      setMarket(response.data);
    });
  };

  const getProductsFiltered = () => {
    apiProducts.getProductsFiltered(name, id).then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    getProductsFiltered();
    getOneMarket();
  }, []);

  useEffect(() => {
    getProductsFiltered();
    getOneMarket();
  }, [name]);

  return (
    <div className="container">
      <div className="row">
        <div>
          <i className="fas fa-shopping-basket CCbeige fa-2x"></i>
          <h5 className="title">IT'S TIME TO GO TO {market.name}? </h5>
          <h5 className="subtitle">Look at the products you can find in it!</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="text-center borderCard p-5 my-3 w-75" action="#!">
          <h4 className="subtitle">{market.name}</h4>
          <p className="text">
            {market.address1} · {market.postcode} · {market.city}
          </p>
          <a className="text" href={market.website}>
            {market.website}
          </a>
          <p className="text">
            {market.email} · {market.mob_no}
          </p>
          <p className="text">
            {market.day} from {market.start_time} to {market.end_time}
          </p>
          <span className="text d-flex align-items-center justify-content-center">
            <i className="fas fa-car-side text fa-1x CCbeige mr-2"></i>
            <strong>Food Miles: </strong>
            <FoodMilesNumber
              start={locationStart}
              end={{ lat: market.lat, lng: market.lng }}
            />
          </span>
        </div>
      </div>

      <div className="row mt-5">
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
        <div className="col-md-9">
          <ProductsList products={products} />
        </div>
      </div>
    </div>
  );
}
