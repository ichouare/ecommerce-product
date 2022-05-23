import React , {useState } from 'react'
import { FaAngleLeft , FaAngleRight } from "react-icons/fa";
import imgs from '../data'
import ImgItem from './ImgItem';
import './style.css'

const  ProductImg = () => {
  
 
  const [count , setCount]= useState(3) 

  const handlerInc = ()=> {

  if(count === 3){
    setCount(0)
  }
  else{
 setCount(count+1)
  }
  }
const handlerDec = () => {

  if(count == 0){
    setCount(2)
  }else{
 setCount(count-1)
  }
}

 






  return (
    <div className='ProductImg'>
    <img src={imgs[count]} alt="image_product_1" className='image_product' />
    <div className='image_product_icon'>
    <FaAngleLeft className='icon' onClick={handlerDec}/>
    <FaAngleRight  className='icon' onClick={handlerInc}/>
      </div>

    <ul className='listImg'>
    {
      imgs.map((item, index) => {
        
        return <li  key={index} >
        <ImgItem   image={{item , setCount, index }} />
        </li>
      }) 
    }
    </ul>
    </div>
  )
}

export default ProductImg