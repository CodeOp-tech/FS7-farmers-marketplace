import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiProducts from "../utils/apiProducts";
import apiSuppliers from "../utils/apiSuppliers";
import ProductsList from "./ProductsList";

export default function Supplier(props) {
  const [products, setProducts] = useState([]);
  const [name, setSearch] = useState("");
  const [supplier, setSupplier] = useState([]);
  const { id } = useParams();

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getOneSupplier = () => {
    apiSuppliers.getOneSupplier(id).then((response) => {
      setSupplier(response.data);
    });
  };

  const getProductsFiltered = () => {
    apiProducts.getProductsFiltered(name, "", id).then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(() => {
    getProductsFiltered();
    getOneSupplier();
  }, [name]);

  return (
    <div className="container">
      {console.log(supplier)}
      <div className="row">
        <div>
          <i className="fas fa-shopping-basket CCbeige fa-2x"></i>
          <h5 className="title">IT'S TIME TO GO TO {supplier.name}? </h5>
          <h5 className="subtitle">Let's see their products!</h5>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="text-center borderCard p-5 my-3 w-75" action="#!">
          <h4 className="subtitle">{supplier.name}</h4>
          <p className="text">
            {supplier.address1} · {supplier.postcode} · {supplier.city}
          </p>
          <a className="text" href={supplier.website}>
            {supplier.website}
          </a>
          <p className="text">
            {supplier.email} · {supplier.mob_no}{" "}
            {`(${supplier.firstname} ${supplier.lastname})`}
          </p>
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
        <div className="col-md-9">
          <ProductsList products={products} />
        </div>
      </div>
    </div>
  );
}
