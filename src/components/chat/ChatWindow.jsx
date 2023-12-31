import { useState } from "react"

const ChatWindow = () => {

    const [message, setMessage] = useState("");
    const [localSaveMsg, setLocalSaveMsg] = useState([]);

    function onMessageChange (event) {
        setMessage(event.target.value)

    }
    
    function sendMessage(event) {
        if(event.ctrlKey && event.key === "Enter"){
            alert(message)
            setLocalSaveMsg(localSaveMsg.push(message))
        }
    }
    return (
        <div className="chat-window full-width">
            <h1>Chat Window</h1>

            <div className="profile-nav">
                <p className="username-font">Username here</p>
            </div>

            <div className="chat-container">
                <textarea 
                    id="userInput" 
                    placeholder="Type your message..."
                    value={message}
                    onChange={onMessageChange}
                    onKeyDown={sendMessage}
                />
                <div className="tool-tip">
                    Press ctrl + enter to send the message
                </div>
            </div>

            <div className="prev-chat">
                <p>You typed: {message}</p>
            </div>

            <ul>
                {localSaveMsg.map((msg, index) => (
                    <li
                        key={index}  
                    >
                        {msg}
                    </li>
                ))}
            </ul>



        </div>
    )
}

export default ChatWindow