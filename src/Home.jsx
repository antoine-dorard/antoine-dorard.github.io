import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons";

import PersonalProjects from "./PersonalProjects";
import UniversityProjects from "./UniversityProjects";
import Footer from "./Footer";
import ResearchPapers from "./ResearchPapers";

function Home() {
    const imageRef = useRef(null);

    const handleScroll = () => {
        imageRef.current.style.transform = `translateY(${
            -window.scrollY * 0.1
        }px) rotate(7deg)`;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div id="nav">
                <a href="#about">About Me</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </div>

            <a name="about"></a>
            <div id="hero-container">
                <div id="hero">
                    <div className="self-image" ref={imageRef}></div>
                    <h1>ANTOINE DORARD</h1>
                    <p>
                    Welcome to my website. On this page you will find projects, either done at university in collaboration with other fellow students, or personal, may they be with undertaken alone or with other people. 

I also recently finished my thesis called “Enhancing Android Vulnerability Detection: Integrating LLMs with SAST Tools”, for which you may find more information in the Research section below.
                    </p>
                </div>

                <a href="#ResearchPapers">
                    <div id="explore-projects-button">
                        <span>Explore my projects</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </a>
            </div>

            <a name="projects"></a>
            <div className="body-section">
                <ResearchPapers />
                <PersonalProjects />
                <UniversityProjects />
            </div>

            <a name="contact"></a>

        </>
    );
}

export default Home;
