import Hero from "../sections/home/Hero";
import PopularBusinessSection from "../sections/home/PopularBusinessSection";
import PopularCatgSection from "../sections/home/PopularCatgSection";
import PopularKeywordsSection from "../sections/home/PopularKeywordsSection";

const Home = () => {
    return (
        <div className="mb-16">
            <Hero />
            <PopularCatgSection />
            <PopularKeywordsSection />
            <PopularBusinessSection />
        </div>
    )
}
export default Home;