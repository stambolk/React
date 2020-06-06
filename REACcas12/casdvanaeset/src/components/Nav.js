import React from 'react';
import {Link} from 'react-router-dom';

export class Nav extends React.Component{
    render(){
        return(
            <div>
                <ul>
                    <li><Link to='/'>home</Link></li>
                    <li><Link to='/hello'>hello</Link></li>
                    <li><Link to="/cake">Cake</Link></li>
                    <li><Link to='/comments'>Comments</Link></li>
                    <li><Link to='/posts'>Posts</Link></li>
                </ul>
            </div>
        )
    }
}