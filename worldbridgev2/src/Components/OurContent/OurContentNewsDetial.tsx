import { useLocation } from "react-router-dom";
import data from "../../Utility/news.json";
import { useState } from "react";

const OurContentNewsDetial = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  const newsDetail = data.filter((e) => e.titleId === id);

  const des = newsDetail[0].des;
  const images = newsDetail[0].images;
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined
  );

  const openImage = (e: string) => {
    setSelectedImage(e);
    setOpen(true);
    console.log(selectedImage);
  };
  return (
    <section className="w-full flex flex-col items-center justify-center p-8">
      <div className="flex flex-col w-[90%] gap-4">
        <div className="newsDetailImage">
          <img src={newsDetail[0]?.thumbnail} alt="" />
        </div>
        <div className="flex flex-row items-center gap-2">
          <img
            className="w-[3vw] md:w-[1.5vw]"
            src="/Assets/Images/Icons/calendar.svg"
            alt="calendar"
          /><p className="text-[#59708C] ">{newsDetail[0].date}</p>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold text-2xl md:text-4xl">
            {newsDetail[0]?.title}
          </h1>
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
                <div
                  className="w-120 md:w-85 xl:w-78 md:h-50 overflow-hidden flex flex-col items-center justify-center bg-primary rounded-xl"
                  key={image}
                >
                  <img
                    className="object-fit cursor-pointer"
                    src={`/Assets/Images/News/${image}`}
                    alt="News Photos"
                    onClick={() => openImage(image)}
                  />
                </div>
              ))
            ) : (
              <div></div>
            )}
            {open && (
              <div
                className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
                onClick={() => setOpen(false)}
              >
                <img
                  src={`/Assets/Images/News/${selectedImage}`}
                  className="max-w-full max-h-full object-contain"
                  alt={selectedImage}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurContentNewsDetial;
