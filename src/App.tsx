import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SplashScreen } from './components/SplashScreen';
import { LoginScreen } from './components/LoginScreen';
import { MainLayout } from './components/MainLayout';
import { Dashboard } from './pages/Dashboard';
import { PoultryModule } from './pages/PoultryModule';
import { PiggeryModule } from './pages/PiggeryModule';
import { StockModule } from './pages/StockModule';
import { ProphylaxisModule } from './pages/ProphylaxisModule';
import { FinanceModule } from './pages/FinanceModule';
import { NotificationsModule } from './pages/NotificationsModule';
import { User } from './types';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleLogin = (username: string, building: string) => {
    setUser({
      id: '1',
      username,
      role: 'admin',
      building,
    });
  };

  if (!isLoaded) {
    return <SplashScreen onComplete={() => setIsLoaded(true)} />;
  }

  if (!user) {
    return <LoginScreen onLogin={handleLogin} />;
  }

  return (
    <Router>
      <MainLayout isDarkMode={isDarkMode} toggleTheme={toggleTheme}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/poultry" element={<PoultryModule />} />
          <Route path="/piggery" element={<PiggeryModule />} />
          <Route path="/stock" element={<StockModule />} />
          <Route path="/prophylaxis" element={<ProphylaxisModule />} />
          <Route path="/finance" element={<FinanceModule />} />
          <Route path="/notifications" element={<NotificationsModule />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
