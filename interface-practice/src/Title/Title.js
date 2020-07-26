import React from 'react'
import './Title.css'
import Navigation from "../Navigation/Navigation"

export default function Title() {
    return(
        <div className="header">
            <h1 className='first-letter_yellow header__title'>Sublime</h1>
            <p className='first-letter_yellow header__description'>Sublime: A one page resposive wordpress theme suitable for any kind of buisness representation</p>
            <a href="#" className="text-color_yellow header__link">Download the psd</a>            
            <div className="header__dekstop-nav">
            <Navigation/>
            </div>
        </div>
    )
    
}