import Chat from "./components/Chat";
import Message from "./components/Message";
import Navbar from "./components/Navbar";
import io from "socket.io-client";
import { useState, useEffect } from "react";
import Login from "./components/Login";

const socket = io.connect("http://localhost:3001");
function App() {
  const [data, setData] = useState([]);
  const [info, setInfo] = useState("");

  const [startChat, setStartChat] = useState(false);

  // socket.on("chat-message", (data) => {
  //   setData((prev) => [...prev, data]);
  // });
  useEffect(() => {
    socket.on("chat-message", (messageData) => {
      // Filter out duplicates
      setData((prevData) => {
        const messageExists = prevData.some(
          (prevMessage) => prevMessage.message === messageData.message
        );
        if (!messageExists) {
          return [...prevData, messageData];
        }
        return prevData;
      });
    });

    return () => {
      socket.off("chat-message");
    };
  }, []);

  function setId(e) {
    setInfo(e);
    console.log("this is in setid");
    showChat();
  }

  function showChat() {
    console.log("this function is called");
    setStartChat(true);
    console.log(startChat);
  }

  return (
    <body className="flex flex-col bg-[#e6e5e5] justify-between h-screen">
      <div className={startChat ? "hidden" : "block"}>
        <Login setId={setId} />
      </div>
      <div
        className={
          startChat ? "flex flex-col justify-between h-screen" : "hidden"
        }
      >
        <div className="flex flex-col space-x-2">
          <Navbar socket={socket} info={info} />
          <Chat socket={socket} data={data} messages={data} info={info} />
        </div>
        <div className="mb-4">
          <Message socket={socket} data={data} info={info} />
        </div>
      </div>
    </body>
  );
}

export default App;
