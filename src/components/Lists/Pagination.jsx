import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ArrowRight from "@mui/icons-material/ArrowRight";
import ArrowLeft from "@mui/icons-material/ArrowLeft";
import LoadingCircleSvg from "../loading/loadingCircleSvg";

const Pagination = ({ datas, isFetching, limit, setPage, page }) => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const threshold = 75;
      const scrolledToThreshold =
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - threshold;
      setVisible(scrolledToThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const start = (datas?.page - 1) * limit + 1 || 0;
  const end = Math.min(datas?.page * limit, datas?.count) || 0;
  const handlePage = (e, value) => {
    e.preventDefault();
    if (value === "next") {
      if (datas?.totalPages > datas?.page) {
        setPage(datas?.page + 1);
      }
    } else {
      if (datas?.page > 1) {
        setPage(datas?.page - 1);
      }
    }
  };
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 5;
    const totalPages = datas?.totalPages;
    const currentPage = datas?.page;
    if (totalPages <= maxPageNumbers) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else if (currentPage <= maxPageNumbers - 1) {
      for (let i = 1; i <= maxPageNumbers; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    } else if (
      currentPage >= totalPages - maxPageNumbers + 2 &&
      currentPage <= totalPages
    ) {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = totalPages - maxPageNumbers + 2; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1);
      pageNumbers.push("...");
      for (let i = currentPage - 1; i <= currentPage + 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...");
      pageNumbers.push(totalPages);
    }

    return pageNumbers;
  };

  useEffect(() => {
    if (datas?.page) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
        duration: 10000,
      });
    }
  }, [datas]);
  return (
    <>
      {datas && (
        <motion.div
          className="map-card"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 100 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={` 
            ${isFetching ? "cursor-wait" : "cursor-auto"}
             mt-2 justify-between items-center px-4 py-3 bg-white border-t border-gray-200 sm:px-6`}
          >
            <div className="flex flex-1 justify-between sm:hidden">
              <div
                onClick={(e) => handlePage(e, "prev")}
                className={`${
                  datas?.page <= 1
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer "
                } inline-flex relative items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white rounded-md border border-gray-300 hover:bg-gray-50`}
              >
                Previous
              </div>
              <svg
                aria-hidden="true"
                role="status"
                className={`z-10 mr-4 w-4 h-4 ${
                  isFetching ? "flex" : "hidden"
                } text-black ml-3 inline animate-loading-circle`}
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
              <div
                onClick={(e) => handlePage(e, "next")}
                className={`${
                  datas?.totalPages > datas?.page
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
              <div className="flex justify-center items-center">
                {isFetching && <LoadingCircleSvg />}
                <nav
                  className="inline-flex isolate -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <div
                    onClick={(e) => handlePage(e, "prev")}
                    className={`${
                      datas?.page <= 1
                        ? "cursor-not-allowed"
                        : "cursor-pointer"
                    } inline-flex relative items-center px-2 py-2 text-gray-400 rounded-l-md ring-1 ring-inset ring-gray-300  hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                  >
                    <ArrowLeft />
                  </div>

                  {/* {pageNumbers.map((page) => { */}
                  {getPageNumbers().map((page, idx) => {
                    return (
                      <div
                      
                        key={idx}
                        onClick={() => page !== "..." && setPage(page)}
                        aria-current="page"
                        className={`${
                          datas?.page === page
                            ? " z-10  bg-green-600 text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            : " text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50  focus:outline-offset-0"
                        } ${isFetching ? "cursor-wait" : "cursor-pointer"}
                        inline-flex relative items-center px-4 py-2 text-sm font-semibold text  focus:z-20
                        `}
                      >
                        {page}
                      </div>
                    );
                  })}

                  <div
                    onClick={(e) => handlePage(e, "next")}
                    className={`${
                      datas?.totalPages > datas?.page
                        ? "cursor-pointer"
                        : "cursor-not-allowed"
                    } inline-flex relative items-center px-2 py-2 text-gray-400 rounded-r-md ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                  >
                    <ArrowRight />
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Pagination;
