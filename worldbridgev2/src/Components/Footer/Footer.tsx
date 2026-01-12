import ActionButton from "../ActionButton";

const Footer = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center py-4">
      <div className="flex flex-col gap-4 items-center md:gap-6">
        <p className="md:text-2xl">Want to know more about us?</p>
        <span>
          <ActionButton text="Contact Us" />
        </span>
      </div>
      <div className="w-[40vw] md:w-[20vw]">
        <img src="/Assets/Images/Elements/WBGroupOfCompanies.png" alt="Logo" />
      </div>
      <div className="flex flex-row justify-around items-start">
        <div className="w-[20vw] flex flex-row justify-center gap-2 md:gap-4">
          <span className="w-[6vw] md:w-[3vw]">
            <img src="/Assets/Images/Icons/facebook.png" alt="Facebook" />
          </span>
          <span className="w-[6vw] md:w-[3vw]">
            <img src="/Assets/Images/Icons/instagram.png" alt="Instagram" />
          </span>
        </div>
        <div className="w-[50vw] md:w-[35vw] flex flex-col items-center">
          <p className="text-center text-[8px] md:text-xs">
            To be number one diverse solution supplier, launching pioneer
            projects in Cambodia that will reflect on both the group and the
            country.
          </p>
        </div>
        <div className="hidden md:w-[25vw] md:flex md:flex-row md:items-center md:justify-end md:text-xs md:gap-4">
            <span>Who we are?</span>
            <span>Our Business</span>
            <span>Our Content</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
