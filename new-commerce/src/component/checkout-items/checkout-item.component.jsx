import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import { FaAngleLeft, FaAngleRight, FaCircleXmark } from "react-icons/fa6";
import "./checkout-item.styles.scss";
const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemToCart, clearItemFromCart, cartTotal } =
    useContext(CartContext);

  const addItem = () => addItemToCart(cartItem);
  const removeItem = () => removeItemToCart(cartItem);
  const { name, price, imageUrl, quantity } = cartItem;

  const clearItemHandler = () => clearItemFromCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItem}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow" onClick={addItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
