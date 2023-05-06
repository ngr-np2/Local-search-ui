import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useVisible from "../../../Hooks/useVisible";

const PopularCatgCard = ({ data, idx }) => {
  const popular = data.category;

  const lableSplit = popular.label.split(" ")[0];

  const [imageLoaded, setImageLoaded] = useState(false);
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const visible = useVisible(popular?._id, 50);
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setErr(true);
  };
  const responsibeCardheight = "max-sm:h-96 sm:h-72 xl:h-56 ";
  const responsibeCardWidth = " xl:w-[18rem]";
  const durations = [
    "duration-500",
    "duration-[0.8s]",
    "duration-[1s]",
    "duration-[1.3s]",
  ];
  const duration = durations[idx] || "duration-500";
  return (
    <div
      id={popular?._id}
      className={`
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} 
      ${duration}
      duration-500 relative text-center rounded-lg shadow-md cursor-pointer bg-stone-100 group hover:shadow-lg`}
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
        onClick={() => navigate(`/search/category/${popular._id}`)}
        title={`View Alll ${data.totalBusinessCount} Business in this ${popular.label} Category`}
        className="px-6 py-3 mb-4 text-xs bg-white rounded-full shadow-md duration-500 ease-in-out text-stone-900 group-hover:hover:shadow-lg group-hover:bg-red-500 group-hover:hover:bg-red-600 group-hover:text-white"
      >
        show All &#40;{data.totalBusinessCount}&#41;
      </button>
    </div>
  );
};

export default PopularCatgCard;
