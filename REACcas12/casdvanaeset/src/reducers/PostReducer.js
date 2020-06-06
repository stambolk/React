import {GET_POSTS_FAIL,GET_POSTS_SUCCESS} from '../constants/PostConstants'

const initialState = {
    posts: [],
    error: ""
}

const PostReducer = (state=initialState,action) => {
    switch(action.type){
        case GET_POSTS_SUCCESS:
            return{
                ...state,
                posts: action.payload
            }
        case GET_POSTS_FAIL:
            return{
                ...state,
                error: action.payload
            }
        default: return state;
    }
}

export default PostReducer