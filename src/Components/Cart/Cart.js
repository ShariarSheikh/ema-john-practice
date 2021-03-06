import React from "react";
import "./Cart.css";
const Cart = (props) => {
  console.log(props);
  const cart = props.cart;
  const totalPrice = cart.reduce((total,sum)=> total+sum.price,0)
  console.log(totalPrice);
  let shipping = 0;
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <h4>Items Ordered: {cart.length}</h4>
      <table>
        <tbody>
          <tr>
            <td>Items:</td>
            <td>${totalPrice}</td>
          </tr>
          <tr>
            <td>Shipping & Handling:</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Total Before Tax:</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Estimated Tax:</td>
            <td>$</td>
          </tr>
          <tr>
            <td>Order Total:</td>
            <td>$</td>
          </tr>
        </tbody>
      </table>
      <button className="btn-add">Review Your Order</button>
    </div>
  );
};

export default Cart;
