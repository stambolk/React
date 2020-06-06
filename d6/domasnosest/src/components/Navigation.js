import React from 'react';
import {Link} from 'react-router-dom';

export class Navigation extends React.Component{
    render(){
        return(
            <div>
                <center>
                <table>
                    <tr>
                        <td><Link to={"/"}>Main</Link></td>
                        <td><Link to={"/home"}>Home</Link></td>
                        <td><Link to={"/contact"}>Contact</Link></td>
                        <td><Link to={"/about"}>About</Link></td>
                        </tr>
                </table>
                </center>
            </div>
        )
    }
}