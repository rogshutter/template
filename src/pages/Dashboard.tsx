import React from 'react';
import { 
  Bird, 
  PiggyBank, 
  Package, 
  TrendingUp, 
  AlertCircle, 
  Clock, 
  Thermometer, 
  Droplets, 
  Wind,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';

const data = [
  { name: 'Mon', poultry: 4000, piggery: 2400 },
  { name: 'Tue', poultry: 3000, piggery: 1398 },
  { name: 'Wed', poultry: 2000, piggery: 9800 },
  { name: 'Thu', poultry: 2780, piggery: 3908 },
  { name: 'Fri', poultry: 1890, piggery: 4800 },
  { name: 'Sat', poultry: 2390, piggery: 3800 },
  { name: 'Sun', poultry: 3490, piggery: 4300 },
];

const StatCard = ({ icon: Icon, label, value, trend, trendValue, color }: any) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:shadow-gray-200/50 dark:hover:shadow-none transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className={`flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${trend === 'up' ? 'bg-green-50 dark:bg-green-900/20 text-green-600' : 'bg-red-50 dark:bg-red-900/20 text-red-600'}`}>
        {trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
        {trendValue}
      </div>
    </div>
    <h3 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">{label}</h3>
    <p className="text-2xl font-black text-gray-900 dark:text-gray-100">{value}</p>
  </div>
);

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Farm Overview</h1>
          <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mt-1">Real-time performance metrics for all units</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-6 py-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl text-sm font-black text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm">
            Download Report
          </button>
          <button className="flex-1 sm:flex-none px-6 py-3 bg-green-600 rounded-2xl text-sm font-black text-white hover:bg-green-700 transition-all shadow-lg shadow-green-100 dark:shadow-green-900/20">
            Add New Record
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          icon={Bird} 
          label="Poultry Production" 
          value="12,450" 
          trend="up" 
          trendValue="+12.5%" 
          color="bg-orange-50 text-orange-600 group-hover:bg-orange-600 group-hover:text-white"
        />
        <StatCard 
          icon={PiggyBank} 
          label="Piggery Growth" 
          value="245" 
          trend="up" 
          trendValue="+5.2%" 
          color="bg-pink-50 text-pink-600 group-hover:bg-pink-600 group-hover:text-white"
        />
        <StatCard 
          icon={Package} 
          label="Stock Levels" 
          value="84%" 
          trend="down" 
          trendValue="-2.4%" 
          color="bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
        />
        <StatCard 
          icon={TrendingUp} 
          label="Monthly Revenue" 
          value="$45,200" 
          trend="up" 
          trendValue="+18.7%" 
          color="bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h2 className="text-xl font-black text-gray-900 dark:text-gray-100">Production Trends</h2>
              <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1">Weekly growth comparison</p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-800 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">Poultry</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-800 rounded-full">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">Piggery</span>
              </div>
            </div>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorPoultry" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPiggery" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ec4899" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#9ca3af' }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#9ca3af' }}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', fontWeight: 700 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="poultry" 
                  stroke="#22c55e" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorPoultry)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="piggery" 
                  stroke="#ec4899" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorPiggery)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-900 dark:bg-gray-900 p-8 rounded-[32px] text-white shadow-2xl shadow-gray-200 dark:shadow-none border border-transparent dark:border-gray-800">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-black">Environment</h2>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Building A Monitor</p>
              </div>
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Thermometer className="w-5 h-5 text-green-400" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gray-400">
                  <Thermometer className="w-3 h-3" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Temp</span>
                </div>
                <p className="text-2xl font-black">24.5°C</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gray-400">
                  <Droplets className="w-3 h-3" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Humidity</span>
                </div>
                <p className="text-2xl font-black">62%</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-gray-400">
                  <Wind className="w-3 h-3" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Ammonia</span>
                </div>
                <p className="text-2xl font-black">12 ppm</p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-green-400">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-black uppercase tracking-widest">Status</span>
                </div>
                <p className="text-2xl font-black">Optimal</p>
              </div>
            </div>
          </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-black text-gray-900 dark:text-gray-100">Urgent Alerts</h2>
              <span className="px-2 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 text-[10px] font-black uppercase tracking-widest rounded-lg">3 Active</span>
            </div>
            <div className="space-y-4">
              {[
                { icon: AlertCircle, title: 'Low Stock', desc: 'Newcastle Vaccine (15 vials)', time: '10m ago', color: 'text-red-500 bg-red-50 dark:bg-red-900/20' },
                { icon: Clock, title: 'Feeding Overdue', desc: 'Unit B - Growing Unit', time: '25m ago', color: 'text-orange-500 bg-orange-50 dark:bg-orange-900/20' },
                { icon: AlertCircle, title: 'Health Alert', desc: 'Lot #103 Temp Spike', time: '1h ago', color: 'text-red-500 bg-red-50 dark:bg-red-900/20' },
              ].map((alert, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${alert.color}`}>
                    <alert.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-black text-gray-900 dark:text-gray-100 truncate">{alert.title}</h4>
                      <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">{alert.time}</span>
                    </div>
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 truncate">{alert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 py-3 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-gray-100 dark:hover:bg-gray-700 transition-all flex items-center justify-center gap-2">
              View All Notifications
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-green-600 p-8 rounded-[32px] text-white shadow-2xl shadow-green-100">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-xl font-black">Next Delivery</h2>
                <p className="text-xs font-bold text-green-200 uppercase tracking-widest mt-1">Scheduled Supply</p>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                <Package className="w-5 h-5 text-white" />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div>
                <p className="text-3xl font-black mb-1">Tomorrow</p>
                <p className="text-sm font-bold text-green-100">1,200kg Starter Feed</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black uppercase tracking-widest text-green-200 mb-1">ETA</p>
                <p className="text-sm font-black">09:30 AM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
