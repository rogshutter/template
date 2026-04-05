import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Bird, 
  PiggyBank, 
  Package, 
  CalendarCheck, 
  BarChart3, 
  Bell, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react';
import { cn } from '../lib/utils';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
  { icon: Bird, label: 'Poultry', path: '/poultry' },
  { icon: PiggyBank, label: 'Piggery', path: '/piggery' },
  { icon: Package, label: 'Stock & Pharmacy', path: '/stock' },
  { icon: CalendarCheck, label: 'Prophylaxis', path: '/prophylaxis' },
  { icon: BarChart3, label: 'Finance', path: '/finance' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
      />

      <aside className={cn(
        "fixed lg:sticky top-0 left-0 w-72 bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-800 flex flex-col h-screen z-50 transition-all duration-300",
        isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      )}>
        <div className="p-8 flex items-center gap-4 mb-4">
          <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-200 dark:shadow-green-900/20">
            <span className="text-white font-bold text-lg">EF</span>
          </div>
          <div>
            <h1 className="text-lg font-black text-gray-900 dark:text-gray-100 leading-tight">ESPOIR FARM</h1>
            <p className="text-[10px] font-bold text-green-600 uppercase tracking-wider">Digital Agronomist</p>
          </div>
        </div>

        <nav className="flex-1 px-4 space-y-1 overflow-y-auto custom-scrollbar">
          <div className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-4 mb-4 mt-2">Main Menu</div>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                cn(
                  "flex items-center justify-between px-4 py-3.5 rounded-2xl transition-all group",
                  isActive 
                    ? "bg-green-600 text-white shadow-xl shadow-green-100 dark:shadow-green-900/20" 
                    : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100"
                )
              }
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5" />
                <span className="text-sm font-bold">{item.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
            </NavLink>
          ))}
        </nav>

        <div className="p-6 border-t border-gray-50 dark:border-gray-800 space-y-4">
          <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-all">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-bold">Settings</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all">
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-bold">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};
