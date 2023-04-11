import ListComp from "../components/Lists/ListComp";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Dropdown from "../components/BusinessProfile/Dropdown";
import MapView from "../sections/map/MapView";
const BusinessProfile = () => {
  return (
    <section className="max-w-screen-xl m-auto xl:mt-16">
      <ListComp />
      <div className="mx-4  my-4 mt-8 text-gray-900">
        <div>
          <p className="py-2 text-xl font-f-bold-cyber">
            Additional Information
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="flex-1 mx-4 max-sm:m-0">
              <p className="py-3 font-font-4">Opening hours</p>
              <div className="w-full h-[2px] bg-stone-200" />
              <Dropdown />
            </div>
            <div className="flex-1 mx-4 max-sm:text-center">
              <p className="px-1 py-3 font-font-4">Social Media</p>
              <div className="w-full h-[2px] bg-stone-200" />
              <div className="flex flex-wrap gap-3 justify-start px-1 pt-3 pb-5 shadow-sm cursor-pointer max-sm:justify-center">
                <a
                  href={`https://facebook.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook
                    fontSize="large"
                    className="rounded-full text-[#4267B2] hover:text-[#3e72db]"
                  />
                </a>
                <a
                  href={`https://instagram.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram fontSize="large" className="text-[#da1b1b] " />
                </a>
                <a
                  href={`https://twitter.com/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter fontSize="large" className="text-[#1DA1F2] " />
                </a>
                <EmailIcon fontSize="large" className="text-green-600" />
              </div>
            </div>
          </div>
        </div>
        <MapView height={"h-[40vmin] max-sm:h-[100vmin]"} />
      </div>
    </section>
  );
};

export default BusinessProfile;
