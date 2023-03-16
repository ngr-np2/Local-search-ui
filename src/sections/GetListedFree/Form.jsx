import React, { useState } from "react";
import data from "../../pages/data.json";

const Form = () => {
  const [classification, setClassification] = useState("CLASSIFICATION");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [zone, setZone] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setArea("");
    setZone("");
  };

  const handleAreaChange = (e) => {
    setArea(e.target.value);
    setZone("");
  };
  console.log(city, area, zone);
  const selectedCity = data.cities.find((cityObj) => cityObj.name === city);
  let areaOptions = selectedCity
    ? selectedCity.areas.map((area) => (
        <option key={area} value={area}>
          {area}
        </option>
      ))
    : [
        <option key="default" value="">
          Select City First
        </option>,
      ];

  if (!city) {
    areaOptions = [
      <option key="default" value="">
        Select City First
      </option>,
    ];
  }

  const selectedArea = selectedCity ? selectedCity.zones[area] : null;
  let zoneOptions = selectedArea
    ? selectedArea.map((zone) => (
        <option key={zone} value={zone}>
          {zone}
        </option>
      ))
    : [
        <option key="default" value="">
          Select Area First
        </option>,
      ];

  if (!area) {
    zoneOptions = [
      <option key="default" value="">
        Select Area First
      </option>,
    ];
  }
  const handleClassificationChange = (event) => {
    setClassification(event.target.value);
  };
  return (
    <form action="post" className="mt-14 px-5 ease-in duration-200">
      <div className="flex flex-col gap-10 font-font-6">
        <div className="m-auto flex justify-center w-full gap-10 max-lg:flex-wrap ">
          <div className="w-full relative z-0 group">
            <input
              required
              type="text"
              name="businessName"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="businessName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Business Name ✳️
            </label>
          </div>
          <div className="w-full relative z-0 group">
            <input
              required
              type="text"
              name="businessAddress"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="businessName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Business Address ✳️
            </label>
          </div>
        </div>
        <div className="m-auto text-sm w-full flex justify-center gap-10 text-gray-400 max-lg:flex-wrap">
          <div className="w-full">
            <label
              htmlFor="city"
              className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
            >
              City Name
            </label>
            <select
              name="city"
              id="city"
              value={city}
              onChange={handleCityChange}
              className="ease-in duration-200 bg-[#1a1f2d] w-full outline-none p-3 h-12 border-b-[1px] border-[1px]
                        border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            >
              <option value="">select city ✳️</option>
              {data.cities.map((cityObj) => (
                <option key={cityObj.name} value={cityObj.name}>
                  {cityObj.name}
                </option>
              ))}
            </select>
          </div>
          <div className="ease-in duration-200 w-full">
            <label
              htmlFor="ward"
              className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
            >
              Ward Number
            </label>
            <select
              name="ward"
              id="ward"
              alue={area}
              onChange={handleAreaChange}
              className="ease-in duration-200 bg-[#1a1f2d] w-full outline-none p-3 h-12 border-b-[1px] rounded-sm border-[1px]
                        border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            >
              <option value="">select ward ✳️</option>
              {areaOptions}
            </select>
          </div>
        </div>
        <div className="ease-in duration-200 m-auto text-sm w-full flex justify-center gap-10 text-gray-400 max-lg:flex-wrap">
          <div className="ease-in duration-200 w-full">
            <label
              htmlFor="tol"
              className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
            >
              Tol / Marga
            </label>
            <select
              name="tol"
              id="tol"
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className="ease-in duration-200 bg-[#1a1f2d] w-full outline-none
              p-3 h-12 border-b-[1px] rounded-sm border-[1px] border-gray-300
              appearance-none dark:text-white dark:border-gray-600
              dark:focus:border-blue-500 focus:outline-none focus:ring-0
              focus:border-blue-600"
            >
              <option value="tol">select tol or marga ✳️</option>
              {zoneOptions}
            </select>
          </div>
          <div className="ease-in duration-200 w-full">
            <label
              htmlFor="classifications"
              className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white"
            >
              Business Classification
            </label>
            <select
              name="classifications"
              id="classifications"
              value={classification}
              onChange={handleClassificationChange}
              className="ease-in duration-200 bg-[#1a1f2d] w-full outline-none p-3 appearance-none h-12 border-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            >
              <option value="CLASSIFICATION" disabled>
                select classification ✳️
              </option>
              <option value="manakamana">Food and Beverage</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
        {classification === "other" && (
          <div className="m-auto flex justify-center w-full gap-10 max-lg:flex-wrap">
            <div className="w-full relative z-0 group">
              <input
                type="text"
                name="classificationOther"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
              />
              <label
                htmlFor="classificationOther"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Enter other classification ✳️
              </label>
            </div>
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;
