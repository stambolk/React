import React from 'react';
import {Link} from 'react-router-dom';

export class Nav extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/users'>Users</Link></li>
                </ul>
            </div>
        )
    }
}