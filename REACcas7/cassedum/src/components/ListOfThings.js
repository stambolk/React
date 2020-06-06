import React from 'react';

export class ListOfThings extends React.Component{
    render(){
        return(
            <div>
                <table border="1">
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Surname</td>
                        <td>Year</td>
                        <td>Delete</td>
                    </tr>
                    {this.props.listOfThings.map((e,i)=>{
                        return(
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.lastName}</td>
                                <td>{e.year}</td>
                                <td><button
                                onClick={()=>{this.props.deleteUser(e)}}
                                >Delete</button></td>
                            </tr>
                        )
                    })}
                    
                </table>
            </div>
        )
    }
}