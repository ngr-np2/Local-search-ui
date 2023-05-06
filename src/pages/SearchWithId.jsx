import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetSearchWithIdQuery } from "../redux/search/SearchWithIdsSliceApi";
import ListMapping from "../components/Lists/listMapping";
import Pagination from "../components/Lists/Pagination";

const SearchWithId = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState("10");
  const [page, setPage] = useState("1");
  const location = useLocation();

  const type = location.pathname.split("/")[2];
  const id = location.pathname.split("/")[3];
  console.log(id)
  const handleLimit = (e) => {
    e.preventDefault();
    setLimit(e.target.value);
  };
  const {
    data: data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
  } = useGetSearchWithIdQuery({id, type});
  useEffect(() => {
    setDatas(data);
  }, [data]);
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
      <Pagination
        datas={datas}
        data={datas}
        setPage={setPage}
        isFetching={isFetching}
        page={page}
        limit={limit}
      />
    </section>
  );
};

export default SearchWithId;
