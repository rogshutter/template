import React from 'react';
import { Search, Bell, User, ChevronDown, Globe, Sun, Moon, Menu } from 'lucide-react';

interface TopBarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  onMenuToggle?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ isDarkMode, toggleTheme, onMenuToggle }) => {
  return (
    <header className="h-20 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 flex items-center justify-between px-4 md:px-8 sticky top-0 z-40 transition-colors duration-300">
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <button 
          onClick={onMenuToggle}
          className="lg:hidden p-2 bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <Menu className="w-5 h-5 text-gray-500 dark:text-gray-400" />
        </button>
        
        <div className="relative group flex-1 hidden sm:block">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-green-600 transition-colors" />
          <input
            type="text"
            placeholder="Search for lots, stock, or reports..."
            className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl py-3 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-green-500 transition-all outline-none text-gray-900 dark:text-gray-100"
          />
        </div>
      </div>

      <div className="flex items-center gap-3 md:gap-6">
        <button 
          onClick={toggleTheme}
          className="w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {isDarkMode ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-gray-500" />
          )}
        </button>

        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-800 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <Globe className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          <span className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">EN</span>
          <ChevronDown className="w-3 h-3 text-gray-400" />
        </div>

        <button className="relative w-10 h-10 flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
          <Bell className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 border-2 border-white dark:border-gray-900 rounded-full"></span>
        </button>

        <div className="h-8 w-[1px] bg-gray-100 dark:bg-gray-800 mx-1 md:mx-2"></div>

        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden lg:block">
            <p className="text-sm font-black text-gray-900 dark:text-gray-100 leading-none mb-1">Rayan Hussen</p>
            <p className="text-[10px] font-bold text-green-600 uppercase tracking-widest">Administrator</p>
          </div>
          <div className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center overflow-hidden border-2 border-transparent group-hover:border-green-500 transition-all">
            <User className="w-6 h-6 text-gray-400" />
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-green-600 transition-colors" />
        </div>
      </div>
    </header>
  );
};
