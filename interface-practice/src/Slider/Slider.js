import React, {useEffect} from "react"
import './Slider.css'

export default function Slider(props) {
    
    let slider
    useEffect(() => {
        slider = document.querySelector(`.${props.sliderClassName}`)   
    }, []);

    let startX

    let currentItemIndex = 0

    let transformDelta = 0

    let minReqShift = 50

    let startHandler = (evt)=>{
        startX = evt.changedTouches[0].clientX
    }

    let moveHandler = (evt)=>{
        slider.childNodes[0].style.transitionDuration = '0ms'

        let currentX = evt.changedTouches[0].clientX 
        let currentShiftVW = (currentX - startX)/ document.body.clientWidth * 100 + transformDelta       
        
        slider.childNodes[0].style.transform = `translateX(${currentShiftVW}vw)`        
    }

    let endHandler = (evt) =>{        
        let elementsCount = props.elements.length
        let endX = evt.changedTouches[0].clientX
        let finalShift = endX - startX

        slider.childNodes[0].style.transitionDuration = '300ms'
        slider.childNodes[0].style.transform = `translateX(${transformDelta}vw)`
        if((finalShift  < -minReqShift)  && (currentItemIndex < elementsCount - 1)){
            
            currentItemIndex++
            transformDelta -= 100
            slider.childNodes[0].style.transform = `translateX(${transformDelta}vw)`
        }

        if((finalShift  > minReqShift) && (currentItemIndex > 0)){
            currentItemIndex--
            transformDelta += 100
            slider.childNodes[0].style.transform = `translateX(${transformDelta}vw)`
        }
    }

    return(
    <div className={`slider ${props.sliderClassName}`} onTouchMove={moveHandler} onTouchStart={startHandler} onTouchEnd={endHandler}>
        <div className="slider__carusel">
            {[...props.elements]}
        </div>
    </div>
    )    
}