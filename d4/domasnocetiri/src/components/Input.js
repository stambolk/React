import React from 'react';

export class Input extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Dtag : "input",
        }
    }

    Changer = () => {
        this.state.Dtag === "input" ?  this.setState({Dtag : "textarea"}) : this.setState({ Dtag : "input" })
    }

    render(){
        console.log(this.state)
        return(
            <div>
                {this.state.Dtag === "input" ? <input>
                </input>:
                <textarea></textarea>
                }
                <br></br>
                <button
                onClick={()=>{this.Changer()}}
                >Change to textarea
                </button>
            </div>
        )
    }
}