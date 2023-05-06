import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { logOut, selectCurrentToken } from "../redux/auth/authSlice";
import jwtDecode from "jwt-decode";

const MainLayout = () => {
  const navigate = useNavigate();
  const token = useSelector(selectCurrentToken);
  const decode = token ? jwtDecode(token) : null;

  const dispatch = useDispatch();
  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000);
    // console.log("sec", currentTime);
    // console.log("exp",decode?.exp);
    // console.log(currentTime >= decode?.exp)
    if (currentTime >= decode?.exp) {
      dispatch(logOut());
      console.log("logout");
    }
  }, []);
  return <Outlet />;
};

export default MainLayout;
