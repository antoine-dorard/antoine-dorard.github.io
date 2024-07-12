/**
 * Component to display a project details
 */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import Galery from '../Galery.jsx';
import { useNavigate } from 'react-router-dom';

const HeaderImg = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

const BackButton = styled.button`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background-color: white;
    border: none;
    font-size: 2em;
    padding: 0.5em;
`;

const BodyDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-inline: 10vw;
`;

const Links = styled.div`
    display: flex;
    gap: 0.5em;
    font-size: 2em;
`;

const HeaderImgPlaceholder = styled.div`
    width: 100%;
    height: 200px;
    background-color: #f0f0f0;
`;

function Body({ production = null, isPaper = false}) {
    const navigate = useNavigate();
    return (
        <>  
            {
                !production.headerImg ?
                <HeaderImgPlaceholder />
                
                :
                <HeaderImg src={production.headerImg.file} alt={production.title} style={{objectPosition: production.headerImg.objectPosition}}/>

            }
            <BackButton id="previous-page" className='pointer' onClick={() => navigate(-1)} title="previous page">←</BackButton>
            <BodyDiv>
                <h1>{production.title}</h1>
                <p>{production.description}</p>

                {
                    isPaper ?

                        production.abstract &&
                        <>
                            <h2 className='project-subtitles'>Abstract</h2>
                            <p>{production.abstract}</p>
                        </>
                        : 
                        production.about &&
                        <>
                            <h2 className='project-subtitles'>About</h2>
                            <p>{production.about}</p>
                        </>
                    
                }

                {production.technologies && production.technologies.length > 0 && 
                    <>
                        <h2 className='project-subtitles'>Keywords</h2>
                        <ul>{production.technologies.map((tech) => {
                            return (
                                <li key={tech}>{tech} </li>
                            )
                        })}</ul>
                    </>
                }

                {production.links.link && production.links.github &&
                    <>
                    <h2 className='project-subtitles'>Links</h2>
                
                    <Links>
                        {production.links.github && <a
                            href={production.links.github}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a> }
                        {production.links.link && <a
                            href={production.links.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faExternalLinkAlt} />
                        </a>}
                    </Links>
                    </>
                }

                
                {production.pictures && production.pictures.length > 0 && 
                    <>
                        <h2 className='project-subtitles'>Gallery</h2>
                        <Galery pictures={production.pictures} />
                    </>
                }
                
            </BodyDiv>
        </>
    );
}

export default Body;
