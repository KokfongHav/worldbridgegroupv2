const ActionButton = ({ text }: { text: string }) => {
  return (
    <div className="bg-primary rounded-[50rem] text-white text-center px-6 py-1.5 text-xs font-medium md:text-[16px] md:px-6 md:py-2 cursor-pointer">
      {text}
    </div>
  );
};

export default ActionButton;
