import React from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LanguageIcon from "@mui/icons-material/Language";
import EmailIcon from "@mui/icons-material/Email";
import { Link } from "react-router-dom";
const Buttons = ({ data, display }) => {
  const { email, phone, site } = data;
  const bottonStyle = `hover:shadow-xl shadow-lg hover:gap-2 duration-100 inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white`;
  const bottonTextStyle = `text-[10px] max-sm:hidden font-medium sm:text-xs font-font-11`;
  //console.log("buttons Called")

  return (
    <div className="flex flex-wrap gap-3 justify-start px-6 pt-3 pb-5 shadow-sm cursor-pointer">
      {display ? (
        <>
          {phone && (
            <a href={`tel:${phone}`}>
              <strong title="Number" className={bottonStyle}>
                <LocalPhoneIcon fontSize="small" />
                <span className={bottonTextStyle}>Calll Us</span>
              </strong>
            </a>
          )}
          {site && (
            <a href={site} target="_blank" rel="">
              <strong title="website" className={bottonStyle}>
                <LanguageIcon fontSize="small" />
                <span className={bottonTextStyle}>Website</span>
              </strong>
            </a>
          )}
          {email && (
            <a href={`mail:${email}`}>
              <strong title="Email" className={bottonStyle}>
                <EmailIcon fontSize="small" />
                <span className={bottonTextStyle}>Email Us</span>
              </strong>
            </a>
          )}
        </>
      ) : (
        <>
          <Link to={`/profile/${data?._id}`}>
            <strong title="Number" className={bottonStyle}>
              <LocalPhoneIcon fontSize="small" />
              <span className={bottonTextStyle}>Calll Us</span>
            </strong>
          </Link>
          <Link to={`/profile/${data?._id}`}>
            <strong title="website" className={bottonStyle}>
              <LanguageIcon fontSize="small" />
              <span className={bottonTextStyle}>Website</span>
            </strong>
          </Link>
          <Link to={`/profile/${data?._id}`}>
            <strong title="Email" className={bottonStyle}>
              <EmailIcon fontSize="small" />
              <span className={bottonTextStyle}>Email Us</span>
            </strong>
          </Link>
        </>
      )}
    </div>
  );
};

export default Buttons;
