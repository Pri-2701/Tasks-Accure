import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Icons from "./pages/Icons";
import Maps from "./pages/Maps";
import UserProfile from "./pages/UserProfile";
import Tables from "./pages/Tables";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
      <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Section */}
      <div className="flex-1">
        <Navbar />


      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        </div>
      </div>
    </div>
  );
}


export default App;




