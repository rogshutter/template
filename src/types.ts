export type Language = 'en' | 'fr' | 'sw';

export interface User {
  id: string;
  username: string;
  role: 'admin' | 'manager' | 'operator';
  building?: string;
}

export interface PoultryLot {
  id: string;
  name: string;
  type: string;
  count: number;
  age: number; // in days
  status: 'active' | 'completed' | 'quarantine';
  healthStatus: 'good' | 'warning' | 'critical';
  productionRate: number;
  mortalityRate: number;
}

export interface PiggeryUnit {
  id: string;
  name: string;
  count: number;
  status: 'breeding' | 'growing' | 'weaning';
  healthStatus: 'good' | 'warning' | 'critical';
}

export interface StockItem {
  id: string;
  name: string;
  category: 'feed' | 'medicine' | 'equipment';
  quantity: number;
  unit: string;
  minThreshold: number;
  expiryDate?: string;
}

export interface FinanceRecord {
  id: string;
  date: string;
  description: string;
  category: 'revenue' | 'expense';
  amount: number;
  type: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'health' | 'stock' | 'finance' | 'system';
  priority: 'low' | 'medium' | 'high';
  timestamp: string;
  read: boolean;
}
