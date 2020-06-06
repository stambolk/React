import {FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAIL} from '../constants/CommentsConstants';
import axios from 'axios'

export const fetchCommentsSuccess = (comments) => {
    return{
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments
    }
} 

export const fetchCommentsFail = (error) => {
    return{
        type: FETCH_COMMENTS_FAIL,
        payload: error
    }
}

export const fetchCommentsRequest = () => {
    return dispatch => {
        axios({
            url: "https://jsonplaceholder.typicode.com/comments",
            method: "GET"
        })
        .then(res => {
            dispatch(fetchCommentsSuccess(res.data))
        })
        .catch(err => {
            dispatch(fetchCommentsFail(err))
        })
    }
}