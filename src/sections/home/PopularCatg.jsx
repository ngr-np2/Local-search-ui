import PopularCatgCard from "../../components/home/popularCatg/PopularCatgCard";

const Card = () => {


    return (
        <section className="mt-16 mb-8">
            <div className="mx-8 mt-4 mb-9">
                <h3 className="font-font-2 capitalize my-7 text-5xl">Popular Category</h3>
                <p className=" font-font-6 my-4 text-base">Explore some of the best Business Across NEAPL</p>
            </div>
            <div className="flex flex-wrap gap-9 px-8 justify-center items-center">

                <PopularCatgCard />
            </div>
        </section>
    );
};

export default Card;
