import ActionButton from "../Components/ActionButton";
import Hero from "../Components/Hero";

const Home = () => {
  return (
    <div className="md:flex md:flex-wrap md:flex-row md:justify-center ">
      <Hero />

      {/* About Us */}
      <section className="w-screen md:w-[85vw] px-4 py-6 flex flex-wrap flex-row items-center">
        <div className="relative flex flex-wrap flex-row w-[50vw] md:w-[40vw] justify-center">
          <img
            className="h-[55vw] md:h-[40vw]"
            src="/Assets/Images/Elements/animate-wbg-logo.gif"
            alt="Logo"
          />
          <img
            className="absolute bottom-0 md:right-[10vw] w-[40vw] md:w-[20vw]"
            src="/Assets/Images/Elements/WBG-3D-Footer.png"
            alt="background"
          />
        </div>
        <div className="relative flex flex-col w-[40vw] justify-left gap-2 md:gap-4">
          <h1 className="text-md md:text-4xl font-bold">
            We are dedicated to support you
          </h1>
          <p className="text-[8px] md:text-sm">
            We have developed partnerships with major global brands and
            companies, bringing investment and contributing to economic growth
            in the Kingdom.
          </p>
          <span className="w-[30vw] md:w-[11vw]">
            <ActionButton text="Learn More" />
          </span>
          <div className="flex flex-wrap gap-4">
            <div className="aboutuselements">
              <img
                className="w-[2vw] md:w-[1vw]"
                src="/Assets/Images/Elements/info.png"
                alt="Info Icon"
              />
              <p>About Us</p>
            </div>
            <div className="aboutuselements">
              <img
                className="w-[2vw] md:w-[1vw]"
                src="/Assets/Images/Elements/mission.png"
                alt="Info Icon"
              />
              <p>Mission</p>
            </div>
            <div className="aboutuselements">
              <img
                className="w-[2vw] md:w-[1vw]"
                src="/Assets/Images/Elements/shared-vision.png"
                alt="Info Icon"
              />
              <p>Vision</p>
            </div>
            <div className="aboutuselements">
              <img
                className="w-[2vw] md:w-[1vw]"
                src="/Assets/Images/Elements/timeline.png"
                alt="Info Icon"
              />
              <p>Milestone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business */}
      <section className="w-screen md:w-[85vw] py-4 flex flex-wrap flex-col items-center justify-center text-center gap-4">
        <h1 className="title">Business Portfolio</h1>
        <p className="text-[0.5rem] w-[70vw] md:text-[0.8rem] md:w-[50vw]">
          Beyond business, we invest in strategic social initiatives such as
          affordable housing, SME development, and green mobility to contribute
          to Cambodia’s inclusive and sustainable national development.
        </p>
        <div className="flex flex-wrap gap-4 justify-center w-[90vw] md:w-[60vw]">
          {/* Logistic */}
          <div className="aboutuselements">
              <img
                className="w-[3vw] md:w-[2vw]"
                src="/Assets/Images/Icons/Logistic.gif"
                alt="Logistic Icon"
              />
              <p>Logistic</p>
            </div>
          {/* Property */}
          <div className="aboutuselements">
              <img
                className="w-[3vw] md:w-[2vw]"
                src="/Assets/Images/Icons/Property.gif"
                alt="Property Icon"
              />
              <p>Property</p>
            </div>
          {/* Community Residence */}
          <div className="aboutuselements">
              <img
                className="w-[3vw] md:w-[2vw]"
                src="/Assets/Images/Icons/community-residence.gif"
                alt="Community Icon"
              />
              <p>Community Residence</p>
            </div>
          {/* Business Services */}
          <div className="aboutuselements">
              <img
                className="w-[3vw] md:w-[2vw]"
                src="/Assets/Images/Icons/business-service.gif"
                alt="Business Icon"
              />
              <p>Business Services</p>
            </div>
            {/* Bank and Finance */}
          <div className="aboutuselements">
              <img
                className="w-[3vw] md:w-[2vw]"
                src="/Assets/Images/Icons/bank.gif"
                alt="Bank and Finance Icon"
              />
              <p>Bank and Finance</p>
            </div>
            {/* Trading */}
          <div className="aboutuselements">
              <img
                className="w-[3vw] md:w-[2vw]"
                src="/Assets/Images/Icons/Trading.gif"
                alt="Trading Icon"
              />
              <p>Trading</p>
            </div>
            {/* Food & Beverage */}
          <div className="aboutuselements">
              <img
                className="w-[3vw] md:w-[2vw]"
                src="/Assets/Images/Icons/Trading.gif"
                alt="Food & Beverage Icon"
              />
              <p>Food & Beverage</p>
            </div>
            {/* Health */}
          <div className="aboutuselements">
              <img
                className="w-[3vw] md:w-[2vw]"
                src="/Assets/Images/Icons/Healthcare.gif"
                alt="Healthcare Icon"
              />
              <p>Health</p>
            </div>
            {/* Media */}
          <div className="aboutuselements">
              <img
                className="w-[3vw] md:w-[2vw]"
                src="/Assets/Images/Icons/Medial-Digital.gif"
                alt="Media Icon"
              />
              <p>Media</p>
            </div>
        </div>
        <ActionButton text="Learn More"/>
        <div className="flex flex-row">
          <div className="flex flex-col">
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
