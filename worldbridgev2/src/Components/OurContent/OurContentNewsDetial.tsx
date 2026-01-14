import { useLocation } from "react-router-dom";
import data from "../../Utility/news.json";

const OurContentNewsDetial = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const newsDetail = data.filter((e) => e.titleId === id);

  const des = newsDetail[0].des;
  const images = newsDetail[0].images;
  return (
    <section className="w-full flex flex-col items-center justify-center p-8">
      <div className="flex flex-col w-[90%] gap-4">
        <div className="newsDetailImage">
          <img src={newsDetail[0]?.thumbnail} alt="" />
        </div>
        <div className="flex flex-row items-center">
          <img
            className="w-[3vw] md:w-[1.5vw]"
            src="/Assets/Images/Icons/calendar.svg"
            alt="calendar"
          />{" "}
          &nbsp; <p className="text-[#59708C] ">{newsDetail[0].date}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-2xl md:text-4xl">{newsDetail[0]?.title}</h1>
          <div>
            <div className="flex flex-col text-justify gap-4">
              {des.map((e) => (
                <p key={e}>{e}</p>
              ))}
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-4 justify-start items-center">
            {images.length > 0 ? (
              images.map((image) => (
                <div className="w-120 md:w-85 md:h-50 overflow-hidden flex flex-col items-center justify-center bg-primary rounded-xl" key={image}>
                  <img className="object-fit" src={`/Assets/Images/News/${image}`} alt="News Photos" />
                </div>
              ))
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurContentNewsDetial;
