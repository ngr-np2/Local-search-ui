import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import TimeAgo from "./TimeAgo";
import { useGetReviewQuery } from "../../redux/review/getReviewsApiSlice";
import ReviewScletion from "../loading/ReviewScletion";
const ReviewComp = ({ dataId }) => {
  const [reviews, setReviews] = useState([]);

  const {
    data: data,
    isLoading,
    isFetching,
    isError,
  } = useGetReviewQuery({
    dataId,
  });

  useEffect(() => {
    if (data) {
      setReviews(data.reviews);
    }
  }, [data]);

  // const [time, setTime] = useState();
  // console.log(data.createdAt); // 2023-04-21T15:31:36.429Z
  // const currentDate = new Date();
  // const date = new Date(data?.createdAt);
  // const diffInMs = currentDate - date;
  // useEffect(() => {
  //   console.log("called");
  //   if (diffInMs > 31557600) {
  //     const diffInYear = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));
  //     setTime(diffInYear, "year ago");
  //   }
  //   if (diffInMs > 2629800000) {
  //     const diffInMonth = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));
  //     setTime([diffInMonth, "month ago"]);
  //   } else if (diffInMs > 604800000) {
  //     const diffInWeeks = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 7));
  //     setTime([diffInWeeks, "weeks ago"]);
  //   } else if (diffInMs > 86400000) {
  //     const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
  //     setTime([diffInDays, "Days ago"]);
  //   } else if (diffInMs > 3600000) {
  //     const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  //     setTime([diffInHours, "hours ago"]);
  //   } else if (diffInMs > 60000) {
  //     const diffMinute = Math.floor(diffInMs / (1000 * 60));
  //     setTime([diffMinute, "minute ago"]);
  //   } else {
  //     const diffSec = Math.floor(diffInMs / 1000);
  //     setTime([diffSec, "second ago"]);
  //   }
  // }, [data]);

  // console.log("-----", date); // Fri Apr 21 2023 21:20:12 GMT+0545 (Nepal Time)
  // const formattedDate = format(date, "MMMM Do yyyy, h:mm:ss a");
  // console.log(formattedDate); // April 111th 2023, 9:20:12 PM
  return (
    <div className=" h-[45vh]  overscroll-contain overflow-y-scroll">
      {isFetching ? (
        <>
          <ReviewScletion />
          <ReviewScletion />
          <ReviewScletion />
        </>
      ) : (
        reviews.map((data) => {
          return (
            <article
              key={data?._id}
              className="px-5 py-4 mb-14 rounded-lg bg-slate-200"
            >
              <div className="flex items-center mb-4 space-x-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/ITAHARI.jpeg"
                  alt=""
                />
                <div className="overflow-hidden space-y-1 font-medium text-gray-800 font-font-6">
                  <p className="text-ellipsis">{data?.user}</p>
                  <TimeAgo date={data?.createdAt} />
                </div>
              </div>
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, idx) => (
                  <svg
                    key={idx}
                    aria-hidden="true"
                    className={`${
                      idx < data?.rating ? "text-yellow-400" : "text-gray-500"
                    } w-5 h-5`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>{data?.rating} Star rating</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <div className="mb-4 text-sm text-gray-600">
                <p className="mt-4 font-font-2">{data?.title}</p>
              </div>
              <p className="mb-3 text-gray-500">{data?.desc} </p>
              <aside>
                {data.likeCount < 1 && (
                  <p className="mt-1 text-xs text-gray-400">
                    {data.likeCount} people found this helpful
                  </p>
                )}
                <div className="flex justify-end items-end mt-3 space-x-3 divide-x divide-gray-400">
                  <div className="flex gap-2 items-end">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="mx-1 w-6 h-6 cursor-pointer hover:fill-green-300 ease-in-out transform transition hover:-translate-y-1 duration-200 active:-rotate-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                      />
                    </svg>
                    {data.likeCount}
                  </div>
                  <div className="flex gap-2 items-end pl-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 cursor-pointer hover:fill-red-400 ease-in-out transform transition hover:translate-y-1 duration-200 active:-rotate-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                      />
                    </svg>
                    {data.dislikeCount}
                  </div>
                </div>
              </aside>
            </article>
          );
        })
      )}
    </div>
  );
};

export default ReviewComp;
