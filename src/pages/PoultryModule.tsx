import React from 'react';
import { Bird, TrendingUp, Activity, AlertCircle, ChevronRight, Plus } from 'lucide-react';
import { MOCK_POULTRY_LOTS } from '../constants';
import { cn } from '../lib/utils';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line } from 'recharts';
import { X, Filter, Calendar, Users, HeartPulse, History, ChartBar } from 'lucide-react';

const weightData = [
  { day: 1, weight: 45 },
  { day: 7, weight: 180 },
  { day: 14, weight: 450 },
  { day: 21, weight: 950 },
  { day: 28, weight: 1600 },
  { day: 35, weight: 2200 },
];

const mortalityTrendData = [
  { week: 'W1', rate: 0.2 },
  { week: 'W2', rate: 0.5 },
  { week: 'W3', rate: 0.8 },
  { week: 'W4', rate: 1.2 },
];

const productionTrendData = [
  { day: 'Mon', rate: 92 },
  { day: 'Tue', rate: 94 },
  { day: 'Wed', rate: 93 },
  { day: 'Thu', rate: 95 },
  { day: 'Fri', rate: 98 },
  { day: 'Sat', rate: 97 },
  { day: 'Sun', rate: 98.2 },
];

const MARKET_AGES: Record<string, number> = {
  'Broiler': 42,
  'Layer': 150,
};

