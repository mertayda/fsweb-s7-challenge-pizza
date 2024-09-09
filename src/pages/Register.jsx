import React from "react";
import Logo from "../assets/images/logo.png";

const Register = () => {
  return (
    <div className="grid grid-cols-2 min-h-screen bg-gray-100">
      <div className="flex flex-col justify-center items-center bg-white p-8">
        <img src={Logo} alt="Logo" className="w-48 h-32 mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Amazing Foods, Amazingly Free
        </h1>
        <p className="text-gray-600 text-center">
          Sign up today and start earning points towards free Pizza. More
          points, more rewards!
          <br />
          Find out more{" "}
          <a href="#" className="text-red-500">
            here
          </a>
          .
        </p>
      </div>
      <div className="flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-6">
          <h4 className="text-2xl font-bold text-gray-800">
            Sign up with your email address
          </h4>
          <p className="text-gray-600">
            Join today and get a Regular Breadsticks for free.
          </p>
          <form className="space-y-4" action="#">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="name@company.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm password
              </label>
              <input
                type="password"
                name="confirm-password"
                id="confirm-password"
                placeholder="••••••••"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div>
              <div className="flex items-center">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="h-4 w-4 text-red-500 border-gray-300 rounded"
                  required
                />
                <label
                  htmlFor="terms"
                  className="ml-2 block text-sm text-gray-900"
                >
                  I accept the{" "}
                  <a href="#" className="text-red-500">
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#CE2829] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Create an account
            </button>
            <p className="text-sm text-gray-500 text-center">
              Already have an account?{" "}
              <a href="#" className="text-red-500">
                Login here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
