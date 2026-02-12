
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";


function App() {
  return (
    <Router>
      <div>
        <h2>My React Dashboard</h2>
        
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

