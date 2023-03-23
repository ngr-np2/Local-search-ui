import Grow from "../../assets/icons/grow.png";
import Top from "../../assets/icons/top.png";
import Print from "../../assets/icons/print.png";
import SocailMedia from "../../components/socialMedia/SocailMedia";

const GlfDetails = () => {


  return (
      <div className="sm:flex-1 sd:flex-[0.7] m-auto sm:px-8 text-left">
        <div className="mt-24 mx-2 px-3">
          <p className="font-font-8 text-gray-400">
            <b className="font-font-4 text-stone-100">Looking for </b>a way to reach more
            customers? Look no further! You can get your business listed on
            Local Search Online Directory, Local Search Apps for FREE!
          </p>
          <p className="m-1 text-sky-500 font-font-8">
            Get your free listing <b>TODAY</b>, just by filling in this form.
          </p>
        </div>
        <div className="bg-[#181a20cf] rounded-lg px-2 pb-5">
          <div className="mt-24 mb-9 text-3xl font-bold font-font-8">
            <p className="pt-7 text-stone-200">List your company for free</p>
          </div>
          <div className="m-3 mt-5 flex max-lg:flex-wrap gap-2  bg-[#1b1e27cf] px-6 py-8 rounded-md">
            <div className="max-w-xs">
              <img src={Grow} alt="grow" className="max-w-xs w-9" />
            </div>
            <div className="f-1">
              <p className="font-extrabold text-lg tracking-widest mb-2 text-stone-200 ">
                Grow Your Business Fast
              </p>
              <p className="text-gray-400">
                Imagine you have made your presence online through first local
                search in ITAHARI.
              </p>
            </div>
          </div>
          <div className="m-3 mt-10 flex max-lg:flex-wrap gap-2  bg-[#1b1e27cf] px-6 py-8 rounded-md">
            <div className="max-w-xs">
              <img src={Top} alt="Top" className="max-w-xs w-9" />
            </div>
            <div className="f-1">
              <p className="font-extrabold text-lg tracking-widest mb-2 text-stone-200">
                Get the top position
              </p>
              <p className="text-gray-400">
                Advertising your business to area specific has many advantages.
                For Local Businessmen in ITAHARI, it is and opportunity.
              </p>
            </div>
          </div>
          <div className="m-3 mt-10 flex max-lg:flex-wrap gap-2 bg-[#1b1e27cf] px-6 py-8 rounded-md">
            <div className="max-w-xs">
              <img src={Print} alt="Print" className="max-w-xs w-9" />
            </div>
            <div className="f-1">
              <p className="font-extrabold text-lg tracking-widest mb-2 text-stone-200">
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
