import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import SignUp from './Components/SignUp';
import Login from "./Components/Login";
import Chat from "./Components/Chat";
import ChatPage from './Components/ChatPage';
import ChatBlock from './Components/ChatBlock';

import { io } from "socket.io-client";

const socket = io("http://localhost:2000/");

function App() {
  return (
    <div className="App container-fluid">
    <Routes>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chatBlock" element={<ChatBlock />} />

      <Route path="/chat" element={<Chat socket={socket}/>} />
      <Route path="/chatPage/:id" element={<ChatPage socket={socket}/>} />
    </Routes>
    </div>
  );
}

export default App;
