import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorMsg from "../toast/ErrorMsg";
import { useLoginMutation } from "../../redux/auth/authApiSlice";
import { setCredentials } from "../../redux/auth/authSlice";
import { useDispatch } from "react-redux";

const LoginDailog = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  useEffect(() => {
    setErrMsg("");
    setShowToast(false);
  }, [email, password]);
  const handleClick = async (e) => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    if (email.length <= 6 || password.length <= 7) {
      setShowToast(true);
      setErrMsg("enter your credentials!");
      return;
    }
    try {
      const userData = await login({ email, password }).unwrap();
      console.log(userData);
      dispatch(setCredentials(userData));
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
      const resp = err?.data;
      setShowToast(true);
      if (!err) {
        setShowToast(true);
        setErrMsg("server is not responding");
      } else if (resp?.status === 500) {
        setShowToast(true);
        setErrMsg("something went wrong!");
      } else if (resp?.status === 401) {
        setShowToast(true);
        setErrMsg(resp?.errMsg);
        setTimeout(() => {
          setShowToast(false);
        }, 5000);
      } else {
        setShowToast(true);
        setErrMsg("Login failed! 😔");
      }
    }
  };
  return (
    <dialog open className="z-[99999999] fixed top-1/2">
      {showToast && <ErrorMsg errMsg={errMsg} />}
      <form method="dialog" className="space-y-4 md:space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
            placeholder="name@email.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            autoComplete="ture"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
            required
          />
        </div>
        <div className="flex justify-end">
          <Link
            to="#"
            className="text-sm font-medium text-green-600 hover:underline -500"
          >
            Forgot password?
          </Link>
        </div>
        <button
          disabled={isLoading}
          onClick={handleClick}
          className="w-full text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center -600 -green-700 -green-800"
        >
          Login
        </button>
        <p className="text-sm font-light text-gray-500 -400">
          Don’t have an account yet?{" "}
          <Link
            to="/register"
            className="font-medium text-green-600 hover:underline -500"
          >
            Register
          </Link>
        </p>
      </form>
    </dialog>
  );
};

export default LoginDailog;
