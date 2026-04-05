import React from 'react';
import { Calendar, Clock, CheckCircle2, AlertCircle, ChevronLeft, ChevronRight, Plus, Activity, ShieldCheck } from 'lucide-react';
import { cn } from '../lib/utils';

const calendarDays = Array.from({ length: 35 }, (_, i) => i - 3); // Mock days for a month view

export const ProphylaxisModule: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Prophylaxis Calendar</h1>
          <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mt-1">Vaccination schedules and health maintenance tasks</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-6 py-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl text-sm font-black text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            Health Protocol
          </button>
          <button className="flex-1 sm:flex-none px-6 py-3 bg-green-600 rounded-2xl text-sm font-black text-white hover:bg-green-700 transition-all shadow-lg shadow-green-100 dark:shadow-green-900/20 flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" />
            Schedule Task
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-black text-gray-900 dark:text-gray-100">April 2026</h2>
              <div className="flex gap-1">
                <button className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all"><ChevronLeft className="w-4 h-4 text-gray-400 dark:text-gray-500" /></button>
                <button className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-all"><ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-500" /></button>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Upcoming</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-px bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} className="bg-gray-50 dark:bg-gray-800/50 py-3 text-center">
                <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">{day}</span>
              </div>
            ))}
            {calendarDays.map((day, i) => {
              const isToday = day === 5;
              const hasTask = [1, 5, 8, 12, 15, 22].includes(day);
              const isCompleted = day < 5 && hasTask;
              
              return (
                <div key={i} className={cn(
                  "bg-white dark:bg-gray-900 min-h-[80px] sm:min-h-[100px] p-2 sm:p-3 relative group cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-all",
                  day <= 0 || day > 30 ? "opacity-30" : ""
                )}>
                  <span className={cn(
                    "text-xs font-black",
                    isToday ? "w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center -mt-1 -ml-1" : "text-gray-400 dark:text-gray-500"
                  )}>
                    {day > 0 && day <= 30 ? day : ''}
                  </span>
                  
                  {hasTask && day > 0 && day <= 30 && (
                    <div className={cn(
                      "mt-2 p-1.5 rounded-lg text-[8px] font-black uppercase tracking-tight truncate",
                      isCompleted ? "bg-green-50 dark:bg-green-900/20 text-green-600" : "bg-orange-50 dark:bg-orange-900/20 text-orange-600"
                    )}>
                      {day === 5 ? 'Newcastle V.' : day === 12 ? 'Gumboro V.' : 'Health Check'}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm">
            <h2 className="text-lg font-black text-gray-900 dark:text-gray-100 mb-6">Upcoming Tasks</h2>
            <div className="space-y-4">
              {[
                { title: 'Newcastle Vaccination', lot: 'Lot #103', time: 'Today, 10:00 AM', status: 'urgent' },
                { title: 'Vitamin Supplement', lot: 'Unit B - Growing', time: 'Tomorrow, 08:00 AM', status: 'pending' },
                { title: 'Gumboro Booster', lot: 'Lot #102', time: 'Apr 12, 09:00 AM', status: 'pending' },
              ].map((task, i) => (
                <div key={i} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-sm font-black text-gray-900 dark:text-gray-100 group-hover:text-green-600 transition-colors">{task.title}</h4>
                    {task.status === 'urgent' && <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>}
                  </div>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 mb-3">{task.lot}</p>
                  <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                    <Clock className="w-3 h-3" />
                    {task.time}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 dark:bg-gray-900 p-8 rounded-[32px] text-white shadow-2xl shadow-gray-200 dark:shadow-none border border-transparent dark:border-gray-800">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-black">Veterinary Insights</h2>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">AI Recommendations</p>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Activity className="w-5 h-5 text-green-400" />
              </div>
            </div>
            <p className="text-sm font-bold text-gray-400 mb-6 leading-relaxed">Based on current weather patterns, there is an increased risk of respiratory issues in Building A. Ensure ventilation is at 85%.</p>
            <button className="w-full py-3 bg-green-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-green-700 transition-all">
              Apply Protocol
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
