import ShareIcon from "@mui/icons-material/Share";
import { Link } from "react-router-dom";
import useVisible from "../../../Hooks/useVisible";

const TrendingBusinessCard = ({ business }) => {
  const visible = useVisible(business._id, 80);
  return (
    <div
      id={business?._id}
      className={`${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } duration-500 justify-center items-center bg-white rounded-xl border-2 border-gray-100`}
    >
      <div className="flex max-sm:flex-col gap-4 max-w-[500px] items-start p-4 sm:p-6 lg:p-8">
        <Link to={`/profile/${business?._id}`} className="block shrink-0">
          <img
            alt={business?.name}
            src="/ITAHARI.jpeg"
            className="object-cover w-24 rounded-lg duration-150 h-19 hover:scale-105"
          />
        </Link>

        <div>
          <h3 className="mb-3 w-full font-medium text-start sm:text-lg">
            <Link to={`/profile/${business?._id}`} className="hover:underline">
              {business?.name}
            </Link>
          </h3>

          <p className="w-full text-sm text-gray-700 text-start line-clamp-2">
            {business?.address}
          </p>
        </div>
      </div>

      <div className="flex justify-end shadow-sm cursor-pointer">
        <strong className="hover:scale-105 hover:shadow-xl inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-green-600 py-1.5 px-3 text-white">
          <ShareIcon fontSize="small" />
          <span className="text-[10px] font-medium sm:text-xs">Share</span>
        </strong>
      </div>
    </div>
  );
};

export default TrendingBusinessCard;
