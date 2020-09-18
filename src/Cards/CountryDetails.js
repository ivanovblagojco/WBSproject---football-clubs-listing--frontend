import React, {Component} from "react";
import * as ReactBootStrap from "react-bootstrap";

class  CountryDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading:true,
            Country : null
        };


    }
    async componentDidMount(){
        const id = window.location.pathname.split('/')[2];
        const response=await fetch(`/country/${id}`,{
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
            Country:body,
            isLoading:false
        })
        console.log(this.state.Country)
    }


    render() {

        const renderClubs=(club, index) =>{
                var string_to_show="";
                var name_of_stadium="";
                if(club.clubName == null) {club.clubName = ""}
                if(club.description==null) {club.description = ""}
                if(club.chairman == null) { club.clubName =""}
                if(club.manager == null) {club.manager = ""}
                if(club.stadium== null) {string_to_show = "#"; name_of_stadium=""} else {string_to_show=`/stadium/${club.stadium.id}`; name_of_stadium=club.stadium.name}
                if(club. championsof == null) {club.championsof =""}
                return(
                    <tr key={index}>
                        <td>{club.clubName}</td>
                        <td>{club.description}</td>
                        <td>{club.chairman}</td>
                        <td>{club.manager}</td>
                        <td><a href={string_to_show}>{name_of_stadium}</a></td>
                        <td>{club.championsof}</td>
                    </tr>
                )


        }
        const isLoading  = this.state.isLoading;
        if(isLoading)
            return <div>Loading...</div>
        return(
            <div>
                <ReactBootStrap.Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Chairman</th>
                        <th>Manager</th>
                        <th>Stadium</th>
                        <th>Champions of</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.state.Country.clubs.map(renderClubs)}
                    </tbody>
                </ReactBootStrap.Table>
            </div>
        );
    }

}

export default CountryDetails;