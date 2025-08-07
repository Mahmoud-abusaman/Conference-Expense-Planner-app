import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, removeFromCart } from "../cartslice";
import { useNavigate } from "react-router-dom";
import "./Cart.css";
import Header from "../components/hedear";

function Cart() {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    console.log(cart)

    const total = cart.items.reduce((sum, item) => sum + item.quantity * parseFloat(item.price.slice(1)), 0);

    return (
        <div className="cart-page">
            <Header cartCount={cart.length} />

            <h2 className="cart-title">Total Cart Amount: ${total}</h2>

            {cart.items.map((item, index) => (
                <div className="cart-item" key={index}>
                    <img src={item.image} alt={item.name} />
                    <div className="cart-info">
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <div className="quantity-controls">
                            <button onClick={() => dispatch(decrease(item.name))}>-</button>
                            <span>{item.quantity}</span>
                            <button onClick={() => dispatch(increase(item.name))}>+</button>
                        </div>
                        <p>Total: ${item.quantity * parseFloat(item.price.slice(1))}</p>
                        <button className="delete-btn" onClick={() => dispatch(removeFromCart(item.name))}>Delete</button>
                    </div>
                </div>
            ))}

            <div className="cart-actions">
                <button className="continue-btn" onClick={() => navigate("/shop")}>Continue Shopping</button>
                <button className="checkout-btn">Checkout</button>
            </div>
        </div>
    );
}

export default Cart;