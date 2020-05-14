import React from 'react';

export class Welcome extends React.Component{
    render(){
        return(
            console.log(this.props),
            <div id="welcome">
                <h2>Welcome , {this.props.ime} {this.props.prezime}</h2>
                <h3>Age: {this.props.age} </h3>
            </div>
        )
    }
}
