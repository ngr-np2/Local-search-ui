import React, { useEffect, useState } from "react";
import Logo from "../components/Logo";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../redux/auth/loginAuthApiSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentuserName, setCredentials } from "../redux/auth/authSlice";
import ErrorMsg from "../components/toast/ErrorMsg";
const Login = () => {
  const navigate = useNavigate();
  const token = useSelector(selectCurrentToken);
  const username = useSelector(selectCurrentuserName);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [showToast, setShowToast] = useState(false);

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();
  //console.log(email);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    if (token) {
      navigate(from, {
        replace: true,
      });
    }
  }, []);
  useEffect(() => {
    setErrMsg("");
    setShowToast(false);
  }, [email, password]);
  const handleSubmit = async (e) => {
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
      dispatch(
        showToastMessage({
          message: `Welcome Back ${username}`,
          type: "success",
        })
      );
      navigate(from, {
        replace: true,
      });
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
    <section className="h-screen relative bg-gray-50">
      {showToast && <ErrorMsg errMsg={errMsg} />}
      <div className="flex flex-col justify-center items-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
          <Logo />
        </div>
        <div className="mt-0 w-full bg-white rounded-lg shadow sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold tracking-tight leading-tight text-center text-gray-900 md:text-2xl">
              Login to your account
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
