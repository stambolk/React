import React from 'react';
import {Link} from 'react-router-dom'

export class Nav extends React.Component{
    render(){
        return(
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>
                <li>
                    <Link to={'/gallery'}>Gallery</Link>
                </li>
            </ul>
        )
    }
}