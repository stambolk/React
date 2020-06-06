import React from 'react';
import axios from 'axios';
import {Posts} from './Posts'
import {PostList} from './PostList';
import {Switch, Route} from 'react-router-dom';
import {Nav} from './Nav'
import {Comments} from './Comments'
import {Students} from './Students'


export class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      posts: [],
      comments: [],
      students: []
    }
  }

  componentDidMount(){
    axios({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET"
    })
    .then(res => {
      this.setState({
        posts: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
    axios({
      url: "https://jsonplaceholder.typicode.com/comments",
      method: "GET"
    })
    .then(res => {
      this.setState({
        comments: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
    axios({
      url: "http://localhost:4200/api/v1/students",
      method: "GET"
    })
    .then(res => {
      this.setState({
        students: res.data
      })
    })
    .catch(err => {
      console.log(err)
    })
  }

  render(){
    return(
      <div>
        <Nav/>
        <Switch>
          <Route path="/posts" render = {()=>{
            return <Posts posts={this.state.posts} />
          }} />
          <Route path="/post-list" component={PostList} />
          <Route path="/comments" render = {()=>{
            return <Comments comments={this.state.comments}/>
          }}/>
          <Route
          path = "/students" 
          render = {()=>{
            return <Students students={this.state.students}/>
          }}
          />
        </Switch>
      </div>
    )
  }
}