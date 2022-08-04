import CartMain from "./Cart/CartMain";
import { Provider } from 'react-redux';
import {createStore} from 'redux';

function App() {
//   function reducer(state=[],action){
//     if(state===undefined){
//       return{
//         list:[]
//       };
//     }
//     const newState = {...state};
//     switch(action.type){
//       case "ADD": return [...newState,action.payload];
//       case "DEL": return [...action.payload];
//       default: return state;
//     }
//   }
// const store = createStore(reducer);
  return (
    <>
    {/* <Provider store={store}>
    <CartMain/>
    </Provider> */}
    
    
    </>
  );
}

export default App;
