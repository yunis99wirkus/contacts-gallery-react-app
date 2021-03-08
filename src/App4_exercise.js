import React from "react";
import { Facebook, Linkedin, Instagram, Youtube } from "react-bootstrap-icons";


class App4 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: "default"
        }
    }
    render(){
        function linkedInHover(e){
            e.preventDefault();
            window.alert("you hovered over linkedIn");
        }
        
        return (
            <div>
                <i><Facebook color="darkblue" size={90} onDoubleClick={()=>window.alert("you double clicked Facebook")} onMouseOver={()=>console.log("you hovered facebook")}/></i>
                <br />
                <br />
                <i><Linkedin color="lightblue" size={90} onMouseOver={linkedInHover} onMouseLeave={()=>window.alert("you left the linkedIn logo")}/></i>
                <br />
                <br />
                <i><Instagram color="pink" size={90} onClick={()=> console.log("you clicke on the instagram logo")} onKeyDown={
                    function (event){
                        console.log('instagram'+event.key)
                    }
                }/></i>
                <br />
                <br />
                <i><Youtube color="red" size={90} onMouseOver={()=> window.alert("you entered the Youtube logo")}/></i>
            </div>
            )
    }
}

export default App4;