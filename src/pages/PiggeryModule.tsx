import React from 'react';
import { PiggyBank, TrendingUp, Activity, AlertCircle, ChevronRight, Plus, Heart, Baby } from 'lucide-react';
import { MOCK_PIGGERY_UNITS } from '../constants';
import { cn } from '../lib/utils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, LineChart, Line, AreaChart, Area } from 'recharts';
import { X, Filter, Thermometer, Droplets, Wind, Calendar, Weight, Info, Users } from 'lucide-react';

const growthData = [
  { week: 1, weight: 1.5 },
  { week: 4, weight: 8 },
  { week: 8, weight: 25 },
  { week: 12, weight: 55 },
  { week: 16, weight: 85 },
  { week: 20, weight: 110 },
];

const miniTrendData = [
  { day: 1, value: 40 },
  { day: 2, value: 45 },
  { day: 3, value: 42 },
  { day: 4, value: 48 },
  { day: 5, value: 50 },
  { day: 6, value: 55 },
  { day: 7, value: 52 },
];

const pigletData = [
  { id: 'P001', birthDate: '2026-03-15', weaningWeight: 7.5, care: 'Iron supplement given', sow: 'Sow #42' },
  { id: 'P002', birthDate: '2026-03-16', weaningWeight: 8.2, care: 'Routine check', sow: 'Sow #38' },
  { id: 'P003', birthDate: '2026-03-18', weaningWeight: 6.8, care: 'Extra warmth needed', sow: 'Sow #12' },
];

