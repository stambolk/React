import React from 'react';
import {Hello} from './Hello'
import {Lol} from './Lol'

export class App extends React.Component {
   render(){
      return(
        <div id="app">
          <h2>helol</h2>
          <Hello />
          <h3>lorem </h3>
          <Lol />
        </div>
      )
   }
} 