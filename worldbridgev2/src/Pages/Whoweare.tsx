import AboutUsCM from "../Components/AboutUsPage/AboutUsCM"
import AboutUsDetail from "../Components/AboutUsPage/AboutUsDetail"
import AboutUsHero from "../Components/AboutUsPage/AboutUsHero"
import Milestone from "../Components/AboutUsPage/Milestone"

const Whoweare = () => {
  return (
    <div className="w-full flex flex-col flex-wrap justify-center items-center">
      
      {/* Hero */}
      <AboutUsHero />

      {/* Detail */}
      <AboutUsDetail />
      
      {/* CM */}
      <AboutUsCM />

      {/* Milestones */}
      <Milestone />

    </div>
  )
}

export default Whoweare