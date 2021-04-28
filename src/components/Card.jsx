import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Card(props) {
    return (
        <div className="card" style={{width: "18rem", marginTop: "15px"}}>
            {props.children}
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="#" className="btn btn-primary">{props.button}</a>
            </div>
        </div>
    )
}