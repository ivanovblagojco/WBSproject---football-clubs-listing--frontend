import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
const Table = () =>{

    const clubs=[
        {clubName:"ClubName1", description: "Description1", chairman:"Chairman1", manager:"Manager1", stadiumName:"Stadium1", championsof:"Liga1"},
        {clubName:"ClubName2", description: "Description2", chairman:"Chairman2", manager:"Manager2", stadiumName:"Stadium2", championsof:"Liga2"},
        {clubName:"ClubName3", description: "Description3", chairman:"Chairman3", manager:"Manager3", stadiumName:"Stadium3", championsof:"Liga3"},
        {clubName:"ClubName4", description: "Description4", chairman:"Chairman4", manager:"Manager4", stadiumName:"Stadium4", championsof:"Liga4"}
    ];
    const renderClubs=(club, index) =>{
        return(
            <tr key={index}>
                <td>{club.clubName}</td>
                <td>{club.description}</td>
                <td>{club.chairman}</td>
                <td>{club.manager}</td>
                <td>{club.stadiumName}</td>
                <td>{club.championsof}</td>
            </tr>
        )
    }
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
                {clubs.map(renderClubs)}
              </tbody>
          </ReactBootStrap.Table>
      </div>
  );
};

export default Table;