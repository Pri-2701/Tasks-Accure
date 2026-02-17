import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass =
    "block py-2 px-4 rounded hover:bg-blue-100";

  const activeClass =
    "bg-blue-500 text-white";

  return (
    <div className="w-64 bg-white shadow-md min-h-screen">
      <h2 className="text-xl font-bold text-blue-600 p-6">
        Admin
      </h2>

      <nav className="space-y-2 px-4 text-gray-700">
        <NavLink to="/dashboard" className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }>
          Dashboard
        </NavLink>

        <NavLink to="/icons" className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }>
          Icons
        </NavLink>

        <NavLink to="/maps" className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }>
          Maps
        </NavLink>

        <NavLink to="/profile" className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }>
          User Profile
        </NavLink>

        <NavLink to="/tables" className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }>
          Tables
        </NavLink>

        <NavLink to="/login" className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }>
          Login
        </NavLink>

        <NavLink to="/register" className={({ isActive }) =>
          `${linkClass} ${isActive ? activeClass : ""}`
        }>
          Register
        </NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
