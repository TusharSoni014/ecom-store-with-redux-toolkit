import { useSelector } from "react-redux";

export default function Navbar() {
  const cart = useSelector((state) => state.cartReducer.cart);
  let count = 0
  cart.forEach(item => count += item.quantity)

  return (
    <div className="navbar">
      <h1>Sasta Store</h1>
      <div className="cart">
        <span>Cart: </span> <span className="bold">{count}</span>
      </div>
    </div>
  );
}
