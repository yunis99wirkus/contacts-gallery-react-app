import React from "react";
import { Component } from "react-bootstrap";

function BusinessCard(props){

    return(
        <div className="container">
            <div className="row">
                <div className="col-9 col-sm-9 col-md-9 contact-info align-self-left">
                    <h4>{props.name}</h4>
                    <p className="text-align-left">
                        <strong>contact details:</strong> <br/>
                        {props.email} <br/>
                        {props.phone} <br/>
                    </p>
                    <p>
                        <strong>Address:</strong> <br/>
                        {props.address.street} <br/>
                        {props.address.zip} <br/>
                        {props.address.city} <br/>
                        {props.address.country} <br/>
                    </p>
                </div>
                <div className="col-3 col-sm-3 col-md-3 contact-img align-self-center">
                    <img className="img-fluid img-thumbnail" src={props.imgPath} alt="person image"/>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default BusinessCard;