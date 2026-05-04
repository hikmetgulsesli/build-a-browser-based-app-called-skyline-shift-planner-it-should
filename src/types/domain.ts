export type Page =
  | 'dashboard'
  | 'leads'
  | 'pipeline'
  | 'settings'
  | 'profile'
  | 'add-lead'
  | 'edit-lead'
  | 'errors';

export type LeadStatus = 'pending' | 'interview' | 'simulator' | 'approved' | 'rejected';
export type LeadRole = 'captain' | 'first_officer' | 'cabin_chief' | 'dispatcher' | 'ground_ops';
export type BaseCode = 'IST' | 'SAW' | 'ESB' | 'AYT';
export type CrewStatus = 'active' | 'rest' | 'reported';
export type FlightStatus = 'planned' | 'assigned' | 'active' | 'delayed' | 'completed';
export type AlertType = 'rule_violation' | 'delay' | 'info';

export interface Lead {
  id: string;
  fullName: string;
  role: LeadRole;
  base: BaseCode;
  status: LeadStatus;
  email?: string;
  phone?: string;
  notes?: string;
}

export interface Crew {
  id: string;
  name: string;
  role: string;
  base: BaseCode;
  status: CrewStatus;
  email?: string;
  phone?: string;
  initials?: string;
  avatar?: string;
}

export interface Flight {
  id: string;
  flightNumber: string;
  route: string;
  departure: string;
  arrival: string;
  status: FlightStatus;
  crewIds: string[];
  warnings?: string[];
}

export interface Alert {
  id: string;
  type: AlertType;
  title: string;
  description: string;
  timeAgo: string;
  read?: boolean;
}

export interface AppSettings {
  language: 'tr' | 'en';
  timezone: 'Europe/Istanbul' | 'UTC';
  emailNotifications: boolean;
  pushNotifications: boolean;
  theme: 'light' | 'dark' | 'system';
}

export interface AppState {
  currentPage: Page;
  editLeadId: string | null;
  leads: Lead[];
  crews: Crew[];
  flights: Flight[];
  alerts: Alert[];
  settings: AppSettings;
  searchQuery: string;
  baseFilter: BaseCode | 'all';
  roleFilter: string;
}

export const defaultSettings: AppSettings = {
  language: 'tr',
  timezone: 'Europe/Istanbul',
  emailNotifications: true,
  pushNotifications: false,
  theme: 'light',
};

export const initialLeads: Lead[] = [
  {
    id: 'LD-402',
    fullName: 'Murat Keskin',
    role: 'captain',
    base: 'IST',
    status: 'approved',
    email: 'm.keskin@skyline.com',
    phone: '+90 532 111 2233',
  },
  {
    id: 'LD-189',
    fullName: 'Ayşe Yılmaz',
    role: 'dispatcher',
    base: 'SAW',
    status: 'pending',
    email: 'a.yilmaz@skyline.com',
    phone: '+90 532 123 4567',
  },
  {
    id: 'LD-552',
    fullName: 'Caner Demir',
    role: 'cabin_chief',
    base: 'IST',
    status: 'interview',
    email: 'c.demir@skyline.com',
    phone: '+90 533 444 5566',
  },
  {
    id: 'LD-210',
    fullName: 'Burak Tekin',
    role: 'captain',
    base: 'ESB',
    status: 'approved',
    email: 'b.tekin@skyline.com',
    phone: '+90 535 777 8899',
  },
];

export const initialCrews: Crew[] = [
  { id: 'C-001', name: 'Kpt. Ali Yılmaz', role: 'PIC', base: 'IST', status: 'active', initials: 'AY' },
  { id: 'C-002', name: 'F/O Burak Demir', role: 'SIC', base: 'IST', status: 'active', initials: 'BD' },
  { id: 'C-003', name: 'Kpt. Cemre Kaya', role: 'PIC', base: 'SAW', status: 'rest', initials: 'CK' },
  { id: 'C-004', name: 'Elif Şahin', role: 'SIC', base: 'ESB', status: 'active', initials: 'EŞ' },
  { id: 'C-005', name: 'Mehmet Kaya', role: 'PIC', base: 'AYT', status: 'reported', initials: 'MK' },
];

export const initialFlights: Flight[] = [
  {
    id: 'F-001',
    flightNumber: 'TK1983',
    route: 'IST → LHR',
    departure: '08:00',
    arrival: '12:00',
    status: 'planned',
    crewIds: [],
    warnings: ['Ekip bekleniyor (0/4)'],
  },
  {
    id: 'F-002',
    flightNumber: 'TK2011',
    route: 'IST → JFK',
    departure: '14:00',
    arrival: '22:00',
    status: 'planned',
    crewIds: [],
    warnings: ['Geniş gövde yetkisi gerekli'],
  },
  {
    id: 'F-003',
    flightNumber: 'TK001',
    route: 'IST → CDG',
    departure: '09:00',
    arrival: '13:00',
    status: 'assigned',
    crewIds: ['C-001', 'C-002'],
  },
  {
    id: 'F-004',
    flightNumber: 'TK455',
    route: 'IST → AMS',
    departure: '10:30',
    arrival: '15:00',
    status: 'delayed',
    crewIds: ['C-003'],
    warnings: ['+45dk gecikme'],
  },
  {
    id: 'F-005',
    flightNumber: 'TK999',
    route: 'IST → FRA',
    departure: '04:00',
    arrival: '08:00',
    status: 'completed',
    crewIds: ['C-001', 'C-002', 'C-004'],
  },
  {
    id: 'F-006',
    flightNumber: 'TK102',
    route: 'JFK → IST',
    departure: '05:30',
    arrival: '09:15',
    status: 'completed',
    crewIds: [],
  },
];

export const initialAlerts: Alert[] = [
  {
    id: 'A-001',
    type: 'rule_violation',
    title: 'Kural İhlali: Uçuş Süresi',
    description: 'Kaptan Yılmaz, K. (TK-1024) yasal maksimum uçuş süresini 15 dakika aşmak üzere. Yedek ekip gerekiyor.',
    timeAgo: '10 dk önce',
  },
  {
    id: 'A-002',
    type: 'delay',
    title: 'Operasyonel Gecikme',
    description: 'Münih (MUC) hava sahasındaki ağır kar yağışı nedeniyle rotasyon gecikmeleri bekleniyor.',
    timeAgo: '45 dk önce',
  },
  {
    id: 'A-003',
    type: 'info',
    title: 'Sistem Güncellemesi',
    description: 'Vardiya planlama modülü 02:00 - 04:00 arası bakım nedeniyle çevrimdışı olacaktır.',
    timeAgo: '2 saat önce',
  },
];

export function getInitialState(): AppState {
  return {
    currentPage: 'dashboard',
    editLeadId: null,
    leads: [...initialLeads],
    crews: [...initialCrews],
    flights: [...initialFlights],
    alerts: [...initialAlerts],
    settings: { ...defaultSettings },
    searchQuery: '',
    baseFilter: 'all',
    roleFilter: 'all',
  };
}
