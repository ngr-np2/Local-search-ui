import React from "react";
import EditDocSvg from "../../components/svg/EditDocSvg";

const Forms = () => {
  return (
    <div className="flex relative flex-col min-w-0 break-words bg-clip-border bg-white rounded-2xl border-0 shadow-xl">
      <div className="border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6 pb-0">
        <div className="flex items-center">
          <p className="mb-0 text-slate-700">User Profile</p>
          <div className="flex gap-2 items-center px-4 py-2 mb-4 ml-auto text-xs font-bold leading-normal text-center text-white align-middle bg-blue-500 rounded-lg border-0 shadow-md transition-all ease-in cursor-pointer tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85">
            <EditDocSvg />
            Edit Profile
          </div>
        </div>
      </div>
      <div className="flex-auto p-6">
        <p className="text-sm leading-normal uppercase">User Information</p>
        <div className="flex flex-wrap -mx-3">
          <div className="px-3 w-full max-w-full shrink-0 md:w-6/12 md:flex-0">
            <div className="mb-4">
              <label
                for="username"
                className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
              >
                Username
              </label>
              <input
                type="text"
                name="username"
                value="lucky.jesse"
                className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="px-3 w-full max-w-full shrink-0 md:w-6/12 md:flex-0">
            <div className="mb-4">
              <label
                for="email"
                className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
              >
                Email address
              </label>
              <input
                type="email"
                name="email"
                value="jesse@example.com"
                className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="px-3 w-full max-w-full shrink-0 md:w-6/12 md:flex-0">
            <div className="mb-4">
              <label
                for="first name"
                className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
              >
                First name
              </label>
              <input
                type="text"
                name="first name"
                value="Jesse"
                className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="px-3 w-full max-w-full shrink-0 md:w-6/12 md:flex-0">
            <div className="mb-4">
              <label
                for="last name"
                className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
              >
                Last name
              </label>
              <input
                type="text"
                name="last name"
                value="Lucky"
                className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <hr className="mx-0 my-4 h-px bg-transparent bg-gradient-to-r from-transparent to-transparent border-0 opacity-25 via-black/40" />

        <p className="text-sm leading-normal uppercase">Contact Information</p>
        <div className="flex flex-wrap -mx-3">
          <div className="px-3 w-full max-w-full shrink-0 md:w-full md:flex-0">
            <div className="mb-4">
              <label
                for="address"
                className="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                value="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                className="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div class="px-3 w-full max-w-full shrink-0 md:w-4/12 md:flex-0">
            <div class="mb-4">
              <label
                for="city"
                class="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                value="New York"
                class="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div class="px-3 w-full max-w-full shrink-0 md:w-4/12 md:flex-0">
            <div class="mb-4">
              <label
                for="country"
                class="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
              >
                Country
              </label>
              <input
                type="text"
                name="country"
                value="United States"
                class="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div class="px-3 w-full max-w-full shrink-0 md:w-4/12 md:flex-0">
            <div class="mb-4">
              <label
                for="postal code"
                class="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
              >
                Postal code
              </label>
              <input
                type="text"
                name="postal code"
                value="437300"
                class="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
        <hr class="mx-0 my-4 h-px bg-transparent bg-gradient-to-r from-transparent to-transparent border-0 opacity-25 via-black/40" />

        <p class="text-sm leading-normal uppercase">About me</p>
        <div class="flex flex-wrap -mx-3">
          <div class="px-3 w-full max-w-full shrink-0 md:w-full md:flex-0">
            <div class="mb-4">
              <label
                for="about me"
                class="inline-block mb-2 ml-1 text-xs font-bold text-slate-700"
              >
                About me
              </label>
              <input
                type="text"
                name="about me"
                value="A beautiful Dashboard for Bootstrap 5. It is Free and Open Source."
                class="focus:shadow-primary-outline  text-sm leading-5.6 ease block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
