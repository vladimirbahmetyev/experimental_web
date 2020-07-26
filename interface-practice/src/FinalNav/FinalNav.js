import React from "react"
import "./FinalNav.css"

import back from "../media/finalNab.jpg"
import fbLogo from "../media/SocialPic/fb.png"
import vkLogo from "../media/SocialPic/vk.png"
import twLogo from "../media/SocialPic/twitter.png"

export default function FinalNav() {
    return(
        <div className="final-nav">
            <div className="final-nav__content">
                <div className="final-nav__title first-letter_yellow">Sublime</div>
                <div className="final-nav__logo mobile_logo">
                    <img className="final-nav__logo-pic" src={back}/>
                    <div className="final-nav__logo-title"><span className="text-color_yellow">We</span> create <br/> Awesome Games</div>
                </div>
                <ul className="final-nav__list">
                    <li className="final-nav__item final-nav__item_active">
                        <a href="#">HOME</a>
                    </li>
                    <li className="final-nav__item">
                        <a href="#">ABOUT SUBLIME</a>
                    </li>
                    <li className="final-nav__item">
                        <a href="#">OUR WORKS</a>
                    </li>
                    <li className="final-nav__item">
                        <a href="#">SERVICES</a>
                    </li>
                    <li className="final-nav__item">
                        <a href="#">TEAM</a>
                    </li>
                    <li className="final-nav__item">
                        <a href="#">TESTIMONIALS</a>
                    </li>
                    <li className="final-nav__item">
                        <a href="#">BLOG</a>
                    </li>
                    <li className="final-nav__item">
                        <a href="#">CLIENTS</a>
                    </li>
                    <li className="final-nav__item">
                        <a href="#">CONTACT US</a>
                    </li>
                </ul>
                <div className="final-nav__social">
                    <img className='social-link' src={twLogo}/>
                    <img className='social-link' src={vkLogo}/>
                    <img className='social-link' src={fbLogo}/>
                </div>
            </div>
            <div className="final-nav__logo desktop_logo">
                <img className="final-nav__logo-pic" src={back}/>
                <div className="final-nav__logo-title"><span className="text-color_yellow">We</span> create <br/> Awesome Games</div>
            </div>
        </div>
    )
}