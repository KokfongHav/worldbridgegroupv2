import { useState } from "react";
import data from "../../Utility/Certificates.json";
import { flyIn } from "../../Animations/flyin";
import { motion } from "framer-motion";

const OurContentCert = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);

  const openImage = (e:string) => {
    setSelectedImage(e)
    setOpen(true)
  }
  console.log(selectedImage);
  return (
    <section className="w-[90%] flex flex-col gap-12">
      <div className="flex-flex-col gap-4">
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
    </section>
  );
};

export default OurContentCert;
