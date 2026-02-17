import { useNavigate } from "react-router-dom";

function Navbar({ setIsAuth }) {
  const navigate = useNavigate();

  const logout = () => {
    setIsAuth(false);
    navigate("/login");
  };

  return (
    <div className="flex justify-between items-center p-4 shadow">
      <h2 className="font-semibold">Dashboard</h2>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-1 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
