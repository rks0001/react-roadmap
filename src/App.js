import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactRoadmap from './pages/ReactRoadmap';
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Homepage from '../src/components/Homepage'
import NotFound from '../src/components/NotFound'
import InterviewPrep from './pages/InterviewPrep';
import VideoLibrary from './pages/VideoLibrary';
import GithubRepo from './pages/GithubRepo';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/react-roadmap/*" element={<ReactRoadmap />} />
        <Route path="/interview-prep" element={<InterviewPrep />} />
        <Route path="/video-library" element={<VideoLibrary />} />
        <Route path="/github-repos" element={<GithubRepo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
