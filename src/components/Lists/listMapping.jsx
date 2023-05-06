import React from "react";
import CardLoading from "../loading/cardLoading";
import BusinessesNotFoundWhileSearchCard from "./BusinessesNotFoundWhileSearchCard";
import ListComp from "./ListComp";
import AsideAds from "../../sections/Ads/AsideAds";
import { Link } from "react-router-dom";

const ListMapping = ({ isError, datas, isLoading, data, isSuccess }) => {
  return (
    <div className="flex justify-center px-4 pt-16 m-auto max-w-screen-xl max-md:flex-col">
      <div className="flex flex-col gap-6 sm:flex-1">
        {isError ? (
          <div className="text-red-500">
            something went wrong<Link to="/">Go back to Home</Link>
          </div>
        ) : !datas?.businessProfiles || isLoading ? (
          <>
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
            <CardLoading />
          </>
        ) : data.count === 0 ? (
          <BusinessesNotFoundWhileSearchCard />
        ) : (
          isSuccess &&
          datas?.businessProfiles &&
          datas?.businessProfiles.map((data) => (
            <ListComp key={data._id} display={false} data={data} />
          ))
        )}
      </div>
      <AsideAds data={datas?.ads} />
    </div>
  );
};

export default ListMapping;
