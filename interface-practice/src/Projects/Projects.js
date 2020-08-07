import React from "react"
import "./Projects.css"
import bf2 from "../media/projectsPic/bf2.jpg"
import de from "../media/projectsPic/doomEternal.jpg"
import mgr from "../media/projectsPic/mgr.jpg"
import nier from "../media/projectsPic/nier.jpg"
import ori from "../media/projectsPic/ori.jpg"
import pr2 from "../media/projectsPic/portal2.jpg"
import rdr2 from "../media/projectsPic/rdr2.jpg"
import tlou from "../media/projectsPic/tlou.jpeg"
import Slider from "../Slider/Slider"

export default function Projects() {
    return(
        <div className="projects" id='proj'>
            <div className="projects__title first-letter_yellow"><span className="big-letter">F</span>eatured <span className="big-letter">P</span>rojects</div>
            <ul className="projects__navigation">
                <li className="projects__navigation__item projects__navigation__item_active">ALLWORKS</li>
                <li className="projects__navigation__item">GAMES</li>
                <li className="projects__navigation__item">APPLICATIONS</li>
                <li className="projects__navigation__item">CONTENT DEVELOPMENT</li>                
            </ul>
            <div className="projects__layout">
                <img alt='' className="projects__picture" src={bf2}/>
                <img alt='' className="projects__picture" src={de}/>
                <img alt=''className="projects__picture" src={mgr}/>
                <img alt='' className="projects__picture" src={nier}/>
                <img alt='' className="projects__picture" src={ori}/>
                <img alt='' className="projects__picture" src={pr2}/>
                <img alt='' className="projects__picture" src={rdr2}/>
                <img alt='' className="projects__picture" src={tlou}/>
            </div>
            <Slider elements={
            [
            <img alt='' className="projects__picture" src={bf2}/>,
            <img alt='' className="projects__picture" src={de}/>,
            <img alt='' className="projects__picture" src={mgr}/>,
            <img alt='' className="projects__picture" src={nier}/>,
            <img alt='' className="projects__picture" src={ori}/>,
            <img alt='' className="projects__picture" src={pr2}/>,
            <img alt='' className="projects__picture" src={rdr2}/>,
            <img alt='' className="projects__picture" src={tlou}/>]
            } sliderClassName="slider_proj" className='slider_proj'/>
        </div>
    )
    
}