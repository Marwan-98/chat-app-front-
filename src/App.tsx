import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import SignUp from './Components/SignUp';
import Login from "./Components/Login";
import Chat from "./Components/Chat";
import ChatPage from './Components/ChatPage';

function App() {
  return (
    <div className="App container-fluid">
    <Routes>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/chatPage" element={<ChatPage/>} />
    </Routes>
    </div>
  );
}

export default App;
