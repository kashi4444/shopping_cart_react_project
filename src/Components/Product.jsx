import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { add,remove } from '../redux/Slices/CartSlice';
const Product = ({post}) => {
  const{cart} = useSelector((state) => state);
  const dispatch = useDispatch();

  function removeFromCart(){
    dispatch(remove(post.id));
    toast.error("Item Removed");
  }
  function addToCart(){
    dispatch(add(post));
    toast.success("Item Added to Cart");
  }
  return (
    <div className='product_container'>
      <div>
        <p className='title'>{post.title.substr(0,15) + "..."}</p>
      </div>
      <div>
        <p className='description'>{post.description.split(" ").slice(0,10).join(" ")+"..."}</p>
      </div>
      <div className='prd_img_container'>
        <img src={post.image} className='prd_img'></img>
      </div>
      <div className='price_btn_container'>
        <div>
          <p className='price'>${post.price}</p>
        </div>
        {
          cart.some((p) => p.id === post.id) ? (<button onClick={removeFromCart} className='Btn'>Remove Item</button>):(<button onClick={addToCart} className='Btn'>Add to Cart</button>)
        }
      </div>
      
    </div>
  )
}

export default Product