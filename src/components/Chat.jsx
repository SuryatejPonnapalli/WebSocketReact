import { useState } from "react";

const Chat = () => {
    const [chatSide,setChatSide] = useState(true)
    const [chatSid,setChatSid] = useState(false)
    return ( 
        <ul className="pt-4 px-2"> 
            <li className={`${chatSide?"bg-[#48D298] inline-block p-4 rounded-ee-xl text-white":"bg-[#EFEFF0] inline-block p-4 float-right rounded-es-xl"}`}><p>lorem ipsum</p></li>
            <li className={`${chatSid?"bg-[#48D298] inline-block p-4 rounded-ee-xl text-white":"bg-[#EFEFF0] inline-block p-4 float-right rounded-es-xl"}`}><p>lorem ipsum</p></li>
        </ul>
     );
}
 
export default Chat;