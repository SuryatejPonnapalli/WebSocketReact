import Chat from "./components/Chat";
import Message from "./components/Message";
import Navbar from "./components/Navbar";
import io from 'socket.io-client';

const socket = io.connect("http://localhost:3001")
function App() {
  return (
    <body className="flex flex-col bg-[#e6e5e5] justify-between h-screen">
      <div className="flex flex-col space-x-2">
        <Navbar socket={socket}/>
        <Chat socket={socket}/>
      </div>
      <div className="mb-4">
        <Message socket={socket}/>
      </div>
    </body>
  );
}

export default App;
