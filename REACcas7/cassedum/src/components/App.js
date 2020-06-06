import React from 'react';
import {ListOfThings} from './ListOfThings'
import {Contact} from './Contact'
import {Info} from './Info'
import {Home} from './Home'
import {Switch, Route} from 'react-router-dom'
import {Navigation} from './Navigation'

export class App extends React.Component{
  constructor(props){
  super(props)
  this.state={
    listOfThings:
       [
         {id:1,name:"Pero",lastName:"Perovski",year:1996},
         {id:2,name:"Ivan",lastName:"Ivanovski",year:1997},
         {id:3,name:"Stefan",lastName:"Stefanovski",year:1998}
    ]
  }
}
  
  getData = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    }) 
  }

  submitData = (event) =>{
    event.preventDefault()
    var user = {
      id: this.state.listOfThings.length + 1,
      name: this.state.name,
      lastName: this.state.lastName,
      year: this.state.year
    }
    this.setState({
      listOfThings: [...this.state.listOfThings, user],
      name: "",
      lastName: "",
      year: ""
    })
  }

  deleteUser = (e) => {
    this.setState({
   listOfThings: [...this.state.listOfThings.filter(u => e.id !== u.id )]
   })
}
 
  render(){
    return(
      <div>
         
         <Navigation/>

        <Switch>
          <Route path="/home" component={Home} />
          <Route path= "/info" component={Info} />
          <Route path="/contact" component={Contact} />
        </Switch>



        
        <input
        type="text"
        placeholder="Name"
        name="name"
        value = {this.state.name}
        onChange = {this.getData}
        />
        <br></br>
        <input
        name="lastName"
        type="text"
        placeholder="Surname"
        value = {this.state.lastName}
        onChange = {this.getData}
        />
        <br></br>
        <input
        name="year"
        type="text"
        placeholder="Year"
        value = {this.state.year}
        onChange = {this.getData}
        />
        <br></br>
        <button
        type="submit"
        onClick = {this.submitData}
        >Submit</button>
        <ListOfThings
        deleteUser = {this.deleteUser}
        listOfThings = {this.state.listOfThings}
        style={{float:'right'}}/>
      </div>
    )
  }
}
