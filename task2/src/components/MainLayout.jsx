// layouts/MainLayout.jsx
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

function MainLayout({ setIsAuth }) {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar setIsAuth={setIsAuth} />
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainLayout;