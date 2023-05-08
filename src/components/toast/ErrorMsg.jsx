import React from "react";
import ExclamationSvg from "../svg/ExclamationSvg";

const ErrorMsg = ({ errMsg }) => {
  return (
    <div
      className={`fixed flex top-8 right-2 py-2 px-3 bg-red-500  text-slate-50 text-xl font-font-8 tracking-widest rounded-md items-center justify-center gap-3 z-50`}
    >
      <ExclamationSvg fontSize="large" /> <p>{errMsg}</p>
    </div>
  );
};

export default ErrorMsg;
