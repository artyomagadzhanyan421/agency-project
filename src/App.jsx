import './App.css';
import { Routes, Route } from "react-router";

// Routes
import Home from "./pages/Home";
import Project from "./pages/Project";

// Components
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  )
}

export default App
