export type EventCategory = 'All' | 'Coding' | 'Development' | 'Robotics' | 'Gaming' | 'Quiz';

export interface Event {
  id: string;
  title: string;
  category: EventCategory;
  description: string;
  date: string;
  time: string;
  teamSize: string;
  icon: string; // Lucide icon name or emoji fallback
  registrationUrl: string;
  rules?: string[];
  eligibility?: string;
  venue?: string;
  deadline?: string;
  prizes?: string;
  contactPerson?: string;
  contactPhone?: string;
  tagline?: string;
}

export interface ScheduleItem {
  id: string;
  day: number; // 1, 2, 3
  dayTitle: string; // "DAY 1 — AUG 29"
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
