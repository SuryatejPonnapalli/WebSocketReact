import Chat from "./components/Chat";
import Message from "./components/Message";
import Navbar from "./components/Navbar";

function App() {
  return (
    <body className="flex flex-col bg-[#e6e5e5] justify-between h-screen">
      <div className="flex flex-col space-x-2">
        <Navbar />
        <Chat />
      </div>
      <div className="mb-4">
        <Message />
      </div>
    </body>
  );
}

export default App;
