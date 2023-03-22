import React, { useState } from "react";
import data from "../../pages/data.json";

const Form = () => {
  const [classification, setClassification] = useState("CLASSIFICATION");
  const [city, setCity] = useState("");
  const [ward, setWard] = useState("");
  const [tolORmarga, setTolORmarga] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
    setWard("");
    setTolORmarga("");
  };

  const handleWardChange = (e) => {
    setWard(e.target.value);
    setTolORmarga("");
  };

  const selectedCity = data.cities.find((cityObj) => cityObj.name === city);
  const wardOptions = !city
    ? [
        <option key="default" value="">
          Select City First
        </option>,
      ]
    : selectedCity
    ? selectedCity.wards.map((ward) => (
        <option key={ward} value={ward}>
          {ward}
        </option>
      ))
    : [];

  const selectedWard = selectedCity?.tolORmargas[ward];
  const tolORmargaOptions = !ward
    ? [
        <option key="default" value="">
          Select Ward First
        </option>,
      ]
    : selectedWard
    ? selectedWard.map((tolORmarga) => (
        <option key={tolORmarga} value={tolORmarga}>
          {tolORmarga}
        </option>
      ))
    : [];

  console.log(city, ward, tolORmarga);

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
              alue={ward}
              onChange={handleWardChange}
              className="ease-in duration-200 bg-[#1a1f2d] w-full outline-none p-3 h-12 border-b-[1px] rounded-sm border-[1px]
                        border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            >
              <option value="">select ward ✳️</option>
              {wardOptions}
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
              value={tolORmarga}
              onChange={(e) => setTolORmarga(e.target.value)}
              className="ease-in duration-200 bg-[#1a1f2d] w-full outline-none
              p-3 h-12 border-b-[1px] rounded-sm border-[1px] border-gray-300
              appearance-none dark:text-white dark:border-gray-600
              dark:focus:border-blue-500 focus:outline-none focus:ring-0
              focus:border-blue-600"
            >
              <option value="tol">select tol or marga ✳️</option>
              {tolORmargaOptions}
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
        {/* post box and business numbe */}
        <div className="ease-in duration-200 m-auto text-sm w-full flex items-end justify-center gap-10 text-gray-400 max-lg:flex-wrap">
          <div className="w-full relative z-0 group">
            <input
              required
              type="text"
              name="postbox"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="postbox"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Post Box No.
            </label>
          </div>
          <div className="ease-in duration-200 w-full group">
            <label
              htmlFor="classifications"
              className="block mb-2 text-left text-sm font-medium text-gray-900 dark:text-white peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            >
              Year of Establishment
            </label>
            <select
              name="classifications"
              id="classifications"
              value={classification}
              onChange={handleClassificationChange}
              className="ease-in duration-200 bg-[#1a1f2d] w-full outline-none p-3 appearance-none h-12 border-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            >
              <option value="CLASSIFICATION" disabled>
                select Year in AD ✳️
              </option>
              <option value="manakamana">Food and Beverage</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
