import React, { useEffect, useState } from "react";
import ListComp from "../../components/Lists/ListComp";
import { Link, useLocation } from "react-router-dom";
import userRoute from "../../axios/Instance";
import { useGetSearchQuery } from "../../redux/search/searchApi";
import { details } from "../../assets/data.json";
import CardLoading from "../../components/loading/cardLoading";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import LoadingCircle from "../../components/loading/loadingCircle";
const ListSection = () => {
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState("1");
  const [limit, setLimit] = useState("10");
  const [pageNumbers, setPageNumbers] = useState([]);
  const location = useLocation();

  const search = location.pathname.split("/")[2];
  // const page = location.pathname.split("/")[3];
  // const limit = location.pathname.split("/")[4];
  // console.log("loc", location);
  // console.log("search", search);
  // console.log("page", page);
  // console.log("limit", limit);
  // const path = location.search;
  console.log(location);
  console.log(page);
  const {
    data: data,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSearchQuery({
    page,
    limit,
    search,
  });

  const handleLimit = (e) => {
    e.preventDefault();
    setLimit(e.target.value);
  };
  console.log(data);
  console.log(pageNumbers);
  useEffect(() => {
    // setDatas(details);
    setDatas(data);
  }, [data, error]);

  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= datas?.totalPages; i++) {
      pages.push(i);
    }
    setPageNumbers(pages);
  }, [datas]);
  const start = (datas?.currentPage - 1) * limit + 1;
  const end = Math.min(datas?.currentPage * limit, datas?.count);
  const handlePage = (e, value) => {
    e.preventDefault();
    if (value === "next") {
      if (data?.totalPages > data?.currentPage || isLoading) {
        setPage(data?.currentPage + 1);
      }
    } else {
      if (data?.currentPage > 1) {
        setPage(data?.currentPage - 1);
      }
    }
  };
  console.log(data?.currentPage > 1);
  console.log(isLoading);
  // console.log(data.currentPage <= data.totalPages);
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
        <aside className="sm:flex-[0.5] sm:ml-6 bg-gray-400 rounded-md">
          <div className="px-2 py-3">
            <div>
              <div>Advertising</div>
              <img src="/ITAHARI.jpeg" alt="ads" />
              <p className="px-3 py-2 text-start">
                Lorem ipsum numquam labore facere exercitationem soluta
                architecto quas delectus officia adipisci sunt, amet atque nobis
                ab?
              </p>
            </div>
          </div>
          <div className="px-2 py-3">
            <div>
              <div>Advertising</div>
              <img src="/ITAHARI.jpeg" alt="ads" />
              <p className="px-3 py-2 text-start">
                Lorem ipsum numquam labore facere exercitationem soluta
                architecto quas delectus officia adipisci sunt, amet atque nobis
                ab?
              </p>
            </div>
          </div>
        </aside>
      </div>
      {isSuccess && (
        <div className="flex justify-between items-center px-4 py-3 bg-white border-t border-gray-200 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <div
              onClick={(e) => handlePage(e, "prev")}
              className={`${
                data?.currentPage <= 1
                  ? "cursor-not-allowed opacity-50"
                  : "cursor-pointer "
              } inline-flex relative items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50`}
            >
              Previous
            </div>
            <div
              onClick={(e) => handlePage(e, "next")}
              className={`${
                data?.totalPages > data?.currentPage
                  ? "cursor-pointer"
                  : "cursor-not-allowed opacity-50"
              } inline-flex relative items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50`}
            >
              Next
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing <span className="font-medium">{start}</span> to{" "}
                <span className="font-medium">{end}</span> of{" "}
                <span className="font-medium">{datas?.count}</span> results
              </p>
            </div>
            <div>
              <nav
                className="inline-flex isolate -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <div
                  onClick={(e) => handlePage(e, "prev")}
                  className={`${
                    data?.currentPage <= 1
                      ? "cursor-not-allowed"
                      : "cursor-pointer"
                  } inline-flex relative items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300  hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                >
                  <ArrowLeft />
                </div>
                {pageNumbers.map((page) => {
                  return (
                    <div
                      key={page}
                      onClick={(e) => setPage(page)}
                      aria-current="page"
                      className={`${
                        datas?.currentPage === page
                          ? " z-10  bg-indigo-600 text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          : " text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50  focus:outline-offset-0"
                      }
                        inline-flex  cursor-pointer relative items-center px-4 py-2 text-sm font-semibold text  focus:z-20
                        `}
                    >
                      {isLoading ? (
                        <svg
                          aria-hidden="true"
                          role="status"
                          className={`inline mr-3 w-4 h-4 text-black animate-loading-circle`}
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="#E5E7EB"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentColor"
                          />
                        </svg>
                      ) : (
                        page
                      )}
                    </div>
                  );
                })}

                <div
                  onClick={(e) => handlePage(e, "next")}
                  className={`${
                    data?.totalPages > data?.currentPage
                      ? "cursor-pointer"
                      : "cursor-not-allowed"
                  } inline-flex relative items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                >
                  <ArrowRight />
                </div>
              </nav>
              {/* <LoadingCircle /> */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ListSection;
