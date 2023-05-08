import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { logOut, selectCurrentToken } from "../redux/auth/authSlice";
import jwtDecode from "jwt-decode";
import { hideToastMessage, selectCurrentMessage, selectCurrentType, selectCurrentVisible } from "../redux/customToast/TostSlice";
import CustomToast from "../components/toast/CustomToast";

const MainLayout = () => {
  const token = useSelector(selectCurrentToken);
  const decode = token ? jwtDecode(token) : null;

  const dispatch = useDispatch();

  const visible = useSelector(selectCurrentVisible);
  const message = useSelector(selectCurrentMessage);
  const type = useSelector(selectCurrentType);
  useEffect(() => {
    if (visible) {
      const timeoutId = setTimeout(() => {
        dispatch(hideToastMessage());
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [visible, dispatch]);

  useEffect(() => {
    const currentTime = Math.floor(Date.now() / 1000);
    if (currentTime >= decode?.exp) {
      dispatch(logOut());
      console.log("logout");
    }
  }, [token]);
  return (
    <>
    {visible && <CustomToast message={message} type={type} />}
    <Outlet />
  </>
  )
};

export default MainLayout;
