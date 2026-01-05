import Carousel from "../Components/Carousel/Carousel";
import AboutHome from "../Components/HomePage/AboutHome";
import BusinessHome from "../Components/HomePage/BusinessHome";
import HeroHome from "../Components/HomePage/HeroHome";
import NewsHome from "../Components/HomePage/NewsHome";

const Home = () => {
  return (
    <div className="md:flex md:flex-wrap md:flex-row md:justify-center gap-4">
      {/* Hero */}
      <HeroHome />
      <Carousel />

      {/* About Us */}
      <AboutHome />

      {/* Business */}
      <BusinessHome />

      {/* News */}
      <NewsHome />
    </div>
  );
};

export default Home;
