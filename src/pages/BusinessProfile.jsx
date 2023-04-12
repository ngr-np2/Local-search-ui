import ListComp from "../components/Lists/ListComp";

import Dropdown from "../components/BusinessProfile/Dropdown";
import MapView from "../sections/maps/MapView";
import datas from "../assets/data.json";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReviewAndRating from "../sections/reviewAndRating/ReviewAndRating";
import AdditionalInfo from "../sections/BusinessProfile/AdditionalInfo";

const BusinessProfile = () => {
  const [data, setData] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    const details = datas.details.find((item) => item._id === id);
    if (!details) {
      return navigate(from, {
        replace: true,
      });
    }
    setData(details);
  }, [id]);

  return (
    <div className="lg:mt-16">
      {data && <ListComp data={data} />}
      <AdditionalInfo data={data} />
    </div>
  );
};

export default BusinessProfile;
