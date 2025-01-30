
const SingleRowResult = ({ data1, data2, data3, data4 }) => {
  return (
    <div className="w-full grid grid-cols-12 gap-[1px]">
      <div className="col-span-2 bg-[#EEEEEE] px-1 font-normal text-[10px] md:text-[12px] lg:text-base">{data1}</div>
      <div className="col-span-2 bg-[#EEEEEE] px-1 font-normal text-[10px] md:text-[12px] lg:text-base">{data2}</div>
      <div className="col-span-3 bg-[#EEEEEE] px-1 font-normal text-[10px] md:text-[12px] lg:text-base">{data3}</div>
      <div className="col-span-5 bg-[#EEEEEE] px-1 font-normal text-[10px] md:text-[12px] lg:text-base">{data4}</div>
    </div>
  );
};

export default SingleRowResult;
