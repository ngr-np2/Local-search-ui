import EmailSvg from "../components/svg/EmailSvg";
import PhoneSvg from "../components/svg/PhoneSvg";
import { Link } from "react-router-dom";
import PhoneOut from "../components/svg/PhoneOut";
import VerifiedBadgedSvg from "../components/svg/VerifiedBadgedSvg";

const UserProfileCard = () => {
  return (
      <div class="flex relative flex-col min-w-0 break-words bg-clip-border bg-white rounded-2xl border-0 shadow-xl">
        <img
          class="w-full rounded-t-2xl"
          src="/ITAHARI.jpeg"
          alt="profile cover image"
        />

        <div class="flex flex-wrap justify-center -mx-3">
          <div class="px-3 w-4/12 max-w-full flex-0">
            <div class="relative -mt-6 mb-6 w-24 lg:mb-0 lg:-mt-16">
              <Link to="#">
                <img
                  className="object-cover z-10 w-24 h-24 rounded-full border-2 border-white border-solid"
                  src="/ITAHARI.jpeg"
                  alt="profile image"
                />
              </Link>
              <div className="absolute bottom-0 right-2 bg-green-500 rounded-full">
                <VerifiedBadgedSvg />
              </div>
            </div>
          </div>
        </div>

        <div className="border-black/12.5 rounded-t-2xl p-6 text-center pt-0 pb-6 lg:pt-2 lg:pb-4">
          <div className="flex justify-between">
            <a
              href="tel:981234"
              className="hidden px-8 py-2 text-xs font-bold leading-normal text-center text-white align-middle bg-cyan-500 rounded-lg border-0 shadow-md transition-all ease-in cursor-pointer hover:text-white lg:block tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
            >
              Call
            </a>
            <a
              href="tel:981234"
              className="block px-8 py-2 text-xs font-bold leading-normal text-center text-white align-middle bg-cyan-500 rounded-lg border-0 shadow-md transition-all ease-in cursor-pointer hover:text-white lg:hidden tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
            >
              <PhoneOut />
            </a>
            <a
              href="mail:email@email.com"
              className="hidden px-8 py-2 text-xs font-bold leading-normal text-center text-white align-middle rounded-lg border-0 shadow-md transition-all ease-in cursor-pointer hover:text-white bg-slate-700 lg:block tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
            >
              Mail
            </a>
            <a
              href="mail:email@email.com"
              className="block px-8 py-2 text-xs font-bold leading-normal text-center text-white align-middle rounded-lg border-0 shadow-md transition-all ease-in cursor-pointer hover:text-white bg-slate-700 lg:hidden tracking-tight-rem hover:shadow-xs hover:-translate-y-px active:opacity-85"
            >
              <EmailSvg />
            </a>
          </div>
        </div>

        <div className="flex-auto p-6 pt-0 text-slate-700">
          <div className="flex flex-wrap -mx-3">
            <div className="px-3 w-full max-w-full flex-1-0">
              <div className="flex justify-center">
                <div className="grid text-center">
                  <span className="text-lg font-bold">1</span>
                  <span className="text-sm leading-normal opacity-80">
                    Business
                  </span>
                </div>
                <div className="grid mx-6 text-center">
                  <span className="text-lg font-bold">10</span>
                  <span className="text-sm leading-normal opacity-80">Ads</span>
                </div>
                <div className="grid text-center">
                  <span className="text-lg font-bold">89</span>
                  <span className="text-sm leading-normal opacity-80">
                    Review
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center text-slate-800">
            <h5 className="text-2xl font-bold">
              Mark Davis
              <small className="font-light">, 35</small>
            </h5>
            <div className="flex mb-2 text-base font-semibold leading-relaxed text-slate-700">
              <div className="mr-2">
                <EmailSvg />
              </div>
              info@email.com
            </div>
            <div className="flex mt-6 mb-2 text-base font-semibold leading-relaxed text-slate-700">
              <div className="mr-2">
                <PhoneSvg />
              </div>
              9812345678
            </div>
          </div>
        </div>
      </div>

  );
};

export default UserProfileCard;
