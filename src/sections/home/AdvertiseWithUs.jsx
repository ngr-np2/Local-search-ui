import React, { useState } from "react";

const AdvertiseWithUs = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    //console.log(`Failed to load image: ${src}`);
  };
  const datas = [
    {
      name: "Local Search",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "E-sewa",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Space X",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Vrit Tech",
      imgUrl:
        "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];
  return (
    <section>
      <div className="pt-8 pb-4 mx-5 text-center">
        <p className="my-7 leading-[60px] text-5xl capitalize font-font-2 text-zinc-900">
          Advertise with Us
        </p>
      </div>
      <div className="flex flex-wrap gap-9 justify-center items-center px-8 py-4 rounded-sm">
        {datas.map((data, idx) => (
          <div
            key={idx}
            className="relative max-w-xs rounded-lg shadow-md cursor-pointer bg-stone-100 group hover:shadow-lg"
          >
            <div className="overflow-hidden h-56">
              {!imageLoaded && (
                <img
                  src="/ITAHARI.jpeg"
                  className="mx-auto transition-all duration-500 ease-in-out group-hover:scale-105"
                  alt="Placeholder"
                />
              )}

              <img
                onLoad={handleImageLoad}
                onError={handleImageError}
                // src={data.imgUrl}
                src={`https://source.unsplash.com/featured?${data.name}`}
                alt="random"
                className={`object-cover mx-auto w-64 max-w-sm h-96 bg-cover rounded-lg transition-all duration-500 ease-in-out group-hover:hover:rounded-lg group-hover:rounded-lg group-hover:scale-105`}
              />

              <div
                title={data.name}
                className={`absolute bottom-0 overflow-hidden rounded-lg text-start z-10 p-4 m-auto w-64 text-xl font-semibold    overflow-ellipsis duration-500 ease-in-out text-white bg-[#2629271f]  group-hover:text-gray-100 group-hover:bg-[#21242231]`}
              >
                <span className="absolute right-0 -mt-5 w-8 h-32 bg-white opacity-20 transition-all duration-1000 transform rotate-12 translate-x-12 group-focus-visible:-translate-x-40 group-hover:-translate-x-52 group-active:translate-x-40 ease"></span>
                <p className="overflow-hidden text-2xl whitespace-nowrap rounded-lg duration-1000 ease-in-out group-hover:pl-6 font-font-7 text-ellipsis">
                  {data.name}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default AdvertiseWithUs;
