// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();

//     if (email === "admin@gmail.com" && password === "1234") {
//       localStorage.setItem("isLoggedIn", "true");
//       navigate("/");
//     } else {
//       alert("Invalid Credentials");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-[70vh]">
//       <form
//         onSubmit={handleLogin}
//         className="bg-white p-8 rounded shadow-md w-80"
//       >
//         <h2 className="text-2xl font-bold mb-6 text-center">
//           Login
//         </h2>

//         <input
//           type="email"
//           placeholder="Email"
//           className="w-full mb-4 p-2 border rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           className="w-full mb-4 p-2 border rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;





// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await loginUser(form.email, form.password);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/"); // Redirect to Home
       navigate("/cart");
        navigate("/products");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 mb-4 border rounded"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-3 mb-6 border rounded"
        />

        <button className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition">
          Login
        </button>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account? <span className="text-blue-500 cursor-pointer" onClick={() => navigate("/register")}>Register</span>
        </p>
      </form>
    </div>
  );
};

export default Login;