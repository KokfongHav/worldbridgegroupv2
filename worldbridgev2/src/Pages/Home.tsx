import Carousel from "../Components/Carousel/Carousel";
import AboutHome from "../Components/HomePage/AboutHome";
import BusinessHome from "../Components/HomePage/BusinessHome";
import HeroHome from "../Components/HomePage/HeroHome";

const Home = () => {
  return (
    <div className="md:flex md:flex-wrap md:flex-row md:justify-center ">
      {/* Hero */}
      <HeroHome />
      <Carousel />

      {/* About Us */}
      <AboutHome />

      {/* Business */}
      <BusinessHome />

    </div>
  );
};

export default Home;
