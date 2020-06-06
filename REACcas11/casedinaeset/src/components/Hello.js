import React from 'react';
import {connect} from 'react-redux';
import { SayHello, sayPrezime, sayLol, sayPepe, sayWoo} from '../actions/SayHelloAction';


class Hello extends React.Component{
    
    componentDidMount(){
        this.props.sayHello();
        this.props.sayPrezime();
        this.props.sayLol();
        this.props.sayWoo();
        this.props.sayPepe();
    }

    render(){
        return(
            <div>
                <h2>Hi {this.props.name}  {this.props.prezime} </h2>
                <h1>{this.props.pepe} said {this.props.lol} {this.props.woo}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
   return{
       name: state.SayHelloReducer.name,
       prezime: state.SayHelloReducer.prezime,
       lol: state.SayHelloReducer.lol,
       woo: state.SayHelloReducer.woo,
       pepe: state.SayHelloReducer.pepe
   }
}

const mapDispatchToProps = (dispatch) => {
   return{
       sayHello: () => {
           dispatch(SayHello())
       },
       sayPrezime: () => {
           dispatch(sayPrezime())
       },
       sayLol : () =>{
           dispatch(sayLol())
       },
       sayWoo : () => {
           dispatch(sayWoo())
       },
       sayPepe : () => {
           dispatch(sayPepe())
       }
   }
}



export default connect(mapStateToProps,mapDispatchToProps)(Hello)