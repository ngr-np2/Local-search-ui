import Form from "../sections/GetListedFree/Form";
import GlfDetails from "../sections/GetListedFree/GlfDetails";
const GetListedFree = () => {
  return (
    <div className=" bg-[#0d1116]">
      <div className="max-w-screen-xl m-auto flex max-sm:flex-wrap-reverse bg-[#10151a]">
        <GlfDetails />
        <div className="sm:flex-1 leading-loose sm:pl-2 sm:pr-8 text-gray-300 mt-14 max-sm:px-2 max-sm:mx-auto max-sm:text-base text-3xl font-f-bold-cyber">
          <div className="">
            <p>NOT ON LOCAL SEARCH YET?</p>
            <p>CREATE YOUR FREE BUSINESS PROFILE PAGE</p>
          </div>
          <div className="bg-[#151924] px-5 py-6 my-8">
            <div>
              <div className="font-font-6 text-sm tracking-widest text-start ">
                Business Information
              </div>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetListedFree;