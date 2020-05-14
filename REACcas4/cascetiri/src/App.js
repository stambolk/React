import React from 'react';

export class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      brojac: 0
    }
  }

  usernameChangeHandler= (event) => {
    this.setState({
      username: event.target.value
    })
  }
  passwordChangeHandler = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  emailChangeHandler = (event) => {
    this.setState({
      email: event.target.value
    })
  }
  brojacHandler = () => {
    this.setState({
      brojac: this.state.brojac + 1
    })
  }


  render(){
    console.log(this.state)
    return(
      <div>
      <input
      type={"text"}
      name={"username"}
      placeholder={"Username"}
      value={this.state.username}
      onChange={this.usernameChangeHandler}
      ></input>
      <br></br>
      <br></br>
      <input
      type={"password"}
      name={"password"}
      placeholder = {"password"}
      value = {this.state.password}
      onChange = {this.passwordChangeHandler}
      >
      </input>
      <br></br>
      <br></br>
      <input
      type={"email"}
      name={"email"}
      placeholder = {"email"}
      value = {this.state.email}
      onChange = {this.emailChangeHandler}
      ></input>
      <br></br>
      <h2>This image is clicked {this.state.brojac} times</h2>
      <br></br>
      <img
      onClick = {this.brojacHandler}
      src={"https://static-1.mojvideo.com/foto78547-1986-68185/to-je-pa-slikica-za-osebno.jpg"}/>
      </div>
    )
  }
}