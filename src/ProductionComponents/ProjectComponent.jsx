/**
 * Component to display a project details
 */

import React from 'react';
import { useParams } from 'react-router-dom';

import { personalProjects } from '../PersonalProjects.jsx'
import { universityProjects } from '../UniversityProjects.jsx'

import Body from './Body.jsx';


function ProjectComponent() {

    let { project_id } = useParams();
    console.log(project_id);

    if (personalProjects[project_id] === undefined && universityProjects[project_id] === undefined) {
        return (
            <div>
                <h1>Project not found</h1>
            </div>
        );
    }

    const project = personalProjects[project_id] ? personalProjects[project_id] : universityProjects[project_id];
    console.log(project);
    return (
        <Body production={project}/>
    );
}

export default ProjectComponent;