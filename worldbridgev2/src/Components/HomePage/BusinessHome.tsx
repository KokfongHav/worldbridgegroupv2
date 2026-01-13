import data from "../../Utility/topcompanies.json";
import ActionButton from "../ActionButton";


const BusinessHome = () => {
  return (
    <section className="w-screen md:w-[85vw] py-4 flex flex-wrap flex-col items-center justify-center text-center gap-4">
        <h1 className="title">Business Portfolio</h1>
        <p className="text-[0.5rem] w-[70vw] md:text-[0.8rem] md:w-[50vw]">
          Beyond business, we invest in strategic social initiatives such as
          affordable housing, SME development, and green mobility to contribute
          to Cambodia’s inclusive and sustainable national development.
        </p>
        <div className="flex flex-wrap gap-4 justify-center w-[90vw] md:w-[60vw]">
          {/* Logistic */}
          <div className="aboutuselements">
            <img
              className="w-[3vw] md:w-[2vw]"
              src="/Assets/Images/Icons/Logistic.gif"
              alt="Logistic Icon"
            />
            <p>Logistic</p>
          </div>
          {/* Property */}
          <div className="aboutuselements">
            <img
              className="w-[3vw] md:w-[2vw]"
              src="/Assets/Images/Icons/Property.gif"
              alt="Property Icon"
            />
            <p>Property</p>
          </div>
          {/* Community Residence */}
          <div className="aboutuselements">
            <img
              className="w-[3vw] md:w-[2vw]"
              src="/Assets/Images/Icons/community-residence.gif"
              alt="Community Icon"
            />
            <p>Community Residence</p>
          </div>
          {/* Business Services */}
          <div className="aboutuselements">
            <img
              className="w-[3vw] md:w-[2vw]"
              src="/Assets/Images/Icons/business-service.gif"
              alt="Business Icon"
            />
            <p>Business Services</p>
          </div>
          {/* Bank and Finance */}
          <div className="aboutuselements">
            <img
              className="w-[3vw] md:w-[2vw]"
              src="/Assets/Images/Icons/bank.gif"
              alt="Bank and Finance Icon"
            />
            <p>Bank and Finance</p>
          </div>
          {/* Trading */}
          <div className="aboutuselements">
            <img
              className="w-[3vw] md:w-[2vw]"
              src="/Assets/Images/Icons/Trading.gif"
              alt="Trading Icon"
            />
            <p>Trading</p>
          </div>
          {/* Food & Beverage */}
          <div className="aboutuselements">
            <img
              className="w-[3vw] md:w-[2vw]"
              src="/Assets/Images/Icons/Trading.gif"
              alt="Food & Beverage Icon"
            />
            <p>Food & Beverage</p>
          </div>
          {/* Health */}
          <div className="aboutuselements">
            <img
              className="w-[3vw] md:w-[2vw]"
              src="/Assets/Images/Icons/Healthcare.gif"
              alt="Healthcare Icon"
            />
            <p>Health</p>
          </div>
          {/* Media */}
          <div className="aboutuselements">
            <img
              className="w-[3vw] md:w-[2vw]"
              src="/Assets/Images/Icons/Medial-Digital.gif"
              alt="Media Icon"
            />
            <p>Media</p>
          </div>
        </div>
        <ActionButton text="Learn More" />
        <div className="flex flex-row flex-wrap p-4 gap-4 md:mt-[2%] md:gap-14 justify-around">
          {data?.map((e, i) => (
            <div className="flex flex-col items-center justify-between w-[47%] mt-[7%] md:-mt-[2%] md:w-[15%]" key={i}>
              <div className="w-[60%] h-[90%] md:w-[80%] md:h-[75%] flex flex-row">
                <img className="object-contain h-full w-full " src={e.image} alt={e.name} />
              </div>  
              <p className="h-[10%] md:h-[25%] text-[14px] text-center md:text-sm w-full">{e.name}</p>
            </div>
          ))}
        </div>
      </section>
  )
}

export default BusinessHome