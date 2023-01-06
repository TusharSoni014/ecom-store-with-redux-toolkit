import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/slices/CartSlice";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const currentItem = cart.find(item => item.id === product.id)
  const currentItemQuantity = currentItem ? currentItem.quantity : 0
  return (
    <div className="product-item">
      <img src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <small>{product.price}</small>
      <div className="cart-info">
        <button
          className="button"
          onClick={() => {
            dispatch(removeFromCart(product.id));
            console.log(currentItemQuantity);
          }}
        >
          -
        </button>
        <h3>{currentItemQuantity}</h3>
        <button
          className="button"
          onClick={() => {
            dispatch(addToCart(product.id));
            console.log(currentItemQuantity);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
