import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../redux/actions/cartActions';
import './Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart);  // Accessing cart state from Redux store
  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));  // Dispatching remove action
  };

  const handleIncreaseQuantity = (productId) => {
    dispatch(increaseQuantity(productId));  // Dispatching increase quantity action
  };

  const handleDecreaseQuantity = (productId) => {
    dispatch(decreaseQuantity(productId));  // Dispatching decrease quantity action
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);  // Total price calculation considering quantity
  };

  return (
    <div className="cart-container">
      <h2 className="cart-header">Your Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is empty. Add some items to start shopping!</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div>
              <h3>{item.name}</h3>
              <p>${item.price} each</p>
            </div>
            <div className="cart-actions">
              <div className="quantity">
                <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
              </div>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="total-section">
          <span>Total: ${calculateTotal()}</span>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
