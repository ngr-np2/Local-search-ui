import Footer from "../sections/Footer";
import AdvertiseWithUs from "../sections/home/AdvertiseWithUs";
import Hero from "../sections/home/Hero";
import PopularBusinessSection from "../sections/home/PopularBusinessSection";
import PopularCatgSection from "../sections/home/PopularCatgSection";
import PopularKeywordsSection from "../sections/home/PopularKeywordsSection";

const Home = () => {
    return (
        <main>
            <Hero />
            <PopularCatgSection />
            <PopularKeywordsSection />
            <AdvertiseWithUs />
            <PopularBusinessSection />
            <Footer />
        </main>
    )
}
export default Home;