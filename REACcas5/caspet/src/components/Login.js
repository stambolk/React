import React from 'react';
import {Input} from './Input'

export class Login extends React.Component{
    constructor(props){
        super(props)

        this.state={
            username: "",
            password: "",
            inputType: "password",
            tagType: "input"
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    togglePassword = () => {
        this.setState({
            inputType: this.state.inputType === "password" ? "text" : "password"
        })
    }
    toggleTag = () => {
        this.setState({
            tagType: this.state.tagType === "input" ? "textarea" : "input"
        })
    }



    render(){
        return(
            <div>
                <form onSubmit={this.submitForm}>
                    <Input
                    type={"text"}
                    placeholder={"Name"}
                    name={"username"}
                    onChange={this.handleChange}
                    textarea={this.state.tagType}
                    />
                    <Input
                    type={this.state.inputType}
                    placeholder={"Password"}
                    name={"password"}
                    onChange={this.handleChange}
                    toggle = {this.togglePassword}
                    textarea={this.state.tagType}
                    />
                    <button className="action-button"
                    onClick={()=> {this.toggleTag()}}
                    type={"button"}>Change input</button>
                    <button className="action-button" >Sign In</button>
                </form>
            </div>
        )
    }
}