
import store from './store';
function ExMain(){
    let contents = store.getState();
    return(
        <>
            <h1>EXMAIN</h1>
            <h2>{contents}</h2>
        </>
    )
}
export default ExMain;


