import {SAY_HELLO} from "../constants/SayHelloConstants"

const initialState = {
    greeting: ""
}

const SayHelloReducer = (state=initialState,action) => {
    switch(action.type){

        case SAY_HELLO:
            return{
                ...state,
                greeting: action.payload
            }

        default: return state;
    }
}

export default SayHelloReducer