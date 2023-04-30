import { useEffect, useRef, useState } from "react";
import { useIntersectionObserver } from "../../Hooks/useIntersectionObserver";
import PopularCatgComp from "../../components/home/popularCatg/PopularCatgComp";

const PopularCatgSecion = () => {
  // const ref = useRef();
  // const [inView, setInView] = useState(false);

  // let callback = (entries, observer) => {
  //   entries.forEach((entry) => {
  //     if (entry.isIntersecting) {
  //       setInView(true);
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
    <section id="popCatg" className="mt-16 mb-40">
      <div className="mx-2 mt-4 mb-9 text-center">
        <h3 className="my-7 text-5xl leading-[60px] capitalize font-font-2 text-zinc-900">
          Popular Categories
        </h3>
        <p className="my-4 text-base font-font-6 text-zinc-900">
          Explore some of the best Business Across NEAPL
        </p>
      </div>
      <div
        ref={ref}
        className="grid gap-6 place-items-center max-sm:px-2 px-8 py-4 m-auto max-w-screen-xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-sm:grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))]"
      >
        {inView && <PopularCatgComp />}
      </div>
    </section>
  );
};

export default PopularCatgSecion;
