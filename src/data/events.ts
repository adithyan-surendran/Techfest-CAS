import { Event } from '../types';

export const EVENTS_DATA: Event[] = [
  {
    id: 'code-sprint',
    title: 'CODE SPRINT',
    category: 'Coding',
    tagline: 'Speed. Logic. Perfection.',
    description: 'Competitive programming challenge testing speed, algorithmic problem-solving, and clean code optimization.',
    date: 'August 30, 2026',
    time: '10:00 AM – 12:00 PM',
    teamSize: '1–2 Members',
    icon: 'Code2',
    registrationUrl: 'https://forms.gle/uTT3CkMsFMK68Pve9',
    venue: 'Computer Lab 3 (CS Wing)',
    deadline: 'August 28, 2026, 11:59 PM',
    prizes: '🏆 1st Prize: $500 | 🥈 2nd Prize: $300 | 🥉 3rd Prize: $150',
    eligibility: 'Open to all undergraduate & postgraduate students with valid college ID.',
    contactPerson: 'Rahul Sharma (Student Lead)',
    contactPhone: '+91 98765 43210',
    rules: [
      'Languages allowed: C++, Java, Python, C#, JavaScript.',
      'Plagiarism or use of external code generators will result in instant disqualification.',
      'All solutions will be judged automatically by online judge evaluation metrics.',
      'Tie-breakers are resolved by total submission time penalties.'
    ]
  },
  {
    id: 'hackathon',
    title: 'HACKATHON',
    category: 'Development',
    tagline: '36 Hours of Non-Stop Innovation.',
    description: 'Build innovative hardware or software solutions to real-world problems. Pitch to industry mentors and VCs.',
    date: 'August 29–31, 2026',
    time: '09:00 AM – 05:00 PM',
    teamSize: '2–4 Members',
    icon: 'Cpu',
    registrationUrl: 'https://forms.gle/uTT3CkMsFMK68Pve9',
    venue: 'Main Innovation Hub & Seminar Hall',
    deadline: 'August 25, 2026, 11:59 PM',
    prizes: '🏆 Grand Winner: $1,500 | 🥈 Runner-Up: $800 | 💡 Best Social Impact: $400',
    eligibility: 'Student teams across any discipline.',
    contactPerson: 'Ananya Patel (Hackathon Chair)',
    contactPhone: '+91 98765 43211',
    rules: [
      'All code must be written during the 36-hour hackathon timeframe.',
      'Open-source libraries and APIs are allowed if declared in initial project pitch.',
      'Final submission requires GitHub repository link, demo video, and live pitch deck.',
      'Mentors will be available 24/7 for guidance.'
    ]
  },
  {
    id: 'robotics-arena',
    title: 'ROBOTICS ARENA',
    category: 'Robotics',
    tagline: 'Design. Build. Compete.',
    description: 'Autonomous & semi-autonomous bot showdown! Navigate obstacles, race against time, and battle in the arena.',
    date: 'August 30, 2026',
    time: '01:00 PM – 04:00 PM',
    teamSize: '2–5 Members',
    icon: 'Bot',
    registrationUrl: 'https://forms.gle/uTT3CkMsFMK68Pve9',
    venue: 'Central Outdoor Quadrangle Arena',
    deadline: 'August 27, 2026, 11:59 PM',
    prizes: '🏆 Arena Champion: $800 | 🥈 2nd Place: $400 | ⚙️ Best Bot Design: $200',
    eligibility: 'Student robotics enthusiasts & engineering delegates.',
    contactPerson: 'Karan Verma (Robotics Coordinator)',
    contactPhone: '+91 98765 43212',
    rules: [
      'Bots must adhere to weight limit (max 5 kg) and dimension limits (30cm x 30cm x 30cm).',
      'Both wired and wireless control mechanisms are permitted.',
      'Dangerous chemicals, explosives, or combustion mechanisms are strictly prohibited.',
      '裁判 decisions on arena bounds are final.'
    ]
  },
  {
    id: 'game-on',
    title: 'GAME ON',
    category: 'Gaming',
    tagline: 'Arcade Championship & Esports Tournament.',
    description: 'Gaming tournament for champions! Compete in retro 8-bit fighting games, FPS arenas, and Rocket League.',
    date: 'August 30, 2026',
    time: '02:00 PM – 06:00 PM',
    teamSize: '1–2 Members',
    icon: 'Gamepad2',
    registrationUrl: 'https://forms.gle/uTT3CkMsFMK68Pve9',
    venue: 'Student Activity Center Esports Lounge',
    deadline: 'August 28, 2026, 11:59 PM',
    prizes: '🏆 Esports Trophy + $600 | 🎮 Gaming Accessories Pack',
    eligibility: 'Open to all registered YUGA\'26 participants.',
    contactPerson: 'Vikram Singh (Esports Coordinator)',
    contactPhone: '+91 98765 43213',
    rules: [
      'Single elimination tournament brackets.',
      'Official arcade sticks, controllers, and gaming peripherals will be provided.',
      'Participants may bring their own personal controllers after inspection.',
      'Unsportsmanlike behavior results in immediate forfeit.'
    ]
  },
  {
    id: 'tech-quiz',
    title: 'TECH QUIZ',
    category: 'Quiz',
    tagline: 'Battle of the Brightest Minds.',
    description: 'Test your technology knowledge across AI, computer science history, tech trivia, cyber security, and gadgets.',
    date: 'August 31, 2026',
    time: '10:00 AM – 11:30 AM',
    teamSize: '1–2 Members',
    icon: 'HelpCircle',
    registrationUrl: 'https://forms.gle/uTT3CkMsFMK68Pve9',
    venue: 'Auditorium Hall B',
    deadline: 'August 29, 2026, 11:59 PM',
    prizes: '🏆 Quiz Master Trophy + $400 | 🥈 Runner-Up: $200',
    eligibility: 'Open to all students.',
    contactPerson: 'Sneha Roy (Quiz Master)',
    contactPhone: '+91 98765 43214',
    rules: [
      'Preliminary written/digital round followed by live buzzer stage finals.',
      'No electronic devices or smartwatches allowed during quiz rounds.',
      'Buzzer decision by automated digital controller system.',
      'Negative marking applies for incorrect buzzer responses.'
    ]
  },
  {
    id: 'cyber-siege',
    title: 'CYBER SIEGE',
    category: 'Coding',
    tagline: 'Capture The Flag (CTF) Challenge.',
    description: 'Ethical hacking and cybersecurity challenge. Break encryption, find vulnerabilities, and capture secret flags.',
    date: 'August 29, 2026',
    time: '01:00 PM – 05:00 PM',
    teamSize: '1–3 Members',
    icon: 'ShieldAlert',
    registrationUrl: 'https://forms.gle/uTT3CkMsFMK68Pve9',
    venue: 'Cyber Security Lab (Ground Floor)',
    deadline: 'August 26, 2026, 11:59 PM',
    prizes: '🏆 CTF Champion: $700 | 🥈 2nd Place: $350',
    eligibility: 'Students interested in InfoSec and Cybersecurity.',
    contactPerson: 'Rohan Mehta (Security Lead)',
    contactPhone: '+91 98765 43215',
    rules: [
      'Do not attack the CTF infrastructure or network outside target targets.',
      'Flag sharing between teams is grounds for disqualification.',
      'Dynamic scoring based on solve difficulty.'
    ]
  },
  {
    id: 'ai-odyssey',
    title: 'AI ODYSSEY',
    category: 'Development',
    tagline: 'Build next-gen Generative & Machine Learning models.',
    description: 'Solve real-world datasets with machine learning models and generative AI agents in this 6-hour hack challenge.',
    date: 'August 31, 2026',
    time: '11:00 AM – 04:00 PM',
    teamSize: '1–3 Members',
    icon: 'Sparkles',
    registrationUrl: 'https://forms.gle/uTT3CkMsFMK68Pve9',
    venue: 'AI Research Center',
    deadline: 'August 28, 2026, 11:59 PM',
    prizes: '🏆 AI Innovator Award + $800 | Cloud Compute Credits',
    eligibility: 'Undergraduate and graduate students.',
    contactPerson: 'Dr. Priya Nair (Faculty Advisor)',
    contactPhone: '+91 98765 43216',
    rules: [
      'Pre-trained base models (HuggingFace, PyTorch, OpenAI API) allowed.',
      'Models will be evaluated on accuracy, latency, and real-world applicability.'
    ]
  }
];
