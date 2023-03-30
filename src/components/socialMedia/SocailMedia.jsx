import React from "react";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";

const SocailMedia = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center mt-14 mb-8 ">
      <div className="fb-share-button flex hover:animate-bounce items-center bg-[#0062ff] py-1 px-3 rounded-md text-white text-stone-200 cursor-pointer" data-href="https://tejbahadurkarki.com.np" data-layout="" data-size="">
        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftejbahadurkarki.com.np%2F&amp;src=sdkpreparse" className="flex items-center gap-2 text-white hover:text-white fb-xfbml-parse-ignore">
          <SiFacebook />share</a>
      </div>
      <div className="flex hover:animate-bounce items-center py-1 px-3 rounded-md gap-2 text-stone-200 cursor-pointer  bg-gradient-to-tr from-yellow-500  via-pink-500 to-blue-700">
        <SiInstagram />
        share
      </div>
      <div className="flex hover:animate-bounce items-center bg-[#177af3] py-1 px-4 text-stone-200 cursor-pointer  rounded-2xl gap-2">
        <SiTwitter />
        tweet
      </div>
    </div>
  );
};

export default SocailMedia;
