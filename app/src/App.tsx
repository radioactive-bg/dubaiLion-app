import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import HomePage from './pages/HomePage';
import GameDetailsPage from './pages/GameDetailsPage';
import TermsAndConditionsPage from './pages/TermsAndConditionsPage';
import { ScrollToTopButton } from './components/ScrollToTopButton';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTopButton />
      <Router>
        <div className="min-h-screen bg-gradient-to-b from-gaming-dark to-secondary-900 text-white">
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#1a1c2e',
                color: '#fff',
                border: '1px solid #4338ca',
              },
            }}
          />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/game/:id" element={<GameDetailsPage />} />
            <Route path="/terms" element={<TermsAndConditionsPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;