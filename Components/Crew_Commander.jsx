import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "/src/assets/shared/logo.svg";

export default function Crew_Commander () {

    const [navBar, setNavBar] = useState(false);

    return (

        <div className="Crew_Commander">
            <header className="primary-header flex">
                <div>
                    <img src={logo} alt="space logo" className="logo"/>
                </div>
                <button className="mobile-nav-toggle" onClick={() => setNavBar((prev) => !prev)}aria-controls="primary-navigation"><span className="sr-only" aria-expanded={navBar}></span></button>
                <nav>
                    <ul id="primary-navigation" data-visible={navBar} className="primary-navigation underline-indicators flex">
                        <li className="active"><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="/"><span>00</span>Home</a></li>
                        <li><Link to="/Destination"><div className="ff-sans-cond uppercase text-white letter-spacing-2 " ><span className="newmenu">01</span>Destination</div></Link></li>
                        <li><Link to="/Crew_Commander"><div className="ff-sans-cond uppercase text-white letter-spacing-2"><span className="newmenu">02</span>Crew</div></Link></li>
                        <li><Link to="Destination"><div className="ff-sans-cond uppercase text-white letter-spacing-2"><span className="newmenu">03</span>Technology</div></Link></li>
                    </ul>
                </nav>
            </header>

            <main id="main" className="grid-container grid-container--crew flow">
                <h1 className="numbered-title"><span className="newmenu" aria-hidden="true">02</span> Meet your crew</h1>

                <div className="dot-indicators flex">
                    <button aria-selected="true"><span></span></button>
                    <button aria-selected="false"><span></span></button>
                    <button aria-selected="false"><span></span></button>
                    <button aria-selected="false"><span></span></button>
                </div>

                <article className="crew-details">
                <h2 className="fs-600 ff-serif uppercase">Commander</h2>
                <p className="fs-700 uppercase ff-serif">Douglas Hurley</p>
                <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot 
                and former NASA astronaut. He launched into space for the third time as 
                commander of Crew Dragon Demo-2.</p>
                </article>
                
                <img src="./src/assets/crew/image-douglas-hurley.png" alt="The Commander" />

  </main>

        </div>
    )
}