import { ScheduleItem } from '../types';

export const SCHEDULE_DATA: ScheduleItem[] = [
  // ==========================================
  // DAY 1 — JAN 07
  // ==========================================
  {
    id: 's1-reg',
    day: 1,
    dayTitle: 'DAY 1 — JAN 07',
    time: '09:00 AM – 05:00 PM',
    title: 'Registration & Spot Desk',
    description: 'Fest check-in desk, participant ID kit distribution, and on-spot registrations.',
    venue: 'Campus',
    category: 'Ceremony',
    icon: 'UserCheck'
  },
  {
    id: 's1-inaug',
    day: 1,
    dayTitle: 'DAY 1 — JAN 07',
    time: '10:00 AM – 11:00 AM',
    title: 'Inauguration',
    description: 'Grand opening ceremony of YUGA\'26 with dignitaries, lamp lighting, and keynote address.',
    venue: 'Main Stage',
    category: 'Ceremony',
    icon: 'Sparkles'
  },
  {
    id: 's1-output',
    day: 1,
    dayTitle: 'DAY 1 — JAN 07',
    time: '10:00 AM – 12:00 PM',
    title: 'Output Prediction',
    description: 'Analyze tricky programming code snippets and predict their accurate runtime output.',
    venue: 'Classroom',
    category: 'Competition',
    icon: 'Code2'
  },
  {
    id: 's1-ws-git',
    day: 1,
    dayTitle: 'DAY 1 — JAN 07',
    time: '10:00 AM – 01:00 PM',
    title: 'Workshop: Git & GitHub',
    description: 'Hands-on training on Git version control, GitHub repository management, and teamwork workflows.',
    venue: 'Classroom',
    category: 'Workshop',
    icon: 'Wrench'
  },
  {
    id: 's1-ws-pottery',
    day: 1,
    dayTitle: 'DAY 1 — JAN 07',
    time: '10:00 AM – 01:00 PM',
    title: 'Workshop: Pottery',
    description: 'Hands-on creative clay craft and traditional pottery shaping session.',
    venue: 'Classroom',
    category: 'Workshop',
    icon: 'Sparkles'
  },
  {
    id: 's1-ui-ux',
    day: 1,
    dayTitle: 'DAY 1 — JAN 07',
    time: '10:00 AM – 04:00 PM',
    title: 'UI/UX Competition',
    description: 'Showcase design creativity and user experience problem-solving through interactive mockups.',
    venue: 'Lab',
    category: 'Competition',
    icon: 'Palette'
  },
  /*
  // =========================================================================================
  // TEMPORARILY DISABLED SCHEDULE SESSIONS (TED TALK & MOVIE)
  // Preserved below to re-enable anytime if needed later:
  // =========================================================================================
  {
    id: 's1-ted',
    day: 1,
    dayTitle: 'DAY 1 — JAN 07',
    time: '11:00 AM – 12:30 PM',
    title: 'TED Talk',
    description: 'Inspiring speaker session featuring ideas, innovation, technology, and entrepreneurship.',
    venue: 'Main Stage',
    category: 'Session',
    icon: 'Presentation'
  },
  {
    id: 's1-movie',
    day: 1,
    dayTitle: 'DAY 1 — JAN 07',
    time: '02:00 PM – 04:00 PM',
    title: 'Movie',
    description: 'Special movie screening and promotional session on the main stage.',
    venue: 'Main Stage',
    category: 'Session',
    icon: 'Film'
  },
  */
  {
    id: 's1-ws-prompting',
    day: 1,
    dayTitle: 'DAY 1 — JAN 07',
    time: '02:00 PM – 05:00 PM',
    title: 'Workshop: Mastering Strategic Prompting',
    description: 'In-depth exploration of advanced prompt engineering techniques and strategic GenAI application.',
    venue: 'Classroom',
    category: 'Workshop',
    icon: 'Bot'
  },

  // ==========================================
  // DAY 2 — JAN 08
  // ==========================================
  {
    id: 's2-reg',
    day: 2,
    dayTitle: 'DAY 2 — JAN 08',
    time: '09:00 AM – 01:00 PM',
    title: 'Registration & Spot Desk',
    description: 'Day 2 desk check-in, attendance verification, and on-spot registrations.',
    venue: 'Campus',
    category: 'Ceremony',
    icon: 'UserCheck'
  },
  {
    id: 's2-guess-tech',
    day: 2,
    dayTitle: 'DAY 2 — JAN 08',
    time: '10:00 AM – 12:00 PM',
    title: 'Guess the Technology',
    description: 'Decode visual clues, logos, and tech riddles to identify tools and technologies.',
    venue: 'Classroom',
    category: 'Competition',
    icon: 'HelpCircle'
  },
  {
    id: 's2-quiz',
    day: 2,
    dayTitle: 'DAY 2 — JAN 08',
    time: '10:00 AM – 12:00 PM',
    title: 'Quiz',
    description: 'Battle of wits covering computer science, technology breakthroughs, and IT trivia.',
    venue: 'Classroom',
    category: 'Competition',
    icon: 'Trophy'
  },
  {
    id: 's2-fashion',
    day: 2,
    dayTitle: 'DAY 2 — JAN 08',
    time: '10:00 AM – 01:00 PM',
    title: 'Fashion Show',
    description: 'Ramp walk showcasing style, confidence, and themed costume presentations.',
    venue: 'Main Stage',
    category: 'Competition',
    icon: 'Sparkles'
  },
  {
    id: 's2-ws-security',
    day: 2,
    dayTitle: 'DAY 2 — JAN 08',
    time: '10:00 AM – 01:00 PM',
    title: 'Workshop: Password Attacks & Phishing Awareness',
    description: 'Practical cybersecurity session exploring real-world password vulnerabilities and phishing defenses.',
    venue: 'Classroom',
    category: 'Workshop',
    icon: 'Cpu'
  },
  {
    id: 's2-hackathon',
    day: 2,
    dayTitle: 'DAY 2 — JAN 08',
    time: '10:00 AM – 04:00 PM',
    title: 'Hackathon',
    description: 'Sprint innovation challenge to build and prototype software/hardware solutions.',
    venue: 'Lab',
    category: 'Competition',
    icon: 'Flame'
  },
  {
    id: 's2-project-expo',
    day: 2,
    dayTitle: 'DAY 2 — JAN 08',
    time: '10:00 AM – 04:00 PM',
    title: 'Project Expo',
    description: 'Live exhibition and demonstration of engineering prototypes, software, and hardware builds.',
    venue: 'Main Hall',
    category: 'Competition',
    icon: 'Rocket'
  },
  {
    id: 's2-gaming',
    day: 2,
    dayTitle: 'DAY 2 — JAN 08',
    time: '10:00 AM – 04:00 PM',
    title: 'Gaming',
    description: 'High-energy multiplayer esports showdown across battle-royale and sports gaming titles.',
    venue: 'Classroom',
    category: 'Gaming',
    icon: 'Gamepad2'
  },
  {
    id: 's2-treasure',
    day: 2,
    dayTitle: 'DAY 2 — JAN 08',
    time: '10:00 AM – 04:00 PM',
    title: 'Treasure Hunt',
    description: 'Campus-wide puzzle pursuit deciphering cryptic clues to find the hidden treasure.',
    venue: 'Campus',
    category: 'Competition',
    icon: 'Compass'
  },
  {
    id: 's2-debugging',
    day: 2,
    dayTitle: 'DAY 2 — JAN 08',
    time: '01:00 PM – 04:00 PM',
    title: 'Debugging',
    description: 'Race against the clock to hunt down, isolate, and fix tricky code bugs.',
    venue: 'Lab',
    category: 'Competition',
    icon: 'Code2'
  },
  // Temporarily commented out: College Band
  /*
  {
    id: 's2-band',
    day: 2,
    dayTitle: 'DAY 2 — JAN 08',
    time: '02:00 PM – 04:00 PM',
    title: 'College Band',
    description: 'Electrifying live musical concert and performance by college music bands.',
    venue: 'Main Stage',
    category: 'Ceremony',
    icon: 'Music'
  },
  */
  {
    id: 's2-ws-uiux',
    day: 2,
    dayTitle: 'DAY 2 — JAN 08',
    time: '02:00 PM – 05:00 PM',
    title: 'Workshop: UI/UX Designing',
    description: 'Hands-on design workshop crafting user flows, wireframes, and digital product prototypes.',
    venue: 'Classroom',
    category: 'Workshop',
    icon: 'Palette'
  },
  {
    id: 's2-closing',
    day: 2,
    dayTitle: 'DAY 2 — JAN 08',
    time: '05:00 PM – 06:00 PM',
    title: 'Closing Ceremony',
    description: 'Prize distribution, champion felicitations, vote of thanks, and formal festival conclusion.',
    venue: 'Main Stage',
    category: 'Ceremony',
    icon: 'Award'
  },
  {
    id: 's2-proshow',
    day: 2,
    dayTitle: 'DAY 2 — JAN 08',
    time: '06:00 PM – 08:30 PM',
    title: 'Pro Show',
    description: 'The grand festival finale featuring live stage performances, music, and celebration.',
    venue: 'Main Stage',
    category: 'Ceremony',
    icon: 'Sparkles'
  }
];
