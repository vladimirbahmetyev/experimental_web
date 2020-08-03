import React from "react"
import "./ServiceProv.css"
import Slider from '../Slider/Slider'

export default function ServiceProv(props) {
    let desc = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
    return(
        <div className="service-prov">
            <div className="service-prov__title text-color_white first-letter_yellow"> <span className="big-letter">S</span>ervices <span className="big-letter">P</span>rovided</div>
            <div className="service-prov__layout">
                <div className="service-prov__service">
                    <div className="service-prov__name text-color_white"> App Development</div>
                    <div className="service-prov__description text-color_white">{desc}</div>
                </div>
                <div className="service-prov__service">
                    <div className="service-prov__name text-color_white">Game Development</div>
                    <div className="service-prov__description text-color_white">{desc}</div>
                </div>
                <div className="service-prov__service">
                    <div className="service-prov__name text-color_white">App Design</div>
                    <div className="service-prov__description text-color_white">{desc}</div>
                </div>
                <div className="service-prov__service">
                    <div className="service-prov__name text-color_white">Game Design</div>
                    <div className="service-prov__description text-color_white">{desc}</div>
                </div>
            </div>
            <Slider sliderClassName="slider_serv" elements={[
            <div className="service-prov__service">
                <div className="service-prov__name text-color_white">App Development</div>
                <div className="service-prov__description text-color_white">{desc}</div>
            </div>,
            <div className="service-prov__service">
                <div className="service-prov__name text-color_white">Game Development</div>
                <div className="service-prov__description text-color_white">{desc}</div>
            </div>,
            <div className="service-prov__service">
                <div className="service-prov__name text-color_white">App Design</div>
                <div className="service-prov__description text-color_white">{desc}</div>
            </div>,
            <div className="service-prov__service">
                <div className="service-prov__name text-color_white">Game Design</div>
                <div className="service-prov__description text-color_white">{desc}</div>
            </div>
            ]}/>
        </div>
    )
    
}