import React, { useState } from "react";
import data from "../../pages/data.json";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckBox from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
const Form = () => {
  const [classification, setClassification] = useState("CLASSIFICATION");
  const [establishIn, setEstablishIn] = useState('establishIn')
  const [city, setCity] = useState("");
  const [ward, setWard] = useState("");
  const [tolORmarga, setTolORmarga] = useState("");
  const [website, setWebsite] = useState(false)
  const [url, setUrl] = useState('')

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

  const nepaliYearDiff = 56;
  const currentGregorianYear = new Date().getFullYear();
  const currentNepaliYear = data.NewYear;
  const startingGregorianYear = 2000;

  const startingGregorianYearAdjusted = currentGregorianYear - nepaliYearDiff - (currentNepaliYear - startingGregorianYear);


  return (
    <form action="post" className="px-5 mt-14 duration-200 ease-in">
      <div className="flex flex-col gap-10 font-font-6">
        <div className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">
          <div title="business name" className="relative z-0 w-full group">
            <input
              required
              type="text"
              name="businessName"
              className="ovee block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="businessName"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Business Name ✳️
            </label>
          </div>
          <div title="business address" className="relative z-0 w-full group">
            <input
              required
              type="text"
              name="businessAddress"
              className="ovee block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
        <div className="flex gap-10 justify-center m-auto w-full text-sm text-gray-400 max-lg:flex-wrap">
          <div title="city name" className="relative w-full">
            <label
              htmlFor="city"
              className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
            >
              City Name
            </label>
            <KeyboardArrowDownIcon className="absolute right-2 top-2/4 text-gray-200" />

            <select
              name="city"
              id="city"
              value={city}
              onChange={handleCityChange}
              className="cursor-pointer ease-in duration-200 bg-[#1a1f2d] w-full outline-none p-3 h-12 border-b-[1px] border-[1px]
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
          <div title="Ward Number" className="relative w-full duration-200 ease-in">
            <label
              htmlFor="ward"
              className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
            >
              Ward Number
            </label>
            {city &&
              <KeyboardArrowDownIcon className="absolute right-2 top-2/4 text-gray-200" />
            }
            <select
              name="ward"
              id="ward"
              value={ward}
              onChange={handleWardChange}
              className="cursor-pointer ease-in duration-200 bg-[#1a1f2d] w-full outline-none p-3 h-12 border-b-[1px] rounded-sm border-[1px]
                        border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            >
              <option value="">select ward ✳️</option>
              {wardOptions}
            </select>
          </div>
        </div>
        <div className="flex gap-10 justify-center m-auto w-full text-sm text-gray-400 duration-200 ease-in max-lg:flex-wrap">
          <div title="tol / marga" className="relative w-full duration-200 ease-in">
            <label
              htmlFor="tol"
              className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
            >
              Tol / Marga
            </label>
            {ward &&
              <KeyboardArrowDownIcon className="absolute right-2 top-2/4 text-gray-200" />
            }

            <select
              name="tol"
              id="tol"
              value={tolORmarga}
              onChange={(e) => setTolORmarga(e.target.value)}
              className="cursor-pointer ease-in duration-200 bg-[#1a1f2d] w-full outline-none
              p-3 h-12 border-b-[1px] rounded-sm border-[1px] border-gray-300
              appearance-none dark:text-white dark:border-gray-600
              dark:focus:border-blue-500 focus:outline-none focus:ring-0
              focus:border-blue-600"
            >
              <option value="">select tol or marga ✳️</option>
              {tolORmargaOptions}
            </select>
          </div>
          <div title="Business Classification" className="relative w-full duration-200 ease-in">
            <label
              htmlFor="classifications"
              className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white"
            >
              Business Classification
            </label>
            <KeyboardArrowDownIcon className="absolute right-2 top-2/4 text-gray-200" />
            <select
              name="classifications"
              id="classifications"
              value={classification}
              onChange={handleClassificationChange}
              className=" cursor-pointer pr-7 ease-in duration-200 bg-[#1a1f2d] w-full outline-none p-3 appearance-none h-12 text-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
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
          <div title="other classification" className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">
            <div className="relative z-0 w-full group">
              <input
                type="text"
                name="classificationOther"
                className="ovee block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
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
        <div className="flex gap-10 justify-center items-end m-auto w-full text-sm text-gray-400 duration-200 ease-in max-lg:flex-wrap">
          <div title="Post Box No" className="relative z-0 w-full group">
            <input
              required
              type="text"
              name="postbox"
              className="ovee block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="postbox"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Post Box No.
            </label>
          </div>
          <div title="Year of Establishment" className="relative w-full duration-200 ease-in group">
            <label
              htmlFor="establishIn"
              className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            >
              Year of Establishment
            </label>
            <KeyboardArrowDownIcon className="absolute right-2 top-2/4 text-gray-200" />
            <select
              name="establishIn"
              id="establishIn"
              value={establishIn}
              onChange={(e) => setEstablishIn(e.target.value)}
              className="cursor-pointer ease-in pr-7 duration-200 bg-[#1a1f2d] w-full outline-none p-3 appearance-none h-12 border-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            >
              <option value="establishIn" disabled>
                select Year of Esishment in BS ✳️
              </option>
              {Array.from({ length: currentNepaliYear - startingGregorianYearAdjusted }, (_, i) => currentNepaliYear - i).map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>

        </div>
        <div title="business phone number" className="flex gap-10 justify-center m-auto w-full duration-200 ease-in max-lg:flex-wrap">
          <div className="relative z-0 w-full group">
            <input
              type="text"
              name="businessPhoneNumber"
              className="block py-2.5 px-0 w-full overflow-ellipsis text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="businessPhoneNumber"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Business Phone Number ✳️
            </label>
          </div>
        </div>
        <div title="Website" className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">
          <div className="relative z-0 w-full group">
            <input
              type="url"
              name="Website"
              disabled={website}
              className={` ${website ? 'cursor-not-allowed' : 'curser-text'} block py-2.5 px-0 w-full overflow-ellipsis text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
              placeholder=" "
            />
            <label
              htmlFor="Website"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Website
            </label>
          </div>
        </div>
        <div title="we do not have a website. CheckBox" className="flex gap-4 items-center m-auto w-full duration-200 ease-in cursor-pointer max-lg:flex-wrap">
          {
            !website ? <CheckBoxOutlineBlankIcon onClick={() => setWebsite(!website)} /> :
              <CheckBox onClick={() => setWebsite(!website)} />
          } <p className="p-0 m-0 text-base font-font-8" onClick={() => setWebsite(!website)} >
            We do not have a website
          </p>
        </div>
        <div className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">
          <div title="instagram page" className="relative z-0 w-full group">
            <AlternateEmailIcon className="absolute top-[0.9rem] -left-1" fontSize="small" />
            <input
              required
              type="text"
              name="instagram"
              className="overflow-ellipsis block py-2.5 pl-6 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="instagram"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Instagram
            </label>
          </div>
          <div title="Twitter username" className="relative z-0 w-full group">
            <AlternateEmailIcon className="absolute top-[0.9rem] -left-1" fontSize="small" />
            <input
              required
              type="text"
              name="twitter"
              className="overflow-ellipsis block py-2.5 pl-6 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="twitter"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Twitter
            </label>
          </div>
        </div>
        <div className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">
          <div title="facebook page" className="relative z-0 w-full group">
            <AlternateEmailIcon className="absolute top-[0.9rem] -left-1" fontSize="small" />

            <input
              required
              type="text"
              name="facebook"
              className="overflow-ellipsis block py-2.5 pl-6 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="facebook"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-6 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Facebook
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
