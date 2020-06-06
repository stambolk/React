import React from 'react';

export const Comments = (props) => {
    return(
        <center>
            {
                props.comments.length > 0 ?
                <div>
                    {props.comments.slice(0,10).map((e,i)=>{
                        return(
                            <div key={i}>
                                <p>{e.email}</p>
                                <h1>{e.name}</h1>
                                <h2>{e.body}</h2>
                            </div>
                        )
                    })}
                </div> :
                <h2>Loading....</h2>
            }
        </center>
    )
}