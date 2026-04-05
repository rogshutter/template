import React from 'react';
import { Bell, Heart, Package, DollarSign, ShieldAlert, CheckCircle2, Clock, Search, Filter, MoreVertical } from 'lucide-react';
import { MOCK_NOTIFICATIONS } from '../constants';
import { cn } from '../lib/utils';

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'health': return Heart;
    case 'stock': return Package;
    case 'finance': return DollarSign;
    default: return ShieldAlert;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'health': return 'text-red-600 bg-red-50 dark:bg-red-900/20';
    case 'stock': return 'text-orange-600 bg-orange-50 dark:bg-orange-900/20';
    case 'finance': return 'text-green-600 bg-green-50 dark:bg-green-900/20';
    default: return 'text-blue-600 bg-blue-50 dark:bg-blue-900/20';
  }
};

export const NotificationsModule: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Notifications</h1>
          <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mt-1">Stay updated with farm alerts and system messages</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-6 py-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl text-sm font-black text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm">
            Mark All as Read
          </button>
          <button className="flex-1 sm:flex-none px-6 py-3 bg-gray-900 dark:bg-gray-800 rounded-2xl text-sm font-black text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition-all shadow-lg shadow-gray-200 dark:shadow-none">
            Settings
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm">
            <h2 className="text-lg font-black text-gray-900 dark:text-gray-100 mb-6">Categories</h2>
            <div className="space-y-2">
              {[
                { label: 'All Notifications', count: 12, active: true },
                { label: 'Health Alerts', count: 3, active: false },
                { label: 'Stock Updates', count: 5, active: false },
                { label: 'Finance Reports', count: 2, active: false },
                { label: 'System Messages', count: 2, active: false },
              ].map((cat, i) => (
                <button
                  key={i}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all",
                    cat.active ? "bg-green-50 dark:bg-green-900/20 text-green-600" : "text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                  )}
                >
                  <span>{cat.label}</span>
                  <span className={cn(
                    "px-2 py-0.5 rounded-lg text-[10px] font-black",
                    cat.active ? "bg-green-600 text-white" : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500"
                  )}>{cat.count}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-green-600 p-8 rounded-[32px] text-white shadow-2xl shadow-green-100 dark:shadow-none">
            <h2 className="text-xl font-black mb-4">Daily Summary</h2>
            <p className="text-sm font-bold text-green-100 mb-6 leading-relaxed">You have 3 high-priority health alerts and 2 low stock warnings that require attention.</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span className="text-xs font-bold">4 Tasks Completed</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-green-300" />
                <span className="text-xs font-bold">2 Tasks Pending</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search notifications..."
                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl py-2.5 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-green-500 outline-none text-gray-900 dark:text-gray-100"
              />
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none px-4 py-2.5 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-gray-100 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {MOCK_NOTIFICATIONS.map((notif) => {
              const Icon = getTypeIcon(notif.type);
              const colorClass = getTypeColor(notif.type);
              
              return (
                <div
                  key={notif.id}
                  className={cn(
                    "p-6 rounded-[24px] border transition-all flex flex-col sm:flex-row gap-4 sm:gap-6 group cursor-pointer",
                    notif.read 
                      ? "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800" 
                      : "bg-white dark:bg-gray-900 border-green-500 shadow-xl shadow-green-50 dark:shadow-none"
                  )}
                >
                  <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shrink-0", colorClass)}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-base font-black text-gray-900 dark:text-gray-100 truncate">{notif.title}</h3>
                      <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{new Date(notif.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                    </div>
                    <p className="text-sm font-bold text-gray-500 dark:text-gray-400 mb-4">{notif.message}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <span className={cn(
                          "px-2 py-0.5 rounded-lg text-[10px] font-black uppercase tracking-widest",
                          notif.priority === 'high' ? "bg-red-50 dark:bg-red-900/20 text-red-600" : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500"
                        )}>
                          {notif.priority} Priority
                        </span>
                        <span className="px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500 rounded-lg text-[10px] font-black uppercase tracking-widest">
                          {notif.type}
                        </span>
                      </div>
                      <button className="text-[10px] font-black text-green-600 uppercase tracking-widest hover:underline opacity-0 group-hover:opacity-100 transition-opacity">
                        Mark as Read
                      </button>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors self-start hidden sm:block">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
              );
            })}
          </div>

          <button className="w-full py-4 bg-gray-50 dark:bg-gray-800 text-gray-400 dark:text-gray-500 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
            Load More Notifications
          </button>
        </div>
      </div>
    </div>
  );
};
