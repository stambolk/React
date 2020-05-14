import React from 'react';
import {Domasna} from './Domasna';
import PropTypes from 'prop-types';
import {Comments} from './Comments';
import {Cars} from './Cars';

export class App extends React.Component{
    render(){
        var registracija = {
            grad: "Uzbekistan",
            oznaka: "SK-0000-AS"
        }
        var comments = [
            {
                author: "Pero",
                content: "Kkkkkk u redu je"
            },
            {
                author: "Zdero",
                content: "JJJJ ne e u redu "
            },
            {
                author: "Kero",
                content: "QQQQQ q q q"
            }
        ]
        var cars = [
            {
                brand: "Ford",
                model: "Fiesta",
                year: "2000",
                plates: registracija
            },
            {
                brand: "Porche",
                model: "AX-45",
                year: "2445",
                plates: registracija
            },
            {
                brand: "Bicikal",
                model: "Motorcikal",
                year: "1789",
                plates: registracija
            }
        ]
        var user1={
            ime: "Pero",
            prezime: "Perovski",
            email: "Pero@pero.com"
        }
        var user2 ={
            ime: "Zdero",
            prezime: "Zderovski",
            email: "Zdero@zdero.com"
        }

        return(
            <div id="hello">
             <Comments
             comments={comments}
             date={"12/12/2012"} 
             number={5}
             isValid = {true}
             />
             <Cars
             cars={cars}
             />
            </div>
        )
    }
}
