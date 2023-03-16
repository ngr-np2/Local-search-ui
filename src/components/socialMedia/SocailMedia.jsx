import React from "react";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";

const SocailMedia = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center mt-14 mb-8 ">
      <button className="flex hover:animate-button-shake items-center bg-blue-500 py-1 px-3 rounded-md gap-2">
        <SiFacebook /> share
      </button>
      <button className="flex hover:animate-button-shake items-center py-1 px-3 rounded-md gap-2 bg-gradient-to-tr from-yellow-500  via-pink-500 to-blue-700">
        <SiInstagram />
        share
      </button>
      <button className="flex hover:animate-button-shake items-center bg-blue-700 py-1 px-4 rounded-2xl gap-2">
        <SiTwitter />
        tweet
      </button>
    </div>
  );
};

export default SocailMedia;
