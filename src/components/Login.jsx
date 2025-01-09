import React from 'react';

const Login = ({openSignup}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-3 py-2 border"
            placeholder="Enter Password"
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remember Me</span>
          </label>
          <a href="#" className="text-red-800">
            Forgot Password?
          </a>
        </div>
        <div className="mb-4 flex justify-center">
          <button type="submit" className="w-1/3 bg-black text-white hover:bg-gray-800 py-2">
            Login
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Don't Have an Account?</span>
        <button className="text-red-800 ml-2" onClick={openSignup}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Login;
