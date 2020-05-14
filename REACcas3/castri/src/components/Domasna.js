import React from 'react';

export class Domasna extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                {this.props.showUser ? <h2>{this.props.user1.ime}</h2> : <h2>{this.props.user2.ime}</h2>}
                {this.props.showHeader && <h2>Domasna</h2>}
            </div>
        )
    }
}