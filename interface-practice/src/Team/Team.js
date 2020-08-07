import React from "react"
import "./Team.css"
import TeamMember from "./Team__member/Team__member"
import bg from "../media/Employe/doomguy.jpg"
import Slider from '../Slider/Slider'

export default function Team(){
    return(
        <div className="team" id="team">
            <div className='team__main-title first-letter_yellow'><span className="big-letter">O</span>ur <span className="big-letter">T</span>eam</div>
            <div className='team__content'>
                <div className="team__title"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</div>
                <div className="team__description">
                    Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
                </div>
                <div className="team__list">
                    <TeamMember photo={bg} name="Flynn Taggart" status="CoFounder/CEO"/>
                    <TeamMember photo={bg} name="Flynn Taggart" status="Process Manager"/>
                    <TeamMember photo={bg} name="Flynn Taggart" status="Sales President"/>
                    <TeamMember photo={bg} name="Flynn Taggart" status="Developer"/>
                </div>
                <Slider
                sliderClassName = "slider_team"
                elements = {[
                    <TeamMember photo={bg} name="Flynn Taggart" status="CoFounder/CEO"/>,
                    <TeamMember photo={bg} name="Flynn Taggart" status="Process Manager"/>,
                    <TeamMember photo={bg} name="Flynn Taggart" status="Sales President"/>,
                    <TeamMember photo={bg} name="Flynn Taggart" status="Developer"/>
                ]}
                />
            </div>
        </div>
    )
}