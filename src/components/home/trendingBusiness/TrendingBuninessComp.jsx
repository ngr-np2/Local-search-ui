import React, { useEffect, useState } from "react";
import TrendingBusinessCard from "./TrendingBusinessCard";
import { useGetBusinessQuery } from "../../../redux/popular/TrendingBusinessessApiSlice";

const TrendingBuninessComp = () => {
  const { data, isLoading, isSuccess } = useGetBusinessQuery();
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    setDatas(data?.business || []);
  }, [data]);
  // console.log(datas.map((business) => business));
  return (
    <>
      {isLoading ? (
        <p>loading...</p>
      ) : (
        isSuccess &&
        datas.map((business) => {
          return (
            <TrendingBusinessCard key={business._id} business={business} />
          );
        })
      )}
    </>
  );
};

export default TrendingBuninessComp;
