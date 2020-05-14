import React from 'react';
import PropTypes from 'prop-types';

export class Comments extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <ul>
                    {this.props.comments.map((e,i)=>{
                        return(
                            <li key={i}>
                                <span>Author:{e.author}</span>
                                <br/>
                                <span>Comment:{e.content}</span> <br/>
                                <span>Date: {this.props.date}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
} 

Comments.propTypes = {
    comments: PropTypes.array.isRequired,
    date: PropTypes.string,
    number: PropTypes.number,
    isValid: PropTypes.bool
}