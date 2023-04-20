import Info from "@mui/icons-material/Info";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Mid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  if (!searchTerm) {
    setMessage("Please enter some keyword words that you are searching for");
  } else if (searchTerm.length < 3) {
    setMessage("enter at least 3 letters!");
    } else {
    navigate(`/search/${searchTerm}`);
  }
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="py-4 text-center relative px-8 mb-24 grid place-content-center   mx-auto max-w-7xl w-11/12 backdrop-blur-[2px]">
      <p className="my-5 text-5xl font-bold text-gray-100 select-none font-font-3">
        Search . Find . Connect!
      </p>
      <div>
        <p className="my-8 text-2xl font-extralight text-gray-200 font-font-6 max-sm:hidden">
          Connect with businesses in Itahari by phone, address, website, email,
          maps, ratings, reviews and much more
        </p>
      </div>
      <form className="flex gap-3 w-full max-sm:grid">
        <div className="relative flex-1 my-5 max-sm:mb-0">
          <input
            type="search"
            value={searchTerm}
            onChange={handleChange}
            autoComplete="off"
            placeholder="Search by company name, business category, brand or keyword ..."
            name="search"
            id="search"
            className="px-4 py-2 pr-8 w-full text-gray-900 overflow-ellipsis bg-gray-200 rounded-md outline-none"
          />
          <SearchIcon className="absolute top-2 right-2  font-bold text-[1.3rem] text-black" />
        </div>
        <div className="my-5 max-sm:mb-0 max-sm:mt-2 max-sm:hidden relative flex-[0.3] max-lg:hover:flex-1 ease-in-out duration-500">
          <input
            type="search"
            autoComplete="off"
            placeholder="In which tole or ward?"
            name="search"
            id="search"
            className="px-4 py-2 w-full text-gray-900 overflow-ellipsis bg-gray-200 rounded-md outline-none"
          />
        </div>
        <div className="flex items-center max-sm:justify-center">
          <button
            onClick={handleSubmit}
            className="px-4 py-1 h-9 text-white bg-green-500 rounded-sm border-2 outline-none select-none font-font-1 border-l-teal-100"
          >
            search
          </button>
        </div>
      </form>
      {message && (
        <p className="absolute -bottom-1 left-9 py-[2px] px-3 rounded-full bg-red-500 font-font-6 text-slate-100 shadow-lg text-start">
          <Info /> {message}
        </p>
      )}
    </div>
  );
};
export default Mid;
