
import  {legacy_createStore as createStore} from "redux"
import AddSubReducer from './reducers';


const store = createStore(AddSubReducer);

export default store;