import React from "react"
import "./Testimonials.css"
import dg from "../media/Employe/doomguy.jpg"

export default function Testimonials() {
    return(
        <div className="testimonials">
            <div className="testimonials__title first-letter_yellow"><span className="big-letter">T</span>estimonials</div>
            <div className="testimonials__container">
                <div className="testimonials__content">
                    <div className="testimonials__mini-title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                    <div className="testimonials__info">
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    </div>
                </div>
                <div className="testimonials__member">
                    <img className="testimonials__member-photo" src={dg}/>
                    <div className="testimonials__member-name">Flynn Taggart</div>
                    <div className="testimonials__member-status">CoFounder/CEO</div>
                </div>
            </div>
        </div>
    )
}