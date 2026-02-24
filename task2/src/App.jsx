

import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import MainLayout from "./components/MainLayout";
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
      
      <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<Register />} />

      
      {isAuth ? (
        <Route element={<MainLayout setIsAuth={setIsAuth} />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/profile" element={<UserProfile />} />
        </Route>
      ) : (
        <Route path="*" element={<Navigate to="/login" />} />
      )}
    </Routes>
  );
}

export default App;