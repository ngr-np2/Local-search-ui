import React, { useState } from 'react'

const PopularBusinessSection = () => {
  const [imageLoaded, setImageLoaded] = useState(false)
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    console.log(`Failed to load image: ${src}`);
  };
  const datas = [
    {
      name: "Restaurant",
      imgUrl: "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      total: 250
    },
    {
      name: "Banks",
      imgUrl: "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      total: 250
    },
    {
      name: "Park",
      imgUrl: "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      total: 250
    },
    {
      name: "Service Center Service Center Service Center Service Center ",
      imgUrl: "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      total: 250
    }
  ];
  return (
    <>
      <div className="flex flex-wrap gap-9 justify-center items-center px-8 mt-16">
        {
          datas.map((data, idx) => (

            <div key={idx}
              className="relative max-w-xs rounded-lg shadow-md cursor-pointer bg-stone-100 group hover:shadow-lg"
            >
              <div className="overflow-hidden h-56">
                {!imageLoaded && <img src="/ITAHARI.jpeg"
                  className="mx-auto transition-all duration-500 ease-in-out group-hover:scale-105"
                  alt="Placeholder" />}

                <img
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  src={data.imgUrl}
                  alt="random"
                  className={`object-cover mx-auto w-64 max-w-sm h-96 bg-cover transition-all duration-500 ease-in-out group-hover:scale-105`}
                />
                <div
                  title={data.name}
                  className={`absolute bottom-0 text-start z-10 p-4 m-auto w-64 text-xl font-semibold    overflow-ellipsis duration-500 ease-in-out text-white bg-[#2629271f]  group-hover:text-gray-200 group-hover:bg-[#2629271f]`}>
                  <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                    {data.name}
                  </p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default PopularBusinessSection