import React, { useEffect, useState } from "react";
import { useGetKeywordQuery } from "../../redux/popular/keywordAPiSlice";
import { Link } from "react-router-dom";

const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
const PopularKeywordComp = () => {
  const [popularKeywords, setPopularKeywords] = useState([]);

  const { data, isFetching } = useGetKeywordQuery();
  useEffect(() => {
    if (data) {
      setPopularKeywords(chunk(data, 3));
    }
  }, [data]);
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(8rem,_1fr))] place-items-center gap-8 px-4 py-6 lg:py-8">
      {!isFetching &&
        popularKeywords.map((chunk, i) => (
          <ul key={i} className="font-medium text-start w-full text-gray-500">
            {chunk.map((item, j) => (
              <li key={j} className="mb-4">
                <Link
                  to={`/search/keywords/${item?._id}`}
                  className="hover:underline capitalize"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
    </div>
  );
};

export default PopularKeywordComp;
