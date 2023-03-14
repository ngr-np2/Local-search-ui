import Grow from "../assets/icons/grow.png";
import Top from "../assets/icons/top.png";
import Print from "../assets/icons/print.png";
import { SiFacebook, SiInstagram, SiTwitter } from "react-icons/si";
const GetListedFree = () => {
  return (
    <div className="px-2 bg-gray-800">
      <div
        className="max-w-screen-xl m-auto flex max-sm:flex-wrap-reverse
        bg-gray-700"
      >
        <div className="sm:flex-1 sd:flex-[0.7] m-auto sm:ml-6 sm:px-8 text-left">
          <div className="mt-24 mx-2 px-3">
            <p className="font-font-8">
              <b className="font-font-4">Looking for </b>a way to reach more
              customers? Look no further! You can get your business listed on
              Local Search Online Directory, Local Search Apps for FREE!
            </p>
            <p className="m-1 text-sky-500 font-font-8">
              Get your free listing <b>TODAY</b>, just by filling in this form.
            </p>
          </div>
          <div className="bg-gray-600 mx-2 px-6 pb-5">
            <div className="mt-24 mb-9 text-3xl font-bold font-font-8">
              <p className="pt-7">List your company for free</p>
            </div>
            <div className="m-3 mt-14 flex max-lg:flex-wrap gap-2">
              <div className="max-w-xs">
                <img src={Grow} alt="grow" className="max-w-xs w-9" />
              </div>
              <div className="f-1">
                <p className="font-extrabold text-lg tracking-widest mb-2">
                  Grow Your Business Fast
                </p>
                <p>
                  Imagine you have made your presence online through first local
                  search in ITAHARI.
                </p>
              </div>
            </div>
            <div className="m-3 mt-14 flex max-lg:flex-wrap gap-2">
              <div className="max-w-xs">
                <img src={Top} alt="Top" className="max-w-xs w-9" />
              </div>
              <div className="f-1">
                <p className="font-extrabold text-lg tracking-widest mb-2">
                  Get the top position
                </p>
                <p>
                  Advertising your business to area specific has many
                  advantages. For Local Businessmen in ITAHARI, it is and
                  opportunity.
                </p>
              </div>
            </div>
            <div className="m-3 mt-14 flex max-lg:flex-wrap gap-2">
              <div className="max-w-xs">
                <img src={Print} alt="Print" className="max-w-xs w-9" />
              </div>
              <div className="f-1">
                <p className="font-extrabold text-lg tracking-widest mb-2">
                  Develop Brand Image
                </p>
                <p>
                  Your local business too needs brand management and image
                  making.bg-gradient-to-r from-indigo-500 via-purple-500
                  to-pink-500
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-8 justify-center mt-14 mb-8 ">
              <button className="flex items-center bg-blue-500 py-1 px-3 rounded-md gap-2">
                <SiFacebook /> share
              </button>
              <button className="flex items-center py-1 px-3 rounded-md gap-2 bg-gradient-to-tr from-yellow-500  via-pink-500 to-blue-700">
                <SiInstagram />
                share
              </button>
              <button className="flex items-center bg-blue-700 py-1 px-4 rounded-2xl gap-2">
                <SiTwitter />
                tweet
              </button>
            </div>
          </div>
        </div>
        <div className="sm:flex-1 leading-loose px-8 mt-14 max-sm:mx-auto max-sm:text-base text-3xl font-f-bold-cyber">
          <div className="">
          <p>NOT ON LOCAL SEARCH YET?</p>
          <p>CREATE YOUR FREE BUSINESS PROFILE PAGE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetListedFree;

// import { useState } from "react";
// import data from "./data.json";

// const GetListedFree = () => {
//   const [city, setCity] = useState("");
//   const [area, setArea] = useState("");
//   const [zone, setZone] = useState("");

//   const handleCityChange = (e) => {
//     setCity(e.target.value);
//     setArea("");
//     setZone("");
//   };

//   const handleAreaChange = (e) => {
//     setArea(e.target.value);
//     setZone("");
//   };
//   console.log(city, area, zone);
//   const selectedCity = data.cities.find((cityObj) => cityObj.name === city);
//   let areaOptions = selectedCity
//     ? selectedCity.areas.map((area) => (
//         <option key={area} value={area}>
//           {area}
//         </option>
//       ))
//     : [
//         <option key="default" value="">
//           Select City First
//         </option>,
//       ];

//   if (!city) {
//     areaOptions = [
//       <option key="default" value="">
//         Select City First
//       </option>,
//     ];
//   }

//   const selectedArea = selectedCity ? selectedCity.zones[area] : null;
//   let zoneOptions = selectedArea
//     ? selectedArea.map((zone) => (
//         <option key={zone} value={zone}>
//           {zone}
//         </option>
//       ))
//     : [
//         <option key="default" value="">
//           Select Area First
//         </option>,
//       ];

//   if (!area) {
//     zoneOptions = [
//       <option key="default" value="">
//         Select Area First
//       </option>,
//     ];
//   }

//   return (
//     <div>
//       <label>
//         City:
//         <select value={city} onChange={handleCityChange}>
//           <option value="">city</option>
//           {data.cities.map((cityObj) => (
//             <option key={cityObj.name} value={cityObj.name}>
//               {cityObj.name}
//             </option>
//           ))}
//         </select>
//       </label>
//       <br />
//       <label>
//         Area:
//         <select value={area}  onChange={handleAreaChange}>
//           <option value="">area</option>

//           {areaOptions}
//         </select>
//       </label>
//       <br />
//       <label>
//         Zone:
//         <select value={zone} onChange={(e) => setZone(e.target.value)}>
//           <option value="">zone</option>
//           {zoneOptions}
//         </select>
//       </label>
//     </div>
//   );
// };

// export default GetListedFree;
