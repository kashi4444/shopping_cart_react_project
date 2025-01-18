import React, { useEffect, useState } from 'react'
import Spinner from '../Components/Spinner';
import Product from '../Components/Product'
const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const[loading , setLoading]= useState(false);
    const[posts, setPosts]=useState([]);
    async function fetchProductData() {
      setLoading(true);
      try{
        const response= await fetch(API_URL);
        const data= await response.json();
        setPosts(data);
      }catch(error){
        console.log("error occured");
        setPosts([]);
      }
      setLoading(false);
    }

    useEffect(() => {
      fetchProductData();
    }, [])
    
  return (
    <div className='home_page_container'>
      {loading === true ? (

      <Spinner/>):(
        posts.length > 0 ? (
          <div className='items_container'>
          {
            posts.map((post)=>(<Product key={post.id} post={post} />))
          }
          </div>
        ):(
          <div className='noDataPage'>
          <p>Error!!!</p>
          <p>No Data Found</p></div>)
      )}
    </div>
  )
}

export default Home