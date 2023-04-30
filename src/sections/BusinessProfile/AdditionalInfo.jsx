import React from "react";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Dropdown from "../../components/BusinessProfile/Dropdown";
import MapView from "../maps/MapView";
import ReviewAndRating from "../reviewAndRating/ReviewAndRating";
const AdditionalInfo = ({ data }) => {
  // console.log(data);
  return (
    <div className="my-4 mt-8 text-gray-900">
      <section className="px-8 bg-slate-100 max-sm:px-4">
        <div className="py-7 m-auto max-w-screen-xl">
          <p className="py-2 text-xl font-f-bold-cyber">
            Additional Information
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="flex-1 mx-4 max-sm:m-0">
              <p className="py-3 font-font-4">Opening hours</p>
              <div className="w-full h-[2px] ease-in-out duration-200 transform transition bg-stone-200" />
              {data?.days && <Dropdown data={data} />}
            </div>
            <div className="flex-1 mx-4 max-sm:text-center">
              <p className="px-1 py-3 font-font-4">Social Media</p>
              <div className="w-full h-[2px] bg-stone-200" />
              <div className="flex flex-wrap gap-3 justify-start ease-in-out duration-200 transform transition  px-1 pt-3 pb-5 shadow-sm cursor-pointer max-sm:justify-center">
                {/* {data?.fb && ( */}
                <a
                  href={`https://facebook.com/${data?.fb}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ease-in-out duration-200 transform transition hover:-translate-y-1"
                >
                  <Facebook
                    fontSize="large"
                    className="rounded-full text-[#4267B2] hover:text-[#3e72db]"
                  />
                </a>
                {/* )} */}
                {/* {data?.insta && ( */}
                <a
                  href={`https://instagram.com/${data?.insta}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ease-in-out duration-200 transform transition hover:-translate-y-1"
                >
                  <Instagram fontSize="large" className="text-[#da1b1b] " />
                </a>
                {/* )} */}
                {/* {data?.twitter && ( */}
                <a
                  href={`https://twitter.com/${data?.twitter}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ease-in-out duration-200 transform transition hover:-translate-y-1"
                >
                  <Twitter fontSize="large" className="text-[#1DA1F2] " />
                </a>
                {/* )} */}
                <a
                  href={`mail:${data?.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ease-in-out duration-200 transform transition hover:-translate-y-1"
                >
                  <EmailIcon fontSize="large" className="text-green-600 " />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {data?.location?.lat && data?.location?.lng && (
        <MapView height={"h-[40vmin] max-sm:h-[60vh]"} data={data} />
      )}
      <ReviewAndRating totalReview={data?.totalReviews} dataId={data?._id} />
    </div>
  );
};

export default AdditionalInfo;
