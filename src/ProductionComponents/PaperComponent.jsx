/**
 * Component to display a project details
 */

import React from 'react';
import { useParams } from 'react-router-dom';

import { researchPapers } from '../ResearchPapers.jsx'

import Body from './Body.jsx';


function ProjectComponent() {

    let { paper_id } = useParams();
    console.log(paper_id);

    if (researchPapers[paper_id] === undefined) {
        return (
            <div>
                <h2>Paper not found</h2>
            </div>
        );
    }

    const paper = researchPapers[paper_id];
    console.log(paper);
    return (
        <Body production={paper} isPaper={true} />
    );
}

export default ProjectComponent;