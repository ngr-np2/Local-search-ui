import React from "react";

const TableSec = () => {
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
            <tbody className="bg-white divide-y">
              <tr className="text-gray-700 bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="hidden relative mr-3 w-8 h-8 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold">Hans Burger</p>
                      <p className="text-xs text-gray-600">10x Developer</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">$855.85</td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                    {" "}
                    Approved{" "}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">15-01-2021</td>
                <td className="px-4 py-3 text-sm">15-09-2021</td>
                <td className="px-4 py-3 text-sm">85</td>
                <td className="px-4 py-3 text-sm">855.85</td>
              </tr>
              <tr className="text-gray-700 bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="hidden relative mr-3 w-8 h-8 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold">Jolina Angelie</p>
                      <p className="text-xs text-gray-600">Unemployed</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">$369.75</td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full">
                    {" "}
                    Pending{" "}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">23-03-2021</td>{" "}
                <td className="px-4 py-3 text-sm">23-09-2021</td>
                <td className="px-4 py-3 text-sm">85</td>
                <td className="px-4 py-3 text-sm">855.85</td>{" "}
              </tr>
              <tr className="text-gray-700 bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="hidden relative mr-3 w-8 h-8 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold">Dave Li</p>
                      <p className="text-xs text-gray-600">Influencer</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">$775.45</td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full">
                    {" "}
                    Expired{" "}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">09-02-2021</td>{" "}
                <td className="px-4 py-3 text-sm">09-09-2021</td>
                <td className="px-4 py-3 text-sm">85</td>
                <td className="px-4 py-3 text-sm">855.85</td>{" "}
              </tr>
              <tr className="text-gray-700 bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="hidden relative mr-3 w-8 h-8 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold">Rulia Joberts</p>
                      <p className="text-xs text-gray-600">Actress</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">$1276.75</td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full">
                    {" "}
                    Approved{" "}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">17-04-2021</td>{" "}
                <td className="px-4 py-3 text-sm">17-09-2021</td>
                <td className="px-4 py-3 text-sm">85</td>
                <td className="px-4 py-3 text-sm">855.85</td>{" "}
              </tr>
              <tr className="text-gray-700 bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-3">
                  <div className="flex items-center text-sm">
                    <div className="hidden relative mr-3 w-8 h-8 rounded-full md:block">
                      <img
                        className="object-cover w-full h-full rounded-full"
                        src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                        alt=""
                        loading="lazy"
                      />
                      <div
                        className="absolute inset-0 rounded-full shadow-inner"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <div>
                      <p className="font-semibold">Hitney Wouston</p>
                      <p className="text-xs text-gray-600">Singer</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 text-sm">$863.45</td>
                <td className="px-4 py-3 text-xs">
                  <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full">
                    {" "}
                    Denied{" "}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm">11-01-2021</td>{" "}
                <td className="px-4 py-3 text-sm">11-09-2021</td>
                <td className="px-4 py-3 text-sm">85</td>
                <td className="px-4 py-3 text-sm">855.85</td>{" "}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase bg-gray-50 border-t sm:grid-cols-9">
          <span className="flex col-span-3 items-center">
            {" "}
            Showing 21-30 of 100{" "}
          </span>
          <span className="col-span-2"></span>
          {/* pagi */}
          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul className="inline-flex items-center">
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Previous"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    1
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    2
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 text-white bg-blue-600 rounded-md border border-r-0 border-blue-600 transition-colors duration-150 focus:outline-none focus:shadow-outline-purple">
                    3
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    4
                  </button>
                </li>
                <li>
                  <span className="px-3 py-1">...</span>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    8
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    9
                  </button>
                </li>
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Next"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>
    </div>
  );
};

export default TableSec;
