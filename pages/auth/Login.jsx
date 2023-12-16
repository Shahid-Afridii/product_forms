import React from 'react';
import { FaTwitter, FaFacebook, FaEnvelope, FaLock, FaArrowRight } from 'react-icons/fa'; // Import icons

const Login = () => {
  return (
    <div className="flex min-h-screen overflow-hidden">
      {/* Welcome Section with Gradient Background and Bubbles */}
     <div className="relative w-1/2 flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-600 p-8 text-white">
      <div className="z-10 text-center">
        {/* Replace "LOGO" with your actual logo if available */}
        <div className="text-6xl font-bold mb-4">LOGO</div>
        <h1 className="text-5xl font-bold mb-4">Welcome Page</h1>
        <p className="mb-8">Sign in to continue access</p>
        <p>www.yoursite.com</p>
      </div>

      {/* Inline SVGs for bubble elements */}
      <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        {/* Large bubble */}
        <circle cx="100" cy="100" r="80" fill="rgba(255, 255, 255, 0.2)" className="animate-blob" style={{ transformOrigin: 'center' }} />
        {/* Medium bubble */}
        <circle cx="180" cy="75" r="45" fill="rgba(255, 255, 255, 0.15)" className="animate-blob" style={{ transformOrigin: 'center' }} />
        {/* Small bubble */}
        <circle cx="155" cy="185" r="35" fill="rgba(255, 255, 255, 0.25)" className="animate-blob" style={{ transformOrigin: 'center' }} />
      </svg>
    </div>

      {/* Login Form Section */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
          <div className="text-center">
            <h2 className="font-semibold text-3xl text-gray-900">Sign In</h2>
          </div>
          <form className="mt-8 space-y-6">
            <div>
              <label className="sr-only">Email Address</label>
              <div className="flex items-center bg-gray-100 rounded-full">
                <FaEnvelope className="text-gray-500 ml-4" />
                <input
                  className="appearance-none rounded-full w-full py-2 px-4 bg-gray-100 outline-none text-gray-700"
                  type="email"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>
            <div>
              <label className="sr-only">Password</label>
              <div className="flex items-center bg-gray-100 rounded-full">
                <FaLock className="text-gray-500 ml-4" />
                <input
                  className="appearance-none rounded-full w-full py-2 px-4 bg-gray-100 outline-none text-gray-700"
                  type="password"
                  placeholder="Password"
                  required
                />
              </div>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none">
                Continue <FaArrowRight className="ml-2" />
              </button>
            </div>
          </form>
        
        </div>
      </div>
    </div>
  );
};

export default Login;
