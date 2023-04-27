import PopularCatgCard from "../../components/home/popularCatg/PopularCatgCard";

const PopularCatgSecion = () => {
  return (
    <section id="popCatg" className="mt-16 mb-8">
      <div className="mx-2 mt-4 mb-9 text-center">
        <h3 className="my-7 text-5xl leading-[60px] capitalize font-font-2 text-zinc-900">
          Popular Categories
        </h3>
        <p className="my-4 text-base font-font-6 text-zinc-900">
          Explore some of the best Business Across NEAPL
        </p>
      </div>
      <div className="grid gap-6 place-items-center px-8 py-4 m-auto max-w-screen-xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-sm:grid-cols-1">
        {/* <div className="flex flex-wrap gap-9 justify-between items-center px-8 py-4 max-md:justify-center xl:justify-center"> */}
        {/* grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] */}
        <PopularCatgCard />
      </div>
    </section>
  );
};

export default PopularCatgSecion;
