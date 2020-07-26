import React, {useEffect} from "react"
import './Slider.css'

export default function Slider(props) {
    
    let slider
    useEffect(() => {
        slider = document.querySelector(".slider")   
    }, []);

    let startX
    let endX
    
    let transformDelta = 0

    let startHandler = (evt)=>{
        startX = evt.changedTouches[0].clientX
    }
    let moveHandler = (evt)=>{
        let currentX = evt.changedTouches[0].clientX
        let delta = currentX - startX
        slider.childNodes[0].style.transform = `translateX(${delta}vw)`
    }
    let endHandler = (evt) =>{
        
        let elementsCount = props.elements.length
        endX = evt.changedTouches[0].clientX
        let delta = endX - startX
        if((delta  < -30) 
            && (-(elementsCount - 1) * 100 < transformDelta)){

            transformDelta -= 100
            slider.childNodes[0].style.transform = `translateX(${transformDelta}vw)`
        }
        if((delta  > 30) && (0 > transformDelta)){
            transformDelta += 100
            slider.childNodes[0].style.transform = `translateX(${transformDelta}vw)`
        }
    }

    return(
    <div className="slider" onTouchMove={moveHandler} onTouchStart={startHandler} onTouchEnd={endHandler}>
        <div className="slider__carusel">
            {[...props.elements]}
        </div>
    </div>
    )    
}