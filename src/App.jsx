import './App.css';
import { Routes, Route } from "react-router";

// Routes
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  )
}

export default App
