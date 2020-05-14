import React from 'react';
import {Students} from './Students';


export class App extends React.Component{
  render(){
    var students = 
    [
     {
      name: "Rajko",
      surname: "Rajkov",
      age: "33"
     },
     {
      name: "Trajko",
      surname: "Trajkov",
      age: "29"
     },
     {
      name: "Pajko",
      surname: "Pajkov",
      age: "43"
     }
    ];

    var booler1 = true;
    var booler2 = true;

    return(
      <div>
        <Students
        booler1 = {booler1}
        booler2 = {booler2}
        students = {students}
        />
      </div>
    )
  }
}