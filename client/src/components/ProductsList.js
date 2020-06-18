import React from "react";
import ProductsCard from "./ProductsCard";

export default function Products({ products, lat, lng }) {
  return (
    <div>
      {!products?.length ? (
        <div className="row">
          <div
            className="alert alert-danger text my-4 text-center w-100"
            role="alert"
          >
            {`Sorry, there are no products to show!`}
          </div>
        </div>
      ) : (
        <div className="row">
          {products.map((product, i) => (
            <div key={i}>
              <ProductsCard product={product} lat={lat} lng={lng} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
