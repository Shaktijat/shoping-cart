import React from 'react'
import './Cart.css'
import { useSelector } from 'react-redux'

function Cart() {
 const {items:cartItems, tempItems, totalPrice }=  useSelector ((state) => state.cart);
  return (
   <>
   <div className="cart-page-container">
    <div className="cart-container">
      <h2>Your cart</h2>
 { cartItems.map((item)=>(
 <div className="cart-item">
        <img src="" alt="" />
        <div className="cart-item-details">
          <h3>image title</h3>
          <p>$00.00</p>
          <div>
            <input type="number" min="1" max="10" defaultValue="1" />
            <button>Remove</button> 
            <button>Update</button>
          </div>
        </div>
      </div>
     ))  }
      <div className="cart-total">
        <p>Total: $00.00</p>
        <button className="back-button">Back to shoping</button>
      </div>
    
    </div>
   </div>
   </>
  )
}

export default Cart
