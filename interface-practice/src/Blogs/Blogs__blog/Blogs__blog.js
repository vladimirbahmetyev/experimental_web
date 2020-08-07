import React from "react"
import "./Blogs__blog.css"

export default function Blogs__blog(props){
    return(
        <div className={`blog ${props.className}`}>
            <img alt='' className="blog__picture" src={props.picture}/>
            <div className="blog__date text-color_yellow"> Feb 23th 2020</div>
            <div className="blog__title">Lorem Ipsum dolor sit amet</div>
            <div className="blog__description">Lorem Ipsum dolor sit amet consectetur adipiscing elit. Nulla facilisis molestie dignissim.</div>
        </div>
    )
}