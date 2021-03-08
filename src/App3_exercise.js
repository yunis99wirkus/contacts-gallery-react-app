import React from "react"
import { Component } from 'react-bootstrap';

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

/*function App3() {
    return (
        <div>
            <h1>You are currently logged (in/out)</h1>
        </div>
    )
}*/

class App3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isLoggedIn: false,
            logStatusMsg: "in",
            logButtonMsg: "out",
            greeting: "welcome",
            name: "Yunis"
        };
        this.login = this.login.bind(this);
    };

    login(e){
        e.preventDefault();
        if (this.state.isLoggedIn){
            this.state.isLoggedIn=false;
        } else {
            this.state.isLoggedIn=true
        }
        console.log("button event triggered, isLoggedIn_val: "+this.state.isLoggedIn)
    }

    render(){
        if(this.state.isLoggedIn){
            this.state.logStatusMsg = "in";
            this.state.greeting = "Welcome";
            this.state.logButtonMsg = "out";
        } else {
            this.state.logStatusMsg = "out";
            this.state.greeting = "Good Bye";
            this.state.logButtonMsg = "in";
        }

        const padding = {
            padding:"15px",
            marginTop:"2em",
            marginBottom:"2em"
        }

        return(
            <div className="container" style={padding}>
                <h1>{this.state.greeting}, {this.state.name}! You are currently logged {this.state.logStatusMsg}</h1>
                <button className="btn btn-primary" onClick={this.login}>Log {this.state.logButtonMsg}</button>
            </div>
        )
    }
}

export default App3