import React from 'react';
import {Input} from './Input';

export class Login extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            inputfield: "",
            inputfield2: "",
        }
    }
    


    handleChange = (event) => {
        console.log(event.target.value)
        this.setState({
            [event.target.name] : event.target.value
        })
    }

        submitForm = (event) => {
        event.preventDefault();
    }


    render(){
        console.log(this.state)
        return(
            <div>
                <form className="form-control" onSubmit={this.submitForm}>
                    <Input id="input1"
                    value={this.state.inputfield}
                    type="text"
                    name={"inputfield"}
                    placeholder={this.state.inputfield}
                    onChange = {this.handleChange}
                    />
                    <Input id="input2"
                    value={this.state.inputfield2}
                    type="text"
                    name={"inputfield2"}
                    placeholder={this.state.inputfield2}
                    onChange={this.handleChange}
                    />
                </form>
            </div>
        )
    }
}