import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Home () {

    const [navBar, setNavBar] = useState(false);

    return (

        <div className="home">
            <header className="primary-header flex">
                <div>
                    <img src="./src/assets/shared/logo.png" alt="space logo" className="logo"/>
                </div>
                <button className="mobile-nav-toggle" onClick={() => setNavBar((prev) => !prev)}aria-controls="primary-navigation"><span className="sr-only" aria-expanded={navBar}></span></button>
                <nav>
                    <ul id="primary-navigation" data-visible={navBar} className="primary-navigation underline-indicators flex">
                        <li className="active"><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="/"><span>00</span>Home</a></li>
                        <li><Link to="Destination"><div className="ff-sans-cond uppercase text-white letter-spacing-2 " ><span className="newmenu">01</span>Destination</div></Link></li>
                        <li><Link to="Crew_Commander"><div className="ff-sans-cond uppercase text-white letter-spacing-2"><span className="newmenu">02</span>Crew</div></Link></li>
                        <li><Link to="Destination"><div className="ff-sans-cond uppercase text-white letter-spacing-2"><span className="newmenu">03</span>Technology</div></Link></li>
                    </ul>
                </nav>
            </header>

            <div className="grid-container grid-container--home">
                <div>
                <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
                    <span className="d-block fs-900 ff-serif text-white">Space</span></h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience! </p>
                </div>

                <div>
                <a href="#" className="large-button uppercase ff-serif text-dark bg-white">Explore</a>
                </div>
            </div>

        </div>
    )
}