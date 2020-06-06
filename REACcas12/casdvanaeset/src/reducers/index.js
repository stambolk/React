import {combineReducers} from 'redux';
import SayHelloReducer from './SayHelloReducer';
import CakeReducer from './CakeReducer';
import CommentsReducer from './CommentsReducer'
import PostReducer from './PostReducer'

export default combineReducers({
    SayHelloReducer,CakeReducer, CommentsReducer, PostReducer
})