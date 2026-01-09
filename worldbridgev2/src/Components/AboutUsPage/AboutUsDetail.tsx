import data from "../../Utility/aboutus.json"

const AboutUsDetail = () => {
  const about01 = data[0].des
  const about02 = data[1].des
  const about03 = data[2].des
  const about04 = data[3].des
  
  return (
    <section className="relative flex flex-col flex-wrap w-[90%] justify-center items-center gap-4 md:h-200 md:gap-8 md:p-12">
      <div className="hidden md:absolute md:flex -z-10 h-200 md:overflow-hidden">
        <img
          className="object-contain"
          src="/Assets/Images/Elements/aboutus-bg.jpg"
          alt="Background"
        />
      </div>
      <div className="font-semibold text-3xl md:text-5xl flex flex-row items-start w-[80%] md:w-[85%] xl:w-[80%]">
        About us
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center">
        <p className="aboutusdetails">
          {about01}
        </p>
        <p className="aboutusdetails md:pl-12">
         {about02}
        </p>
      </div>
      <div className="hidden md:flex absolute bg-[#E1E7EF] py-[0%] px-[3.5%] rounded-[50%] top-[44%] xl:px-[3%]">
            <img className="w-[10vw] xl:w-[8vw]" src="/Assets/Images/Elements/WBG-3D-Logo.png" alt="3D Logo middle" />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-center">
        <p className="aboutusdetails">
          {about03}
        </p>
        <p className="aboutusdetails">
          {about04}
        </p>
      </div>
    </section>
  );
};

export default AboutUsDetail;
