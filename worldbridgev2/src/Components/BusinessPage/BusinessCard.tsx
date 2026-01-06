import { flyIn } from "../../Animations/flyin";
import ActionButton from "../ActionButton";
import { motion } from "framer-motion";

interface BusinessCardProps {
  name: string;
  des: string;
  image: string;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ name, des, image }) => {
  return (
    <motion.div
      className="flex flex-col rounded-3xl shadow-main w-[80vw] px-8 py-8 md:py-12 items-start gap-8 md:w-[35vw]"
      variants={flyIn("down")}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      <span className="font-semibold text-3xl">{name}</span>
      <span className="text-[10px] md:text-xs">{des}</span>
      <span>
        <ActionButton text="Learn more" />
      </span>
      <span>
        <img className="rounded-2xl" src={image} alt="Category Image" />
      </span>
    </motion.div>
  );
};

export default BusinessCard;
