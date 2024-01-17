import { Link } from "react-scroll";
import React from "react";


export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="hsection--title">
                        Hey, I'm Caleb
                    </p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            Computer Science
                        </span>{" "}
                        <br/>
                        Student
                    </h1>
                    <p className="hero--section--description">
                        Computer Science student at Virginia Tech
                        <br />
                        with a focus in Data-Centric Computing
                    </p>
                </div>
                <li>
                    <Link 
                    activeClass="navbar--active-content" 
                    spy={true} 
                    smooth={true} 
                    offset={-70} 
                    duraction={500} 
                    to="Contact" 
                    className={"btn btn-primary"}>
                    Get in Touch</Link>
                </li>
            </div>
            <div className="hero--section--img">
                <img src="./img/Headshot_Circle.png" alt ="Hero"/>
            </div>
        </section>
    )
}