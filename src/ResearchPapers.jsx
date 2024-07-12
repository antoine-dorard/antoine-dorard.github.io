import { limitText } from "./utils";

function ResearchPapers({ renderAsPage }) {
    console.log(renderAsPage);
    return (
        <div className={`projects-section ${renderAsPage ? "body-section" : ""}`}>
            <a name="ResearchPapers"></a>
            <div className="projects-section-title">
                <span></span>
                <h6>Research</h6>
            </div>
            
            {
                Object.keys(researchPapers).map((project_key) => {
                    const project = researchPapers[project_key];
                    const project_url = `/research-papers/${project_key}`;
                    return (
                        <a key={project_key} href={project_url}>
                            <div className="projects-section-block">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{limitText(project.abstract)}</p>
                            </div>
                        </a>
                    )
                })
                    
            }  
        </div>
    );
}

export default ResearchPapers;

export const researchPapers = {
    bachelor_thesis: {
        title: "Enhancing Android Vulnerability Detection: Integrating LLMs with SAST tools",
        abstract: "In this thesis, we present a Python tool that aims to integrate Large Language Models (LLM) with Static Application Security Testing (SAST) tools to reduce the number of false positives in a vulnerability analysis of Android applications. SAST tools are known to produce a high number of false alarms when scanning Android applications for security issues, mainly due to their lack of context understanding. The presented tool is a pipeline of different components that generates descriptions of code for vulnerabilities at different levels of granularity. The different levels of granularity are method level, class level, and cluster level. This thesis aims to help Android application developers understand vulnerabilities quicker from the code summaries and eventually reduce the number of false alarms.",
        technologies: [
            "Static Application Security Testing",
            "Large Language Models",
            "Android Applications",
            "Code Clustering",
            "Vulnerability Detection",
        ],
        links: {
            github: "",
            link: "",
        },
        headerImg: "",
        pictures: []
    },
}