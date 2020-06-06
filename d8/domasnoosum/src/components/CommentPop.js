import React from 'react';

export const CommentPop = (props) => {
   return(
       <div className="popup">
           <button
           className="close-popup"
           name="button"
           onClick={props.closeBody}
           >&times;</button>
           <div className="popup-container" >
           <h1 
           onClick={props.closeBody}
           style={{background: "aquamarine"}}>
               {props.selectedBody}
           </h1>
           </div>
       </div>
   )
}