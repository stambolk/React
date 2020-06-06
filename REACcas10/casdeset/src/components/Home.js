import React from 'react';

export class Home extends React.Component{
    constructor(props){
        super(props)

        this.state={
            day: "",
            month: "",
            year: "",
        date:[
            {
            id: "1",
            day: "12",
            month: "12",
            year: "12"
            },
            {
            id: "2",
            day: "12",
            month: "12",
            year: "12"
            },
            {
            id: "3",
            day: "12",
            month: "12",
            year: "12"
            }
        ]
      }
    }

    changeHandler = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    addDate = (event) => {
        event.preventDefault()
        this.setState({
            date:[
            ...this.state.date, {
                id: this.state.date.length + 1,
                day: this.state.day,
                month: this.state.month,
                year: this.state.year
         }
        ],
        day: "",
        month: "",
        year: ""
      })
    }

    deleteItem = (e) => {
        this.setState({
            date: [...this.state.date.filter( d => d.id !== e.id)]
        })
    }
    
    render(){
        console.log(this.state)
        return(
            <div>
            <form onSubmit={this.addDate}>
            <label>Day</label>
            <input value={this.state.day} name="day" type="text" onChange={this.changeHandler}></input><br></br>
            <label>Month</label>
            <input value={this.state.month} name="month" type="text"  onChange={this.changeHandler}></input><br></br>
            <label>Year</label>
            <input value={this.state.year} name="year" type="text" onChange={this.changeHandler}></input><br></br>
            <button name="button" type="submit" >Add</button>
            </form>
            <table border="1">
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Month</th>
                        <th>Year</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.date.map((e,i)=>{
                        return(
                        <tr key={i}>
                            <td>{e.day}</td>
                            <td>{e.month}</td>
                            <td>{e.year}</td>
                            <td><button onClick={()=>{this.deleteItem(e)}}>Delete</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            </div>
        )
    }
}