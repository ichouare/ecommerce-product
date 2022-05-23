import react , {useState , useReducer} from 'react';
import './App.css';
import NavBar from './Components/navbar/navBar'
import ProductImg from './Components/ProductImg/ProductImg'
import ProductInfo  from './Components/ProductInfo/ProductInfo';
import Model  from './Components/Model/Model';
import GlobalContext  from './Components/contextGlobal';

const  InitialState ={
  amount :0,
  total :0 ,
  price :125.00
}

const  cheking = (amount) => {
  if(amount <=0){
    return 0;
  }
else {
  return amount - 1
}}

const reducer = (state , action) => {
  switch(action.type){
    case "decrement" : return {...state, amount : cheking(state.amount) }
    case "Increment" : return {...state, amount : state.amount + 1 }
    case 'add' : return {
     ...state , 
     total : state.amount * state.price
    }
    case "remove": return InitialState

  }
}

function App() {
  const [OpenModel , setOpenModel] = useState(false)
  const [state , dispatch]= useReducer(reducer , InitialState)

  return (
    <div className="App">
<GlobalContext.Provider value={{OpenModel , setOpenModel , state , dispatch}} >
<section className='container'>
<NavBar />
<section className='container_box'>
<ProductImg/>
<ProductInfo />
</section>

<Model/>
</section>

</GlobalContext.Provider>

    </div>
  );
}

export default App;
