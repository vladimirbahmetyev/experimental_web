import React from "react"
import Strategic__info from "./Strategic__info/Strategic__info"
import "./Strategic.css"
import processPic_1 from "../media/ProcessPic/pic_1.jpg"
import processPic_2 from "../media/ProcessPic/pic_2.jpg"
import processPic_3 from "../media/ProcessPic/pic_3.jpg"

export default function Strategic(){
    let minititle = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    let miniDesk = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    let desk = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    return(
        <div className="strategic">
            <div className="strategic__title first-letter_yellow">
                <span className="big-letter">S</span>trategic <span className="big-letter">P</span>rocess
            </div>
            <div className="strategic__description">
                <div className="strategic__mini-title text-style_mini-title">
                    {miniDesk}
                </div>
                <div className="strategic__first_desk text-style_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                </div>
            </div>
            <div className="strategic__example">
                <Strategic__info title="Our Process" src={processPic_1} miniTitle={minititle} info = {desk} isPicLeft={true}/>
                <Strategic__info title="Method" src={processPic_2} miniTitle={minititle} info={miniDesk} isPicLeft={false}/>
                <Strategic__info title="Outcome" src={processPic_3} miniTitle={minititle} info={miniDesk} isPicLeft={true}/>
            </div>
        </div>
    )
}