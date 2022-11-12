import { Route, Routes } from "react-router-dom";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Chat from "./Components/Chat";

import { io } from "socket.io-client";

function App() {
  const socket = io("https://chat-server-q4ix.onrender.com");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chat" element={<Chat socket={socket} />} />
      </Routes>
    </div>
  );
}

export default App;
