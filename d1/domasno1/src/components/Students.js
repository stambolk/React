import React from 'react';

export class Students extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div id='students'>
                {this.props.booler1 && this.props.booler2 ? (
                    this.props.students.map((e,i) =>{
                        return ("<li>" + e.name + " " + e.surname + " " + e.age + "</br>")
                    }).join("")
                ) : document.write("<h1>No users here<h1/>")}
            </div>
        )
    }
}