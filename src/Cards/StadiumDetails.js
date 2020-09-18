import React, {Component} from "react";
import './stadium-info.css'

class  StadiumDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading:true,
            Stadium : null
        };

    }
    async componentDidMount(){
        const id = window.location.pathname.split('/')[2];
        const response=await fetch(`/stadium/${id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : 'http://www.google.com',
                'method': 'GET'
            },
            credentials: 'include'
        });

        const body= await response.json();
        console.log(body);
        this.setState({
            Stadium:body,
            isLoading:false
        })


    }
    render(){
        const isLoading  = this.state.isLoading;
        if(isLoading)
            return <div>Loading...</div>
        return(
            <span>
                <div>Name: {this.state.Stadium.name}</div>
                <div>Description: {this.state.Stadium.description}</div>
                <div>Capacity: {this.state.Stadium.capacity}</div>
                <div>Place: {this.state.Stadium.place}</div>
                <div>Year of construction: {this.state.Stadium.yearOfConstruction}</div>
                <div>Year of opening: {this.state.Stadium.yearOfOpening}</div>

            </span>
        )
    }
}
export default StadiumDetails;