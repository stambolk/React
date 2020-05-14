import React from 'react';
import PropTypes from 'prop-types';

export class Movie extends React.Component{
   render(){
       console.log(this.props)
       return(
        <div>
        <h1 style={{textAlign:"center", border:"2px solid rgba(0, 0, 0, .1)", backgroundColor:" rgba(0, 0, 0, .05)", margin:"20px"}}>MOVIES</h1>
           <div style={{display:"flex",position:"inherit", flexFlow:"wrap", minHeight:"100%", width:"100%", minWidth:"950px"}}>
               {this.props.movieList.map((e,i)=>{
                   return(
                    <div key={i} style={{maxHeight:"30%", maxWidth:"30%", minWidth:"500px", border:"2px solid rgba(0, 0, 0, .1)",backgroundColor:" rgba(0, 0, 0, .05)", margin:"5px"}}>
                    <img alt="" style={{maxHeight:"100%", maxWidth:"49%"}} src={e.imgUrl}></img>           
                    <div style={{ float:"right", maxHeight:"100%", maxWidth:"50%", textAlign:"center"}}>
                        <div style={{resize:"none", border:"2px solid rgba(0, 0, 0, .1)",padding:"5px", margin:"5px"}}>
                               <h1 style={{padding:"5px", margin:"5px"}}>{e.name}</h1>
                               <h3>{e.date}</h3>
                        </div>
                               <p style={{fontFamily:"sans-serif", margin:"10px"}}>{e.plot}</p>
                               <br></br>
                               <a style={{}} href={e.imdbLink}><button>IMDB Link</button></a>
                    </div> 
                    </div>
                   )
               })}
           </div>
   
           </div>
       )
   }
}

Movie.propTypes={
    movieList: PropTypes.array.isRequired,
}