import React from "react";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";

const SocailMedia = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center mt-14 mb-8 ">
      <div className="flex hover:animate-button-shake items-center bg-[#0062ff] py-1 px-3 rounded-md gap-2 text-stone-200 cursor-pointer" >
        <SiFacebook /> share
      </div>
      <div className="flex hover:animate-button-shake items-center py-1 px-3 rounded-md gap-2 text-stone-200 cursor-pointer  bg-gradient-to-tr from-yellow-500  via-pink-500 to-blue-700">
        <SiInstagram />
        share
      </div>
      <div className="flex hover:animate-button-shake items-center bg-[#177af3] py-1 px-4 text-stone-200 cursor-pointer  rounded-2xl gap-2">
        <SiTwitter />
        tweet
      </div>
    </div>
  );
};

export default SocailMedia;