export const PiggeryModule: React.FC = () => {
  const [selectedUnit, setSelectedUnit] = React.useState(MOCK_PIGGERY_UNITS[0]);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [statusFilter, setStatusFilter] = React.useState<string>('all');
  const [healthFilter, setHealthFilter] = React.useState<string>('all');

  const filteredUnits = MOCK_PIGGERY_UNITS.filter(unit => {
    const matchesStatus = statusFilter === 'all' || unit.status === statusFilter;
    const matchesHealth = healthFilter === 'all' || unit.healthStatus === healthFilter;
    return matchesStatus && matchesHealth;
  });

  const handleUnitClick = (unit: typeof MOCK_PIGGERY_UNITS[0]) => {
    setSelectedUnit(unit);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Piggery Management</h1>
          <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mt-1">Reproduction, growth, and herd health tracking</p>
        </div>
        <button className="w-full sm:w-auto px-6 py-3 bg-green-600 rounded-2xl text-sm font-black text-white hover:bg-green-700 transition-all shadow-lg shadow-green-100 dark:shadow-green-900/20 flex items-center justify-center gap-2">
          <Plus className="w-4 h-4" />
          New Herd Entry
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Total Herd Count', value: '225 Pigs', icon: PiggyBank, color: 'pink', status: 'Healthy' },
          { label: 'Breeding Sows', value: '45 Sows', icon: Heart, color: 'blue', status: 'Active' },
          { label: 'Piglets (Weaning)', value: '60 Piglets', icon: Baby, color: 'orange', status: 'New' },
          { label: 'Growth Index', value: '0.85 kg/day', icon: TrendingUp, color: 'green', status: '+12.5%' },
        ].map((stat, i) => (
          <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center", `bg-${stat.color}-50 dark:bg-${stat.color}-900/20 text-${stat.color}-600`)}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span className={cn("px-2 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg", `bg-${stat.color}-50 dark:bg-${stat.color}-900/20 text-${stat.color}-600`)}>{stat.status}</span>
            </div>
            <h3 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{stat.label}</h3>
            <p className="text-2xl font-black text-gray-900 dark:text-gray-100 mb-4">{stat.value}</p>
            <div className="h-10 w-full mt-auto">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={miniTrendData}>
                  <Area type="monotone" dataKey="value" stroke={stat.color === 'pink' ? '#ec4899' : stat.color === 'blue' ? '#3b82f6' : stat.color === 'orange' ? '#f97316' : '#22c55e'} fill={stat.color === 'pink' ? '#ec4899' : stat.color === 'blue' ? '#3b82f6' : stat.color === 'orange' ? '#f97316' : '#22c55e'} fillOpacity={0.1} strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
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
                <option value="breeding">Breeding</option>
                <option value="growing">Growing</option>
                <option value="weaning">Weaning</option>
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

          <div className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest ml-1">Herd Units ({filteredUnits.length})</div>
          {filteredUnits.map((unit) => (
            <div
              key={unit.id}
              onClick={() => handleUnitClick(unit)}
              className={cn(
                "p-6 rounded-[24px] border transition-all cursor-pointer group",
                selectedUnit.id === unit.id
                  ? "bg-white dark:bg-gray-900 border-green-500 shadow-xl shadow-green-50 dark:shadow-none"
                  : "bg-white dark:bg-gray-900 border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700"
              )}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={cn(
                  "w-10 h-10 rounded-xl flex items-center justify-center",
                  unit.healthStatus === 'good' ? "bg-green-50 dark:bg-green-900/20 text-green-600" : "bg-orange-50 dark:bg-orange-900/20 text-orange-600"
                )}>
                  <PiggyBank className="w-5 h-5" />
                </div>
                <div className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                  {unit.status}
                </div>
              </div>
              <h3 className="text-sm font-black text-gray-900 dark:text-gray-100 mb-1">{unit.name}</h3>
              <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">{unit.count} Pigs</p>
              
              <div className="flex justify-between items-center pt-4 border-t border-gray-50 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <Activity className="w-3 h-3 text-green-600" />
                  <span className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Stable</span>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-green-600 transition-all" />
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-3 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <div>
                  <h2 className="text-xl font-black text-gray-900 dark:text-gray-100">Growth Tracking</h2>
                  <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1">Average weight gain per week</p>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={growthData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                    <XAxis dataKey="week" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#9ca3af' }} />
                    <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#9ca3af' }} />
                    <Tooltip cursor={{ fill: '#f9fafb' }} contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 700 }} />
                    <Bar dataKey="weight" radius={[8, 8, 0, 0]}>
                      {growthData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index === growthData.length - 1 ? '#ec4899' : '#fbcfe8'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm">
              <h2 className="text-lg font-black text-gray-900 dark:text-gray-100 mb-6">Reproduction Timeline</h2>
              <div className="space-y-6 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-100 dark:before:bg-gray-800">
                {[
                  { event: 'Insemination', date: '2026-04-01', unit: 'Unit A - Sow #42', status: 'completed', color: 'bg-green-500' },
                  { event: 'Gestation Check', date: '2026-04-15', unit: 'Unit A - Sow #38', status: 'pending', color: 'bg-blue-500' },
                  { event: 'Expected Farrowing', date: '2026-05-10', unit: 'Unit A - Sow #12', status: 'upcoming', color: 'bg-orange-500' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 relative">
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10 border-4 border-white dark:border-gray-900 shadow-sm", item.color)}>
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className="text-sm font-black text-gray-900 dark:text-gray-100">{item.event}</h4>
                        <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">{item.date}</span>
                      </div>
                      <p className="text-xs font-bold text-gray-500 dark:text-gray-400">{item.unit}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-50 dark:border-gray-800">
                <h3 className="text-sm font-black text-gray-900 dark:text-gray-100 uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Baby className="w-4 h-4 text-orange-500" />
                  Piglet Tracking
                </h3>
                <div className="space-y-3">
                  {pigletData.map((piglet) => (
                    <div key={piglet.id} className="p-4 bg-gray-50 dark:bg-gray-800 rounded-2xl flex justify-between items-center">
                      <div>
                        <p className="text-xs font-black text-gray-900 dark:text-gray-100">{piglet.id} ({piglet.sow})</p>
                        <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500">Born: {piglet.birthDate}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-black text-green-600">{piglet.weaningWeight}kg</p>
                        <p className="text-[10px] font-bold text-gray-400 dark:text-gray-500">Weaning</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Temperature', value: '24.5°C', icon: Thermometer, status: 'Optimal', color: 'green' },
              { label: 'Humidity', value: '65%', icon: Droplets, status: 'Good', color: 'blue' },
              { label: 'Ammonia Level', value: '12 ppm', icon: Wind, status: 'Safe', color: 'green' },
            ].map((metric, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", `bg-${metric.color}-50 dark:bg-${metric.color}-900/20 text-${metric.color}-600`)}>
                    <metric.icon className="w-5 h-5" />
                  </div>
                  <span className={cn("px-2 py-1 text-[8px] font-black uppercase tracking-widest rounded-lg", `bg-${metric.color}-50 dark:bg-${metric.color}-900/20 text-${metric.color}-600`)}>{metric.status}</span>
                </div>
                <h3 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{metric.label}</h3>
                <p className="text-xl font-black text-gray-900 dark:text-gray-100">{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-pink-600 p-8 rounded-[32px] text-white shadow-2xl shadow-pink-100 dark:shadow-none">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-black">Breeding Alert</h2>
                <p className="text-xs font-bold text-pink-200 uppercase tracking-widest mt-1">Action Required</p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
            </div>
            <p className="text-sm font-bold text-pink-100 mb-6">Sow #28 in Unit A is showing signs of heat. Schedule insemination within 24 hours.</p>
            <button className="w-full py-3 bg-white text-pink-600 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-pink-50 transition-all">
              Schedule Now
            </button>
          </div>
        </div>
      </div>

      {/* Unit Details Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6">
          <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" onClick={() => setIsModalOpen(false)} />
          <div className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-[40px] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            <div className="p-8 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-black text-gray-900 dark:text-gray-100">{selectedUnit.name}</h2>
                <p className="text-sm font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">{selectedUnit.status} Unit • Detailed Overview</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="p-3 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl flex flex-col items-center text-center">
                  <Users className="w-6 h-6 text-blue-600 mb-3" />
                  <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Herd Size</p>
                  <p className="text-xl font-black text-gray-900 dark:text-gray-100">{selectedUnit.count} Pigs</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl flex flex-col items-center text-center">
                  <Weight className="w-6 h-6 text-pink-600 mb-3" />
                  <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Avg Weight</p>
                  <p className="text-xl font-black text-gray-900 dark:text-gray-100">85.4 kg</p>
                </div>
                <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-3xl flex flex-col items-center text-center">
                  <Activity className="w-6 h-6 text-green-600 mb-3" />
                  <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Health Status</p>
                  <p className={cn("text-xl font-black capitalize", selectedUnit.healthStatus === 'good' ? "text-green-600" : "text-orange-600")}>{selectedUnit.healthStatus}</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-3xl border border-blue-100 dark:border-blue-800 flex gap-4">
                  <Info className="w-6 h-6 text-blue-600 shrink-0" />
                  <div>
                    <h4 className="text-sm font-black text-blue-900 dark:text-blue-100">Unit Information</h4>
                    <p className="text-xs font-bold text-blue-700 dark:text-blue-300 mt-1">
                      This unit is currently in the {selectedUnit.status} phase. Last routine checkup was performed 2 days ago.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-sm font-black text-gray-900 dark:text-gray-100 uppercase tracking-widest">Environmental History</h3>
                    <div className="h-[200px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={miniTrendData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                          <XAxis dataKey="day" hide />
                          <YAxis hide />
                          <Tooltip />
                          <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-sm font-black text-gray-900 dark:text-gray-100 uppercase tracking-widest">Weight Distribution</h3>
                    <div className="h-[200px] w-full">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={growthData}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                          <XAxis dataKey="week" hide />
                          <YAxis hide />
                          <Tooltip />
                          <Bar dataKey="weight" fill="#ec4899" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 border-t border-gray-100 dark:border-gray-800 flex gap-4">
              <button className="flex-1 py-4 bg-green-600 text-white rounded-2xl text-sm font-black hover:bg-green-700 transition-all">
                Download Unit Report
              </button>
              <button className="flex-1 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-2xl text-sm font-black hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                Update Records
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
