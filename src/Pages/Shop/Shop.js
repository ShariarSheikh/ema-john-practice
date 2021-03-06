import React, { useEffect, useState } from "react";
import "./Shop.css";
import fakeData from "../../fakeData/index";
import Product from "../../Components/Product/Product";
import Cart from "../../Components/Cart/Cart";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const first10 = fakeData.slice(0, 10);
  useEffect(() => {
    setProducts(first10);
  }, []);
  const addToCartHandler = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };
  //   console.log(cart);
  return (
    <div className="shop-container">
      <div className="item-container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.key}
            addToCartHandler={addToCartHandler}
          />
        ))}
        <h1>{products.length}</h1>
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
