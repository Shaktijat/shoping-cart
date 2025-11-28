import React from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { removeFromCart, updateTempQuantity } from '../../features/ShopCart/CartSlice';

function Cart() {
 const {items:cartItems, tempItem, totalPrice }=  useSelector ((state) => state.cart);
 const navigate = useNavigate();
 const dispatch = useDispatch();
 const removeHandleItem = (id) => {
 dispatch (removeFromCart({id})); 
 }
 const handleUpdateQuantity = (id, quantity) => {   
  dispatch(updateTempQuantity({id, quantity}));
  }
  return (
   <>
   <div className="cart-page-container">
    <div className="cart-container">
      <h2>Your cart</h2>
 { cartItems.map((item)=>(
 <div className="cart-item">
        <img src={item.image} alt={item.title} />
        <div className="cart-item-details">
          <h3>{item.title}</h3>
          <p>{item.price}</p>
          <div>
            <input type="number" min="1" max="10" defaultValue={tempItem.find((tempitems)=> tempitems.id === item.id)?. quantity || item.quantity} 
            onChange={(e)=>handleUpdateQuantity(item.id, parseInt( e.target.value))}
            />
            <button onClick={()=> removeHandleItem(item.id)}>Remove</button> 
            <button>Update</button>
          </div>
        </div>
      </div>
     ))  }
      <div className="cart-total">
       <p>Total: ${totalPrice.toFixed(2)}</p>
        <button className="back-button" onClick={()=>navigate('/')}>Back to shoping</button>
      </div>
    
    </div>
   </div>
   </>
  )
}

export default Cart
