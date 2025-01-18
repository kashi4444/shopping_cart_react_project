import React, { useState,useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
import CartItem from '../Components/CartItem';
import {useSelector} from 'react-redux'
const Cart = () => {
  const{cart}= useSelector((state) =>state);
  const[totalAmount, setTotalAmount]= useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc+ curr.price , 0));
  }, [cart])
  

  return (
    <div className='cart_container'>
      {
        cart.length >0 ? (
          <div className='cartItemsPresent_container'>
              <div className='itemsOfCartOnly'>
                {
                  cart.map((item,index) => (
                    <CartItem key={item.id} item={item} itemIndex={index}/>
                  ))
                }
              </div>
              <div className='cart_bill'>
                  <div>
                    <div className='yourCart'>Your Cart</div>
                    <div className='summary'>Summary</div>
                    <p>
                      <span className='total_items_number'>Total Items: {cart.length}</span>
                    </p>
                  </div>
    
                  <div>
                    <p className='total_amount'><span className='amount_heading'> Total Amount :</span> ${totalAmount}</p>
                    <button className='checkout_btn'>Checkout Now</button>
                  </div>
              </div>
          </div>
        ):(
          <div className='empty_cart_container'>
            <h1 className='empty_cart_heading'>Your cart is empty!</h1>
            <Link to='/'>
            <button className='shopNow_btn'>Shop Now</button>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Cart