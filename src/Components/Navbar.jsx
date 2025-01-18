import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import {NavLink,Link} from "react-router-dom"
import logo from '../assets/logo.png'
import { useSelector } from 'react-redux';
const Navbar = () => {
  const{cart} = useSelector((state)=> state);
  return (
    <div>
      <nav className='navbar'>
        <NavLink to="/">
          <div className='image_container'>
            <img className='image' src={logo}></img>
          </div>
        </NavLink>
      
        
        <div className='home_cart_container'>
          <Link to='/' className='home_text'><p >Home</p></Link>
          <Link to='/cart'>
            <div className='icon_container'>
              <FaShoppingCart className='cartIcon'/>
              {
                cart.length > 0 &&
                 (<span className='noOfItems'>{cart.length}</span>)
              }

            </div>
            
          </Link>
          
          
        </div>
      </nav>
    </div>
  )
}

export default Navbar