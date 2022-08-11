
import { useSelector, useDispatch } from 'react-redux';
import { counterSlice } from './RtkReducer';
function RtkMain(){
    const count = useSelector(state=>state.value);
    const dispatch = useDispatch();
    const Plus =()=>{
        dispatch(counterSlice.actions.plus());
        
    }
    const Minus =()=>{
        dispatch(counterSlice.actions.minus());
        
    }
    const Reset=()=>{
        dispatch(counterSlice.actions.reset())
    }
    return<>
        <h1>Main</h1>
        <p>{count}</p>
        <button onClick={Plus}>+</button>
        <button onClick={Minus}>-</button>
        <button onClick={Reset}>reset</button>
    </>
}
export default RtkMain;