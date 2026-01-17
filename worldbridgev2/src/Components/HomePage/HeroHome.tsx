import ActionButton from "../ActionButton";
// import * as motion from "motion/react-client";
import { motion } from "framer-motion";

const HeroHome = () => {

  return (
    <div className="relative flex justify-between items-center h-[28vh] md:flex md:w-full md:h-120 xl:h-150">
      <div className="absolute flex w-full h-[90%] bg-[url(/Assets/Images/Elements/hero-bg.png)] bg-center bg-cover opacity-5 z-0"></div>
      <div>
        <motion.img
          className="w-30 md:w-130"
          src="Assets/Images/Elements/the-peak.png"
          initial={{ x: "-120%" }}
          animate={{ x: 0 }}
          transition={{ duration: 2.9, ease: "easeOut" }}
        />
      </div>
      {/* middle */}
      <motion.div
        className="flex flex-wrap flex-col w-57 md:w-[45vw]  justify-center items-center text-center md:gap-2.5 md:mr-15 z-5"
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 2.9,
          ease: "easeOut",
        }}
      >
        <div>
          <p className="font-bold text-black text-2xl md:text-7xl">We Keep</p>
        </div>
        <div className="flex flex-row items-end">
          <p className="text-sm mb-0.5 mr-0.2 md:mb-1.5 md:text-4xl md:mr-3">
            From
          </p>
          <p className="text-2xl mr-1 font-bold md:text-7xl md:mr-3">1992</p>
          <p className="text-2xl font-bold md:text-7xl">Growing</p>
        </div>
        <div className="w-40 md:w-120">
          <p className="text-[10px] md:text-xl">
            We has since grown into a top choice for international partners in
            the Cambodian market.
          </p>
        </div>
        <div className="mt-2.5">
          <ActionButton text="Learn more" />
        </div>
      </motion.div>
      <motion.div
        initial={{ x: "120%" }}
        animate={{ x: 0 }}
        transition={{ duration: 2.9, ease: "easeOut" }}
      >
        <img
          className="w-30 md:w-120"
          src="Assets/Images/Elements/the-bridge.png"
        />
      </motion.div>
    </div>
  );
};

export default HeroHome;
