import React from 'react';

export const Posts = (props) => {
    return(
        <div>
            {
                props.posts.length > 0 ?
                <div>
                { props.posts.map((e,i)=>{
                    return(
                        <center key = {i}>
                        <h3>{e.title}</h3>
                        <p>{e.body}</p>
                        </center>
                    )
                  })
                }
                </div>
                :
                <h1>Loading Posts</h1>
            }
        </div>
    )
}