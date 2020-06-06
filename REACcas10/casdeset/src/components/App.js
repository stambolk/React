import React from 'react'
import {Switch, Route} from 'react-router-dom';
import {Nav} from './Nav'
import { Contact } from './Contact';
import {About} from './About'
import { Home } from './Home';

export class App extends React.Component{
  constructor(props){
    super(props)

    this.state={
      solid: "kolid"
    }
  }
  render(){
    return(
      <div>
        <Nav/>
        <Switch>
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About}/>
          <Route path="/home" component={Home}/>
        </Switch>
      </div>
    )
  }
}