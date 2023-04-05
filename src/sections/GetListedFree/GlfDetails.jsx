import Grow from "../../assets/icons/grow.png";
import Top from "../../assets/icons/top.png";
import Print from "../../assets/icons/print.png";
import SocailMedia from "../../components/socialMedia/SocailMedia";

const GlfDetails = () => {


  return (
    <div className="sm:flex-1 sd:flex-[0.7] mt-96 max-md:mt-1 sm:px-8 text-left">
      <div className="px-3 mx-2 mt-24">
        <p className="text-gray-400 font-font-8">
          <b className="font-font-4 text-stone-100">Looking for </b>a way to reach more
          customers? Look no further! You can get your business listed on
          Local Search Online Directory, Local Search Apps for FREE!
        </p>
        <p className="m-1 text-sky-500 font-font-8">
          Get your free listing <b>TODAY</b>, just by filling in this form.
        </p>
      </div>
      <div className="bg-[#181a20cf] sticky top-8 rounded-lg px-2 pb-5">
        <div className="mt-24 mb-9 text-3xl font-bold font-font-8">
          <p className="pt-7 px-3 text-stone-200">List your company for free</p>
        </div>
        <div className="m-5 mt-5 flex max-lg:flex-wrap gap-2 ease-in-out hover:-skew-y-2  duration-500   bg-[#1b1e27cf] px-8 py-8 rounded-md">
          <div className="max-w-xs">
            <img src={Grow} alt="grow" className="w-9 max-w-xs" />
          </div>
          <div className="f-1">
            <p className="mb-2 text-lg font-extrabold tracking-widest text-stone-200">
              Grow Your Business Fast
            </p>
            <p className="text-gray-400">
              Imagine you have made your presence online through first local
              search in <span class="before:block before:absolute hover:-skew-y-12  before:-inset-1 m-1  before:-skew-y-3 before:bg-green-600 relative inline-block">
                <span class="relative cursor-pointer text-white">Nepal</span>
              </span>
            </p>
          </div>
        </div>
        <div className="m-5 ease-in-out duration-500  hover:skew-x-2 mt-10 flex max-lg:flex-wrap gap-2  bg-[#1b1e27cf] px-8 py-8 rounded-md">
          <div className="max-w-xs">
            <img src={Top} alt="Top" className="w-9 max-w-xs" />
          </div>
          <div className="f-1">
            <p className="mb-2 text-lg font-extrabold tracking-widest text-stone-200">
              Get the top position
            </p>
            <p className="text-gray-400">
              Advertising your business to area specific has many advantages.
              For Local Businessmen in ITAHARI, it is and opportunity.
            </p>
          </div>
        </div>
        <div className="m-5 ease-in-out duration-500  hover:-skew-y-2 mt-10 flex max-lg:flex-wrap gap-2 bg-[#1b1e27cf] px-8 py-8 rounded-md">
          <div className="max-w-xs">
            <img src={Print} alt="Print" className="w-9 max-w-xs" />
          </div>
          <div className="f-1">
            <p className="mb-2 text-lg font-extrabold tracking-widest text-stone-200">
              Develop Brand Image
            </p>
            <p className="text-gray-400">
              Your local business too needs brand management and image making.
            </p>
          </div>
        </div>
        <SocailMedia />
      </div>
    </div>

  );
};

export default GlfDetails;
