import { FaArrowRightLong } from "react-icons/fa6";

const ActionButton = ({ text }: { text: string }) => {
  return (
    <div className="bg-primary rounded-[50rem] text-white text-center px-6 py-2 text-xs font-semibold cursor-pointer flex flex-row justify-around items-center gap-2 w-36 md:w-40 3xl:w-3xs md:text-[14px] md:px-6 md:py-2 ">
      {text}
      <FaArrowRightLong fill="white" />
    </div>
  );
};

export default ActionButton;
