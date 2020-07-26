import React from 'react'
import './About.css' 
import Slider from "../Slider/Slider"
import About_cal from "./About__coloumn/About__coloumn"

let text_about = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

export default  function About(){
    return(
        <div className="about">
            <div className='about__info'>
                <div className="about__title">
                    <span class='text-color_gray'><span className="font_bold">A</span>bout</span> 
                    <br/>
                    <div className="first-letter_yellow">Sublime</div>
                </div>
                <div className="about__description">
                    <div className="about__description__title">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam.
                    </div>
                    <div className="about__description__main">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </div>
                </div>
            </div>
            <div className="about__more">
                <About_cal title="App Development" text={text_about}/>
                <About_cal title="Game Design" text={text_about}/>
                <About_cal title="Content Creation" text={text_about}/>                
            </div>
            <Slider elements={
                    [<About_cal title="App Development" text={text_about}/>,
                    <About_cal title="Game Design" text={text_about}/>,
                    <About_cal title="Content Creation" text={text_about}/>]
                }/>
        </div>
    )
}