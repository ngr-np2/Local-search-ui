import React, { useEffect, useState } from "react";
import ListComp from "../../components/Lists/ListComp";
import { Link, useLocation } from "react-router-dom";
import { useGetSearchQuery } from "../../redux/search/searchApi";
import { details } from "../../assets/data.json";
import CardLoading from "../../components/loading/cardLoading";
import Pagination from "../../components/Lists/Pagination";
import AsideAds from "../Ads/AsideAds";
import BusinessesNotFoundWhileSearchCard from "../../components/Lists/BusinessesNotFoundWhileSearchCard";
import ListMapping from "../../components/Lists/listMapping";

const ListSection = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState("10");
  const [page, setPage] = useState("1");
  const location = useLocation();

  const search = location.pathname.split("/")[2];
  const id = location.pathname.split("/")[3];

  const query = location.search;
  // console.log(query);
  // console.log(datas);
  const {
    data: data,
    isLoading,
    isSuccess,
    isError,
    error,
    isFetching,
  } = useGetSearchQuery({
    page,
    limit,
    search,
    query,
    id,
  });
  // console.log("----");
  // console.log("load", isLoading);
  const handleLimit = (e) => {
    e.preventDefault();
    setLimit(e.target.value);
  };
  // console.log(data);
  // console.log(pageNumbers);
  useEffect(() => {
    // setDatas(details);
    setDatas(data);
  }, [data]);
  // console.log("-------------------",data)
  return (
    <section className="bg-slate-100">
      <select value={limit} onChange={handleLimit} name="limit" id="limit">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>
      
      <ListMapping
        isError={isError}
        datas={datas}
        isLoading={isLoading}
        data={data}
        isSuccess={isSuccess}
      />
      {!query && (
        <Pagination
          datas={datas}
          data={datas}
          setPage={setPage}
          isFetching={isFetching}
          page={page}
          limit={limit}
        />
      )}
    </section>
  );
};

export default ListSection;
