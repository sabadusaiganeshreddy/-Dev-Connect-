import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import QnA from './components/QnA';
import Hackathon from './components/Hackathon';
import Profile from './components/Profile';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import QuestionList from './components/QuestionList';
import QuestionDetail from './components/QuestionDetail';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qna" element={<QnA />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/questions" element={<QuestionList />} />
          <Route path="/questions/:id" element={<QuestionDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;