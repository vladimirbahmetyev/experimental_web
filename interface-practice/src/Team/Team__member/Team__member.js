import React from "react"
import "./Team__member.css"

export default function Team__member(props) {
    return(
        <div className="team__member">
            <img className="team__member__photo" src={props.photo}/>
            <div className="team__member__name">{props.name}</div>
            <div className="team__member__status">{props.status}</div>
        </div>
    )
    
}