import ListComp from "../components/Lists/ListComp";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Dropdown from "../components/BusinessProfile/Dropdown";
import MapView from "../sections/map/MapView";
import datas from "../assets/data.json";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const BusinessProfile = () => {
  const [data, setData] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  useEffect(() => {
    const details = datas.details.find((item) => item._id === id);
    // console.log(details.location.lng);
    setData(details);
  }, [id]);

  return (
    <section className="max-w-screen-xl m-auto xl:mt-16">
      {data.name && <ListComp data={data} />}
      <div className="mx-4  my-4 mt-8 text-gray-900">
        <div>
          <p className="py-2 text-xl font-f-bold-cyber">
            Additional Information
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="flex-1 mx-4 max-sm:m-0">
              <p className="py-3 font-font-4">Opening hours</p>
              <div className="w-full h-[2px] bg-stone-200" />
              {data.days && <Dropdown data={data} />}
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
          {data?.location?.lat && data?.location?.lng && (
            <MapView
              height={"mt-10 h-[40vmin] max-sm:h-[100vmin]"}
              data={data}
            />
          )}
          <div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessProfile;
