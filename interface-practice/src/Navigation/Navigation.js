import React from "react"
import "./Navigation.css"
import navigation_background from "../media/navigation_background.jpg"

export default function Navigation() {
    return (
            <div className="navigation">
                <div className="navigation__content">
                    <h2 className="navigation__header">
                        <span className="text-color_yellow">
                            We&thinsp;
                        </span> 
                        create <br/>Awesome Games
                    </h2>
                    <ul className="navigation__menu">
                        <li className="navigation__item">
                            <a className="text-color_yellow" href="#">
                                About
                            </a>
                        </li>
                        <li className="navigation__item navigation__item_active">
                            <a className="text-color_yellow " href="#">
                                Development
                            </a>
                        </li>
                        <li className="navigation__item">
                            <a className="text-color_yellow" href="#">
                                Projects
                            </a>
                        </li>
                        <li className="navigation__item">
                            <a className="text-color_yellow" href="#">
                                Blog
                            </a>
                        </li>
                    </ul>
                    </div>
                <img src={navigation_background} className="navigation__background"/>                
            </div>
    )
}