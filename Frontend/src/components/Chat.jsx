import { useState } from "react";

const Chat = ({socket}) => {
  return (
    <section className="flex flex-col px-2 space-y-4 mt-2">
      <div className="flex flex-row justify-between items-center">
        <p className=" italic font-extralight text-xs text-gray-500">
          10:20 AM
        </p>
        <p className="px-4 py-3 bg-[#EFEFF0] text-[#504f51] rounded-l-2xl max-w-[17rem]">
          Hello surya
        </p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className="px-4 py-3 bg-[#48D298] text-white rounded-r-2xl max-w-[17rem]">
          wassssup harshith, how you doing nigger?
        </p>
        <p className=" italic font-extralight text-xs ">10:22 AM</p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className="px-4 py-3 bg-[#48D298] text-white rounded-r-2xl max-w-[17rem]">
          Endi extralu denguthunav ee madhya kanipiyatle
        </p>
        <p className=" italic font-extralight text-xs ">10:24 AM</p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className=" italic font-extralight text-xs text-gray-500">
          10:25 AM
        </p>
        <p className="px-4 py-3 bg-[#EFEFF0] text-[#504f51] rounded-l-2xl max-w-[17rem]">
          Em ledu ra nee laga pani pata lekunda lenu ga, work lo unna anduke
        </p>
      </div>
    </section>
  );
};

export default Chat;
