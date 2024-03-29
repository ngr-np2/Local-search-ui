import { useEffect, useRef, useState } from "react";
import ReviewComp from "../../components/RatingAndReview/ReviewComp";
import ReviewScletion from "../../components/loading/ReviewScletion";
import NoReviewYet from "../../components/RatingAndReview/NoReviewYet";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "../../redux/auth/authSlice";
import LoginDailog from "../../components/dailog/LoginDailog";
const requireLableClass = "text-red-700 dark:text-red-500";
const requireInputClass =
  "border-red-500 text-red-900 bg-red-50 placeholder-red-700  focus:ring-red-500  focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500";
const requireMsgClass = " text-red-600 dark:text-red-500";
const ReviewAndRating = ({ totalReview, dataId }) => {
  const ref = useRef();
  const stars = Array(5).fill(0);
  const [startValue, setStarValue] = useState(0);
  const [hoverStarValue, setHoverStarValue] = useState(undefined);
  const [inView, setInView] = useState(false);
  const [popup, setPopup] = useState(false);
  const handleClick = (e, val) => {
    setStarValue(val);
  };

  const handleHover = (e, idx) => {
    setHoverStarValue(idx + 1);
  };

  const handleHoverOut = () => {
    setHoverStarValue(undefined);
  };

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);
    if (ref?.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  // const token = useSelector(selectCurrentToken);
  const token = "";
  const handleLogin = () => {
    setPopup(true);
  };
  // console.log(inView);
  return (
    <section className="pt-16 bg-slate-100">
      <div className="px-9 m-auto max-w-screen-xl">
        <div className="">
          <h4 className="text-xl font-bold tracking-widest text-center font-font-3">
            Write a Review
          </h4>
          <div className="flex justify-center mt-6 transition duration-1000 ease-in-out">
            {stars.map((_, idx) => {
              return (
                <div
                  key={idx}
                  onClick={(e) => handleClick(e, idx + 1)}
                  onMouseOver={(e) => handleHover(e, idx)}
                  onMouseLeave={handleHoverOut}
                  className="mx-1 rounded-full transition-colors duration-300 ease-linear cursor-pointer"
                >
                  <svg
                    aria-hidden="true"
                    className={`${
                      hoverStarValue
                        ? hoverStarValue > idx
                          ? "text-yellow-400"
                          : "text-gray-500"
                        : startValue > idx
                        ? "text-yellow-400"
                        : "text-gray-500"
                    } transition duration-100 ease-in-out w-8 h-8 `}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              );
            })}
          </div>
          <div className="py-5">
            {/* <form className="m-auto  max-w-screen-md"> */}
              <div className="mb-1">
                <label
                  htmlFor="title"
                  className="block mb-2 text-sm font-medium text-gray-600"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  required
                  className="bg-gray-100 border text-md outline-none font-bold font-font-6 rounded-lg block w-full p-2.5
                  border-gray-300  text-salte-800  focus:ring-green-500  focus:border-green-500 active:border-green-500"
                  placeholder="Enter short title"
                />
                <p className="mt-2 mb-4 text-sm opacity-0">
                  Title is Required!
                </p>
              </div>

              <div className="mb-4 w-full bg-gray-50 rounded-lg border border-gray-200">
                <div className="px-4 py-2 rounded-t-lg bg-slate-100">
                  <textarea
                    id="desc"
                    rows="4"
                    className="px-4 py-3 w-full  text-sm outline-none focus:ring-green-500  focus:border-green-500 active:border-green-500 text-gray-600 border bg-slate-50 focus:ring-0"
                    placeholder="Describe how was your exprince..."
                  ></textarea>
                </div>
                <div className="flex gap-4  justify-end items-center px-3 py-2 border-t border-gray-600">
                  {!token ? (
                    <>
                      <p className="tracking-widest font-font-4">
                        First Login & add Review
                      </p>
                      <button
                        onClick={handleLogin}
                        className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-600 rounded-lg focus:ring-4 focus:ring-green-200 hover:bg-green-800"
                      >
                        Login
                      </button>
                      {popup && <LoginDailog />}
                    </>
                  ) : (
                    <button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-green-600 rounded-lg focus:ring-4 focus:ring-green-200 hover:bg-green-800">
                      "Submit"
                    </button>
                  )}
                </div>
              </div>
            {/* </form> */}
          </div>
        </div>
        <div ref={ref} className="py-4">
          {!totalReview ? (
            <NoReviewYet />
          ) : inView ? (
            <ReviewComp dataId={dataId} />
          ) : (
            <ReviewScletion />
          )}
        </div>
      </div>
    </section>
  );
};

export default ReviewAndRating;
