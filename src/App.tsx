import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';
import ForgotPasswordPage from './components/ForgotPasswordPage';
import BackgroundRemoverPage from './components/BackgroundRemoverPage';
import PhotoEditorPage from './components/PhotoEditorPage';
import CollageMakerPage from './components/CollageMakerPage';
import PricingPage from './components/PricingPage';
import ProfessionalToolsPage from './components/ProfessionalToolsPage';
import UserProfilePage from './components/UserProfilePage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/background-remover" element={<BackgroundRemoverPage />} />
          <Route path="/photo-editor" element={<PhotoEditorPage />} />
          <Route path="/collage-maker" element={<CollageMakerPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/professional-tools" element={<ProfessionalToolsPage />} />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <UserProfilePage />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;