// import data from "../../Utility/news.json";

const OurContentHero = () => {
  return (
    <div className="w-full md:w-[90%] flex flex-col gap-8">
      <div className="font-semibold text-3xl md:text-4xl xl:text-5xl pl-4 md:pl-0">Top Stories</div>
      <div className="flex flex-col md:flex-row justify-center items-center gap-2">
        <div className="w-[90%] h-50 md:w-[60%] md:h-132 flex flex-row bg-[url(/Assets/Images/News/bridgebankvisa_01.png)] bg-cover bg-no-repeat bg-center items-end">
          <div className="flex flex-col bg-[#000000ca] w-full px-4 py-2 md:py-4 gap-2">
            <span className="bg-primary rounded-4xl text-white text-center text-[10px] w-[28%] py-0.5 md:px-4 md:py-2  md:text-[16px] md:w-[25%] md:font-semibold">
              Top stories
            </span>
            <span className="text-white font-semibold line-clamp-2 text-[12px] md:text-2xl">
              Bridge Bank signs partnership to offer better benefits for their
              Visa card users
            </span>
            <span className="flex flex-row gap-2 md:gap-4">
              <img
                className="w-[3vw] md:w-[1.5vw]"
                src="/Assets/Images/Icons/calendar.svg"
                alt="calendar"
              />
              <p className="text-white md:text-sm text-[8px]">
                Date: 25 September 2025
              </p>
            </span>
          </div>
        </div>
        <div className=" w-[90%] md:w-[40%] flex flex-col gap-2">
          <div className="flex flex-col bg-[url(/Assets/Images/News/bridgebankvisa_01.png)] bg-cover bg-no-repeat bg-center h-65 justify-end">
            <div className="flex flex-col bg-[#000000ca] w-full p-4 gap-2">
              <span className="text-white font-semibold line-clamp-2 text-[12px] md:text-sm">
                Bridge Bank signs partnership to offer better benefits for their
                Visa card users
              </span>
              <span className="flex flex-row gap-2 md:gap-2">
                <img
                  className="w-[3vw] md:w-[1.2vw]"
                  src="/Assets/Images/Icons/calendar.svg"
                  alt="calendar"
                />
                <p className="text-white md:text-[10px] text-[8px]">
                  Date: 25 September 2025
                </p>
              </span>
            </div>
          </div>
          <div className="flex flex-col bg-[url(/Assets/Images/News/bridgebankvisa_01.png)] bg-cover bg-no-repeat bg-center h-65 justify-end">
            <div className="flex flex-col bg-[#000000ca] w-full p-4 gap-2">
              <span className="text-white font-semibold line-clamp-2 text-[12px] md:text-sm">
                Bridge Bank signs partnership to offer better benefits for their
                Visa card users
              </span>
              <span className="flex flex-row gap-2 md:gap-2">
                <img
                  className="w-[3vw] md:w-[1.3vw]"
                  src="/Assets/Images/Icons/calendar.svg"
                  alt="calendar"
                />
                <p className="text-white md:text-[10px] text-[8px]">
                  Date: 25 September 2025
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurContentHero;
