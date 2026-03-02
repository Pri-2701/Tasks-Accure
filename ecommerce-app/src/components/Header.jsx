import { Link, NavLink } from "react-router-dom";

const Header = () => (
  <header className="bg-gray-900 text-white">
    <div className="container mx-auto flex justify-between items-center p-4">
      <Link to="/" className="text-xl font-bold">E-Shop</Link>
      <nav className="space-x-6">
        {["/", "/products", "/cart", "/login"].map((path, i) => (
          <NavLink
            key={i}
            to={path}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-blue-400" : ""
            }
          >
            {path === "/" ? "Home" : path.replace("/", "")}
          </NavLink>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;



