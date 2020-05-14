import React from 'react';

export class Student extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div id="student">
                <h2>Student {this.props.student.ime} has ID number {this.props.student.brIndeks}</h2>
            </div>
        )
    }
}