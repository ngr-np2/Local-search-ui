import { RiSearchLine } from "react-icons/ri"

const Mid = () => {
  return (
    <div className="py-4 px-8 mb-24 grid place-content-center   mx-auto max-w-7xl w-11/12 backdrop-blur-[2px]">
      <p className="text-gray-100 text-5xl my-5 font-font-3 font-bold select-none">Search. Find. Connect!</p>
      <div>
        <p className="text-gray-200 text-2xl my-8 font-font-6 font-extralight max-sm:hidden">Connect with businesses in Itahari by phone, address, website, email, maps, ratings, reviews and much more</p>
      </div>
      <form className="flex gap-3 w-full max-sm:grid">
        <div className="my-5 relative flex-1 max-sm:mb-0">
          <input type="search" autoComplete="off" placeholder="Search by company name, business category, brand or keyword ..." name="search" id="search" className="bg-gray-200 rounded-md text-gray-900 outline-none py-2 px-4 pr-8 overflow-ellipsis w-full" />
          <RiSearchLine className="absolute top-2 right-2  font-bold text-[1.3rem] text-black" />
        </div>
        <div className="my-5 max-sm:mb-0 max-sm:mt-2 max-sm:hidden relative flex-[0.3] max-lg:hover:flex-1 ease-in-out duration-500">
          <input type="search" autoComplete="off" placeholder="In which tole or ward?" name="search" id="search" className="bg-gray-200 rounded-md text-gray-900 outline-none py-2 px-4 overflow-ellipsis w-full" />
        </div>
        <div className="flex items-center max-sm:justify-center">
          <button className="font-font-1 rounded-sm outline-none border-2 border-l-teal-100 px-4 py-1 h-9 text-white bg-green-500 select-none">search</button>
        </div>
      </form>
    </div>

  )
}
export default Mid