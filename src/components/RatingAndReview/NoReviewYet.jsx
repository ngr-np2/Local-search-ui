import React from "react";

const NoReviewYet = () => {
  return (
    <div className="mb-14 rounded-lg bg-slate-200 px-5 py-4">
      <div className="mb-4 flex justify-center">
        <div className="mt-4 py-3 w-fit px-4 font-font-2  capitalize tracking-widest text-xl text-center rounded-lg bg-white">
          No reviews yet.
        </div>
      </div>
      <div className="flex py-2 mb-3 bg-slate-100 justify-center">
        <a
          href="#title"
          className=" text-center font-font-8 rounded bg-slate-100 text-slate-800 hover:underline hover:text-green-600"
        >
          Be the first to add a review.
        </a>
      </div>
    </div>
  );
};

export default NoReviewYet;
