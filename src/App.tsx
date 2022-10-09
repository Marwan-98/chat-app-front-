import { Route, Routes } from "react-router-dom";
import "./App.css";

import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import Chat from "./Components/Chat";

import { io } from "socket.io-client";

function App() {
  const socket = io("http://localhost:2000/");
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
