import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const blink = keyframes`
0%{
    transform: scale(0.15);
    opacity: 0;
}50%{
    opacity: 1;
}100%{
    transform: scale(1);
    opacity: 0;
}
`;
const Loader = styled.div`
  animation: ${blink} 0.85s infinite linear;
`;
const LoadingCircle = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.onload = () => setLoading(false);
    }
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed z-50 mt-9 w-screen text-center">
          <div className="inline-block relative w-20 h-20 lds-ring">
            <Loader className="absolute w-16 h-16 rounded-full ring-2 ring-offset-green-200 ring-slate-400 ring-offset-8 " />
            <Loader className="absolute mt-1 ml-1 w-14 h-14 rounded-full ring-1 ring-offset-green-200 ring-slate-400 ring-offset-4" />
            <Loader className="absolute mt-2 ml-2 w-12 h-12 rounded-full ring-1 ring-offset-green-200 ring-slate-400 ring-offset-4 " />
            <Loader className="mt-3 ml-3 w-10 h-10 rounded-full ring-2 ring-offset-green-200 ring-slate-400 ring-offset-2" />
          </div>
        </div>
      )}
    </>
  );
};

export default LoadingCircle;
