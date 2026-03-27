const VILLAIN_NAMES = [
  'Dr. Nefarious', 'Baron Von Chaos', 'The Disruptor', 'Madame Mayhem',
  'Professor Pandemonium', 'Count Dysfunction', 'Lord Inefficiency',
  'The Grand Obfuscator', 'Director Doomsworth', 'Captain Redundancy',
  'General Confusion', 'The Dark Optimist', 'Duchess of Delay',
  'The Passive Aggressor', 'Admiral Overthink'
];

const EVIL_PLANS = [
  'Replace all coffee with decaf worldwide',
  'Make Mondays mandatory twice a week',
  'Redirect all Netflix traffic to PowerPoint tutorials',
  'Install mandatory small talk in all elevators',
  'Make Comic Sans the global default font',
  'Ban air conditioning globally in July',
  'Require video calls for all text-based communication',
  'Make "per my last email" legally binding',
  'Autoplay loud YouTube ads in every meeting',
  'Make every door a push when it should be pull',
  'Remove all close-door buttons from elevators worldwide',
  'Replace all music with hold music',
  'Make printers jam 40% more often',
  'Enforce mandatory fun at all workplaces',
  'Make every website have a cookie consent popup inside another cookie consent popup'
];

const WEAKNESSES = [
  'dad jokes', 'cats that ignore them', 'passive-aggressive emails',
  'poorly formatted Excel sheets', 'running out of printer ink',
  'slow Wi-Fi', 'being called by wrong name', 'CAPTCHA challenges',
  'dial-up connection speeds', 'Comic Sans used unironically',
  'reheated fish in shared office', 'group project dynamics',
  'IKEA assembly instructions', 'unsolicited LinkedIn connections',
  'getting "per my last email" used against them'
];

const LAIR_LOCATIONS = [
  'dormant volcano', 'underwater base (minor flooding issues)',
  'moon (Phase 2, budget approved)', 'abandoned mall food court',
  'repurposed WeWork (hot desking)', 'hollowed-out mountain (OSHA compliant)',
  'suburban cul-de-sac', 'former Blockbuster Video',
  'office above a pizza place', 'cloud (figurative, for now)',
  'retrofitted Chuck E. Cheese', 'penthouse with too many swivel chairs',
  'bunker under a Costco parking lot', 'private island (Airbnb listing still active)'
];

const LAIR_AMENITIES = [
  'Olympic-sized swimming pool', 'shark tank (decorative, mostly)',
  'self-destruct button (tested once, regretted it)',
  'swivel chair collection (94 units)', 'espresso machine (the good kind)',
  'henchmen break room with foosball', 'doomsday clock (decorative)',
  'evil library (mostly self-help books)', 'underground parking (2 spots)',
  'meditation room for evil contemplation', 'laser grid (aesthetic only)',
  'secret tunnel (leads to Starbucks)'
];

const HENCHMEN_DISGUISES = [
  'substitute teacher', 'IT consultant', 'LinkedIn recruiter',
  'HOA president', 'life coach', 'junior VC analyst',
  'Certified Scrum Master', 'content creator', 'brand ambassador',
  'NLP practitioner', 'corporate wellness coach', 'agile consultant',
  'thought leader', 'growth hacker', 'chief vibes officer (the irony)'
];

const EVIL_PLAN_STATUSES = [
  'in progress', 'on hold (budget cuts)', 'pivoting (market fit issues)',
  'postponed (parental leave)', 'awaiting minion certification',
  'market testing', 'in stealth mode', 'discontinued',
  'scheduled for Q4 (every year)', 'pending stakeholder alignment'
];

const HEIST_TARGETS = [
  "the world's largest rubber duck collection",
  "all the world's left socks",
  'the master copy of the Macarena',
  'every USB-C cable on Earth',
  'global decaf coffee reserves',
  "the last shared Netflix password",
  "all the world's promotional pens",
  "humanity's ability to parallel park",
  "the office supply closet (all of it)",
  "the original source code for COBOL",
  "the concept of Mondays",
  "everyone's browser bookmarks",
  "the world's Wi-Fi passwords"
];

const HEIST_WENT_WRONG = [
  'Minion called in sick (no PTO coverage)',
  'Evil plan leaked on Reddit',
  'Traffic was terrible on the way to the heist',
  'Ran out of dramatic orchestral music',
  'Forgot the villain monologue (left it at home)',
  'Security guard was too friendly to intimidate',
  'Escape route was under construction',
  'Evil laugh echoed too much and alerted guards',
  'Henchman took a wrong turn',
  'Plan foiled by an unpaid intern',
  'Getaway vehicle was towed',
  'Villain paused to take a selfie',
  'GPS took them to the wrong building'
];

const THREAT_LEVELS = ['low', 'moderate', 'concerning', 'elevated', 'high', 'theatrical'];

const HERO_CATCHPHRASES = [
  "Looks like your plan just... crashed.",
  "Evil never scales.",
  "I've synergized against worse.",
  "Not on my watch. Or your watch. Any watch.",
  "Your villain arc ends here.",
  "Plot twist: you lose.",
  "I read your evil plan. There's a typo on page 3.",
  "Your threat level is... sub-optimal."
];

module.exports = {
  VILLAIN_NAMES, EVIL_PLANS, WEAKNESSES, LAIR_LOCATIONS, LAIR_AMENITIES,
  HENCHMEN_DISGUISES, EVIL_PLAN_STATUSES, HEIST_TARGETS, HEIST_WENT_WRONG,
  THREAT_LEVELS, HERO_CATCHPHRASES
};
