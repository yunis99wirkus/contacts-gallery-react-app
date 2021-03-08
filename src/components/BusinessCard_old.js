import React from "react";
import { Component } from "react-bootstrap";

function BusinessCard_old(props){
    const inlineStyle = {
        paddingTop: "3rem",
        height: "auto"
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-9 col-sm-9 col-md-9 contact-info align-self-left">
                    <h4>{props.contact.name}</h4>
                    <p className="text-align-left">
                        <strong>contact details:</strong>
                        {props.contact.email} <br/>
                        {props.contact.phone} <br/>
                    </p>
                    <p>
                        <strong>Address:</strong>
                        {props.contact.street} <br/>
                        {props.contact.zip} <br/>
                        {props.contact.city} <br/>
                        {props.contact.country} <br/>
                    </p>
                </div>
                <div className="col-3 col-sm-3 col-md-3 contact-img align-self-center">
                    <img className="img-fluid img-thumbnail" src={props.contact.imgPath}/>
                </div>
                <hr/>
            </div>
        </div>
    )
}

export default BusinessCard_old;