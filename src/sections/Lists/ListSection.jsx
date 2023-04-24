import React, { useEffect, useState } from "react";
import ListComp from "../../components/Lists/ListComp";
import { Link, useLocation } from "react-router-dom";
import { useGetSearchQuery } from "../../redux/search/searchApi";
import { details } from "../../assets/data.json";
import CardLoading from "../../components/loading/cardLoading";
import Pagination from "../../components/Lists/Pagination";
import AsideAds from "../Ads/AsideAds";

const ListSection = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState("10");
  const [page, setPage] = useState("1");
  const location = useLocation();

  const search = location.pathname.split("/")[2];
  const query = location.search;
  console.log(query);
  console.log(datas);
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
  });
  console.log("----");
  console.log("load", isLoading);
  const handleLimit = (e) => {
    e.preventDefault();
    setLimit(e.target.value);
  };
  // console.log(data);
  // console.log(pageNumbers);
  useEffect(() => {
    // setDatas(details);
    setDatas(data);
  }, [data, error]);

  return (
    <section className="bg-slate-100">
      <select value={limit} onChange={handleLimit} name="limit" id="limit">
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
        <option value="25">25</option>
      </select>
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
      {!query && (
        <Pagination
          datas={datas}
          data={data}
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
