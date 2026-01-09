import AboutUsDetail from "../Components/AboutUsPage/AboutUsDetail"
import AboutUsHero from "../Components/AboutUsPage/AboutUsHero"

const Whoweare = () => {
  return (
    <div className="w-screen flex flex-col flex-wrap justify-center items-center">
      
      {/* Hero */}
      <AboutUsHero />

      {/* Detail */}
      <AboutUsDetail />
      
    </div>
  )
}

export default Whoweare