import React, { useEffect, useState } from "react";
import { useGetCatgQuery } from "../../../redux/popular/categoryApiSlice";

const PopularCatgCard = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [err, setErr] = useState(false);
  const [mostPopularCatg, setMostPopularCatg] = useState([]);

  const { data, isFetching } = useGetCatgQuery();
  console.log(data);
  useEffect(() => {
    setMostPopularCatg(data);
  });

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setErr(true);
  };
  const responsibeCardWidth = "max-sm:h-96 sm:h-72 xl:h-56 ";
  const responsibeCardheight = "  max-sm:w-[85vw] sm:w-[45vw] lg:w-[30vw] xl:w-[18rem]";

  // const datas = [
  //   {
  //     name: "Restaurant",
  //     imgUrl:
  //       "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //     total: 250,
  //   },
  //   {
  //     name: "Banks",
  //     imgUrl:
  //       "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //     total: 250,
  //   },
  //   {
  //     name: "Park",
  //     imgUrl:
  //       "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //     total: 250,
  //   },
  //   {
  //     name: "Service Center Service Center Service Center Service Center ",
  //     imgUrl:
  //       "https://plus.unsplash.com/premium_photo-1670333291529-f836a7c1accb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //     total: 250,
  //   },
  // ];
  return (
    <>
      {mostPopularCatg?.map((data) => {
        const popular = data.category;
        const lableSplit = popular.label.split(" ")[0];

        return (
          <div
            key={popular._id}
            className="relative text-center rounded-lg shadow-md cursor-pointer bg-stone-100 group hover:shadow-lg"
          >
            <div className={`overflow-hidden h-56 ${responsibeCardWidth}`}>
              <div
                className={`absolute w-full h-56  ${responsibeCardWidth} z-10 bg-[#423c3c46] transition-all duration-500 ease-in-out `}
              />
              {!imageLoaded && (
                <img
                  src="/ITAHARI.jpeg"
                  className={`object-cover mx-auto w-64 h-80 bg-bottom bg-cover transition-all duration-500 ease-in-out ${responsibeCardWidth} ${responsibeCardheight} max-auto group-hover:scale-105`}
                  alt="Placeholder"
                />
              )}

              <img
                onLoad={handleImageLoad}
                onError={handleImageError}
                // src={popular.imgUrl}
                src={`https://source.unsplash.com/featured?${lableSplit}`}
                alt="random"
                className={`object-cover mx-auto w-64 max-w-md h-80 bg-cover transition-all duration-500 ease-in-out ${responsibeCardWidth} ${responsibeCardheight} group-hover:scale-105`}
              />
            </div>
            <div
              title={popular?.label}
              className={` -top-8 relative z-10 p-4 m-auto w-full text-xl font-semibold   text-white overflow-ellipsis duration-500 ease-in-out bg-[#047a3c] group-hover:w-3/4 group-hover:text-gray-200 group-hover:bg-gray-900`}
            >
              <p className="overflow-hidden whitespace-nowrap text-ellipsis">
                {popular?.label}
              </p>
            </div>
            <button
              title={`View Alll ${data.totalBusinessCount} Business in this ${popular.label} Category`}
              className="px-6 py-3 mb-4 text-xs bg-white rounded-full shadow-md duration-500 ease-in-out text-stone-900 group-hover:hover:shadow-lg group-hover:bg-red-500 group-hover:hover:bg-red-600 group-hover:text-white"
            >
              show All &#40;{data.totalBusinessCount}&#41;
            </button>
          </div>
        );
      })}
    </>
  );
};

export default PopularCatgCard;
