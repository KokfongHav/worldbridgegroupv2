import { FaArrowRightLong } from "react-icons/fa6";

const ActionButton = ({ text }: { text: string }) => {
  return (
    <div className="bg-primary rounded-[50rem] text-white text-center px-6 py-1.5 text-xs font-medium cursor-pointer flex flex-row justify-around items-center gap-2 w-[35vw] md:w-[14vw] md:text-[16px] md:px-6 md:py-2 ">
      {text}
      <FaArrowRightLong fill="white" />
    </div>
  );
};

export default ActionButton;
