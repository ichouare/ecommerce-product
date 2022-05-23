import React, {useContext} from 'react'
import './style.css'
import { FaPlus , FaMinus , FaShoppingCart } from "react-icons/fa";
import GlobalContext from '../contextGlobal';

const ProductInfo = ()  => {
     const {state , dispatch} = useContext(GlobalContext)
  return (
     
    <section className='ProductInfo'>
    <h3> Sneaker Company</h3>
  <h1>Fall Limited Edition Sneakers</h1>
  <p>
    These low-profile sneakers are your perfect casual wear companion. Featuring a 
    durable rubber outer sole, they’ll withstand everything the weather can offer.
  </p>
  <div class="price">
  <h1> $125.00</h1>
  <span> 50%</span>
  <p><del>$250.00</del></p>
</div>
<section className='btn_container'>
<div class="amount">
<FaPlus className='icon' onClick={()=>dispatch({type:"Increment"})}/>
<h4>{state.amount}</h4>
<FaMinus className='icon' onClick={()=>dispatch({type:"decrement"})}/>
</div>
<button className='btn'  onClick={()=>dispatch({type:"add"})} >
<FaShoppingCart  className='btn_icon'  />
Add to cart
</button>
</section>
    
    </section>
  )
}

export default ProductInfo