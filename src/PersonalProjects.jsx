import { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { limitText } from './utils';

function PersonalProjects({ renderAsPage }) {

    useEffect(() => {
        
    }, []);

  return (

    <div className={`projects-section ${renderAsPage ? "body-section" : ""}`}>
        <a name="PersonalProjects"></a>
        <div className="projects-section-title">
            <span></span>
            <h6>Personal Projects</h6>
        </div>
        {
            Object.keys(personalProjects).map((project_key) => {
                const project = personalProjects[project_key];
                const project_url = `/personal-projects/${project_key}`;
                return (
                    <a key={project_key} href={project_url}>
                        <div className="projects-section-block">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{limitText(project.description, 280)}</p>
                        </div>
                    </a>
                )
            })
                
        }                    
    </div>
  )
}

export default PersonalProjects;

export const personalProjects = {
    cifler: {
        title: "Cifler",
        description: "Two other fellow students and I developed a prototype of a decentralized platform for open journalism. The idea was to promote truth and unbiased information via video content, leveraging the blockchain technology and IPFS, a “peer-to-peer content delivery network”.",
        about: "This project involved creating a frontend with Vue.js and a backend combining the EOS blockchain with IPFS (InterPlanetary File System). The blockchain architecture, combined with a decentralized file storage protocol such as IPFS, was the central component of this idea, creating a decentralized way of storing videos produced by the community. The blockchain’s role was to maintain an immutable record of video uploads, mapping wallet hashes to IPFS video hashes. Aside from uploading, the community was incentivized, through the collection of tokens (EOS coin), to upvote or downvote videos they found relevant or not. The frontend, a website where users could upload videos that they judged worth sharing with the world as valuable information, served as the gateway between the average internet user and the complex decentralized architecture that, in theory, would allow the bypassing of potential censorship by authoritarian governments. This was the main motivation behind Cifler, which grew especially after the start of the Ukrainian War. Of course, this project did not come without legal challenges, which were not our main area of expertise at the time. With the advice of a professor from the Faculty of Law at Maastricht University, we came to realize that this project would require more concrete legal research before considering its more technical aspects, which eventually led to this project becoming an open idea for the future.",
        technologies: [],
        links: {
            github: "",
            link: "",
        },
    },
    online_newsletter_platform: {
        title: "Online Newsletter Platform",
        description: "Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Fusce fermentum odio nec arcu.",
        technologies: ["Python", "Pandas"],
        links: {
            github: "",
            link: "",
        },
    },
    AIVT: {
        title: "AI-leveraged tool for short form video generation",
        description: "Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum. Fusce fermentum odio nec arcu.",
        technologies: ["Python", "Pandas", "Scikit-learn", "XGBoost"],
        links: {
            github: "",
            link: "",
        },
    },
}
    
