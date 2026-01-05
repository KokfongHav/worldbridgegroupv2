import data from "../../Utility/news.json";
import { FaArrowRightLong } from "react-icons/fa6";

const NewsHome = () => {
  return (
    <section className="w-screen flex justify-center p-4 md:p-8">
      <div className="md:w-[90vw]">
        <div className="font-bold text-[1.8rem] md:text-5xl">
          Our Public Information
        </div>
        <hr className="my-2 w-[90vw] md:my-8 md:w-[50vw] border-main border-t-3" />

        {/* Contents */}
        <div className="flex flex-col gap-4 md:gap-8 w-[90vw] md:w-[90vw]">
          {data?.slice(0, 3).map((e, i) => (
            <div className="flex flex-row flex-wrap gap-6 border-b-2 py-2 md:gap-6 md:py-2" key={i}>
              <div className="w-1.5/6 flex flex-col justify-center md:justify-start">
                <div className="w-[35vw] md:w-[17vw]">
                  <img className="rounded-sm md:rounded-xl"
                    src="/Assets/Images/News/bridgebankvisa_01.png"
                    alt="thumbnail"
                  />
                </div>
              </div>
              <div className="w-3/6 md:w-4/6 flex flex-col flex-wrap gap-1 md:gap-2">
                <div className="flex flex-row gap-2 md:gap-4">
                  <img
                    className="w-[3vw] md:w-[1.5vw]"
                    src="/Assets/Images/Icons/calendar.svg"
                    alt="calendar"
                  />
                  <p className="text-[#59708C] text-sm">{e.date}</p>
                </div>
                <p className="font-semibold text-sm md:text-2xl line-clamp-1">
                  {e.title}
                </p>
                <div className="line-clamp-2 md:line-clamp-3 text-xs md:text-[10px]">{e.des}</div>
              </div>
              <div className="hidden md:flex md:w-0.5/6 md:align-middle md:py-[6vh]">
                <div className="bg-primary w-[10vw] md:w-[5vw] py-2 rounded-2xl flex justify-center items-center  cursor-pointer">
                  <FaArrowRightLong fill="white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsHome;
