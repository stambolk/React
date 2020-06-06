import {GET_USERS_FAIL,GET_USERS_SUCCESS} from '../constants/userConstants'

const initialState = {
    users:[],
    error: ""
}

const UserReducer = (state=initialState,action) => {
    switch(action.type){
       case GET_USERS_SUCCESS:
           return{
               ...state,
               users: action.payload
           }
        case GET_USERS_FAIL:{
            return{
                ...state,
                error: action.payload
            }
        }
        default: return state
    }
}

export default UserReducer;