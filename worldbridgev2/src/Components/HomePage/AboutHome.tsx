import ActionButton from "../ActionButton"

const AboutHome = () => {
  return (
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
  )
}

export default AboutHome