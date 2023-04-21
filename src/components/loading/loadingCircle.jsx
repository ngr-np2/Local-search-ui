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
`
const Loader = styled.div`
 width: 64px;
 height: 64px;
 border-radius: 50%;
 background: #ffffff;
 animation: ${blink} 0.85s infinite linear;
`
const LoadingCircle = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.onload = () => setLoading(false)
    }
  }, []);

  return (
    <>
      {loading &&
        <div className="fixed z-50 mt-9 w-screen text-center text-gray-300">
          <div className="inline-block relative w-20 h-20 lds-ring">
            <Loader />

          </div>
        </div>
      }
    </>
  );
};

export default LoadingCircle;