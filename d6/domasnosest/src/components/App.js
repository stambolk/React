import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Navigation} from './Navigation'
import {About} from './About';
import {Home} from './Home';
import {Contact} from './Contact'

export class App extends React.Component{
  render(){
    return(
      <div>
        <Navigation/>

        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </Switch>
      </div>
    )
  }
}