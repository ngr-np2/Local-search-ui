import React, { useState } from "react";
import data from "../../pages/data.json";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CheckBox from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import NameAndAddress from "../../components/getListedFree/input/NameAndAddress";
import FullAddress from "../../components/getListedFree/select/FullAddress";
import ClassificationComp from "../../components/getListedFree/select/Classification";
const Form = () => {
  const [classification, setClassification] = useState("CLASSIFICATION");
  const [establishIn, setEstablishIn] = useState('establishIn')
  const [city, setCity] = useState("");
  const [ward, setWard] = useState("");
  const [tolORmarga, setTolORmarga] = useState("");
  const [website, setWebsite] = useState(false)
  const [WebsiteUrl, setWebsiteUrl] = useState('')

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


  const handleClassificationChange = (event) => {
    setClassification(event.target.value);
  };

  const nepaliYearDiff = 56;
  const currentGregorianYear = new Date().getFullYear();
  const currentNepaliYear = data.NewYear;
  const startingGregorianYear = 2000;

  const startingGregorianYearAdjusted = currentGregorianYear - nepaliYearDiff - (currentNepaliYear - startingGregorianYear);

  const [facebookLink, setFacebookLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [twitterLink, setTwitterLink] = useState('');



  const handleFacebookLinkChange = (e) => {
    const input = e.target.value.trim().slice(0, 20);
    if (input.startsWith('http') && input.includes('facebook.com/')) {
      const username = input.split('facebook.com/')[1];
      setFacebookLink(username);
    } else if (input.includes('facebook.com/')) {
      const username = input.split('facebook.com/')[1];
      setFacebookLink(username);
    } else if (input.includes('https://facebook.com/')) {
      const username = input.split('https://facebook.com/')[1];
      setFacebookLink(username);
    } else {
      setFacebookLink(input);
    }
  };

  const handleInstagramLinkChange = (e) => {
    const input = e.target.value.trim().slice(0, 20);
    if (input.startsWith('http') && input.includes('instagram.com/')) {
      const username = input.split('instagram.com/')[1];
      setInstagramLink(username);
    } else if (input.includes('instagram.com/')) {
      const username = input.split('instagram.com/')[1];
      setInstagramLink(username);
    } else if (input.includes('https://instagram.com/')) {
      const username = input.split('https://instagram.com/')[1];
      setInstagramLink(username);
    } else {
      setInstagramLink(input);
    }
  };

  const handleTwitterLinkChange = (e) => {
    const input = e.target.value.trim().slice(0, 20);
    if (input.startsWith('http') && input.includes('twitter.com/')) {
      const username = input.split('twitter.com/')[1];
      setTwitterLink(username);
    } else if (input.includes('twitter.com/')) {
      const username = input.split('twitter.com/')[1];
      setTwitterLink(username);
    } else if (input.includes('https://twitter.com/')) {
      const username = input.split('https://twitter.com/')[1];
      setTwitterLink(username);
    } else {
      setTwitterLink(input);
    }
  };
  const [openFrom, setOpenFrom] = useState("");
  const [openTill, setOpenTill] = useState('')

  const times = Array.from({ length: 24 * 2 }, (_, i) => {
    const hour = Math.floor(i / 2);
    const minute = i % 2 === 0 ? "00" : "30";
    const suffix = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    const time = `${hour12.toString().padStart(2, '0')}:${minute} ${suffix}`;
    return time;
  });

  const hangleOpenTimeChange = (e) => {
    setOpenFrom(e.target.value);
  }
  const hangleCloseTimeChange = (e) => {
    setOpenTill(e.target.value)
  }
  const [hours, setHours] = useState(false)

  return (
    <form action="post" className="px-5 mt-14 duration-200 ease-in">
      <div className="flex flex-col gap-10 font-font-6">
        {/* <div className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">
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
        )} */}
        <NameAndAddress />
        <FullAddress />
        <ClassificationComp />
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
              name="ur"
              disabled={website}
              value={website ? '' : WebsiteUrl}
              onChange={(e) => setWebsiteUrl(e.target.value)}
              className={` block py-2.5 px-0 w-full overflow-ellipsis text-sm text-gray-200 bg-transparent border-0 border-b-2  appearance-none dark:text-white  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer ${website ? 'cursor-not-allowed border-gray-700' : 'curser-text border-gray-600'}`}
              placeholder=" "
            />
            <label
              htmlFor="Website"
              className={`peer-focus:font-medium absolute text-sm duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ${website ? 'text-gray-600' : 'text-gray-400'}`}>
              Website
            </label>
          </div>
        </div>
        <div title="we do not have a website. CheckBox" className="flex gap-4 items-center m-auto w-full duration-200 ease-in cursor-pointer max-lg:flex-wrap">
          {
            !website ? <CheckBoxOutlineBlankIcon onClick={() => (setWebsite(!website), setWebsiteUrl(''))} /> :
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
              value={instagramLink}
              onChange={handleInstagramLinkChange}
              className="overflow-ellipsis block ml-6 py-2.5 pl-[2px] w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="instagram"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-6 top-3 -z-10 origin-[0] peer-focus:left-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
              value={twitterLink}
              onChange={handleTwitterLinkChange}
              className="overflow-ellipsis block ml-6 py-2.5 pl-[2px] w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="twitter"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-6 top-3 -z-10 origin-[0] peer-focus:left-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
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
              value={facebookLink}
              onChange={handleFacebookLinkChange}
              className="overflow-ellipsis block ml-6 py-2.5 pl-[2px] w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="facebook"

              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-6 top-3 -z-10 origin-[0] peer-focus:left-6 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Facebook
            </label>
          </div>
        </div>
        <div className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">
          <div title="Opening Hours" className="relative w-full duration-200 ease-in group">
            <label
              htmlFor="openingHours"
              className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            >
              Opening Hours
            </label>
            <div title="open 24 hours a day, seven day a week. CheckBox" className="flex gap-2 justify-center items-center m-auto w-full duration-200 ease-in cursor-pointer max-lg:flex-wrap">
              {
                !hours ? <CheckBoxOutlineBlankIcon onClick={() => (setHours(!hours), setWebsiteUrl(''))} /> :
                  <CheckBox onClick={() => setHours(!hours)} />
              } <p className="p-0 m-0 text-base font-font-8" onClick={() => setWebsite(!website)} >
                24/7
              </p>
            </div>
          </div>
          <div title="Opening time" className="relative w-full duration-200 ease-in group">
            <label
              htmlFor="openingHours"
              className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            >
              From
            </label>
            <KeyboardArrowDownIcon className="absolute right-2 top-2/4 text-gray-200" />
            <select
              name="openingHours"
              value={openFrom}
              onChange={hangleOpenTimeChange}
              className="cursor-pointer   ease-in duration-200 bg-[#1a1f2d] w-full outline-none pl-3 text-sm appearance-none h-12 text-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            >
              <option value="openingHours" disabled>
                Opening Time
              </option>
              {times.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
          <div title="closing time" className="relative w-full duration-200 ease-in group">
            <label
              htmlFor="openTill"
              className="block mb-2 text-sm font-medium text-left text-gray-900 dark:text-white peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
            >
              To
            </label>
            <KeyboardArrowDownIcon className="absolute right-2 top-2/4 text-gray-200" />
            <select
              name="openTill"
              value={openTill}
              onChange={hangleCloseTimeChange}
              defaultValue={"OPENTILL"}
              className="cursor-pointer ease-in duration-200 bg-[#1a1f2d] w-full outline-none pl-3 text-sm appearance-none h-12 text-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
            >
              <option value="OPENTILL" disabled>
                Closing Time
              </option>
              {times.map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
