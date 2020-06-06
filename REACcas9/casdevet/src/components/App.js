import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Gallery} from './Gallery'
import {Nav} from './Nav'
import axios from 'axios'
import {API_URL} from '../constants'
import '../style/style.css'


export class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      pictures: [],
      selectedPhoto: ""
    }
  }

  openPhoto = (e) => {
    this.setState({
      selectedPhoto : e.url
    })
  }

  closePhoto = () => {
    this.setState({
      selectedPhoto: ""
    })
  }

  componentDidMount(){
    axios({
      url: API_URL + "/photos",
      method: "GET"
    })
    .then(res=>{
      this.setState({
        pictures : res.data
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }

  render(){
    console.log(this.state.selectedPhoto)
    return(
      <div>
        <Nav/>
        <Switch>
          <Route path="/gallery" 
          render={()=>{
            return(
              <Gallery
              openPhoto = {this.openPhoto}
              pictures = {this.state.pictures}
              selectedPhoto = {this.state.selectedPhoto}
              closePhoto = {this.closePhoto}
              />
            )
          }}
          />
        </Switch>
      </div>
    )
  }
}