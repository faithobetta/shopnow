import React from 'react';

const Signup = ({ openLogin }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Sign Up</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-3 py-2 border"
            placeholder="Enter Name"
          />
        </div>
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

        <div className="mb-4 flex justify-center" >
          <button type="submit" className="w-1/3 bg-black text-white hover:bg-gray-800 py-2">
            Sign Up
          </button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Have an Account?</span>
        <button className="text-red-800 ml-2" onClick={openLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
