import React, {Component} from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Card from "./Card";
import premierLeague from "../Assets/premier-league.jpg";
import seriaA from "../Assets/seria-a-league.jpg";
import primeraLeague from "../Assets/primera-league.jpg";
import bundesLeague from "../Assets/bundes-league.jpg";
import Switch from "react-router-dom/es/Switch";
import Table from "../Table/Table";
import Router from "react-router-dom/es/Router";

class  Cards extends Component{
    constructor(props) {
        super(props);

        this.state={
            isLoading : true,
            Countries : null
        };
    }
    async componentDidMount(){
        const response=await fetch(`country`,{
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
            Countries:body,
            isLoading:false
        })

        console.log(body)

    }

    render() {
        const isLoading  = this.state.isLoading;
        if(isLoading)
            return <div>Loading...</div>
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-3">
                        <Card id={this.state.Countries[0].id} imgsrc={seriaA} title={this.state.Countries[0].countryName} description="Description for Seria A"/>
                    </div>
                    <div className="col-md-3">
                        <Card id={this.state.Countries[2].id} imgsrc={bundesLeague} title={this.state.Countries[2].countryName} description="Description for Bundesliga"/>
                    </div>
                    <div className="col-md-3">
                        <Card id={this.state.Countries[1].id} imgsrc={primeraLeague} title ={this.state.Countries[1].countryName} description="Description for Primera"/>
                    </div>
                    <div className="col-md-3">
                        <Card id={this.state.Countries[3].id} imgsrc={premierLeague} title={this.state.Countries[3].countryName} description="Description for Premier League"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;