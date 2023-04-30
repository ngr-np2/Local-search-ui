import { useEffect, useRef, useState } from "react";
import PopularKeywordComp from "../../components/home/popularKeywordComp";
import { useIntersectionObserver } from "../../Hooks/useIntersectionObserver";

const PopularKeywordsSection = () => {
  // const ref = useRef();
  // const [keywordInView, setKeywordInView] = useState(false);

  // let callback = (entries, observer) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       setKeywordInView(true);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   let observer = new IntersectionObserver(callback);
  //   if (ref?.current) {
  //     observer.observe(ref.current);
  //   }
  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);
  const [ref, inView] = useIntersectionObserver();

  return (
    <section id="popKeyword" className="bg-slate-100 pb-10 text-center">
      <div className="px-2 pt-8 pb-4">
        <p className="my-7 text-5xl capitalize font-font-2 text-zinc-900">
          Top KeyWords
        </p>
      </div>
      <div ref={ref} className="mx-auto w-5/6 max-w-screen-xl">
        {inView && <PopularKeywordComp />}
      </div>
    </section>
  );
};

export default PopularKeywordsSection;
