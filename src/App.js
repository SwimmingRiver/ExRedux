import CartMain from "./Cart/CartMain";
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import List from './Cart/List';


function App() {
  const reducer =(state=[],action)=>{
    let newState = [...state,action.payload]
    switch(action.type){
      case "ADD":return newState;
      default: return state;
    }
  }
  const store = createStore(reducer)
  return(
    <>
    <Provider store={store}>
      <CartMain/>
      <List/>
      </Provider>
    </>
  )
}

export default App;
