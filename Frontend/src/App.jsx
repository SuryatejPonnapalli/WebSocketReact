import Chat from "./components/Chat";
import Message from "./components/Message";
import Navbar from "./components/Navbar";
import io from 'socket.io-client';
import { useState } from "react";

const socket = io.connect("http://localhost:3001")
function App() {
  const [data,setData] = useState({});

  socket.on("chat-message",(dat)=>{
    console.log(dat)
  })
  return (
    <body className="flex flex-col bg-[#e6e5e5] justify-between h-screen">
      <div className="flex flex-col space-x-2">
        <Navbar socket={socket}/>
        <Chat socket={socket} data={data}/>
      </div>
      <div className="mb-4">
        <Message socket={socket} data={data}/>
      </div>
    </body>
  );
}

export default App;
