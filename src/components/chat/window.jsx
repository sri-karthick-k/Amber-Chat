import EmptyWindow from "./EmptyWindow";
import "./window.css"

const ChatWindow = () => {


    return(
        <div className="chat-window">
            <h1 className="app-name">Amber Chat 🔥</h1>
            <EmptyWindow />
        </div>
    )
}

export default ChatWindow;