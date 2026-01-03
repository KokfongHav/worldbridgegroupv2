// import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import "./Carousel.css"

const Carousel = () => {
  const items = [
    "/Assets/Images/companies/auskhmer.png",
    "/Assets/Images/companies/bridge.png",
    "/Assets/Images/companies/ceva.png",
    "/Assets/Images/companies/cuu.png",
    "/Assets/Images/companies/empired.png",
    "/Assets/Images/companies/Envirocam.png",
    "/Assets/Images/companies/itl.png",
    "/Assets/Images/companies/kerry-worldbridge-logistics.png",
    "/Assets/Images/companies/kerry.png",
    "/Assets/Images/companies/nrg89fm.png",
    "/Assets/Images/companies/oxley-worldbridge.png",
    "/Assets/Images/companies/sgmc.png",
    "/Assets/Images/companies/thai-cargo.png",
    "/Assets/Images/companies/the-bridge.png",
  ];

   const trackRef = useRef<HTMLDivElement>(null);
  const [duration, setDuration] = useState(20);

  useEffect(() => {
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.scrollWidth / 2;
    const speed = 20; // px per second (adjust here)

    setDuration(trackWidth / speed);
  }, []);

  return (
    <div className="carousel fade-edges">
      <div
        className="track"
        ref={trackRef}
        style={{ animationDuration: `${duration}s` }}
      >
        {[...items, ...items].map((src, i) => (
          <div className="item" key={i}>
            <img src={src} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
