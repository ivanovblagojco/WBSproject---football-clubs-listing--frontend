import React from 'react';
import './cards-style.css'

const Card = props=>{
    return(
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="Premier League Logo" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.description}
                </p>
                <a href={`/clubs/${props.id}`} className="btn btn-outline-success">Details</a>
            </div>
        </div>
    );
}
export default Card;