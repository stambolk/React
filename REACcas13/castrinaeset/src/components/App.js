import React from 'react';
import {Nav} from './Nav'
import {Switch,Route} from 'react-router-dom'
import Users from './Users'
import {User} from './User'
import {UserHook} from './UserHook'

class App extends React.Component{
  render(){
    return(
      <div>
        <Nav/>
        <Switch>
          <Route path='/users' component={Users} />
          <Route path='/user/:userId' component={User} />
          <Route path='/user-hook/:userId' component={UserHook} />
        </Switch>
      </div>
    )
  }
}

export default App