import Dangerous from "@mui/icons-material/Dangerous";
import React from "react";

const ErrorMsg = ({ errMsg }) => {
  return (
    <div
      className={`fixed top-6 right-0 p-4 bg-red-500 scale-50 text-slate-50 text-4xl font-font-1 tracking-widest rounded-md items-center justify-center gap-3 z-50`}
    >
      <Dangerous fontSize="large" /> {errMsg}
    </div>
  );
};

export default ErrorMsg;
