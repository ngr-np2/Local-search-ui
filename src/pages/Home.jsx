import Footer from "../sections/Footer";
import AdvertiseWithUs from "../sections/home/AdvertiseWithUs";
import Hero from "../sections/home/Hero";
import TrendingBusinessSection from "../sections/home/TrendingBusinessSection";
import PopularCatgSection from "../sections/home/PopularCatgSection";
import PopularKeywordsSection from "../sections/home/PopularKeywordsSection";

const Home = () => {
  return (
    <main>
      <Hero />
      <PopularCatgSection />
      
      <PopularKeywordsSection />
      <AdvertiseWithUs />
      <TrendingBusinessSection />
      <Footer />
    </main>
  );
};
export default Home;
