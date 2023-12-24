import ChatWindow from "./components/chat/window"
import SideBar from "./components/sidebar/SideBar"
import "./App.css"


function App() {

  return (
    <>
      <div className="container"> 
        <ChatWindow />
        <SideBar />
      </div>
    </>
  )
}

export default App
