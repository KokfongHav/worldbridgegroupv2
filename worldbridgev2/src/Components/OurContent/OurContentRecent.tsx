import { FaArrowRightLong } from "react-icons/fa6";
import contents from "../../Utility/news.json";
import { useState } from "react";
import { motion } from "framer-motion";
import { flyIn } from "../../Animations/flyin";

const OurContentRecent = () => {
  const [expanded, setExpanded] = useState(false);
  const data = expanded ? contents : contents.slice(0, 3);

  return (
    <section className="w-[95%] flex flex-col justify-center items-center p-4 md:p-8">
      <div className="md:w-full">
        <div className="font-bold text-[1.8rem] md:text-5xl">Recent News</div>
        <hr className="my-2 w-full md:my-8 md:w-[50vw] border-main border-t-3" />

        {/* Contents */}
        <div className="flex flex-col gap-4 md:gap-8 w-[90vw] md:w-full">
          {data?.map((e, i) => (
            <motion.div
              className="flex flex-row flex-wrap gap-6 border-b-2 py-2 md:gap-6 md:py-2  xl:py-4"
              key={i}
              variants={flyIn("down")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="w-1.5/6 flex flex-col justify-center md:justify-start">
                <div className="w-40 h-25 overflow-hidden md:w-45 md:h-30 xl:w-60 object-contain">
                  <img
                    className="w-full h-full object-contain rounded-sm md:rounded-xl"
                    src={e.thumbnail}
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
                <div className="line-clamp-2 md:line-clamp-3 text-xs md:text-[10px]">
                  {e.des}
                </div>
              </div>
              <div className="hidden md:flex md:w-0.5/6 md:align-middle md:py-[6vh]">
                <div className="bg-primary w-[10vw] md:w-[5vw] py-2 rounded-2xl flex justify-center items-center  cursor-pointer">
                  <FaArrowRightLong fill="white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {contents.length > 3 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-white text-[12px] font-semibold bg-primary rounded-4xl w-[40%] px-2 py-1 md:w-[15%] md:py-1.5 md:px-2 md:text-[16px] cursor-pointer"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </section>
  );
};

export default OurContentRecent;
