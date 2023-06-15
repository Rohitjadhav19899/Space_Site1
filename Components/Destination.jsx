import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "/src/assets/shared/logo.svg";
import Moon from "/src/assets/destination/image-moon.png";
import Mars from "/src/assets/destination/image-mars.png"; 
import Europa from "/src/assets/destination/image-europa.png";
import Titan from "/src/assets/destination/image-titan.png" ;

export default function Destination() {

    const [navBar, setNavBar] = useState(false);
    /*-------------EDIT--------------*/
    const [hide, sethide] = useState(true);
    /*-------------EDIT--------------*/

    return (
        <div className="destination">
            <header className="primary-header flex">
                <div>
                    <img src={logo} alt="space logo" className="logo" />
                </div>
                <button className="mobile-nav-toggle" onClick={() => setNavBar((prev) => !prev)} aria-controls="primary-navigation"><span className="sr-only" aria-expanded={navBar}></span></button>
                <nav>
                    <ul id="primary-navigation" data-visible={navBar} className="primary-navigation underline-indicators flex">
                        <li className="active"><a className="ff-sans-cond uppercase text-white letter-spacing-2" href="/"><span>00</span>Home</a></li>
                        <li><Link to="/Destination"><div className="ff-sans-cond uppercase text-white letter-spacing-2 " ><span className="newmenu">01</span>Destination</div></Link></li>
                        <li><Link to="/Crew_Commander"><div className="ff-sans-cond uppercase text-white letter-spacing-2"><span className="newmenu">02</span>Crew</div></Link></li>
                        <li><Link to="Destination"><div className="ff-sans-cond uppercase text-white letter-spacing-2"><span className="newmenu">03</span>Technology</div></Link></li>
                    </ul>
                </nav>
            </header>

            <main id="main" className="grid-container grid-container--destination flow">
                <h1 className="numbered-title"><span className="newmenu" aria-hidden="true">01</span> Pick your destination</h1>
                /*-------------EDIT--------------*/
                <img className={hide} src= {Moon} alt="The Moon"></img>
                <img className={hide} src= {Mars} alt="The Mars"></img>
                <img className={hide} src= {Europa} alt="The Europa"></img>
                <img className={hide} src= {Titan} alt="The Titan"></img>
                /*-------------EDIT--------------*/
                <div className="tab-list underline-indicators flex">
                    <button aria-selected="true" className="uppercase ff-sans-cond text-light bg-dark letter-spacing-2">Moon</button>
                    <button aria-selected="false" className="uppercase ff-sans-cond text-light bg-dark letter-spacing-2">Mars</button>
                    <button aria-selected="false" className="uppercase ff-sans-cond text-light bg-dark letter-spacing-2">Europa</button>
                    <button aria-selected="flase" className="uppercase ff-sans-cond text-light bg-dark letter-spacing-2">Titan</button>

                </div>

                <article className="destination-info">
                    <h1 className="fs-800 uppercase ff-serif">Moon</h1>

                    <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>

                    <div className="destination-meta flex">
                        <div>
                            <h3 className="text-light fs-200 uppercase">Avg. distance</h3>
                            <p className=" ff-serif uppercase">384,400 km</p>
                        </div>

                        <div>
                            <h3 className="text-light fs-200 uppercase">Est. travel time</h3>
                            <p className=" ff-serif uppercase">3 days</p>
                        </div>

                    </div>

                </article>

            </main>

        </div>
    )
}