import { useDispatch, useSelector,Provider } from "react-redux";
import {createStore} from 'redux';
const reducer = (state,action)=>{
    if(state===undefined){
        return{
            number:1,
        }
    }
    const newState = {...state};  
    if(action.type==='PLUS'){
            newState.number++;
    }else if(action.type==='MINUS'){
        newState.number--;
    }
    return newState;
}
const store = createStore(reducer);
function ExreactRedux(){
    return<>
        <div>
            <h1>ex react-redux</h1>
            <Provider store={store}>
            <Box1/>
            <Box2/>
            <Box3/>
            </Provider>
        </div>
    </>
}
function Box1(){
    const number = useSelector((state)=>state.number)
    return<>
    <div>
        <h2>Box1</h2>
        <div>{number}</div>
    </div>
    </>
}
function Box2(){
    const dispatch = useDispatch();
    return<>
    <div>
        <h2>Box2</h2>
        <button onClick={()=>{dispatch({type:'PLUS'})}}>+</button>
    </div>
    </>
}
function Box3(){
    const dispatch = useDispatch();
    return<>
    <div>
        <h2>Box3</h2>
        <button onClick={()=>{dispatch({type:'MINUS'})}}>-</button>
    </div>
    </>
}
export default ExreactRedux;