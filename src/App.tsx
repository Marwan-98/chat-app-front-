import React from 'react';
import './App.css';

import { Routes, Route } from "react-router-dom";

import Login from "./Components/Login"
import Chat from "./Components/Chat"

function App() {
  return (
    <div className="App container-fluid">
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
    </div>
  );
}

export default App;
