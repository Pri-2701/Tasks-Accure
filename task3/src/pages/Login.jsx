const Login = () => {
  return (
    <div className="p-6 max-w-sm mx-auto">
      <h2 className="text-2xl mb-4">Login</h2>
      <input className="border p-2 w-full mb-2" placeholder="Email" />
      <input className="border p-2 w-full mb-2" type="password" placeholder="Password" />
      <button className="bg-blue-600 text-white px-4 py-2 w-full">
        Login
      </button>
    </div>
  );
};

export default Login;