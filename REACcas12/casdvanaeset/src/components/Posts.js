import React from 'react';
import {connect} from 'react-redux';
import {getPostsRequest} from '../actions/PostsActions';

class Posts extends React.Component{

    componentDidMount(){
        this.props.getPosts()
    }
    render(){
        return(
            <div>
                {this.props.posts.length > 0 ?
                this.props.posts.slice(0,10).map(e=>{
                    return(
                        <div key={e.id} style={{maxWidth:'500px', textAlign:'center'}}>
                            <h1>ID:{e.id}</h1>
                            <h3>POST:{e.body}</h3>
                        </div>
                    )
                })
                : <h2>Loading</h2> } 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state.PostReducer.posts
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getPosts : () => {
            dispatch(getPostsRequest())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Posts);