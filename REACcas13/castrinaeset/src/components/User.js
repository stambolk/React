import React from 'react';
import axios from 'axios'
export class User extends React.Component{

    constructor(props){
        super(props)

        this.state={
            user: undefined
        }
    }

    componentDidMount(){
        this.getSingleUser()
    }

    getSingleUser = () => {
       axios({
           url: `https://jsonplaceholder.typicode.com/users/${this.props.match.params.userId}`,
           method: "GET"
       })
       .then(res =>{
           this.setState({
               user: res.data
           })
       })
       .catch(err=>{
           alert(err)
       })
    }

    render(){
        console.log(this.props)
        return(
            <div>
                {
                this.state.user !== undefined && 
                <div>
                   <h2>NAME :{this.state.user.name}</h2>
                   <h2>USERNAME: {this.state.user.username}</h2>
                   <h2>EMAIL: {this.state.user.email}</h2>
                </div>
                }
            </div>
        )
    }
}