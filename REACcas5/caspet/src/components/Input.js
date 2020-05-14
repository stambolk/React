import React from 'react';

export class Input extends React.Component{
    render(){
        return(
            <p>
                {this.props.textarea ==="input" ? <input
                type={this.props.type}
                placeholder={this.props.placeholder}
                name={this.props.name}
                onChange={this.props.onChange}
                />
                :
                <textarea
                placeholder={this.props.placeholder}/>
            }
                {
                    this.props.name === "password" ?
                    <button onClick={this.props.toggle} type={"button"} className={"eye-button"}>
                    <i className={"fa " + (this.props.type==="password" ? "fa-eye-slash" : "fa-eye") }></i>
                    </button> : null
                }
            </p>
        )
    }
}