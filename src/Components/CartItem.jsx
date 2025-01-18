import React from 'react'
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
const CartItem = ({item}) => {
  const dispatch = useDispatch(); 

  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (
    <div className='cart_itemContainer'>
    
      <div className='cart_prd_img_container'>
        <img src={item.image} className='cart_prd_img'></img>
      </div>
  
      <div className='cartItem_content'>
        <h1 className='item_title'>{item.title}</h1>
        <p className='item_desc'>{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>
        <div className='price_delIcon_container'>
          <p className='item_price'>${item.price}</p>
          <div onClick={removeFromCart} className='delIconContainer'>
            <MdDelete className='del_icon' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default CartItem