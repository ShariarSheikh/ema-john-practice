import React from "react";
import "./Product.css";
import { FaShoppingCart } from "react-icons/fa";

const Product = (props) => {
  const { name, img, price, seller, stock } = props.product;
  const addToCartHandler = props.addToCartHandler;
  return (
    <div className="product">
      <div className="img-container">
        <img className="pd-img" src={img} alt="product-pictures" />
      </div>
      <div className="info-container">
        <h4 className="pd-title">{name}</h4>
        <p>By: {seller}</p>
        <p>Price: ${price}</p>
        <p>Only {stock} in stock - order soon</p>
        <button
          className="btn-add"
          onClick={() => addToCartHandler(props.product)}
        >
          <FaShoppingCart /> Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
