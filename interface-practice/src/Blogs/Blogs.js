import React from "react"
import "./Blogs.css"
import Blogs__blog from "./Blogs__blog/Blogs__blog"
import blog_pic from "../media/blog_img.jpg"

export default function Blogs(){
    return(
        <div className="blogs">
            <div className="blog__layout-nav_left">
                <div className="blogs__title first-letter_yellow">
                    <span className="big-letter">B</span>logs
                </div>
                <ul className="blogs__nav">
                    <li className="blogs__nav__item blogs__nav_active">Latest Posts</li>
                    <li className="blogs__nav__item">App Design</li>
                    <li className="blogs__nav__item">App Development</li>
                    <li className="blogs__nav__item">Design Solutions</li>
                    <li className="blogs__nav__item">Queality Assurance</li>
                    <li className="blogs__nav__item">Development Mode</li>
                    <li className="blogs__nav__item">What's Out There</li>
                </ul>
            </div>
            <div className="blogs__posts_layout">
                <Blogs__blog className="blogs__item" picture={blog_pic}/>         
                <Blogs__blog className="blogs__item" picture={blog_pic}/>
                <Blogs__blog className="blogs__item" picture={blog_pic}/>
            </div>
        </div>
    )
}