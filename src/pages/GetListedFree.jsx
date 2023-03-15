import GlfDetails from "../sections/GetListedFree/GlfDetails";
const GetListedFree = () => {
  return (
    <div className="px-2 bg-[#0d1116]">
      <div
        className="max-w-screen-xl m-auto flex max-sm:flex-wrap-reverse
        bg-[#141a21]">
        <GlfDetails />
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
