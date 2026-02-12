import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Profile from "./Profile";
import Settings from "./Settings";

function Dashboard() {
  return (
    <div>
      <h3>Dashboard Page</h3>

      <nav>
        <Link to="profile">Profile</Link> | 
        <Link to="settings">Settings</Link>
      </nav>

      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default Dashboard;



