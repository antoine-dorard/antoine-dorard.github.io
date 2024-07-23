import { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { limitText } from './utils';

function PersonalProjects({ renderAsPage }) {

    useEffect(() => {
        
    }, []);

  return (

    <div id="personal-projects" className={`projects-section ${renderAsPage ? "body-section" : ""}`}>
        <div className="projects-section-title">
            <span></span>
            <h6>Personal Projects</h6>
        </div>
        {
            Object.keys(personalProjects).map((project_key) => {
                const project = personalProjects[project_key];
                const project_url = `/personal-projects/${project_key}`;
                return (
                    <Link key={project_key} to={project_url}>
                        <div className="projects-section-block">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{limitText(project.description, 280)}</p>
                        </div>
                    </Link>
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
        pictures: [
            {
                caption: "Presentation of the project at a Cifler event",
                url: "/cifler/instagram_picture.jpg"
            },
            {
                caption: "Website homepage",
                url: "/cifler/MainFrame.png"
            },
            {
                caption: "Voting Protocol",
                url: "/cifler/voting_protocol.png"
            }
        ],
        links: {
            github: "",
            link: "",
        },
    },
    online_newsletter_platform: {
        title: "Online Newsletter Platform",
        description: "Developed a complete web application for sending recurring newsletter which includes the frontend, the admin panel, the authentication server, the file server, and the general backend server. It involed working with many technologies such as Vue.js, Node.js, Flask, MySQL, JWT and more.",
        about: "From understanding the client's needs to providing a fully fonctionnal tool where the client could configure the newsletter, add articles and automatically send them to the subscribers, this project was an invaluable experience in terms of communication with the client and technical skills. The client was an individual who wanted to automate the process of sending newsletters to his subscribers. The project was divided into several parts: the frontend, the admin panel, the authentication server, the file server, and the general backend server. The frontend was developed with Vue.js, the admin panel with Flask, the authentication server with Express.js, the file and backend server with Flask. The database was MySQL. The project also involved the use of JWT for authentication and authorization. This project also involved deploying to a production server where the client could access the application securely, and where the application could automatically send emails to the subscribers.",
        technologies: [
            "Vue.js",
            "Node.js",
            "Flask",
            "MySQL",
            "JWT",
        ],
        pictures: [
            {
                caption: "Admin Panel Login Page",
                url: "/SME/login.png"
            },
            {
                caption: "Admin Panel Dashboard",
                url: "/SME/Desktop-1.png"
            },
            {
                caption: "Admin Panel Email Editor",
                url: "/SME/Desktop-5.png"
            },
        ],
        links: {
            github: "",
            link: "",
        },
    },
    AIVT: {
        title: "AI-leveraged tool for short form video generation",
        description: "Developed a tool that leverages new generative AI technologies to generate short form videos from a prompt and a set of videos or images and a music",
        about: "",
        technologies: ["Text-to-speech", "GPT-3.5"],
        links: {
            github: "",
            link: "",
        },
    },
}
    
