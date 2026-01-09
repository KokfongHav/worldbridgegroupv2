const AboutUsCM = () => {
  return (
    <section className="flex flex-row flex-wrap justify-center items-center w-[90%] py-8 md:py-12">
      <div className="flex flex-col w-[52%] p-4 gap-2 md:w-[40%] md:gap-4 md:p-12 bg-white rounded-2xl md:rounded-4xl">
        <p className="font-semibold text-[16px] md:text-4xl italic">Chairman's Message</p>
        <p className="italic text-[8px] md:text-[17px]">
          “At WorldBridge, business is measured not only by growth, but by the lasting impact we create for Cambodia. Our focus is to remain a trusted partner for local and international stakeholders, delivering excellence,strengthening communities, and driving sustainable national progress. We are not simply building companies but we are shaping a future that supports Cambodia’s next chapter of development.”
        </p>
      </div>
      <div className="w-[48%] md:w-[40%]">
        <img src="/Assets/Images/Elements/Chairman-RE02.png" alt="Chairman image" />
      </div>
    </section>
  );
};

export default AboutUsCM;
