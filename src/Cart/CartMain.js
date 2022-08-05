
import Item from './Item';
import { useSelector } from 'react-redux';

function CartMain(){
    return(
        <>
        <h1>CartMain</h1>
        <Item name="first" number="1"/>
        <Item name="sec" number="2"/>
        <Item name="third" number="3"/>
        <Item name="fourth" number="4"/>
        <hr/>
        </>
    )
}
export default CartMain;