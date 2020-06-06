import React from 'react';
import {Link} from 'react-router-dom';

export class Nav extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to="/">Homepage</Link></li>
                    <li><Link to="/comments">Comments</Link></li>
                </ul>
            </div>
        )
    }
}