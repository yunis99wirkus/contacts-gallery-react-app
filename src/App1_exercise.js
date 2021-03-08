import React from "react"

// #1
function App1() {
    return (
        <div>
            <Header username="Yunis"/>
            <Greeting />
        </div>
    )
}

// #2
/*function Header(props) {
    return (
        <header>
            <p>Welcome, {props.username}!</p>
        </header>
    )
}*/

class Header extends React.Component{
    render() {
        return(
            <header>
            <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
}

// #3
/*function Greeting() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    
    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    return (
        <h1>Good {timeOfDay} to you, sir or madam!</h1>
    )
}*/

class Greeting extends React.Component{    
    render(){
        const date = new Date();
        const hours = date.getHours();
        let timeOfDay;
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }

        return(
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}

export default App1;