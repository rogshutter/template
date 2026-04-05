import React from 'react';
import { Package, AlertCircle, ArrowUpRight, ArrowDownRight, Search, Filter, Plus, MoreVertical } from 'lucide-react';
import { MOCK_STOCK } from '../constants';
import { cn } from '../lib/utils';

export const StockModule: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-gray-100 tracking-tight">Stock & Pharmacy</h1>
          <p className="text-sm font-bold text-gray-400 dark:text-gray-500 mt-1">Inventory management and procurement tracking</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none px-6 py-3 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl text-sm font-black text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all shadow-sm flex items-center justify-center gap-2">
            <Plus className="w-4 h-4" />
            Add Stock
          </button>
          <button className="flex-1 sm:flex-none px-6 py-3 bg-green-600 rounded-2xl text-sm font-black text-white hover:bg-green-700 transition-all shadow-lg shadow-green-100 dark:shadow-green-900/20 flex items-center justify-center gap-2">
            <Package className="w-4 h-4" />
            New Procurement
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 rounded-2xl flex items-center justify-center">
              <Package className="w-6 h-6" />
            </div>
            <span className="px-2 py-1 bg-green-50 dark:bg-green-900/20 text-green-600 text-[10px] font-black uppercase tracking-widest rounded-lg">Healthy</span>
          </div>
          <h3 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Total Inventory Value</h3>
          <p className="text-2xl font-black text-gray-900 dark:text-gray-100">$12,450.00</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-red-50 dark:bg-red-900/20 text-red-600 rounded-2xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <span className="px-2 py-1 bg-red-50 dark:bg-red-900/20 text-red-600 text-[10px] font-black uppercase tracking-widest rounded-lg">Action Required</span>
          </div>
          <h3 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Low Stock Items</h3>
          <p className="text-2xl font-black text-gray-900 dark:text-gray-100">8 Items</p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-orange-50 dark:bg-orange-900/20 text-orange-600 rounded-2xl flex items-center justify-center">
              <AlertCircle className="w-6 h-6" />
            </div>
            <span className="px-2 py-1 bg-orange-50 dark:bg-orange-900/20 text-orange-600 text-[10px] font-black uppercase tracking-widest rounded-lg">Warning</span>
          </div>
          <h3 className="text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">Expiring Soon</h3>
          <p className="text-2xl font-black text-gray-900 dark:text-gray-100">3 Items</p>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-900 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-50 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-xl font-black text-gray-900 dark:text-gray-100">Inventory List</h2>
          <div className="flex gap-3 w-full sm:w-auto">
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
              <input
                type="text"
                placeholder="Search inventory..."
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
                <th className="px-8 py-4 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Item Name</th>
                <th className="px-8 py-4 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Category</th>
                <th className="px-8 py-4 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Quantity</th>
                <th className="px-8 py-4 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Status</th>
                <th className="px-8 py-4 text-[10px] font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50 dark:divide-gray-800">
              {MOCK_STOCK.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                        <Package className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      </div>
                      <span className="text-sm font-black text-gray-900 dark:text-gray-100">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{item.category}</span>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-black text-gray-900 dark:text-gray-100">{item.quantity} {item.unit}</span>
                      {item.quantity < item.minThreshold && (
                        <AlertCircle className="w-4 h-4 text-red-500" />
                      )}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <span className={cn(
                      "px-2 py-1 text-[10px] font-black uppercase tracking-widest rounded-lg",
                      item.quantity < item.minThreshold 
                        ? "bg-red-50 dark:bg-red-900/20 text-red-600" 
                        : "bg-green-50 dark:bg-green-900/20 text-green-600"
                    )}>
                      {item.quantity < item.minThreshold ? 'Low Stock' : 'In Stock'}
                    </span>
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm">
          <h2 className="text-lg font-black text-gray-900 dark:text-gray-100 mb-6">Recent Stock Movement</h2>
          <div className="space-y-6">
            {[
              { type: 'in', item: 'Starter Feed', qty: '+500 kg', date: 'Today, 09:45 AM', user: 'Rayan H.' },
              { type: 'out', item: 'Newcastle Vaccine', qty: '-2 vials', date: 'Today, 08:30 AM', user: 'John D.' },
              { type: 'out', item: 'Starter Feed', qty: '-50 kg', date: 'Yesterday, 04:15 PM', user: 'Sarah M.' },
            ].map((move, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center",
                    move.type === 'in' ? "bg-green-50 dark:bg-green-900/20 text-green-600" : "bg-orange-50 dark:bg-orange-900/20 text-orange-600"
                  )}>
                    {move.type === 'in' ? <ArrowUpRight className="w-5 h-5" /> : <ArrowDownRight className="w-5 h-5" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-900 dark:text-gray-100">{move.item}</h4>
                    <p className="text-xs font-bold text-gray-400 dark:text-gray-500">{move.date} • {move.user}</p>
                  </div>
                </div>
                <span className={cn(
                  "text-sm font-black",
                  move.type === 'in' ? "text-green-600" : "text-orange-600"
                )}>{move.qty}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 p-8 rounded-[32px] border border-gray-100 dark:border-gray-800 shadow-sm">
          <h2 className="text-lg font-black text-gray-900 dark:text-gray-100 mb-6">Pharmacy Alerts</h2>
          <div className="space-y-4">
            {MOCK_STOCK.filter(item => item.expiryDate).map((item, i) => (
              <div key={i} className="p-4 bg-orange-50/50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-900/30 rounded-2xl flex items-center justify-between">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 bg-white dark:bg-gray-900 rounded-xl flex items-center justify-center shadow-sm">
                    <AlertCircle className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-gray-900 dark:text-gray-100">{item.name}</h4>
                    <p className="text-xs font-bold text-orange-600 uppercase tracking-widest">Expires: {item.expiryDate}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-white dark:bg-gray-800 text-orange-600 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm hover:bg-orange-50 dark:hover:bg-gray-700 transition-all">
                  Restock
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
