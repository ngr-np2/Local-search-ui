import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../redux/auth/registerAuthApiSlice";
import { selectCurrentToken } from "../redux/auth/authSlice";
import { showToastMessage } from "../redux/customToast/TostSlice";
import ErrorMsg from "../components/toast/ErrorMsg";

const Register = () => {
  const token = useSelector(selectCurrentToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const [register, { isLoading }] = useRegisterMutation();
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");
  const [showToast, setShowToast] = useState(false);

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
  }, [username, firstName, lastName, email, password]);
  const handleSubmit = async () => {
    e.preventDefault();
    if (isLoading) {
      return;
    }
    if (!username) {
      setErrMsg("Choose username");
      return;
    }
    if (!firstName) {
      setErrMsg("enter your first name");
      return;
    }
    if (!email) {
      setErrMsg("enter your email");
      return;
    }
    if (!password && password.length < 8) {
      setErrMsg("enter a strong password");
      return;
    }
    try {
      const registerUser = await register({
        username,
        firstName,
        lastName,
        email,
        phone,
        password,
      }).unwrap();
      setErrMsg(registerUser);
      dispatch(
        showToastMessage({
          message: registerUser,
          type: "success",
        })
      );
    } catch (err) {
      const resp = err?.response?.data;
      setShowToast(true);
      if (!resp) {
        setErrMsg("server is not responding, Reload and try again");
      } else if (resp?.status === 400) {
        setErrMsg(resp?.errMsg);
      } else if (resp?.status === 409) {
        setErrMsg(resp?.errMsg);
      } else if (resp) {
        setErrMsg(resp?.errMsg);
      } else {
        setErrMsg("register failed! 😔");
      }
    }
    setShowToast(false);
  };
  return (
    <section className="bg-gray-50 -900">
      {errMsg && <ErrorMsg errMsg={errMsg} errRef={errRef} />}
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
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  for="username"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                  placeholder="tej_karki"
                  // required
                />
              </div>
              <div>
                <label
                  for="First Name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="First Name"
                  id="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                  placeholder="tej"
                  // required
                />
              </div>
              <div>
                <label
                  for="Last Name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="Last Name"
                  id="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                  placeholder="karki"
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                  placeholder="name@company.com"
                  // required
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
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5 -700 -600 -400  -blue-500 -blue-500"
                  placeholder="98********"
                  // required
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-600 focus:border-green-600 block w-full p-2.5"
                  // required
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
