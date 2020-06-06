import axios from 'axios';
import {GET_USERS_FAIL,GET_USERS_SUCCESS} from '../constants/userConstants'

export const GetUsersSuccess = (users) => {
   return{
       type: GET_USERS_SUCCESS,
       payload: users
   }
}

export const GetUsersFail = (err) => {
    return{
        type: GET_USERS_FAIL,
        payload: err
    }
}

export const GetUsersRequest = () => {
    return dispatch =>{
        axios({
            url: "https://jsonplaceholder.typicode.com/users/",
            method: "GET"
        })
        .then(res=>{
            dispatch(GetUsersSuccess(res.data))
        })
        .catch(err=>{
            dispatch(GetUsersFail(err))
        })
    }
}