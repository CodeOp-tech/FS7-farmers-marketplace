import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InputNumber from "./InputNumber";
import FoodMilesNumber from "./FoodMilesNumber";
import api from "../utils/apiProducts";
import "./ProductsCard.css";

export default function ProductsCard(props) {
  let { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    api.getOneProduct(id).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  let locationStart = {
    lat: parseFloat(localStorage.getItem("lat")),
    lng: parseFloat(localStorage.getItem("lng")),
  };

  let locationEnd = {
    lat: parseFloat(product.lat),
    lng: parseFloat(product.lng),
  };

  return (
    <div className="container">
      <div className="row">
        <div>
          <i className="fas fa-shopping-basket CCblue fa-2x"></i>
          <h5 className="title">IT'S TIME TO DO THE SHOPPING? </h5>
          <h5 className="subtitle">Get your products!</h5>
        </div>
      </div>
      <div className="productCardDisplay mt-3">
        <div className="row">
          <div className="col-5">
            <div className="container d-flex justify-content-center my-3">
              <img src={product.img} alt="Error" width="100%" />
            </div>
          </div>
          <div className="col-6">
            <br />
            Ref. 00{product.id}
            <h3 className="mt-2">
              <strong>{`Name: ${product.name}`}</strong>
            </h3>
            <p>
              Seller: <a href={product.website}>{product.company_name}</a>
            </p>
            <p>{`Description: ${product.description}`}</p>
            <br />
            {/* {product.unit_price.toFixed(2) + " €"} */}
            <br />
            <div className="row d-flex justify-content-between mt-3">
              <div className="col-md-4">
                <i className="fas fa-car-side fa-2x CCblue mr-2"></i>
                <strong>Food Miles: </strong>
                <FoodMilesNumber start={locationStart} end={locationEnd} />
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                {/* We need to save the value of the Input Number for each product */}
                <InputNumber />
              </div>
              <div className="col-md-4 d-flex justify-content-center">
                <i className="fas fa-cart-plus mx-3 CCblue fa-2x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}
