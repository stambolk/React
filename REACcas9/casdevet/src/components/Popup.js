import React from 'react';

export const Popup = (props) => {
    return(
        <div className="popup">
           <button name="button" onClick={props.closePhoto} className="close-popup">&times;</button>
           <div className="popup-container">
              <img onClick={props.closePhoto} src={props.selectedPhoto} alt={""} />
           </div>
        </div>
    )
}