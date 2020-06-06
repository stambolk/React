import React from 'react';
import {Todos} from './Todos'

export class App extends React.Component{
  constructor(props){
  super(props)
  this.state={

    student1: {
      age: 40,
      class: 15,
      name: "Ranco",
      surname: "Rancev"
    },
    student2: {
      age: 45,
      class: 5,
      name: "Danco",
      surname: "Dancev"
    },
    days : [
      "denes",
      "utre",
      "drugiden"
    ],
    todos:[
      {
        id: 1,
      todo: "React course",
      done: false
      },
      {
        id: 2,
        todo: "Dinner",
        done: false
      },
      {
        id: 3,
        todo: "Go to sleep",
        done: false
      }
    ],
    newTodo:""
  }
}

addTodo = (e) =>{
  if(e !== ""){
    var objekt = {
      id: this.state.todos.length + 1,
      todo: e,
      done:false
    }
    this.setState({
    todos: [...this.state.todos, objekt],
    newTodo: ""
  })
  }else{
    alert("Empty field")
  }



}

markTodoAsDone = (e) =>{
   this.setState({
     todos:[
      ...this.state.todos.map(
        row => (row.id === e.id) 
        ? 
        {
        id:row.id,
        todo: row.todo,
        done:!row.done
      }
       : row)
     ]
   })
}

changeHandler = (event) =>{
  this.setState({
    [event.target.name] : event.target.value
  })
}

updateStudent = (studentName, studentAge) => {
  this.setState({
    student1 : {
      ...this.state.student1,
      name: studentName,
      age: studentAge
    }
  })
}

addDays = () => {
  this.setState({
    days:["predzadutre",...this.state.days,"zadutre"]
  })
}

  render(){
    console.log(this.state.newTodo)
    return(
      <div>
        {/* <h1>
          {this.state.student1.name}
        </h1>
        <h1>
          {this.state.student1.age}
        </h1>
        <button type="button"
        onClick={()=>{
        this.updateStudent("Rajko", 69)
        }}
        >Update student</button>
        <hr></hr><hr></hr><hr></hr>
        {this.state.days.map((e,i)=>{
          return(<li key={i}>{e}</li>)
        })}
        <button type="button"
        onClick ={()=>{this.addDays()}}
        >Update</button> */}

      <Todos
      toDoList = {this.state.todos}
      markTodoAsDone = {this.markTodoAsDone}
      ></Todos>

      <input
      type="text"
      placeholder="Add new TODO"
      name={"newTodo"}
      value={this.state.newTodo}
      onChange={this.changeHandler}
      />

      <button
      type="button"
      onClick={()=>{this.addTodo(this.state.newTodo)}}
      >
      Dodaj
      </button>

      </div>
    )
  }
}