import React, { useState } from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import ReviewComp from "../../components/RatingAndReview/ReviewComp";
import { stackClasses } from "@mui/material";
const requireLableClass = "text-red-700 dark:text-red-500";
const requireInputClass =
  "border-red-500 text-red-900 bg-red-50 placeholder-red-700  focus:ring-red-500  focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
const requireMsgClass = " text-red-600 dark:text-red-500";
const ReviewAndRating = () => {
  const stars = Array(5).fill(0);
  const [startValue, setStarValue] = useState(0);
  const [hoverStarValue, setHoverStarValue] = useState(undefined);

  //console.log("hov", hoverStarValue);
  //console.log("star", startValue);
  const handleClick = (e, val) => {
    // e.preventDefault();
    setStarValue(val);
  };

  const handleHover = (e, idx) => {
    // if (startValue === 0) {
    setHoverStarValue(idx + 1);
    // }
  };

  const handleHoverOut = () => {
    setHoverStarValue(undefined);
  };
  return (
    <section className="pt-16 bg-slate-100">
      <div className="px-9 max-w-screen-xl m-auto">
        <div className="">
          <h4 className="text-center font-font-3 text-xl font-bold tracking-widest">
            Write a Review
          </h4>
          <div className="flex justify-center transition duration-1000 ease-in-out mt-6">
            {stars.map((_, idx) => {
              return (
                <div
                  key={idx}
                  onClick={(e) => handleClick(e, idx + 1)}
                  onMouseOver={(e) => handleHover(e, idx)}
                  onMouseLeave={handleHoverOut}
                  className="mx-1 cursor-pointer rounded-full transition-colors duration-300 ease-linear "
                >
                  <StarRateIcon
                    fontSize="large"
                    className={`${
                      hoverStarValue
                        ? hoverStarValue > idx
                          ? "text-yellow-400"
                          : "text-gray-500"
                        : startValue > idx
                        ? "text-yellow-400"
                        : "text-gray-500"
                    } transition duration-100 ease-in-out `}
                  />
                </div>
              );
            })}
          </div>
          <div className="py-5">
            <form className="m-auto max-w-screen-md">
              <div className="mb-1">
                <label
                  htmlFor="error"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="bg-gray-100 border text-sm rounded-lg block w-full p-2.5
                  border-gray-300 text-gray-900  focus:ring-blue-500  focus:border-blue-500 active:border-blue-500"
                  placeholder="Enter short title"
                />
                <p className="mt-2 mb-4 text-sm opacity-0">
                  Title is Required!
                </p>
              </div>

              <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200">
                <div className="px-4 py-2 bg-salte-100 rounded-t-lg">
                  <textarea
                    id="desc"
                    rows="4"
                    className="px-4 py-3 w-full text-sm text-gray-600 bg-slate-50 border-0 focus:ring-0"
                    placeholder="Describe how was your exprince..."
                    required
                  ></textarea>
                </div>
                <div className="flex justify-end items-center px-3 py-2 border-t border-gray-600">
                  <button
                    type="submit"
                    className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
                  >
                    Post comment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <ReviewComp />
      </div>
    </section>
  );
};

export default ReviewAndRating;
