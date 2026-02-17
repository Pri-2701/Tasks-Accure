import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Icons from "./pages/Icons";
import Maps from "./pages/Maps";
import Tables from "./pages/Tables";
import UserProfile from "./pages/UserProfile";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<Register />} />

      {/* PROTECTED ROUTES */}
      {isAuth ? (
        <Routegit
          path="/"
          element={
            <div className="flex">
              <Sidebar />
              <div className="flex-1">
                <Navbar setIsAuth={setIsAuth} />
                <div className="p-6">
                  <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/icons" element={<Icons />} />
                    <Route path="/maps" element={<Maps />} />
                    <Route path="/tables" element={<Tables />} />
                    <Route path="/profile" element={<UserProfile />} />
                  </Routes>
                </div>
              </div>
            </div>
          }
        />
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
}

export default App;
