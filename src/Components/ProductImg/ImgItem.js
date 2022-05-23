import React ,{useState} from 'react'

function ImgItem(image) {

     // const [isActive , setIsActive] = useState(false)
    const {item ,  index , setCount } = image.image
//     const Active = isActive ? "active" : " ";
   
    
  return (
      
      <li   onClick={()=>{
            setIsActive(true)
           }} >
      <img src={item}  
           /> 
      </li>

  )
}

export default ImgItem