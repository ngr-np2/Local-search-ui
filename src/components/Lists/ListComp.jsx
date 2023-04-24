import { Link } from "react-router-dom";
import Star from "@mui/icons-material/Star";

import { useEffect, useState } from "react";
import OpeningFromAndTo from "./OpeningFromAndTo";
import SignOfOpeningAndClosing from "./SignOfOpeningAndClosing";
import Buttons from "./Buttons";
import calcTime from "./CalcTime";
import { motion } from "framer-motion";

const ListComp = ({ data, display }) => {
  //console.log("----")
  //console.log("listComp called");
  const [status, setStatus] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (display) {
      const [status, timeRemaining] = calcTime(data);
      setStatus(status);
      setTimeRemaining(timeRemaining);
    }
  }, []);

  const dataLength = data && data.catg && data.catg.length;

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById(data._id);
      const rect = el?.getBoundingClientRect();
      const threshold = window.innerHeight + 80;
      const isElementVisible = rect?.top <= threshold;
      setVisible(isElementVisible);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [data._id]);
  
  return (
    <motion.div
      id={data._id}
      className="map-card"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 100 }}
      transition={{ duration: 0.5 }}
    >
      <div className="  pt-8 pb-5 mx-auto max-w-screen-lg bg-white rounded-xl border-2 border-gray-100">
        <div className="flex relative gap-4 items-start px-4 pt-4 pb-0 max-sm:flex-col sm:px-6 lg:px-8">
          <img
            alt={data?.name}
            src="/ITAHARI.jpeg"
            className="object-cover max-sm:w-screen  object-bottom max-sm:h-[190px] w-28 h-28 rounded-md"
          />
          <div className="flex flex-wrap w-full">
            <div className="flex-[2]">
              <div className="flex gap-1 items-center mb-1 font-medium text-gray-700 text-start sm:text-lg">
                <Link
                  to={`/profile/${data?._id}`}
                  className="mr-4 hover:underline"
                >
                  <h3 className="text-2xl font-bold text-gray-600 font-font-8">
                    {data?.name}
                  </h3>
                </Link>
                <Star className="text-green-600 hover:text-green-500" />
                <div className="items-center text-gray-500 font-font-11">
                  {data?.rating}
                </div>
              </div>
              <p className="text-lg text-gray-600 text-start font-font-4">
                {data?.address}
              </p>
              <div className="flex flex-wrap justify-end items-center">
                <div className="flex flex-1 gap-1 min-w-[220px] max-sm:flex-wrap sm:w-[300px] items-center mt-5 text-sm text-gray-700">
                  Categories:
                  {dataLength > 0 && (
                    <p className="mx-1 text-base text-gray-800 capitalize sm:overflow-hidden sm:whitespace-nowrap sm:text-ellipsis">
                      {data.catg[0].label},
                    </p>
                  )}
                  {dataLength > 1 && (
                    <div
                      title={data?.catg}
                      className="mx-1 cursor-pointer px-[5px] py-[2px] text-white bg-green-600 rounded-md"
                    >
                      &#43;{data?.catg.length - 1}
                    </div>
                  )}
                </div>
                {data.time && <OpeningFromAndTo data={data} status={status} />}
              </div>
            </div>
          </div>
          {status && <SignOfOpeningAndClosing status={status} />}
        </div>

        <Buttons display={display} data={data} />
      </div>
    </motion.div>
  );
};

export default ListComp;
