import ActionButton from "../ActionButton";
import { FloatingImages } from "./FloatingImages";

const AboutUsHero = () => {
  return (
      <section className="relative h-120 md:h-130 py-20 md:w-270 flex flex-col items-center justify-end">

        {/* Floating images */}
        <FloatingImages />

        {/* Center content */}
        <div className="relative z-10 mx-auto max-w-3xl text-center px-6 flex flex-col gap-2 items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-main">
            WorldBridge Group
          </h1>

          <p className="mt-4 text-sm md:text-md md:w-[90%]">
            At WorldBridge, our commitment goes beyond profit, we build
            purpose-driven enterprises that shape the future of Cambodia.
          </p>
          
          <ActionButton text="Contact Now" />

        </div>
      </section>
  );
};

export default AboutUsHero;
