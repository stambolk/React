import React from 'react';
import {connect} from 'react-redux';
import {fetchCommentsRequest} from '../actions/CommentsActions';
import {Link} from 'react-router-dom';

class Comments extends React.Component{

    componentDidMount(){
        this.props.zemiKomentari()
    }

    render(){
        return(
            <div>
                {this.props.komentari.length > 0 ? 
                <table border="1">
                    <thead>
                        <tr><th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Redirect</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.komentari.slice(0,10).map(e => {
                            return(
                            <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td><Link to={`/comment/${e.id}`}><button>To Comment</button></Link></td>
                            </tr>
                        )
                        })}
                    </tbody>
                </table>
                : <h2>Loading</h2>}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        komentari : state.CommentsReducer.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        zemiKomentari : () => {
            dispatch(fetchCommentsRequest())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Comments);