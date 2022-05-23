
import React , {useState , useContext} from 'react'
import  logo from '../images/logo.svg'
import  avatar from '../images/image-avatar.png'
import GlobalContext  from '../contextGlobal';

import { FaShoppingCart , FaAlignLeft , FaWindowClose } from "react-icons/fa";
import './style.css'
const  NavBar = () =>  {
  const[Open , setOpen] = useState(false)
  const { OpenModel , setOpenModel , state} = useContext(GlobalContext)
  let Show = Open ? 'show' : '' ;
  const display = (state.amount) ? 'hidden' : ""
  return (
    <header>
    <div>
    <FaAlignLeft  className='icon icon-navbar' onClick={()=>setOpen(true)}/>
    <img src={logo} alt='logo-img' />
    </div>
     <ul className='nav_bar'>
     <p>Collections</p>
     <p>Women</p>
     <p>men</p>
     <p>About</p>
     <p>Contact</p>
    </ul>
    <div>
    <FaShoppingCart   className='icon'  onClick={()=>setOpenModel(!OpenModel)} />
    <span className={`count ${display}`}>{state.amount}</span>
    <img src={avatar} alt="img-avatar" className='avatar'   onClick={()=>setOpenModel(!OpenModel)} />
    <nav className={`menu ${Show}`}>
    <FaWindowClose className='icon_menu' onClick={()=>setOpen(false)} />
    <ul>
     <p>Collections</p>
     <p>Women</p>
     <p>men</p>
     <p>About</p>
     <p>Contact</p>
    </ul>
    </nav>
    </div>
    
    
    </header>
  )
}

export default NavBar