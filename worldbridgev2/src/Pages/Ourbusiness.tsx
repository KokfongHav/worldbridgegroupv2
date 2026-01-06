import BusinessCard from "../Components/BusinessPage/BusinessCard";
import data from "../Utility/categories.json";

const Ourbusiness = () => {
  const oddData = data.filter((element, index) => {
    return index % 2 == 0;
  });

  const evenData = data.filter((element, index) => {
    return index % 2 !== 0;
  });
  return (
    <div className="py-[5vh] flex flex-col flex-wrap gap-8 md:w-[90vw] md:py-[15vh] md:flex-row md:justify-center md:gap-4">
      <div className="md:w-[35vw] w-screen flex flex-col gap-8 items-center md:items-start">
        {/* Title */}
        <div className="font-bold text-3xl md:text-4xl md:h-[12vh] md:mt-4">
          Our Business
        </div>
        {/* Left Content */}
        {oddData?.map((e, i) => (
          <BusinessCard name={e.name} des={e.des} image={e.image} key={i} />
        ))}
      </div>
      <div className="md:w-[35vw] w-screen flex flex-col gap-8 items-center">
        {/* Right Content */}
        {evenData?.map((e, i) => (
          <BusinessCard name={e.name} des={e.des} image={e.image} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Ourbusiness;
