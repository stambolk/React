import React from 'react';

export class Cars extends React.Component{
    render(){
        return(
            <div>
                <table border="1" >
                    <thead>
                    <tr>
                            <th>Brand</th>
                            <th>Model</th>
                            <th>Year</th>
                            <th>City</th>
                            <th>Plate Number</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.props.cars.map((e,i)=>{
                            return(
                                    <tr key={i}>
                                        <td>{e.brand}</td>
                                        <td>{e.model}</td>
                                        <td>{e.year}</td>
                                        <td>{e.plates.grad}</td>
                                        <td>{e.plates.oznaka}</td>
                                    </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}