import React, { useEffect, useState } from "react";
import { useGetCatgQuery } from "../../../redux/popular/categoryApiSlice";
import PopularCatgCard from "./PopularCatgCard";

const PopularCatgComp = () => {
  const [mostPopularCatg, setMostPopularCatg] = useState([]);
  const { data } = useGetCatgQuery();
  useEffect(() => {
    setMostPopularCatg(data);
  }, [data]);

  return (
    <>
      {mostPopularCatg?.map((data, idx) => {
        return (
          <PopularCatgCard key={data?.category?._id} idx={idx} data={data} />
        );
      })}
    </>
  );
};

export default PopularCatgComp;
