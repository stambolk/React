import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Hello from './Hello';
import Cake from './Cake';
import {Nav} from './Nav';
import Comments from './Comments';
import {Comment} from './Comment'
import Posts from './Posts'


class App extends React.Component{
  render(){
    return(
      <div>
        <Nav/>
        <Switch>
          <Route path='/comments' component={Comments}/>
          <Route path="/hello" component={Hello}/>
          <Route path='/cake' component={Cake}/>
          <Route path='/comment/:commentId' component={Comment}/>
          <Route path='/posts' component={Posts}/>
        </Switch>
      </div>
    )
  }
}

export default App