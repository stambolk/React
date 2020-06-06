import React from 'react';
import {Link} from 'react-router-dom'

export class Navigation extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to={"/users"}>Users</Link></li>
                    <li><Link to={"/user-list"}>UserList</Link></li>
                </ul>
            </div>
        )
    }
}