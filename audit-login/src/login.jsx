import React, { useState } from "react";

export default function Login() {
     const [role, setRole] = useState("admin");
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#2e6f66]">
      
      {/* Main Container */}
      <div className="flex bg-white rounded-xl shadow-lg overflow-hidden w-[900px]">

        {/* LEFT SIDE */}
        <div className="w-1/2 bg-[#2e6f66] flex flex-col items-center justify-center text-white p-10">
          
          <h2 className="text-xl font-semibold mb-6">
            Audit management
          </h2>

          <img
          src="https://cdn-icons-png.flaticon.com/512/1055/1055687.png"
          alt="audit laptop"
          className="w-64"
         />


        </div>

        {/* RIGHT SIDE */}
        <div className="w-1/2 p-8">

          {/* Login + Toggle SAME LINE */}
          <div className="flex justify-between items-center mb-1">

            <h2 className="text-xl font-semibold">
              Login
            </h2>
            <div className="flex bg-gray-200 rounded-full p-1 gap-1">
                 {/* ADMIN */}
               <button
               onClick={() => setRole("admin")}
              className={`px-4 py-1 rounded-full ${
                 role === "admin"
                    ? "bg-[#2e6f66] text-white"
                    : "text-gray-600"
               }`}
            >
              Admin
          </button>

        {/* AUDITOR */}
        <button
          onClick={() => setRole("auditor")}
          className={`px-4 py-1 rounded-full ${
            role === "auditor"
              ? "bg-[#2e6f66] text-white"
              : "text-gray-600"
          }`}
        >
          Auditor
        </button>
          </div>
          </div>
          <p className="text-gray-500 text-sm mb-4">
            Log in to your account as admin or auditor
          </p>

          {/* EMAIL */}
          <div className="mb-3">
            <label className="block text-sm font-medium mb-1">
              Email
            </label>

            <input
              type="email"
              placeholder="admin@example.com"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2e6f66]"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-1">
            <label className="block text-sm font-medium mb-1">
              Password
            </label>

            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#2e6f66]"
            />
          </div>

          {/* FORGOT PASSWORD */}
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-[#2e6f66]">
              Forgot password?
            </a>
          </div>

          {/* LOGIN BUTTON */}
          <button className="w-full bg-[#2e6f66] text-white py-2 rounded-md hover:bg-[#255c55]">
            Login
          </button>

          {/* SIGN UP */}
          <p className="text-center text-sm mt-4">
            Don't have an account?
            <span className="text-[#2e6f66] cursor-pointer ml-1">
              Sign up
            </span>
          </p>

          {/* FOOTER */}
          <div className="text-center text-xs text-gray-400 mt-6">
            Privacy Policy | Terms & Conditions
          </div>

        </div>
      </div>
    </div>
  );
}