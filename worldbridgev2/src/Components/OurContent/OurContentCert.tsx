import { useState } from "react";
import contents from "../../Utility/Certificates.json";
import { flyIn } from "../../Animations/flyin";
import { motion } from "framer-motion";

const OurContentCert = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
  const [expanded, setExpanded] = useState(false);

  const openImage = (e:string) => {
    setSelectedImage(e)
    setOpen(true)
  }

  const data = expanded ? contents : contents.slice(0,3)

  return (
    <section className="w-[90%] flex flex-col gap-12 items-center">
      <div className="flex-flex-col gap-4 w-full items-starts">
        <p className="font-semibold text-3xl md:text-4xl">Certificates</p>
      </div>
      <div className="flex flex-row flex-wrap gap-8 items-end">
        {data?.map((e, i) => (
          <motion.div
            className="flex flex-col justify-center items-center w-[45%] md:w-[30%]"
            key={i}
            variants={flyIn("down")}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={e.certificate}
              alt="Certificates"
              onClick={() => openImage(e.certificate)}
              className="cursor-pointer"
            />
            {open && (
              <div
                className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
                onClick={() => setOpen(false)}
              >
                <img
                  src={selectedImage}
                  className="max-w-full max-h-full object-contain"
                  alt=""
                />
              </div>
            )}
            <img src="/Assets/Images/Elements/cert-bg.png" alt="Cert-bg" />
          </motion.div>
        ))}
      </div>
      {contents.length > 3 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 text-white text-[12px] font-semibold bg-primary rounded-4xl w-[40%] px-2 py-1 md:w-[15%] md:py-1.5 md:px-2 md:text-[16px] cursor-pointer"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </section>
  );
};

export default OurContentCert;
