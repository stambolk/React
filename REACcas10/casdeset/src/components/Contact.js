import React from 'react';

export class Contact extends React.Component{
    constructor(props){
        super(props)

        this.state={
            disabled: false,
            fName: "",
            lName: "",
            adress: ""
        }
    }

    handleChange = (event) => {
        this.setState({
        [event.target.name] : event.target.value
        })
    }

    freeze = (event) => {
        event.preventDefault()
        this.setState({
            disabled: !this.state.disabled
        })
    }

   render(){
   console.log(this.state)
   return(
       <div>
                <form>
                   <label>First Name  <input disabled={this.state.disabled} value={this.state.fName} onChange={this.handleChange} name="fName" type="text"></input></label> <br/>
                   <label>Last Name  <input disabled={this.state.disabled} value={this.state.lName} onChange={this.handleChange} name="lName" type="text"></input></label> <br/>
                   <label> Adress <input disabled={this.state.disabled} value={this.state.adress} onChange={this.handleChange} name="adress" type="text"></input></label> <br/>
                   {this.state.disabled ? <button onClick={this.freeze}>Enable</button> : <button onClick={this.freeze}>Disable</button>}
               </form> 
       </div>
   )
  }
}