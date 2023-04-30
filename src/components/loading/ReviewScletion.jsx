import React from "react";

const ReviewScletion = () => {
  return (
    <div className="mb-14 rounded-lg bg-slate-200 px-5 py-4">
      <div className="mb-4 flex space-x-4">
        <div className="h-10 w-10 rounded-full bg-white"></div>
        <div className="space-y-1">
          <div className="h-6 w-36 rounded bg-white"></div>
          <div className="h-6 w-16 rounded bg-white"></div>
        </div>
      </div>
      <div className="flex items-center mb-1">
        <svg
          className="h-5 w-5 text-gray-100"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
        <svg
          className="h-5 w-5 text-gray-100"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
        </svg>
      </div>
      <div className="mb-1 flex"></div>
      <div className="mb-4">
        <div className="mt-4 h-6 w-1/3 rounded bg-white"></div>
      </div>
      <div className="mb-3 h-6 w-2/3 rounded bg-white"></div>
      <div>
        <div className="mt-1 h-6 w-20 rounded bg-white"></div>
        <div className="mt-3 flex justify-end space-x-3">
          <div className="h-8 w-20 rounded-md bg-white"></div>
          <div className="h-8 w-20 rounded-md bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default ReviewScletion;
