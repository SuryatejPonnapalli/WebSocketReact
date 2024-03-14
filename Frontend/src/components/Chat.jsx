import { useState } from "react";

const Chat = (props) => {
  return (
    <section className="flex flex-col px-2 space-y-4 mt-2">
      {props.messages.map(({ name, message, dateTime }, index) => (
        <div
          className={`flex justify-between items-center ${
            name == props.info ? " flex-row " : "flex-row-reverse"
          }`}
        >
          <p className=" italic font-extralight text-xs text-gray-500">
            {dateTime}
          </p>

          <p
            className={`${
              name == props.info
                ? "px-4 py-3 bg-[#EFEFF0] text-[#504f51] rounded-l-2xl max-w-[17rem]"
                : "px-4 py-3 bg-[#48D298] text-white rounded-r-2xl max-w-[17rem]"
            }`}
          >
            {message}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Chat;
