import React from 'react';
import axios from 'axios';

export class PostList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            posts: undefined
        }
    }

    getPosts = () => {
        axios({
            url: "https://jsonplaceholder.typicode.com/posts",
            method: "GET"
        })
        .then(res =>{
            this.setState({
                posts: res.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){
        console.log(this.state)
        return(
            <div>
                <center>
                    <h1>Post List</h1>
                    <button
                    onClick={()=>{this.getPosts()}}
                    >Get Posts</button>
                    {this.state.posts && this.state.posts.length > 0 ?
                    <div>
                        {this.state.posts.map((e,i)=>{
                            return(
                            <div key={i}>
                                <h1>{e.title}</h1>
                                <h2>{e.body}</h2>
                            </div>
                            )
                        })}
                    </div> :
                    <h3>Loading...</h3>
                    }
                </center>
            </div>
        )
    }
}