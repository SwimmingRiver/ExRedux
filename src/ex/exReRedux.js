import { Provider } from 'react-redux';
import {createStore} from 'redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

function ExReRedux(){
    const reducer = (state=[],action)=>{
        let newState =[];
       newState = [...state,action.payload];
        switch(action.type){
            case "ADD": return newState;
            default: return state;
        }
    }
    const store = createStore(reducer);
    return(
        <>
        <h1>EXRRR</h1>
        <Provider store={store}>
        <Main/>
        </Provider>
        </>
    )
}
function Main(){
    return(<>
    <h2>Main</h2>
    <Item name='hi'/>
    <Item name='hello'/>
    <Item name='hola'/>
    
    <hr/>
    <Res/>
    </>)
}
function Item(props){
    const dispatch = useDispatch();
    const name = props.name;
    return(<>
    <h3>{name}</h3>
    <button onClick={()=>{
        dispatch(add(name));
        }}>+</button>
    </>)
}
function Res(){
    const List = useSelector((state)=>state.map((i)=>i));
    return(<>
    <h2>Result</h2>
    <ul>{List.map((item,index)=><li key={index}>{<Item name={item}/>}</li>)}</ul>
    </>)
}
const add=(item)=>{
    console.log(item);
    return{
        type:"ADD",
        payload:item,
    };
    
};
export default ExReRedux;