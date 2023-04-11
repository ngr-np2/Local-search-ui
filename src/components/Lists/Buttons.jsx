import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
const Buttons = () => {
  const bottonStyle = `hover:shadow-xl shadow-lg hover:gap-2 duration-100 inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white`;
  const bottonTextStyle = `text-[10px] max-sm:hidden font-medium sm:text-xs font-font-11`;

  return (
    <div className="flex flex-wrap gap-3 justify-start px-6 pt-3 pb-5 shadow-sm cursor-pointer">
      <strong title="Number" className={bottonStyle}>
        <LocalPhoneIcon fontSize="small" />
        <span className={bottonTextStyle}>Calll Us</span>
      </strong>
      <strong title="website" className={bottonStyle}>
        <LanguageIcon fontSize="small" />
        <span className={bottonTextStyle}>Website</span>
      </strong>
      <strong title="Email" className={bottonStyle}>
        <EmailIcon fontSize="small" />
        <span className={bottonTextStyle}>Email Us</span>
      </strong>
    </div>
  );
};

export default Buttons;
