import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HelloWorld from '../components/HelloWorld';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HelloWorld />} />
      </Routes>
    </Router>
  )
}