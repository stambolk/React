import {GET_POSTS_SUCCESS, GET_POSTS_FAIL} from '../constants/PostConstants';
import axios from 'axios';

export const getPostsSuccess = (posts) => {
    return{
        type: GET_POSTS_SUCCESS,
        payload: posts
    }
}

export const getPostsFail = (err) => {
    return{
        type: GET_POSTS_FAIL,
        payload: err
    }
}

export const getPostsRequest = () => {
    return dispatch => {
        axios({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "GET"
        })
        .then(res => {
            dispatch(getPostsSuccess(res.data))
        })
        .catch(err=> {
            dispatch(getPostsFail(err))
        })
    }
}