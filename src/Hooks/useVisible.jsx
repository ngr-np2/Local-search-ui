import { useEffect, useState } from "react";

const useVisible = (id, num) => {
  const thresHold = num || 150;
  const [visible, setVisible] = useState(false);
//   const id = "643d1d9797089de23c938672"
  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById(id);
      const rect = el?.getBoundingClientRect();
      const threshold = window.innerHeight - thresHold;
      const isElementVisible =
        rect?.top <= +threshold
        && rect?.bottom >= -threshold;
      setVisible(isElementVisible);
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [id]);
// console.log("visible",visible)
  return visible;
};

export default useVisible;
