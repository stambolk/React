import React from 'react';
import {Popup} from './Popup'

export const Gallery = (props) => {
    return(
        <div id="gallery">
            {props.pictures.slice(0,51).map((e,i) => {
                return(
                    <div 
                    onClick={()=>{props.openPhoto(e)}}
                    key={e.id}
                    className = {"image-holder"}
                    >
                        <img src={e.thumbnailUrl} alt={e.title}/>
                    </div>
                )
            })}
            {
                props.selectedPhoto !== "" ? <Popup closePhoto={props.closePhoto} selectedPhoto={props.selectedPhoto} /> : null
            }
        </div>
    )
}