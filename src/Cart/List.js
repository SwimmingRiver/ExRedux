import { useSelector } from "react-redux";
import Item from './Item';

function List(){ 
const aList = useSelector((state)=>state.map((i)=>i));
console.log(aList)
    return(
        <>
        <h1>AddList</h1>
        <ul>{aList.map((item,index)=><li key={index}>{
            <Item name={item.name} number={item.number}/>
        }
            </li>)}</ul>
        </>
    )
}
export default List;