import React, { useState } from "react";
import TableBoday from "../../components/admin/TableBoday";

const TableSec = () => {
  const totalData = 511;
  const limit = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalData / limit);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPageNumberss = () => {
    const pageNumbers = [];
    const maxPageNumbers = 6;

    if (currentPageDb <= maxPageNumbers) {
      for (let i = 1; i <= maxPageNumbers; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...1");
      pageNumbers.push(totalPages);
    } else if (
      currentPageDb > maxPageNumbers &&
      currentPageDb <= totalPages - maxPageNumbers
    ) {
      pageNumbers.push(1);
      pageNumbers.push("...2");
      for (let i = currentPageDb - 1; i <= currentPageDb + 1; i++) {
        pageNumbers.push(i);
      }
      pageNumbers.push("...3");
      pageNumbers.push(totalPages);
    } else {
      pageNumbers.push(1);
      pageNumbers.push("...4");
      for (let i = totalPages - maxPageNumbers + 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageNumbers = 5;

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
  // console.log(getPageNumbers());
  return (
    <div className="mx-4 mt-4">
      <div className="overflow-hidden w-full rounded-lg shadow-xs">
        <div className="overflow-x-auto w-full">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase bg-gray-50 border-b">
                <th className="px-4 py-3">Client</th>
                <th className="px-4 py-3">Amount</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">End Date</th>
                <th className="px-4 py-3">Click</th>
                <th className="px-4 py-3">View</th>
              </tr>
            </thead>
            <TableBoday />
          </table>
        </div>
        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 bg-gray-50 border-t sm:grid-cols-9">
          <div className="flex col-span-3 max-sm:col-span-2 items-center max-sm:justify-end">
            {" "}
            Showing 2-30 of {totalData} results
          </div>
          <div className="col-span-2"></div>
          <div className="flex col-span-4 mt-2 sm:mt-auto max-sm:justify-center sm:justify-end">
            <div className="max-sm:flex hidden w-full mx-4 justify-between">
              <div
                className="bg-gray-100 shadow-lg 
                 transition hover:-translate-y-1 active:bg-[#f1efef] active:translate-y-0  cursor-pointer duration-300 py-2 px-4 rounded text-slate-500"
              >
                Prev
              </div>
              <div
                className="bg-gray-100 shadow-lg 
                transition hover:-translate-y-1 active:bg-[#f1efef] active:translate-y-0  cursor-pointer duration-300 py-2 px-4 rounded text-slate-500"
              >
                Next
              </div>
            </div>
            <nav aria-label=" Table navigation" className="max-sm:hidden">
              <ul className="inline-flex items-center max-sm:w-full max-sm:flex justify-between">
                <li>
                  <button
                    className="mx-3 cpoi py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Previous"
                    onClick={() =>
                      currentPage <= totalPages &&
                      handlePageChange(currentPage - 1)
                    }
                    disabled={currentPage === 1}
                  >
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                {getPageNumbers().map((pageNumber, index) => (
                  <li key={index}>
                    <button
                      className={`px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple transform transition duration-300 hover:scale-105 ${
                        pageNumber === currentPage
                          ? "text-white bg-green-600 border-green-600"
                          : ""
                      }`}
                      onClick={() =>
                        pageNumber !== "..." && handlePageChange(pageNumber)
                      }
                    >
                      {pageNumber}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    className="mx-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Next"
                    onClick={() =>
                      currentPage !== totalPages &&
                      handlePageChange(currentPage + 1)
                    }
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableSec;
