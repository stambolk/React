import {BUY_CAKE} from '../constants/CakeConstants'

export const buyCake = (cake) => {
    return{
        type: BUY_CAKE,
        payload: cake
    }
}

export const refil = () => {
    return{
        type: "REFIL",
        payload:  10
    }
}