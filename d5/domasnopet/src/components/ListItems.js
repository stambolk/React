import React from 'react';

export class ListItems extends React.Component{
    render(){
        return(
            <div>
                <ol>
                    {this.props.listItems.map((e,i)=>{
                        return(
                            <li key={i}>
                                <span>{e.listitem}</span>
                                <input
                                type="checkbox"
                                checked = {e.done}
                                value = {e.done}
                                onChange = {()=>{this.props.markListaDone(e)}}
                                />
                                <button
                                onClick = {()=>{this.props.deleteElement(e)}}
                                >Delete</button>
                            </li>
                        )
                    })}
                </ol>
            </div>
        )
    }
}