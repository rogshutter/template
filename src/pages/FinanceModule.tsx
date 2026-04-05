import React from 'react';
import { TrendingUp, TrendingDown, DollarSign, FileText, Download, Filter, Search, MoreVertical, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { MOCK_FINANCE } from '../constants';
import { cn } from '../lib/utils';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const pieData = [
  { name: 'Poultry Sales', value: 65, color: '#22c55e' },
  { name: 'Piggery Sales', value: 25, color: '#ec4899' },
  { name: 'Other', value: 10, color: '#3b82f6' },
];

const barData = [
  { month: 'Jan', revenue: 45000, expense: 32000 },
  { month: 'Feb', revenue: 52000, expense: 38000 },
  { month: 'Mar', revenue: 48000, expense: 35000 },
  { month: 'Apr', revenue: 61000, expense: 42000 },
];

export const FinanceModule: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Finance & Reporting</h1>
          <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mt-1">Track revenue, expenses, and generate farm reports</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-6 py-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl text-sm font-black text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Export Ledger
          </button>
          <button className="flex-1 sm:flex-none px-6 py-3 bg-green-600 rounded-2xl text-sm font-black text-white hover:bg-green-700 transition-all shadow-lg shadow-green-100 dark:shadow-green-900/20 flex items-center justify-center gap-2">
            <DollarSign className="w-4 h-4" />
            New Transaction
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 text-green-600 rounded-2xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-lg">+15.2%</span>
          </div>
          <h3 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Total Revenue (MTD)</h3>
          <p className="text-2xl font-black text-gray-900 dark:text-gray-100">$61,240.00</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-2xl flex items-center justify-center">
              <TrendingDown className="w-6 h-6" />
            </div>
            <span className="px-2 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 text-[10px] font-black uppercase tracking-widest rounded-lg">+8.4%</span>
          </div>
          <h3 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Total Expenses (MTD)</h3>
          <p className="text-2xl font-black text-gray-900 dark:text-gray-100">$42,150.00</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm sm:col-span-2 lg:col-span-1">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl flex items-center justify-center">
              <DollarSign className="w-6 h-6" />
            </div>
            <span className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 text-[10px] font-black uppercase tracking-widest rounded-lg">Healthy</span>
          </div>
          <h3 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Net Profit (MTD)</h3>
          <p className="text-2xl font-black text-gray-900 dark:text-gray-100">$19,090.00</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
            <div>
              <h2 className="text-xl font-black text-gray-900 dark:text-gray-100">Revenue vs Expense</h2>
              <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mt-1">Monthly financial performance</p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-800 rounded-full">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">Revenue</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 dark:bg-gray-800 rounded-full">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-[10px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">Expense</span>
              </div>
            </div>
          </div>
          <div className="h-[300px] sm:h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" className="dark:stroke-gray-800" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#9ca3af' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fontWeight: 700, fill: '#9ca3af' }} />
                <Tooltip 
                  cursor={{ fill: '#f9fafb', opacity: 0.1 }} 
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', 
                    fontWeight: 700,
                    backgroundColor: 'var(--tw-bg-opacity, #fff)',
                    color: 'var(--tw-text-opacity, #000)'
                  }} 
                />
                <Bar dataKey="revenue" fill="#22c55e" radius={[4, 4, 0, 0]} />
                <Bar dataKey="expense" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-100 mb-8">Revenue Breakdown</h2>
          <div className="h-[200px] sm:h-[250px] w-full mb-8">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    borderRadius: '16px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', 
                    fontWeight: 700,
                    backgroundColor: 'var(--tw-bg-opacity, #fff)',
                    color: 'var(--tw-text-opacity, #000)'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="space-y-4">
            {pieData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                  <span className="text-sm font-bold text-gray-500 dark:text-gray-400">{item.name}</span>
                </div>
                <span className="text-sm font-black text-gray-900 dark:text-gray-100">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-50 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-100">Operations Ledger</h2>
          <div className="flex gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search transactions..."
                className="w-full bg-gray-50 dark:bg-gray-800 border-none rounded-xl py-2.5 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-green-500 outline-none text-gray-900 dark:text-gray-100"
              />
            </div>
            <button className="p-2.5 bg-gray-50 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
              <Filter className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-gray-800/50">
                <th className="px-8 py-4 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Date</th>
                <th className="px-8 py-4 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Description</th>
                <th className="px-8 py-4 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Category</th>
                <th className="px-8 py-4 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Amount</th>
                <th className="px-8 py-4 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
              {MOCK_FINANCE.map((record) => (
                <tr key={record.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group">
                  <td className="px-8 py-5">
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400">{record.date}</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-sm font-black text-gray-900 dark:text-gray-100">{record.description}</span>
                  </td>
                  <td className="px-8 py-5">
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-[10px] font-black uppercase tracking-widest rounded-lg">{record.type}</span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      {record.category === 'revenue' ? (
                        <ArrowUpRight className="w-4 h-4 text-green-500" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4 text-red-500" />
                      )}
                      <span className={cn(
                        "text-sm font-black",
                        record.category === 'revenue' ? "text-green-600" : "text-red-600"
                      )}>
                        {record.category === 'revenue' ? '+' : '-'}${record.amount.toLocaleString()}
                      </span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
