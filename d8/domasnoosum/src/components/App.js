import React from 'react';
import {Switch, Route} from "react-router-dom";
import axios from 'axios';
import {api} from '../constants';
import {Comments} from './Comments';
import {Nav} from './Nav';
import './styles/style.css'

export class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      comments: [],
      selectedBody: ""
    }
  }

  displayBody = (e) => {
    this.setState({
      selectedBody : e.body
    })
  }

  closeBody = () => {
    this.setState({
      selectedBody: ""
    })
  }

  componentDidMount(){
    axios({
      url : api + "/comments",
      method: "GET" 
    })
    .then(res=>{
      this.setState({
        comments : res.data
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }

  render(){
    console.log(this.state.selectedBody)
    return(
      <div>
        <Nav/>
          <Switch>
            <Route
            path='/comments'
            render={()=>{
              return(
                <Comments
                displayBody={this.displayBody}
                closeBody={this.closeBody}
                comments = {this.state.comments}
                selectedBody = {this.state.selectedBody}
                />
              )
            }}
            />
          </Switch>
      </div>
    )
  }
}