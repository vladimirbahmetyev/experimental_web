import React from "react"
import "./Strategic__info.css"

export default function Strategic__info(props){
    let temp = props.title.split(" ")
    let finalTitle = temp.map(str => <span><span className="big-letter">{str[0]}</span>{str.substr(1)} </span>)
    
    return(        
        props.isPicLeft?
        <div className="strategic__info">                        
            <img alt='' className="strategic__info__pic desktop_pic_none" src={props.src}/>
            <div className="strategic__info__container">
                <div className="strategic__info__title">
                    {finalTitle}
                </div>
                <img alt='' className="strategic__info__pic mobile_pic" src={props.src}/>
                <div className="strategic__info__mini-title">
                    {props.miniTitle}
                </div>
                <div className="strategic__info__main">
                    {props.info}
                </div>
            </div>    
        </div>
        :
        <div className="strategic__info">                        
            <div className="strategic__info__container">
                <div className="strategic__info__title">
                    {finalTitle}
                </div>
                <img alt='' className="strategic__info__pic mobile_pic" src={props.src}/>
                <div className="strategic__info__mini-title">
                    {props.miniTitle}
                </div>
                <div className="strategic__info__main">
                    {props.info}
                </div>
            </div>    
            <img alt='' className="strategic__info__pic desktop_pic_none" src={props.src}/>
        </div>
    )
}