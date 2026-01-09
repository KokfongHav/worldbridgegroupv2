
const Milestone = () => {
  return (
    <section className="flex flex-col flex-wrap w-[80%] h-96 xl:w-[60%] gap-12">
        <div className="font-semibold text-4xl">Our Achievement</div>
        <div className="flex flex-col items-start gap-4 xl:gap-8">
            <div className="bg-primary rounded-3xl text-white font-semibold text-center w-30 py-0.5 md:text-2xl md:w-45 md:py-1">1992 - 2003</div>
            <div className="flex flex-row items-start w-full ml-9 md:ml-5 xl:w-full xl:ml-7">
                <div className="flex flex-col items-center w-[15%]"><span className="h-3 w-3 bg-primary rounded-full border-2 border-[#F7F7F7]"></span><span className="h-20 w-1 bg-primary"></span></div>
                <div className="w-[80%] text-[12px] md:w-[70%] md:text-[16px] xl:w-full xl:text-2xl ">Logistic Service contracts with Embassies and UN agencies for logistic</div>
            </div>
        </div>
    </section>
  )
}

export default Milestone