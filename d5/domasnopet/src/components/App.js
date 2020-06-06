import React from 'react'
import { ListItems } from './ListItems'

export class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      lista:[
        {
        id: 1,
        listitem: "Eden",
        done: false,
        },
        {
        id: 2,
        listitem: "Dva",
        done: false,
        },
        {
        id: 3,
        listitem: "Tri",
        done: false,
        }
      ]
    }
  }
  
  deleteElement = (e) => {
    this.setState({
      ...this.state.lista.splice(e.value,1)
    })
  }

  markListaDone = (e) => {
    this.setState({
      lista:[
        ...this.state.lista.map(
          el =>  (el.id === e.id ) ?
          {
            id: el.id,
            listitem: el.listitem,
            done: !el.done
          }
          : el
        )
      ]
    })
  }

  render(){
    return(
      <div>
        <ListItems
        markListaDone = {this.markListaDone}
        listItems={this.state.lista}
        deleteElement = {this.deleteElement}
        />
      </div>
    )
  }
}