export type EventCategory = 'All' | 'Technical' | 'Workshop' | 'Cultural' | 'Gaming' | 'Other';

export interface Event {
  id: string;
  title: string;
  category: 'Technical' | 'Workshop' | 'Cultural' | 'Gaming' | 'Other';
  tagline: string;
  description: string;
  date: string;
  time: string;
  teamSize: string;
  icon: string;
  registrationUrl: string;
  venue: string;
  deadline: string;
  prizes: string;
  eligibility: string;
  contactPerson: string;
  contactPhone: string;
  rules: string[];
  registrationFee?: string;
  slots?: string;
}

export interface ScheduleItem {
  id: string;
  day: number; // 1, 2
  dayTitle: string; // "DAY 1 — JAN 07"
  time: string;
  title: string;
  description: string;
  venue: string;
  category: 'Ceremony' | 'Competition' | 'Workshop' | 'Session' | 'Gaming';
  icon: string;
}

export interface ContactPerson {
  name: string;
  role: string;
  phone: string;
  email?: string;
  avatarIcon?: string;
}
