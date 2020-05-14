import React from 'react';
import {Welcome} from './Welcome';
import {Comments} from './Comments';
import {Student} from './Student';
import {FruitList} from './FruitList'

export class App extends React.Component{
  render(){

    var name = 'Kok';
    var student = {
       ime: "Filip",
       prezime: "Filipovski",
       brIndeks: "1231412"
    };
    var fruits = [
      "banana",
      "mango",
      "papaya"
    ]

    return(
      <div id='app'>
        <FruitList
        fruits = {fruits}
        />
        <h2>Rabote</h2>
        <Welcome ime={name}
        prezime = {"Prezimovski"}
        age={20}
        />
        <Welcome 
        ime = {"Pero"}
        prezime = {"Prezem"}
        age = {35}
        />
        <Comments
        hasComments={true}
        />
        <Student
        student = {student}
        />
      </div>
    )
  }
}

export default App;