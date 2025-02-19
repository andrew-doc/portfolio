import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from '../components/NavBar';
import AboutPage from '../components/AboutPage';
import Projects from '../components/Projects';

export default function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<AboutPage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  )
}