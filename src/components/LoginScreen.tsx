import React, { useState } from 'react';
import { motion } from 'motion/react';
import { User, Lock, Building2, ChevronRight } from 'lucide-react';

interface LoginScreenProps {
  onLogin: (username: string, building: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [building, setBuilding] = useState('Building A');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      onLogin(username, building);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center p-6 transition-colors duration-300">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl shadow-2xl shadow-gray-200/50 dark:shadow-none p-8 border border-gray-100 dark:border-gray-800"
      >
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-200 dark:shadow-green-900/20">
            <span className="text-white font-bold text-xl">EF</span>
          </div>
          <div>
            <h2 className="text-xl font-black text-gray-900 dark:text-gray-100 leading-tight">Welcome Back</h2>
            <p className="text-xs font-bold text-green-600 tracking-wider uppercase">Espoir Farm Portal</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Username</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-green-500 transition-all outline-none text-gray-900 dark:text-gray-100"
                placeholder="Enter your username"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-green-500 transition-all outline-none text-gray-900 dark:text-gray-100"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Assigned Building</label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
              <select
                value={building}
                onChange={(e) => setBuilding(e.target.value)}
                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-green-500 transition-all outline-none appearance-none text-gray-900 dark:text-gray-100"
              >
                <option>Building A</option>
                <option>Building B</option>
                <option>Building C</option>
                <option>Building D</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 dark:bg-green-600 text-white rounded-2xl py-4 font-black text-sm flex items-center justify-center gap-2 hover:bg-green-600 dark:hover:bg-green-700 transition-all group shadow-xl shadow-gray-200 dark:shadow-green-900/20"
          >
            Access Dashboard
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </form>

        <div className="mt-10 pt-8 border-t border-gray-50 dark:border-gray-800 flex justify-between items-center">
          <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">v2.4.0 Stable</span>
          <button className="text-[10px] font-bold text-green-600 uppercase tracking-widest hover:underline">Forgot Password?</button>
        </div>
      </motion.div>
    </div>
  );
};
