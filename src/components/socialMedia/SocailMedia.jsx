import React from "react";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";

const SocailMedia = () => {
  return (
    <div className="flex flex-wrap gap-8 justify-center mt-14 mb-8">
      <div className="fb-share-button flex hover:animate-bounce items-center bg-[#0062ff] py-1 px-3 rounded-md text-white cursor-pointer" data-href="https://tejbahadurkarki.com.np" data-layout="" data-size="">
        <a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftejbahadurkarki.com.np%2F&amp;src=sdkpreparse" className="flex gap-2 items-center text-white hover:text-white fb-xfbml-parse-ignore">
          <SiFacebook />share</a>
      </div>
      <div className="flex gap-2 items-center px-3 py-1 bg-gradient-to-tr from-yellow-500 via-pink-500 to-blue-700 rounded-md cursor-pointer hover:animate-bounce text-stone-200">
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
