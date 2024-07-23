import { useEffect, useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'
import './App.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import ResearchPapers from './ResearchPapers.jsx'
import PersonalProjects from './PersonalProjects.jsx'
import UniversityProjects from './UniversityProjects.jsx'

import ProjectComponent from './ProductionComponents/ProjectComponent.jsx'
import PaperComponent from './ProductionComponents/PaperComponent.jsx'

import Home from './Home.jsx'
import Footer from './Footer.jsx'
import ScrollToAnchor from './ScrollToAnchor.jsx'

function App() {

  return (
    <>
      <HashRouter>
          <ScrollToAnchor />        
          <Routes>
              <Route path="/" element={<Home />} />
              
              <Route path="/research-papers" element={<ResearchPapers renderAsPage={true} />} />
              <Route path="/research-papers/:paper_id" element={<PaperComponent />} />

              <Route path="/personal-projects" element={<PersonalProjects renderAsPage={true} />} />
              <Route path="/personal-projects/:project_id" element={<ProjectComponent />} />

              <Route path="/university-projects" element={<UniversityProjects renderAsPage={true} />} />
              <Route path="/university-projects/:project_id" element={<ProjectComponent />} />
          </Routes>
      </HashRouter>

      <Footer />
    </>
  )
}

export default App
