import React from "react";
import city from "./assets/city.jpg";

export default function App() {
  return (
    <div className="h-screen bg-gray-100 relative overflow-hidden"
     style={{
        backgroundImage: `url(${city})`,
      }}>

      
      

      {/* LOGIN CARD */}
      <div className="flex items-center justify-center h-full">
        <div className="bg-white p-10 rounded-xl shadow-lg w-[400px]">

          {/* LOGO */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-8 h-8 bg-black mr-2"></div>
            <h1 className="text-2xl font-semibold">mygate</h1>
          </div>

          <h2 className="text-center text-gray-700 mb-6">Sign in</h2>

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Email *"
            className="w-full p-3 border rounded mb-4"
          />

          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Password *"
            className="w-full p-3 border rounded mb-4"
          />

          {/* BUTTON */}
          <button className="w-full bg-gray-300 py-3 rounded text-gray-700 font-semibold">
            Sign In
          </button>

          {/* LINKS */}
          <div className="flex justify-between text-sm mt-4 text-gray-600">
            <span className="cursor-pointer">Forgot password?</span>
            <span className="cursor-pointer">Sign Up</span>
          </div>

          {/* FOOTER */}
          <div className="text-center text-xs text-gray-500 mt-6">
            Terms of Use • Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
}