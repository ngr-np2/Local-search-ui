import React from "react";
import useGetListedFree from "../../../Hooks/useGetListedFree";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DropDownArrowSvg from "../../buttons/DropDownArrowSvg";

const ContactInformation = () => {
  const {
    firstName,
    lastName,
    mobileNum,
    email,
    handleContactInfo,
    message,
    role,
  } = useGetListedFree();

  return (
    <>
      <div className="flex justify-center m-auto mt-4 w-full max-lg:flex-wrap">
        <div
          title=" Information of the person who is filling this form"
          className="relative w-full duration-200 ease-in group"
        >
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-left text-gray-300 cursor-pointer peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
          >
            Your role in this Businesses
          </label>
        </div>
      </div>
      {/*<div className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">
                 <div title="first name" className="relative z-0 w-full group">
                    <input
                        required
                        type="text"
                        name="firstName"
                        id='firstName'
                        value={firstName}
                        onChange={(e) => handleContactInfo(e.target.value, 'firstname')}
                        className="overflow-ellipsis outline-none  block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="firstName"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        First Name ✳️
                    </label>
                </div>
                <div title="last name" className="relative z-0 w-full group">
                    <input
                        required
                        type="text"
                        name="lastName"
                        value={lastName}
                        onChange={(e) => handleContactInfo(e.target.value, 'lastname')}
                        className="overflow-ellipsis outline-none  block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="lastName"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Last Name ✳️
                    </label>
                </div>
            </div>
            <div className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">
                <div title="mobile number" className="relative z-0 w-full group">
                    <input
                        required
                        type="tel"
                        name="mobilenumber"
                        value={mobileNum}
                        onChange={(e) => handleContactInfo(e.target.value, 'mobilenum')}
                        className="overflow-ellipsis outline-none  block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="mobilenumber"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Mobile Number ✳️
                    </label>
                </div>
                <div title="email" className="relative z-0 w-full group">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => handleContactInfo(e.target.value, 'email')}
                        className="overflow-ellipsis outline-none  focus:invalid:border-red-500 block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                    />
                    <label
                        htmlFor="email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75  left-0 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email Address ✳️
                    </label>
                </div>

            </div> */}
      <div className="flex gap-10 justify-center m-auto w-full max-lg:flex-wrap">
        <div
          title="your current position"
          className="flex relative flex-col-reverse w-full duration-200 ease-in group"
        >
          <DropDownArrowSvg />
          <select
            name="role"
            defaultValue={"role"}
            onChange={(e) => handleContactInfo(e.target.value, "role")}
            className="block cursor-pointer peer ease-in pr-7 duration-200 bg-[#1a1f2d] w-full outline-none p-3 appearance-none h-12 border-b-[1px] rounded-sm border-[1px]  border-gray-300 dark:text-gray-100 text-base dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600"
          >
            <option value="role" disabled>
              select your Role ✳️
            </option>
            <option value="Onr">Owner</option>
            <option value="gm">General Manager</option>
            <option value="MM">Marketing Manager</option>
            <option value="BM">Branch Manager</option>
            <option value="0">Other</option>
          </select>
          <label
            htmlFor="role"
            className="block mb-2 text-sm font-medium text-left text-gray-500 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
          >
            Job Title
          </label>
        </div>
      </div>
      <fieldset className="max-w-2xl mt-4 text-white  rounded-sm border-[1px]  border-gray-300 dark:text-white text-base dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 text-start pl-4">
        <legend className="text-sm text-gray-300 cursor-pointer">
          Message
        </legend>
        <textarea
          name="message"
          value={message}
          placeholder=""
          onChange={(e) => handleContactInfo(e.target.value, "message")}
          className="block pr-4 mt-2 w-full text-sm tracking-wider text-white overflow-ellipsis bg-transparent outline-none"
          rows="7"
        />
      </fieldset>
    </>
  );
};

export default ContactInformation;
