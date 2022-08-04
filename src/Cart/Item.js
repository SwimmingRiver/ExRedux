import styled from "styled-components";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Box = styled.div`
    border: solid 3px black;
    width: 80px;
    height: 85px;
`;
function Item(props){
    const dispatch = useDispatch();
    const sendInfo=()=>{
        const IName = props.name;
       dispatch({type:"ADD"})
    }
    return<>
        <Box>
        {props.name}/{props.number}
        <button onClick={sendInfo}>+</button>
        </Box>
    </>
}
export default Item;