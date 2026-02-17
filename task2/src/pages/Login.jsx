import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // ✅ fake login success
    setIsAuth(true);
    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow w-80"
      >
        <h2 className="text-xl font-bold mb-6 text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border rounded"
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
