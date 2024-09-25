import React, { useContext } from 'react';
import { CartContext } from '../App'; // Import CartContext from App

const CartPage = () => {
  const { cart } = useContext(CartContext); // Access cart state from CartContext

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
