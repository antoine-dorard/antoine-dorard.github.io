import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faReact } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Icons = styled.div`
    display: flex;
    gap: 1em;
`;

function Footer() {
    return (
        <>
        
            <div className="footer">
                <Icons>
                    <a target="blank" href="https://linkedin.com/in/antoine-dorard">
                        <FontAwesomeIcon className="pointer" style={{color: "white"}} icon={faLinkedin} />
                    </a>
                    <a target="blank" href="mailto: dorard.antoine@gmail.com">
                        <FontAwesomeIcon className="pointer" style={{color: "white"}} icon={faEnvelope} />
                    </a>
                </Icons>
                <div
                    style={{
                        position: "absolute",
                        fontSize: "0.3em",
                        bottom: "0.8em",
                        right: "0.8em",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5em",
                    }}
                >
                    made with{" "}
                    <span role="img" aria-label="heart">
                        ❤️
                    </span>{" "}
                    by Antoine Dorard with <FontAwesomeIcon id="reactlogo" icon={faReact} />
                </div>
            </div>
        </>
    );
}

export default Footer;