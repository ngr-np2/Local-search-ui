import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Register = () => {
  return (
    <section className="bg-gray-50 -900">
      <div className="flex flex-col justify-center items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link
          to="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <div className="text-center">
            <Logo />
          </div>
        </Link>
        <div className="mt-0 w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold tracking-tight leading-tight text-center text-gray-900 md:text-2xl">
              Register for a free account
            </h1>
            <form className="space-y-4 md:space-y-6">
              <div>
                <label
                  for="fullName"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                  placeholder="tej karki"
                  required=""
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                  placeholder="name@company.com"
                  required=""
                />
              </div>
              <div>
                <label
                  for="phone number"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Your phone number
                </label>
                <input
                  type="tel"
                  name="phone number"
                  id="phone number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                  placeholder="98********"
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  required=""
                />
              </div>
              <button className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                Register
              </button>
              <p className="text-sm font-light text-gray-500 -400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-green-600 hover:underline -500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
