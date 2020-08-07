import React, { useEffect, useRef } from 'react';
import "./Side_Navigation.css"

export default function Navigation() {
    const currentNavItemContainer = useRef(".about")

    let findComponentMiddleDeltaCoords = (divClassName)=>{
        let htmlElement = document.querySelector(divClassName)
        let elementCoords = htmlElement.getBoundingClientRect()
        let currentY = (elementCoords.bottom - elementCoords.top) /2 + elementCoords.top - window.screen.height/ 2
        return (currentY)
    }
    
    useEffect(() => {
        let listWithClasses = [".about", ".projects",".strategic",".service-prov",".team",".blogs",".contact",".testimonials"]
        
        let currentNavigationHandler = (e) =>{
            let components = listWithClasses.map(x =>Math.abs(findComponentMiddleDeltaCoords(x)))
            let minValue = Math.min(...components)
            let currentNavClass = listWithClasses[components.indexOf(minValue)]
    
            if(currentNavItemContainer.current !== currentNavClass){
                let items = document.querySelector('.side_navigation__list').childNodes
                for (let name of listWithClasses){
                    
                    let itemIndex = listWithClasses.indexOf(name)
                    let item = items[itemIndex]
                    if (name === currentNavClass){
                        item.classList.add("side_navigation__item_active")
                    }
                    else{
                        item.classList.remove("side_navigation__item_active")
                    }                
                }
            }
            currentNavItemContainer.current = currentNavClass
        }
    
        let sideNavVisibilityHandler = (e)=>{
            let sideNav = document.querySelector(".side_navigation__layout")
    
            if(window.pageYOffset > 850){
                sideNav.style.opacity = "1"
                sideNav.style.transform = "translateX(2vw)"
                sideNav.style.opacity = '1'
            }
            else{
                sideNav.style.opacity = "0"
                sideNav.style.transform = "translateX(-10vw)"
            }
            
        }
        window.addEventListener('scroll', sideNavVisibilityHandler)
        window.addEventListener('scroll', currentNavigationHandler)
      }, []);

    return (
        <div className="side_navigation__layout">
            <ul className="side_navigation__list">
                <li className="side_navigation__item">
                    <a  href="#about">About</a>
                </li>
                <li className="side_navigation__item">
                    <a  href="#proj">Featured<br></br>Projects</a>
                </li>
                <li className="side_navigation__item">
                    <a  href="#proc">Strategic<br></br>Process</a>
                </li>
                <li className="side_navigation__item">
                    <a  href="#serv">Services Provided</a>
                </li>
                <li className="side_navigation__item">
                    <a  href="#team">Our<br></br>Team</a>
                </li>
                <li className="side_navigation__item">
                    <a  href="#blog">Blogs</a>
                </li>
                <li className="side_navigation__item">
                    <a  href="#contacts">Contact<br></br>Us</a>
                </li>
                <li className="side_navigation__item">
                    <a href="#testim">Testimonials</a>
                </li>
            </ul>
        </div>
    )
}