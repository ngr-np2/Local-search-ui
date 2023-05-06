import React, { useEffect, useState } from "react";

import { storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const useUploadFile = () => {
  const [file, setFile] = useState("");
  const [uploadedLink, setUploadedLink] = useState("");
  const [per, setPerc] = useState(null);
  useEffect(() => {
    const uploadFile = () => {
      const name = new Date().getTime() + file.name;

      console.log(name);
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setUploadedLink(downloadURL);
          });
        }
      );
    };
    file && uploadFile();
  }, [file]);
  console.log("file", uploadedLink);

  return { per, file, setFile, uploadedLink };
};

export default useUploadFile;