export const PoultryModule: React.FC = () => {
  const [selectedLot, setSelectedLot] = React.useState(MOCK_POULTRY_LOTS[0]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [statusFilter, setStatusFilter] = React.useState<string>('all');
  const [healthFilter, setHealthFilter] = React.useState<string>('all');

  const filteredLots = MOCK_POULTRY_LOTS.filter(lot => {
    const matchesStatus = statusFilter === 'all' || lot.status === statusFilter;
    const matchesHealth = healthFilter === 'all' || lot.healthStatus === healthFilter;
    return matchesStatus && matchesHealth;
  });

  const getAgeIndicator = (lot: typeof MOCK_POULTRY_LOTS[0]) => {
    const targetAge = MARKET_AGES[lot.type] || 42;
    if (lot.age >= targetAge) {
      return <span className="flex items-center gap-1 px-1.5 py-0.5 bg-red-100 dark:bg-red-900/30 text-red-600 text-[8px] font-black uppercase rounded-md animate-pulse">Market Ready</span>;
    }
    if (lot.age >= targetAge - 7) {
      return <span className="flex items-center gap-1 px-1.5 py-0.5 bg-orange-100 dark:bg-orange-900/30 text-orange-600 text-[8px] font-black uppercase rounded-md">Approaching</span>;
    }
    return null;
  };

  const handleLotClick = (lot: typeof MOCK_POULTRY_LOTS[0]) => {
    setSelectedLot(lot);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Poultry Management</h1>
          <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mt-1">Monitor and manage active poultry lots</p>
        </div>
        <button className="w-full sm:w-auto px-6 py-3 bg-green-600 rounded-2xl text-sm font-black text-white hover:bg-green-700 transition-all shadow-lg shadow-green-100 dark:shadow-green-900/20 flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          New Poultry Lot
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-4">
          <div className="bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm space-y-3">
            <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
              <Filter className="w-3 h-3" />
              Filters
            </div>
            <div className="grid grid-cols-2 gap-2">
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-gray-50 dark:bg-gray-800 border-none rounded-xl py-2 px-3 text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="quarantine">Quarantine</option>
              </select>
              <select 
                value={healthFilter}
                onChange={(e) => setHealthFilter(e.target.value)}
                className="bg-gray-50 dark:bg-gray-800 border-none rounded-xl py-2 px-3 text-[10px] font-black uppercase tracking-widest text-gray-600 dark:text-gray-300 focus:ring-2 focus:ring-green-500 outline-none"
              >
                <option value="all">All Health</option>
                <option value="good">Good</option>
                <option value="warning">Warning</option>
                <option value="critical">Critical</option>
              </select>
            </div>
          </div>

          <div className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Active Lots ({filteredLots.length})</div>
          {filteredLots.map((lot) => (
            <div
              key={lot.id}
              onClick={() => handleLotClick(lot)}
              className={cn(
                "p-6 rounded-[24px] border transition-all cursor-pointer group",
                selectedLot.id === lot.id
                  ? "bg-white dark:bg-gray-900 border-green-500 shadow-xl shadow-green-50 dark:shadow-none"
                  : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700"
              )}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center",
                  lot.healthStatus === 'good' ? "bg-green-50 dark:bg-green-900/20 text-green-600" : "bg-orange-50 dark:bg-orange-900/20 text-orange-600"
                )}>
                  <Bird className="w-5 h-5" />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                    Day {lot.age}
                  </div>
                  {getAgeIndicator(lot)}
                </div>
              </div>
              <h3 className="text-sm font-black text-gray-900 dark:text-gray-100 mb-1">{lot.name}</h3>
              <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">{lot.type}</p>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-50 dark:border-gray-800">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Count</p>
                  <p className="text-sm font-black text-gray-900 dark:text-gray-100">{lot.count.toLocaleString()}</p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Mortality</p>
                  <p className={cn(
                    "text-sm font-black",
                    lot.mortalityRate > 1.5 ? "text-red-500" : "text-green-600"
                  )}>{lot.mortalityRate}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-8">
              <div>
                <h2 className="text-xl font-black text-gray-900 dark:text-gray-100">{selectedLot.name} Details</h2>
                <div className="flex gap-2 mt-2">
                  <span className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-lg">Active</span>
                  <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-lg">{selectedLot.type}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-3 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                  <Activity className="w-5 h-5" />
                </button>
                <button className="p-3 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                  <TrendingUp className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Current Age</p>
                <p className="text-2xl font-black text-gray-900 dark:text-gray-100">{selectedLot.age} Days</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Production Rate</p>
                <p className="text-2xl font-black text-green-600">{selectedLot.productionRate}%</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl">
                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Health Status</p>
                <p className={cn(
                  "text-2xl font-black capitalize",
                  selectedLot.healthStatus === 'good' ? "text-green-600" : "text-orange-600"
                )}>{selectedLot.healthStatus}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-black text-gray-900 dark:text-gray-100 uppercase tracking-widest">Growth Curve (Weight g)</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={weightData}>
                    <defs>
                      <linearGradient id="colorWeight" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#9ca3af' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#9ca3af' }} />
                    <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 700 }} />
                    <Area type="monotone" dataKey="weight" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorWeight)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-black text-gray-900 dark:text-gray-100">Recent Health History</h2>
              <div className="flex items-center gap-2 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                <History className="w-3 h-3" />
                Mortality Trends
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                {[
                  { date: '2026-04-03', event: 'Vaccination', desc: 'Gumboro Booster administered', status: 'completed' },
                  { date: '2026-04-01', event: 'Health Check', desc: 'Routine inspection - All clear', status: 'completed' },
                  { date: '2026-03-28', event: 'Weight Check', desc: 'Average weight: 1.6kg', status: 'completed' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl gap-4">
                    <div className="flex gap-4 items-center">
                      <div className="w-10 h-10 bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center shadow-sm">
                        <Activity className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-gray-900 dark:text-gray-100">{item.event}</h4>
                        <p className="text-xs font-bold text-gray-400 dark:text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-[200px] w-full bg-gray-50 dark:bg-gray-800 p-4 rounded-2xl">
                <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Mortality Rate (%)</p>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mortalityTrendData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 8, fontWeight: 700, fill: '#9ca3af' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 8, fontWeight: 700, fill: '#9ca3af' }} />
                    <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '10px' }} cursor={{ fill: 'transparent' }} />
                    <Bar dataKey="rate" fill="#ef4444" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-black text-gray-900 dark:text-gray-100">Production Performance</h2>
              <div className="flex items-center gap-2 text-[10px] font-black text-green-600 uppercase tracking-widest">
                <ChartBar className="w-3 h-3" />
                Weekly Rate
              </div>
            </div>
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={productionTrendData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                  <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#9ca3af' }} />
                  <YAxis axisLine={false} tickLine={false} domain={[90, 100]} tick={{ fontSize: 10, fontWeight: 700, fill: '#9ca3af' }} />
                  <Tooltip contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 700 }} />
                  <Line type="monotone" dataKey="rate" stroke="#22c55e" strokeWidth={3} dot={{ fill: '#22c55e', strokeWidth: 2, r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Lot Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-8 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">{selectedLot.name}</h2>
                <p className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{selectedLot.type} • Detailed Overview</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-3 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl flex flex-col items-center text-center">
                  <Calendar className="w-6 h-6 text-blue-600 mb-3" />
                  <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Age</p>
                  <p className="text-xl font-black text-gray-900 dark:text-gray-100">{selectedLot.age} Days</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl flex flex-col items-center text-center">
                  <Users className="w-6 h-6 text-purple-600 mb-3" />
                  <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Total Count</p>
                  <p className="text-xl font-black text-gray-900 dark:text-gray-100">{selectedLot.count.toLocaleString()}</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl flex flex-col items-center text-center">
                  <HeartPulse className="w-6 h-6 text-red-600 mb-3" />
                  <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Mortality</p>
                  <p className="text-xl font-black text-red-600">{selectedLot.mortalityRate}%</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl flex flex-col items-center text-center">
                  <TrendingUp className="w-6 h-6 text-green-600 mb-3" />
                  <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Production</p>
                  <p className="text-xl font-black text-green-600">{selectedLot.productionRate}%</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-3xl border border-orange-100 dark:border-orange-800 flex gap-4">
                  <AlertCircle className="w-6 h-6 text-orange-600 shrink-0" />
                  <div>
                    <h4 className="text-sm font-black text-orange-900 dark:text-orange-100">Critical Alerts</h4>
                    <p className="text-xs font-bold text-orange-700 dark:text-orange-300 mt-1">
                      Increased feed consumption detected in the last 24 hours. Monitor for potential waste or health issues.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-sm font-black text-gray-900 dark:text-gray-100 uppercase tracking-widest">Growth Performance</h3>
                    <div className="h-[200px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={weightData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                          <XAxis dataKey="day" hide />
                          <YAxis hide />
                          <Tooltip />
                          <Area type="monotone" dataKey="weight" stroke="#22c55e" fill="#22c55e" fillOpacity={0.1} />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-sm font-black text-gray-900 dark:text-gray-100 uppercase tracking-widest">Mortality Trend</h3>
                    <div className="h-[200px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={mortalityTrendData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                          <XAxis dataKey="week" hide />
                          <YAxis hide />
                          <Tooltip />
                          <Bar dataKey="rate" fill="#ef4444" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 border-t border-gray-100 dark:border-gray-800 flex gap-4">
              <button className="flex-1 py-4 bg-green-600 text-white rounded-2xl text-sm font-black hover:bg-green-700 transition-all">
                Download Full Report
              </button>
              <button className="flex-1 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-2xl text-sm font-black hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                Edit Lot Info
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
