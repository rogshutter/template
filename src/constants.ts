import { PoultryLot, PiggeryUnit, StockItem, FinanceRecord, Notification } from './types';

export const MOCK_POULTRY_LOTS: PoultryLot[] = [
  {
    id: '1',
    name: 'Lot #102 - Cobb 500',
    type: 'Broiler',
    count: 5000,
    age: 28,
    status: 'active',
    healthStatus: 'good',
    productionRate: 98.2,
    mortalityRate: 1.2,
  },
  {
    id: '2',
    name: 'Lot #103 - Ross 308',
    type: 'Broiler',
    count: 4500,
    age: 14,
    status: 'active',
    healthStatus: 'warning',
    productionRate: 94.5,
    mortalityRate: 2.1,
  },
  {
    id: '3',
    name: 'Lot #101 - ISA Brown',
    type: 'Layer',
    count: 2000,
    age: 120,
    status: 'active',
    healthStatus: 'good',
    productionRate: 92.0,
    mortalityRate: 0.8,
  },
];

export const MOCK_PIGGERY_UNITS: PiggeryUnit[] = [
  {
    id: '1',
    name: 'Unit A - Breeding',
    count: 45,
    status: 'breeding',
    healthStatus: 'good',
  },
  {
    id: '2',
    name: 'Unit B - Growing',
    count: 120,
    status: 'growing',
    healthStatus: 'good',
  },
  {
    id: '3',
    name: 'Unit C - Weaning',
    count: 60,
    status: 'weaning',
    healthStatus: 'warning',
  },
];

export const MOCK_STOCK: StockItem[] = [
  {
    id: '1',
    name: 'Starter Feed',
    category: 'feed',
    quantity: 1200,
    unit: 'kg',
    minThreshold: 500,
  },
  {
    id: '2',
    name: 'Newcastle Vaccine',
    category: 'medicine',
    quantity: 15,
    unit: 'vials',
    minThreshold: 20,
    expiryDate: '2026-05-15',
  },
  {
    id: '3',
    name: 'Disinfectant Solution',
    category: 'equipment',
    quantity: 45,
    unit: 'liters',
    minThreshold: 10,
  },
];

export const MOCK_FINANCE: FinanceRecord[] = [
  {
    id: '1',
    date: '2026-04-01',
    description: 'Egg Sales - Lot #101',
    category: 'revenue',
    amount: 1500,
    type: 'Sales',
  },
  {
    id: '2',
    date: '2026-04-02',
    description: 'Feed Purchase - Starter',
    category: 'expense',
    amount: 800,
    type: 'Procurement',
  },
  {
    id: '3',
    date: '2026-04-03',
    description: 'Veterinary Consultation',
    category: 'expense',
    amount: 200,
    type: 'Services',
  },
];

export const MOCK_NOTIFICATIONS: Notification[] = [
  {
    id: '1',
    title: 'Low Stock Alert',
    message: 'Newcastle Vaccine is below minimum threshold (15 vials left).',
    type: 'stock',
    priority: 'high',
    timestamp: '2026-04-05T08:30:00Z',
    read: false,
  },
  {
    id: '2',
    title: 'Health Warning',
    message: 'Increased mortality rate detected in Lot #103.',
    type: 'health',
    priority: 'high',
    timestamp: '2026-04-05T07:15:00Z',
    read: false,
  },
  {
    id: '3',
    title: 'Financial Report Ready',
    message: 'Monthly revenue summary for March is now available.',
    type: 'finance',
    priority: 'medium',
    timestamp: '2026-04-04T16:45:00Z',
    read: true,
  },
];
