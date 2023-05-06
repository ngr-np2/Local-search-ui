import React from "react";
import { useGetHighBudgetAdsQuery } from "../../../redux/advertise/HighBudgetAdsApiSlice";
import AdverrtiseWithComp from "./AdverrtiseWithComp";

const AdvertiseMap = () => {
  const { data, isSuccess } = useGetHighBudgetAdsQuery();
  return (
    <>
      {isSuccess &&
        data?.result.map((data) => (
          <AdverrtiseWithComp key={data._id} data={data} />
        ))}
    </>
  );
};

export default AdvertiseMap;
