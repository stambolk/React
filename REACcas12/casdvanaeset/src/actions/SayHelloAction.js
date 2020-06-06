import {SAY_HELLO} from '../constants/SayHelloConstants'

export const SayHello = () => {
    return{
        type: SAY_HELLO,
        payload: "Hello"
    }
}