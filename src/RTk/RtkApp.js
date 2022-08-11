import RtkMain from "./RtkMain";
import { Provider } from 'react-redux';
import { store } from "./RtkStore";

function RtkApp(){
    return<>
        <h1>RTk</h1>
        <Provider store={store}>
        <RtkMain/>
        </Provider>
    </>
}
export default RtkApp;