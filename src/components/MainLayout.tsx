import React from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

interface MainLayoutProps {
  children: React.ReactNode;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children, isDarkMode, toggleTheme }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar 
          isDarkMode={isDarkMode} 
          toggleTheme={toggleTheme} 
          onMenuToggle={() => setIsSidebarOpen(true)} 
        />
        <main className="flex-1 p-4 md:p-8 overflow-y-auto custom-scrollbar">
          {children}
        </main>
      </div>
    </div>
  );
};
