import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import BackgroundRemoverPage from './components/BackgroundRemoverPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/background-remover" element={<BackgroundRemoverPage />} />
      </Routes>
    </Router>
  );
}

export default App;