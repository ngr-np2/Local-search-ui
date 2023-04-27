import Footer from "../sections/Footer";
import AdvertiseWithUs from "../sections/home/AdvertiseWithUs";
import Hero from "../sections/home/Hero";
import TrendingBusinessSection from "../sections/home/TrendingBusinessSection";
import PopularCatgSection from "../sections/home/PopularCatgSection";
import PopularKeywordsSection from "../sections/home/PopularKeywordsSection";
import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const catgRef = useRef();
  const keywordRef = useRef();
  const [catgInView, setCatgInView] = useState(false);
  const [keywordInView, setKeywordInView] = useState(false);

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.target === catgRef.current) {
        setCatgInView(entry.isIntersecting);
      } else if (entry.target === keywordRef.current) {
        setKeywordInView(entry.isIntersecting);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);
    if (catgRef?.current) {
      observer.observe(catgRef.current);
    }
    if (keywordRef?.current) {
      observer.observe(keywordRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <Hero />
      <div ref={catgRef} className="" id="catgId">
        {catgInView && <PopularCatgSection />}
      </div>
      <div ref={keywordRef} id="keywordId">
        {keywordInView && <PopularKeywordsSection />}
      </div>
      <AdvertiseWithUs />
      <TrendingBusinessSection />
      <Footer />
    </main>
  );
};
export default Home;
