import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [language, setLanguage] = useState<'en' | 'fr' | 'sw'>('en');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-950 flex flex-col items-center justify-center z-50 transition-colors duration-300">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="w-24 h-24 bg-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-green-200 dark:shadow-green-900/20">
          <span className="text-white text-4xl font-bold">EF</span>
        </div>
        <h1 className="text-3xl font-black tracking-tighter text-gray-900 dark:text-gray-100 mb-1">ESPOIR FARM</h1>
        <p className="text-sm font-bold tracking-[0.2em] text-green-600 mb-12">DIGITAL AGRONOMIST</p>
      </motion.div>

      <div className="w-64 space-y-4">
        <div className="flex justify-between text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
          <span>Syncing Data...</span>
          <span>{progress}%</span>
        </div>
        <div className="h-1.5 w-full bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-green-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="mt-16 flex gap-4">
        {(['en', 'fr', 'sw'] as const).map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
              language === lang
                ? 'bg-green-600 text-white shadow-lg shadow-green-200 dark:shadow-green-900/20'
                : 'bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
          >
            {lang === 'en' ? 'ENGLISH' : lang === 'fr' ? 'FRANÇAIS' : 'KISWAHILI'}
          </button>
        ))}
      </div>
    </div>
  );
};
