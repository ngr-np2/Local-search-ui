import PopularCatgCard from "../../components/home/popularCatg/PopularCatgCard";

const PopularCatgSecion = () => {


    return (
        <section className="mt-16  mb-8">
            <div className="mx-2 mt-4 mb-9 text-center">
                <h3 className="my-7 text-5xl leading-[60px] capitalize font-font-2 text-zinc-900">Popular Categories</h3>
                <p className="my-4 text-base font-font-6 text-zinc-900">Explore some of the best Business Across NEAPL</p>
            </div>
            <div className="flex flex-wrap gap-9 max-md:justify-center justify-between items-center px-8 py-4">

                <PopularCatgCard />
            </div>
        </section>
    );
};

export default PopularCatgSecion;
