import React from "react";
import { useIntersectionObserver } from "../../Hooks/useIntersectionObserver";
import TrendingBuninessComp from "../../components/home/trendingBusiness/TrendingBuninessComp";
const TrendingBusinessSection = () => {
  const [ref, inView] = useIntersectionObserver();

  return (
    <>
      <section className="mt-16 bg-slate-100">
        <div className="pt-8 mx-4 mb-9 text-center">
          <p className="my-7 text-5xl leading-[60px] capitalize font-font-2 text-zinc-900">
            Trending Business
          </p>
          <p className="my-4 text-base font-font-6 text-zinc-900">
            Explore trending businesses across NEPAl
          </p>
        </div>
        <div
          ref={ref}
          className="flex flex-wrap grid-cols-2 grid-rows-2 gap-3 justify-evenly place-items-center px-8 py-4 pb-8 m-auto w-full max-w-screen-xl xl:grid"
        >
          {inView && <TrendingBuninessComp />}
        </div>
      </section>
    </>
  );
};

export default TrendingBusinessSection;
