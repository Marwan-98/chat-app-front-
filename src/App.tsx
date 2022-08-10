
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ChatPage from './Pages/ChatPage';
import SignUp from './Pages/signUp';

function App() {
  return (
    <Routes>
      <Route>
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/chatPage" element={<ChatPage/>} />

      </Route>
    </Routes>
  );
}

export default App;
