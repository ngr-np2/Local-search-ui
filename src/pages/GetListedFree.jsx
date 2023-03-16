import { useState } from "react";
import GlfDetails from "../sections/GetListedFree/GlfDetails";
const GetListedFree = () => {
  const [classification, setClassification] = useState("CLASSIFICATION");

  const handleClassificationChange = (event) => {
    setClassification(event.target.value);
  };
  return (
    <div className=" bg-[#0d1116]">
      <div className="max-w-screen-xl m-auto flex max-sm:flex-wrap-reverse bg-[#141a21]">
        <GlfDetails />
        <div className="sm:flex-1 leading-loose sm:pl-2 sm:pr-8 mt-14 max-sm:px-2 max-sm:mx-auto max-sm:text-base text-3xl font-f-bold-cyber">
          <div className="">
            <p>NOT ON LOCAL SEARCH YET?</p>
            <p>CREATE YOUR FREE BUSINESS PROFILE PAGE</p>
          </div>
          <div className="bg-[#1a1f2d] px-5 py-6 my-8">
            <div>
              <div className="font-font-6 text-sm tracking-widest text-start ">
                Business Information
              </div>
              <form action="post" className="mt-14 px-5 ease-in duration-200">
                <div className="flex flex-col gap-10 font-font-6">
                  <div className="m-auto flex justify-center w-full gap-10 max-lg:flex-wrap">
                    <div className="w-full">
                      <input
                        required
                        type="text"
                        name="businessName"
                        id="businessName"
                        className="w-full text-base ease-in duration-200  outline-none bg-transparent border-b-[1px] focus:border-[#48B348] py-2  border-[#6c7274]"
                        placeholder="Business Name ✳️"
                      />
                    </div>
                    <div className="w-full">
                      <input
                        required
                        type="text"
                        name="businessName"
                        id="businessName"
                        className="w-full text-base ease-in duration-200  outline-none bg-transparent capitalize border-b-[1px] focus:border-[#48B348] py-2  border-[#6c7274]"
                        placeholder="Business Address ✳️"
                      />
                    </div>
                  </div>
                  <div className="m-auto text-sm w-full flex justify-center gap-10 text-gray-400 max-lg:flex-wrap">
                    <div className="w-full">
                      <select
                        name="city"
                        className="ease-in duration-200 bg-[#1a1f2d] w-full outline-none p-3 h-11 border-b-[1px] focus:border-[#48B348] border-[1px] border-[#363b3d]"
                      >
                        <option value="">City ✳️</option>
                        <option value="itahari">Itahari</option>
                      </select>
                    </div>
                    <div className="ease-in duration-200 w-full">
                      <select
                        name="ward"
                        className="ease-in duration-200 bg-[#1a1f2d] w-full outline-none p-3 h-11 border-b-[1px] rounded-sm focus:border-[#48B348] focus-visible:border-[#48B348] active:border-[#48B348] border-[1px] border-[#363b3d]"
                      >
                        <option value="">Ward ✳️</option>
                        <option value="1">1</option>
                      </select>
                    </div>
                  </div>
                  <div className="ease-in duration-200 m-auto text-sm w-full flex justify-center gap-10 text-gray-400 max-lg:flex-wrap">
                    <div className="ease-in duration-200 w-full">
                      <select
                        name="tol"
                        className="ease-in duration-200 bg-[#1a1f2d] w-full outline-none p-3 h-11 border-b-[1px] rounded-sm focus:border-[#48B348] focus-visible:border-[#48B348] active:border-[#48B348] border-[1px] border-[#363b3d]"
                      >
                        <option value="tol">Tol ✳️</option>
                        <option value="manakamana">manakamana</option>
                      </select>
                    </div>
                    <div className="ease-in duration-200 w-full">
                      <select
                        name="classifications"
                        value={classification}
                        onChange={handleClassificationChange}
                        className="ease-in duration-200 bg-[#1a1f2d] w-full outline-none p-3 h-11 border-b-[1px] rounded-sm focus:border-[#48B348] focus-visible:border-[#48B348] active:border-[#48B348] border-[1px] border-[#363b3d]"
                      >
                        <option value="CLASSIFICATION" disabled>
                          Select Classification ✳️
                        </option>
                        <option value="manakamana">Food and Beverage</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    {classification === "other" && (
                      <div className="m-auto flex justify-center w-full gap-10 max-lg:flex-wrap">
                        <div className="w-full">
                          <input
                            type="text"
                            placeholder="Enter other classification ✳️"
                            className="ease-in text-base duration-200 bg-transparent w-full outline-none h-11 border-b-[1px] focus:border-[#48B348] focus-visible:border-[#48B348] active:border-[#48B348] border-[#6c7274]"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </form>
            </div>
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
