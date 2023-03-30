import Form from "../sections/GetListedFree/Form";
import GlfDetails from "../sections/GetListedFree/GlfDetails";
const GetListedFree = () => {
  return (
    <div className=" bg-[#0f1418]">
      <div className="max-w-screen-xl xl:px-12 m-auto flex max-md:flex-col flex-row-reverse bg-[#10151a]">
        <div className="mt-14 text-3xl leading-loose text-gray-300 sm:flex-[1.5] md:pl-1 sm:pl-8 sm:pr-8 max-sm:px-2 max-sm:mx-auto max-sm:text-base font-f-bold-cyber">
          <div className="mt-28">
            <p>NOT ON LOCAL SEARCH YET?</p>
            <p>CREATE YOUR FREE BUSINESS PROFILE PAGE</p>
          </div>
          <div className="bg-[#151924] px-5 py-6 my-8">
            <div>
              <div className="text-sm tracking-widest font-font-6 text-start">
                Business Information
              </div>
              <Form />
            </div>
          </div>
        </div>
        <GlfDetails />
      </div>
    </div>
  );
};

export default GetListedFree;