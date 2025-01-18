import './App.css';
import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router";

// Routes
import Home from "./pages/Home";
import Project from "./pages/Project";

// Components
import Navbar from './components/Navbar';

// ScrollToTop Component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<Project />} />
      </Routes>
    </div>
  )
}

export default App
