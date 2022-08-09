import styled from "styled-components";
import { useDispatch } from 'react-redux';
const Box = styled.div`
    border: solid 3px black;
    width: 80px;
    height: 85px;
`;
const add=(name,num)=>{
    let item={
        name:name,
        number:num,
    }
    return{
        type:"ADD",
        payload:item,
        }
    };
function Item(props){
    const IName = props.name;
    const Nums =props.number
    const dispatch = useDispatch();
    const sendInfo=()=>{    
       dispatch(add(IName,Nums))
    }
    return<>
        <Box>
        {props.name}/{props.number}
        <button onClick={sendInfo}>+</button>
        </Box>
    </>
}
export default Item;