import { useState } from "react";
import groupChat from "./assets/groupChat.png";
const Login = (props) => {
  const [info, setInfo] = useState("");

  function changeInfo(e) {
    setInfo(e.target.value);
  }

  return (
    // <section>
    //   <input
    //     type="text"
    //     value={info}
    //     onChange={changeInfo}
    //     className="m-5 rounded-lg"
    //   ></input>
    //   <button
    //     type="submit"
    //     className=" bg-cyan-700 p-2 rounded-md"
    //     onClick={() => props.setId(info)}
    //   >
    //     Submit
    //   </button>
    // </section>
    <div className="bg-[#1F1A30] min-h-screen flex flex-col pt-8 pl-8">
      <header className="flex flex-col">
        <div className="flex items-center justify-center">
          <img src={groupChat} alt="groupChat image" className="w-9/12" />
        </div>
        <div className="flex items-center justify-center">
          <h2 className="text-4xl text-white font-bold pt-16">Login</h2>
        </div>
        <div className="flex items-center justify-center">
          <p className="text-[#423D51] pt-2">
            Please give your name to be able to chat.
          </p>
        </div>
      </header>
      <section className="flex flex-col pt-[7rem]">
        <input
          type="text"
          placeholder="Enter Full Name Here"
          value={info}
          onChange={changeInfo}
          className="bg-[#282338] hover:bg-[#392F4D] placeholder-text-[#423D51] w-11/12 p-4 rounded-md text-white"
        />
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-[#15F0DE] w-5/12 p-2 rounded-full text-black text-xl font-bold mt-4"
            onClick={() => props.setId(info)}
          >
            Login
          </button>
        </div>
      </section>
      <footer className="absolute bottom-0">
        <p className="text-[#423D51] pb-4">
          Please enter details to go to groupchat.
        </p>
      </footer>
    </div>
  );
};

export default Login;
