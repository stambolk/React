import React from 'react';

export class Todos extends React.Component{
    render(){
        return(
            <div>
                <ol>
                    {this.props.toDoList.map((e,i)=>{
                        return(
                            <li key={i}>
                                <span>{e.todo}</span>
                                <input
                                type="checkbox"
                                checked = {e.done}
                                value = {e.done}
                                onChange = {()=>{this.props.markTodoAsDone(e)}}
                                />
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}