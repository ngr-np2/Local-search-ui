import React, { useEffect, useState } from "react";
import useVisible from "../../Hooks/useVisible";

const AdverrtiseWithComp = (data, idx) => {
  const visible = useVisible(idx, 80);
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {};
  // console.log(data?.data.name);
  return (
    <div
      key={idx}
      id={idx}
      className={` 
      ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } duration-500 ease-in-out relative max-w-xs rounded-lg shadow-md cursor-pointer bg-stone-100 group hover:shadow-lg`}
    >
      <div className="overflow-hidden h-56 duration-200 ease-in-out">
        {!imageLoaded && (
          <img
            src="/ITAHARI.jpeg"
            className="mx-auto h-full transition-all duration-500 ease-in-out group-hover:scale-105"
            alt="Placeholder"
          />
        )}

        <img
          onLoad={handleImageLoad}
          onError={handleImageError}
          // src={data.imgUrl}
          src={`https://source.unsplash.com/featured?${data.data.name}`}
          alt="random"
          className={`object-cover  mx-auto w-64 max-w-sm h-96 bg-cover rounded-lg transition-all duration-500 ease-in-out group-hover:hover:rounded-lg group-hover:rounded-lg group-hover:scale-105`}
        />

        <div
          title={data.data?.name}
          className={`absolute bottom-0 overflow-hidden rounded-lg text-start z-10 p-4 m-auto w-64 text-xl font-semibold    overflow-ellipsis duration-500 ease-in-out text-white bg-[#2629271f]  group-hover:text-gray-100 group-hover:bg-[#21242231]`}
        >
          <span className="absolute right-0 -mt-5 w-8 h-32 bg-white opacity-20 transition-all duration-1000 transform rotate-12 translate-x-12 group-focus-visible:-translate-x-40 group-hover:-translate-x-52 group-active:translate-x-40 ease"></span>
          <p className="overflow-hidden text-2xl whitespace-nowrap rounded-lg duration-1000 ease-in-out group-hover:pl-6 font-font-7 text-ellipsis">
            {data.data?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdverrtiseWithComp;
