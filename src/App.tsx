import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import SignUp from './Components/SignUp';
import Login from "./Components/Login";
import Chat from "./Components/Chat";
import ChatPage from './Components/ChatPage';

import { io, Socket } from "socket.io-client";


function App() {
  const [socket, setSocket] = useState<Socket>();

  useEffect(() => {
    setSocket(io("http://localhost:2000/"))
  }, [])
  return (
    <div className="App container-fluid">
    <Routes>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat socket={socket!}/>} />
      <Route path="/chatPage/:id" element={<ChatPage socket={socket!}/>} />
    </Routes>
    </div>
  );
}

export default App;
