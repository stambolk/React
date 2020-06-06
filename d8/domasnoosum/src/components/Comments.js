import React from 'react';
import {CommentPop} from './CommentPop'

export const Comments = (props) =>{
    return(
        <div id="comments" style={{justifyContent:"center"}}>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Display Body</th>
                    </tr>
                </thead>
            {props.comments.slice(0,50).map(e=>{
                return(
                <tbody className="dataHolder" key={e.id}>
                    <tr >
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.email}</td>
                        <td style={{textAlign:"center"}}><button
                        onClick={()=>{props.displayBody(e)}}
                        >Display</button></td>
                    </tr>
                </tbody>
                )
            })}
            </table>
            {
                props.selectedBody !== "" ? <CommentPop selectedBody = {props.selectedBody} closeBody = {props.closeBody}/> : null
            }
        </div>
    )
}//id name email