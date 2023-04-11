import React, { useEffect, useState } from "react";
import ListComp from "../components/Lists/ListComp";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import L, { marker } from "leaflet";
import "leaflet/dist/leaflet.css";
import LocationIcon from "../assets/locationIcon.png";
import Dropdown from "../components/BusinessProfile/Dropdown";
import datas from "../assets/data.json";
const BusinessProfile = () => {
  const data = datas.details[0];

  useEffect(() => {
    if (!mapid._leaflet_id) {
      const map = L.map("mapid").setView(
        [data.location.lat, data.location.lng],
        18
      );
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> Local Search',
        maxZoom: 19,
      }).addTo(map);

      // Add a marker at the specified coordinates
      const icon = L.icon({
        iconUrl: LocationIcon,
        iconSize: [32, 32], // size of the icon
        iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
      });

const title = "Vrit Tech"
      const marker = L.marker([data.location.lat, data.location.lng], {
        icon: icon,
      })
        .addTo(map)
        .bindPopup(title, { offset: L.point(0, -15) });

      marker.openPopup();
    }
  }, []);

  return (
    <>
      <ListComp />
      <div className="mx-4 my-4 mt-8 text-gray-900">
        
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
          <div id="mapid" className="h-[30vmin] mt-6"></div>
        </div>
      </div>
    </>
  );
};

export default BusinessProfile;
