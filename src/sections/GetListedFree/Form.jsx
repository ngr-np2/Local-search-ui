import BusinessNameAndEmail from "../../components/getListedFree/input/BusinessNameAndEmail";
import BusinessFullAddress from "../../components/getListedFree/select/BusinessFullAddress";
import BusinessClassificationComp from "../../components/getListedFree/select/BusinessClassification";
import BusinessPostBoxNum from "../../components/getListedFree/input/BusinessPostBoxNum";
import BusinessPhoneNumber from "../../components/getListedFree/input/BusinessPhoneNumber";
import BusinessWebsite from "../../components/getListedFree/input/BusinessWebsite";
import BusinessSocialLink from "../../components/getListedFree/input/BusinessSocialLink";
import BusinessYearOfEstablish from "../../components/getListedFree/select/BusinessYearOfEstablish";
import BusinessOpeningHours from "../../components/getListedFree/select/BusinessOpeningHours";
import ContactInformation from "../../components/getListedFree/input/ContactInformation";

import useGetListedFree from "../../Hooks/useGetListedFree";
import Agrement from "../../components/getListedFree/checkBox/Agrement";
import UploadImage from "../../components/getListedFree/input/UploadImage";
const Form = () => {
  const loading = false;
  const { handleSubmit, errorMsg } = useGetListedFree();
  return (
    <form onSubmit={handleSubmit} className="px-5 mt-14 duration-200 ease-in">
      <div className="flex flex-col gap-10 font-font-6">
        <BusinessNameAndEmail />
        <BusinessFullAddress />
        <BusinessClassificationComp />

        <div className="flex gap-10 justify-center items-end m-auto w-full text-sm text-gray-400 duration-200 ease-in max-lg:flex-wrap">
          <BusinessPostBoxNum />
          <BusinessYearOfEstablish />
        </div>

        <BusinessPhoneNumber />
        <BusinessWebsite />
        <BusinessSocialLink />
        <BusinessOpeningHours />
        
        <UploadImage/>
        <ContactInformation />
        <Agrement />
        <p className="text-base text-red-500">{errorMsg}</p>
        <div className="flex gap-y-1 gap-4 justify-end mt-2 w-full duration-200 ease-in cursor-pointer max-lg:flex-wrap">
          <button
            type="submit"
            className="relative rounded px-3 text-base py-2.5 overflow-hidden group bg-green-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-400 hover:ring-offset-[#151924] transition-all ease-out duration-300"
          >
            <svg
              aria-hidden="true"
              role="status"
              className={` ${
                loading ? "inline" : "hidden"
              }  inline mr-3 w-4 h-4 text-white animate-loading-circle`}
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
            <div className="absolute right-0 -mt-12 w-8 h-32 bg-white opacity-10 transition-all duration-1000 transform rotate-12 translate-x-12 group-focus-visible:-translate-x-40 group-hover:-translate-x-40 group-active:translate-x-40 ease"></div>
            <div
            //  disabled={per !== null && per < 100} 
             className="relative">Submit Your business</div>
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
