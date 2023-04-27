import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetKeywordQuery } from "../../redux/popular/keywordAPiSlice";
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    arr.slice(i * size, i * size + size)
  );
const PopularKeywordsSection = () => {
  const [popularKeywords, setPopularKeywords] = useState([]);

  const { data, isFetching } = useGetKeywordQuery();
  useEffect(() => {
    if (data) {
      setPopularKeywords(chunk(data, 4));
    }
  }, [data]);
  // console.log("---");
  // console.log(popularKeywords);

  return (
    <section id="popKeyword" className="bg-slate-100 text-center">
      <div className="px-2 pt-8 pb-4">
        <p className="my-7 text-5xl capitalize font-font-2 text-zinc-900">
          Top KeyWords
        </p>
      </div>
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 place-items-center gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {!isFetching &&
            popularKeywords.map((chunk, i) => (
              <ul key={i} className="font-medium text-start text-gray-500">
                {chunk.map((item, j) => (
                  <li key={j} className="mb-4">
                    <Link to="#" className="hover:underline capitalize">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PopularKeywordsSection;
