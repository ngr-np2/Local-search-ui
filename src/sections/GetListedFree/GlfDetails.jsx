import Grow from "../../assets/icons/grow.png";
import Top from "../../assets/icons/top.png";
import Print from "../../assets/icons/print.png";
import SocailMedia from "../../components/socialMedia/SocailMedia";
const GlfDetails = () => {
  return (
    <div className="sm:flex-1 sd:flex-[0.7] m-auto sm:px-8 text-left">
      <div className="mt-24 mx-2 px-3">
        <p className="font-font-8">
          <b className="font-font-4">Looking for </b>a way to reach more
          customers? Look no further! You can get your business listed on Local
          Search Online Directory, Local Search Apps for FREE!
        </p>
        <p className="m-1 text-sky-500 font-font-8">
          Get your free listing <b>TODAY</b>, just by filling in this form.
        </p>
      </div>
      <div className="bg-[#1e2128ce] rounded-lg mx-2 px-6 pb-5">
        <div className="mt-24 mb-9 text-3xl font-bold font-font-8">
          <p className="pt-7">List your company for free</p>
        </div>
        <div className="m-3 mt-14 flex max-lg:flex-wrap gap-2">
          <div className="max-w-xs">
            <img src={Grow} alt="grow" className="max-w-xs w-9" />
          </div>
          <div className="f-1">
            <p className="font-extrabold text-lg tracking-widest mb-2">
              Grow Your Business Fast
            </p>
            <p>
              Imagine you have made your presence online through first local
              search in ITAHARI.
            </p>
          </div>
        </div>
        <div className="m-3 mt-14 flex max-lg:flex-wrap gap-2">
          <div className="max-w-xs">
            <img src={Top} alt="Top" className="max-w-xs w-9" />
          </div>
          <div className="f-1">
            <p className="font-extrabold text-lg tracking-widest mb-2">
              Get the top position
            </p>
            <p>
              Advertising your business to area specific has many advantages.
              For Local Businessmen in ITAHARI, it is and opportunity.
            </p>
          </div>
        </div>
        <div className="m-3 mt-14 flex max-lg:flex-wrap gap-2">
          <div className="max-w-xs">
            <img src={Print} alt="Print" className="max-w-xs w-9" />
          </div>
          <div className="f-1">
            <p className="font-extrabold text-lg tracking-widest mb-2">
              Develop Brand Image
            </p>
            <p>
              Your local business too needs brand management and image
              making.bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            </p>
          </div>
        </div>
        <SocailMedia />
      </div>
    </div>
  );
};

export default GlfDetails;
