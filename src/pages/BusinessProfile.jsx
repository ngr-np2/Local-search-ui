import ListComp from "../components/Lists/ListComp";

import Dropdown from "../components/BusinessProfile/Dropdown";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReviewAndRating from "../sections/reviewAndRating/ReviewAndRating";
import AdditionalInfo from "../sections/BusinessProfile/AdditionalInfo";
import { useGetBusinessProfileQuery } from "../redux/BusinessProfile/BusinessProfileApiSlice";
import CardLoading from "../components/loading/cardLoading";

const BusinessProfile = () => {
  const [businessProfile, setBusinessProfile] = useState({});
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    data: data,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBusinessProfileQuery({
    id,
  });
  console.log(error);
  useEffect(() => {
    if (isError) {
      navigate(from, {
        replace: true,
      });
    }
    setBusinessProfile(data);
  }, [data, error]);

  return (
    <div className="lg:mt-16">
      {!businessProfile || isLoading ? (
        <CardLoading />
      ) : (
        isSuccess &&
        businessProfile && (
          <>
            <ListComp display={true} data={businessProfile} />
            <AdditionalInfo data={businessProfile} />
          </>
        )
      )}
    </div>
  );
};

export default BusinessProfile;
