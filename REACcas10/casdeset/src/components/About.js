import React from 'react';

export class About extends React.Component{
    constructor(props){
        super(props)
        this.state={
            studentId: "",
            city: "",
            dob: "",
            gpa: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    } 

    alertOnClick = () => {
        alert(
            "Student ID " + this.state.studentId + ", City " + this.state.city + ", DOB " + this.state.dob +", GPA " + this.state.gpa
        )
    }

    render(){
    console.log(this.state)
    return(
        <div>
          <form>
              <label>Student Id</label>
              <input onChange={this.handleChange} name="studentId" type="text"></input>
              <br></br>
              <label>City</label>
              <input onChange={this.handleChange} name="city" type="text"></input>
              <br></br>
              <label>DOB</label>
              <input onChange={this.handleChange} name="dob" type="text"></input>
              <br></br>
              <label>GPA</label>
              <input onChange={this.handleChange} name="gpa" type="text"></input>
              <br></br>
              <button onClick={this.alertOnClick}>Alert</button>
          </form>
        </div>
    )
  }
}

//studentid,city dob gpa