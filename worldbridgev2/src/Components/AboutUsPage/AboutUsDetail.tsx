const AboutUsDetail = () => {
  return (
    <section className="relative flex flex-col w-full h-260 justify-center items-center overflow-hidden gap-8">
      <div className="absolute -z-10 h-auto">
        <img
          className="object-contain"
          src="/Assets/Images/Elements/aboutus-bg.jpg"
          alt="Background"
        />
      </div>
      <div className="font-semibold text-5xl flex flex-row items-start w-[70%]">
        About us
      </div>
      <div className="flex flex-row md:gap-12 text-center">
        <p className="bg-[#F7F7F7] rounded-xl md:p-9 md:w-[33vw] md:text-md">
          Established in 1992, WorldBridge Group has grown into one of
          Cambodia’s most trusted and diversified business groups. Through
          long-standing partnerships with global partners, we have brought
          meaningful investment, innovation, and long-term value to the Kingdom.
        </p>
        <p className="bg-[#F7F7F7] rounded-xl md:p-9 md:w-[33vw] md:text-md">
          Beyond business, we invest in strategic social initiatives such as
          affordable housing, SME development, and green mobility to contribute
          to Cambodia’s inclusive and sustainable national development. At
          WorldBridge, our commitment goes beyond profit, we build
          purpose-driven enterprises that shape the future of Cambodia.
        </p>
      </div>
      <div className="absolute bg-[#E1E7EF] py-[0%] px-[3%] rounded-[50%] top-115">
            <img className="w-[10vw]" src="/Assets/Images/Elements/WBG-3D-Logo.png" alt="3D Logo middle" />
      </div>
      <div className="flex flex-row md:gap-12 text-center">
        <p className="bg-[#F7F7F7] rounded-xl md:p-10 md:pr-12 md:w-[33vw] md:text-md">
          Our reputation is built on trust, transparency, and a consistent track
          record of success across a broad range of sectors, including
          Logistics, Property and Hospitality, Facility Management, Business
          Services, Banking and Finance, Trading, Food and Beverages, Health and
          Media.
        </p>
        <p className="bg-[#F7F7F7] rounded-xl md:p-10 md:pl-12  md:w-[33vw] md:text-md">
          Driven by a deep commitment to operational excellence and social
          responsibility, we continue to play a vital role in Cambodia’s
          sustainable development and economic growth. Our contributions have
          made a significant impact on Cambodia’s economy, with major
          investments across key sectors.
        </p>
      </div>
    </section>
  );
};

export default AboutUsDetail;
