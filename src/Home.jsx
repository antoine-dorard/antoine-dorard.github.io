import { useEffect, useState, useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons";

import PersonalProjects from "./PersonalProjects";
import UniversityProjects from "./UniversityProjects";
import Footer from "./Footer";
import ResearchPapers from "./ResearchPapers";
import styled from "styled-components";

const ThesisNameBlock = styled.span`
    font-weight: bold;
    font-style: italic;
`

const UniversitySubTitle = styled.span`
    font-size: 1.5em;
    font-weight: normal;
    font-family: "Montserrat", serif;
    font-style: italic;
`

function Home() {
    const imageRef = useRef(null);

    const handleScroll = () => {
        imageRef.current.style.transform = `translateY(${
            -window.scrollY * 0.1
        }px) rotate(0deg)`;
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <div id="nav">
                <Link to="#about">About Me</Link>
                <Link to="#projects">Projects</Link>
                <Link to="#contact">Contact</Link>
            </div>

            <a id="about"></a>
            <div id="hero-container">
                <div id="hero">
                    <div className="self-image" ref={imageRef}></div>
                    <h1 style={{marginBottom: 0}}>ANTOINE DORARD</h1>
                    <UniversitySubTitle>Bsc Data Science and Artificial Intelligence</UniversitySubTitle>
                    <p style={{marginTop: '2em'}}>
                        Welcome to my website! 
                        <br/><br/>
                        Here, you’ll discover a portfolio of projects completed at Maastricht University with my peers, as well as various side projects I’ve pursued independently or with collaborators.
                        <br/><br/>
                        Additionally, I have recently completed my thesis, titled <ThesisNameBlock>Enhancing Android Vulnerability Detection: Integrating LLMs with SAST Tools</ThesisNameBlock>. You can find more details about this work in the Research section below.
                    </p>
                    
                </div>

                <Link to="#research-papers">
                    <div id="explore-projects-button">
                        <span>Explore my projects</span>
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </Link>
            </div>

            <a id="projects"></a>
            <div className="body-section">
                <ResearchPapers />
                <PersonalProjects />
                <UniversityProjects />
            </div>

            <a id="contact"></a>

        </>
    );
}

export default Home;
