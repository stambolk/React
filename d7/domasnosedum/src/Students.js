import React from 'react'

export const Students = (props) => {
    return(
        <div>
            <center>
            <table border="1">
                <thead >
                    <th>Ime</th>
                    <th>Prezime</th>
                    <th>Grad</th>
                    <th>Prosek</th>
                    <th>Delete</th>
                </thead>
                <tbody>
                    
                    {props.students.map((e,i)=>{
                        return(
                        <tr key={i}>
                            <td>{e.ime}</td>
                            <td>{e.prezime}</td>
                            <td>{e.grad}</td>
                            <td>{e.prosek}</td>
                            <td><button>Delete</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            </center>
        </div>
    )
}