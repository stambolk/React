import React from 'react';
import {Link} from 'react-router-dom';

export class Nav extends React.Component{
    render(){
        return(
            <div>
                <center>
                    <li>
                        <Link to={"/posts"}>Posts</Link>
                    </li>
                    <li>
                        <Link to={"/post-list"}>Post List</Link>
                    </li>
                    <li>
                        <Link to={"/comments"}>Comments</Link>
                    </li>
                    <li>
                        <Link to={"/students"}>Students (DB Link)</Link>
                    </li>
                </center>
            </div>
        )
    }
}