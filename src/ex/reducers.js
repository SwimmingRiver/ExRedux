
const initialState = {
    value:0
}
export default function AddSubReducer(state=initialState,action){
    switch(action.type){
        case 'INCRESE':{
            return{
                ...state,
                value: state.value +1
            }
        }
        case'DECREASE':{
            return{
                ...state,
                value:state.value - 1
            }
        }
        case 'reset':{
            return {
                ...state,
                value:0,
            }
        }
        default: return state
    }
}