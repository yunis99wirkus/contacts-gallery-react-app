import React from "react";
import { Component } from "react-bootstrap";

// Exercise:
// Given an incomplete class-based component without a constructor, 
// add a constructor and initialize state to fix the broken component.

class App2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Yunis",
            age:22
        };
    };

    render(){
        const inlineStyle = {
            paddingTop:"2em",
            paddingBottom:"2em"
        }   

        return (
        <div className="bg-primary">
            <div className="container text-white" style={inlineStyle}>
                <h1>{this.state.name}</h1>  
                <h3>{this.state.age} years old</h3>
            </div>
        </div>
        )    
    }
};

export default App2
