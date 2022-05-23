import React , {useContext} from 'react'
import './style.css'
import GlobalContext  from '../contextGlobal';
import { FaTrashAlt } from "react-icons/fa";
import Img from '../images/image-product-1-thumbnail.jpg'


const Model = () =>  {
      const { OpenModel , setOpenModel , state ,dispatch} = useContext(GlobalContext)
      const {amount , total , price} = state
      const status = OpenModel ? "hidden" : ""
  return (
 
    <section className={`Modal ${status}`}>
    
    <header className="ModalHeader">
    <h3> cart </h3>
    </header>
     <div className='Box'>
     { total ? <><div className="ModelDEtails">
      <img src={Img} alt="img_product" />
      <div>
      <p>antumn limeted Edition</p>
      <span>${price} * {amount}  <p>${total.toFixed(2)}</p></span>
      </div>
      <FaTrashAlt  onClick={()=>dispatch({type:"remove"})}/>
      </div>
      <button className='btn'  onClick={()=>setOpenModel(false)}>
   checkout
    </button> </> : <p className='empty'>Your cart is empty</p> }
    </div>   
    </section>
  )
}

export default Model