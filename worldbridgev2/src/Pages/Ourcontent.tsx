import OurContentCert from "../Components/OurContent/OurContentCert"
import OurContentHero from "../Components/OurContent/OurContentHero"
import OurContentRecent from "../Components/OurContent/OurContentRecent"

const Ourcontent = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center p-4 md:p-8 md:mt-14 gap-8">
      <OurContentHero />
      <OurContentRecent />
      <OurContentCert />
    </div>
  )
}

export default Ourcontent