import React from 'react';
import {connect} from 'react-redux';
import {GetUsersRequest} from '../actions/UserActions'
import {Link} from 'react-router-dom'

class Users extends React.Component{

    componentDidMount(){
        this.props.getUsers()
    }
    render(){
        return(
            <div>
                <table border="1">
                        <thead>
                            <tr>
                                <th>ID</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>GO TO</th>
                            <th>HOOK</th>
                            </tr>
                        </thead>
                        <tbody>   
                {this.props.users.map(e => {
                    return(
                    
                    <tr key={e.id}>
                        <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.username}</td>
                    <td>{e.email}</td>
                    <td><Link to={`/user/${e.id}`}>User</Link></td>
                    <td><Link to={`/user-hook/${e.id}`}>Hook</Link></td>
                    </tr>
                    
                    )
                })}
                </tbody>
                
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        users: state.UserReducer.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        getUsers: () => {
            dispatch(GetUsersRequest())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Users);