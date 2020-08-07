import React from  "react"
import "./About__coloumn.css"
import gamePad from "../../media/gamepad.png"

export default function About__coloumn(props) {
    return(
        <div className="About__coloumn">
            <img alt=''className="About__coloumn__picture" src={gamePad}/>
            <div className="About__coloumn__title"> {props.title}</div>
            <div className="About__coloumn__description">{props.text}</div>
            <div className="About__coloumn__description">{props.text}</div>
        </div>
    )
}