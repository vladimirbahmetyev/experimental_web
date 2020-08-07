import React from "react"
import "./Contact.css"
import map from "../media/map.jpg"

import fbLogo from "../media/SocialPic/fb.png"
import vkLogo from "../media/SocialPic/vk.png"
import twLogo from "../media/SocialPic/twitter.png"


export default function Contact(props) {
    return(
        <div className="contact"id="contacts">
            <div className="contact__map">
                <img  alt='' src={map} className="desktop_map"/>
            </div>
            <div className="contact__form">
                <div className="contact__title first-letter_yellow"><span className="big-letter">C</span>ontact <span className="big-letter">U</span>s</div>
                <input type="text" name="name" value="Your Name" className="input-style width_full"/>
                <div className="contact__container">
                    <input type="text" value="Mobile" name="mobile" className="input-style width_part"/>
                    <input type="text" value="Email" name="email" className="input-style width_part margin-right_zero"/>
                </div>
                <textarea value="Your Message" type="text" name="message" className="input-style width_full height_120" />
                <div className="contact__button">SEND</div>
                <img  alt='' src={map} className="mobile_map"/>
                <div className="contact__info">
                    <div className="contact__info-title">Location Map</div>
                    <div className="contact__info__item">
                        <div className="contact__info-title">Address</div> 
                        <div>Hill Mist garden, Pune, 411 048, India</div>
                    </div>
                    <div className="contact__info__item">
                        <div className="contact__info-title">Phone</div>
                        <div> +91 12534 67890</div>
                    </div>
                    <div className="contact__info__item">
                        <div className="contact__info-title">Email</div>
                        <div>firkho@firkho.com</div>
                    </div>
                </div>
                <div className="contact__social">
                    <img alt='' className='social-link' src={twLogo}/>
                    <img alt='' className='social-link' src={vkLogo}/>
                    <img alt='' className='social-link' src={fbLogo}/>
                </div>
            </div>
        </div>
    )
}