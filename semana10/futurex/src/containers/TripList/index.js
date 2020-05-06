import React, {Component} from "react";

const TripList = [{
    id: "tripId",
    name: "Festança Marciana",
    planet: "Marte",
    date: "21/12/21",
    description: "Uma viagem bem legal, na melhor época de marte",
    durationInDays: 228 // Duração da viagem em dias
}];

class TripList extends Component{
    constructor(props){
        super(props)

        this.state ={
           
        }
    }
    render(){
        return(
            <div>

            </div>
        )
    };
};

export default TripList;

