import { useEffect, useState } from "react";

import useUploadFile from "../../../Hooks/useUploadFile";
import useGetListedFree from "../../../Hooks/useGetListedFree";

const UploadImage = () => {
  const { per, file, setFile, uploadedLink } = useUploadFile();
  const { setLogo } = useGetListedFree();
  useEffect(() => {
    setLogo(uploadedLink);
  }, [uploadedLink]);
  const token = "fa";
  return (
    <div className="mx-auto text-center">
      <div
        title="upload Logo"
        className="flex justify-start m-auto w-full duration-200 ease-in max-lg:flex-wrap"
      >
        <div className="relative m-auto">
          <div className="relative">
            <img
              className="w-[30vmin] h-[30vmin] object-cover rounded-full"
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            {per !== null && per !== 100 && (
              // <progress
              //   value={per}
              //   max="100"
              //   className="absolute mx-4 w-3/4 h-1 text-gray-600 bg-red-400 l-0"
              // ></progress>
              <svg className="absolute top-0 w-full h-full rounded-full">
                <circle
                  cx="50%"
                  cy="50%"
                  r="49%"
                  fill="transparent"
                  stroke="currentColor"
                  strokeWidth="5"
                  className="text-gray-300"
                ></circle>
                <circle
                  cx="50%"
                  cy="50%"
                  r="49%"
                  fill="transparent"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="5"
                  strokeDasharray={`${per} ${100 - per}`}
                  className="text-green-600"
                ></circle>
              </svg>
            )}
          </div>
          {!uploadedLink && (
            <div className="absolute top-1 right-1 bottom-1 left-1">
              <div className="flex justify-center items-center m-auto w-full h-full text-sm text-center">
                {per === null && (
                  <label
                    htmlFor="file"
                    className="text-center flex justify-center  items-center w-[28vmin] h-[28vmin] bg-slate-500/20 rounded-full text-slate-900 px-4 py-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-[5vmin] h-[5vmin] text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                      />
                    </svg>
                  </label>
                )}
                <input
                  type="file"
                  id="file"
                  onChange={(e) => (!token ? "" : setFile(e.target.files[0]))}
                  style={{ display: "none" }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div>Business Logo</div>
    </div>
  );
};

export default UploadImage;
