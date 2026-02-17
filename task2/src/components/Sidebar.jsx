import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-slate-900 text-white p-4">
      <h1 className="text-xl font-bold mb-6">Admin Panel</h1>

      <nav className="space-y-3">
        <NavLink to="/" className="block hover:text-blue-400">Dashboard</NavLink>
        <NavLink to="/icons" className="block hover:text-blue-400">Icons</NavLink>
        <NavLink to="/maps" className="block hover:text-blue-400">Maps</NavLink>
        <NavLink to="/tables" className="block hover:text-blue-400">Tables</NavLink>
        <NavLink to="/profile" className="block hover:text-blue-400">Profile</NavLink>
      </nav>
    </div>
  );
}

export default Sidebar;
