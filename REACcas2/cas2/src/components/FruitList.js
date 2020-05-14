import React from 'react';

export class FruitList extends React.Component{
    render(){
        console.log(this.props);
        return(
            <div>
                {this.props.fruits.map((fruit,i)=>{
                  return(
                      <li key={i}>{fruit}</li>
                  )
                })}
            </div>
        )
    }
}