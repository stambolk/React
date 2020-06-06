import {
    BUY_CAKE
} from '../constants/CakeConstants';

const initialState = {
    cakes: 10,
    error: undefined
}

const CakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            if (state.cakes - action.payload >= 0)
                return {
                    ...state,
                    cakes: state.cakes - action.payload
                }
            else {
                return {
                    ...state,
                    error: `Not enough cakes, only ${state.cakes} left`
                }
            }
            case "REFIL":
                return {
                    ...state,
                    cakes: action.payload,
                    error: undefined
                }
                default:
                    return state;
    }
}

export default CakeReducer;