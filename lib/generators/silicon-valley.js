const { faker } = require('@faker-js/faker');
const w = require('../wordlists/silicon-valley');

function simpleHash(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (Math.imul(31, h) + str.charCodeAt(i)) | 0;
  return Math.abs(h);
}

function seed(id) {
  const n = typeof id === 'number' ? id : (parseInt(id) || simpleHash(String(id)));
  faker.seed(n);
  return n;
}

function pick(arr) { return faker.helpers.arrayElement(arr); }
function pickN(arr, n) { return faker.helpers.arrayElements(arr, n); }
function int(min, max) { return faker.number.int({ min, max }); }

function startupName() {
  return pick(w.STARTUP_PREFIXES) + pick(w.STARTUP_SUFFIXES);
}

function tagline(industry) {
  const tpl = pick(w.TAGLINE_TEMPLATES);
  const industry2 = pick(w.INDUSTRIES);
  const year = int(1970, 2010);
  return tpl.replace('{industry}', industry).replace('{industry2}', industry2).replace('{year}', year);
}

function startups(id) {
  seed(id);
  const industry = pick(w.INDUSTRIES);
  return {
    id,
    name: startupName(),
    tagline: tagline(industry),
    disrupting: industry,
    founded: pick(['yesterday', 'last Tuesday', '3 weeks ago', 'technically not yet', 'during a hackathon']),
    employees: int(1, 6),
    valuation: pick(w.VALUATIONS),
    runway_months: int(1, 18),
    pivot_count: int(0, 12),
    synergy_score: int(60, 100),
    tech_stack: pickN(w.TECH_STACKS, int(2, 5)),
    current_status: pick(['pivoting', 'in stealth', 'fundraising', 'pre-launch', 'post-launch (no users yet)', 'acqui-hired ourselves']),
    office: pick(w.OFFICES),
    last_pivot_reason: pick(w.PIVOT_REASONS),
    investors: int(0, 4) === 0 ? 'bootstrapped (dad\'s savings)' : `${int(1, 5)} angels + ${pick(['a16z', 'YC (rejected)', 'SoftBank (their fault)', 'some VC named Brad', 'one very enthusiastic dentist'])}`
  };
}

function employees(id) {
  seed(id);
  return {
    id,
    name: faker.person.fullName(),
    title: pick(w.FANCY_TITLES),
    startup: startupName(),
    equity: `0.${String(int(1, 999)).padStart(4, '0')}%`,
    salary: `$${int(60, 220)}k (in equity, mostly)`,
    ping_pong_rank: int(1, 20),
    kombucha_preference: pick(w.KOMBUCHA_FLAVORS),
    hours_in_meetings_per_day: int(4, 9),
    actual_work_hours_per_day: parseFloat((int(1, 30) / 10).toFixed(1)),
    linkedin_connections: int(500, 8000),
    last_promotion_reason: pick(['great energy', 'vibes', 'was in the room', 'asked loudly', 'longest tenure (3 months)', 'most Slack messages sent']),
    wfh_setup: pick(['ring light (mandatory)', 'fake Maldives background', 'cat occasionally appears', 'standing desk they never stand at', 'couch in pajamas', 'a coffee shop (expensed)'])
  };
}

function investors(id) {
  seed(id);
  const firstNames = ['Brad', 'Chad', 'Todd', 'Brent', 'Scott', 'Kyle', 'Blake', 'Spencer', 'Tanner', 'Colt'];
  const lastNames = ['Thorngate', 'Westbrook', 'Fairchild', 'Pressman', 'Dunmore', 'Whitfield', 'Ashworth', 'Stonebridge'];
  const suffixes = ['III', 'Jr.', 'IV', 'II', ''];
  const funds = ['Disruption Capital', 'Moonshot Ventures', 'Paradigm Partners', 'Synergy Fund', 'Alpha Omega Capital', '10x Ventures', 'Vibes Capital', 'Forward Forward Fund'];
  return {
    id,
    name: `${pick(firstNames)} ${pick(lastNames)} ${pick(suffixes)}`.trim(),
    fund: `${pick(funds)} ${pick(['LLC', 'Partners', 'Group', 'Management'])}`,
    aum: `$${pick(['200M', '800M', '1.2B', '4B', '500M', '12B'])}`,
    portfolio_companies: int(12, 200),
    unicorns_created: int(0, 8),
    checks_written_today: int(0, 5),
    favorite_buzzwords: pickN(['10x', 'moonshot', 'paradigm shift', 'disruption', 'category creator', 'network effects', 'moat', 'blitzscaling', 'TAM', 'asymmetric upside'], int(3, 5)),
    currently_disrupting: pick(['sleep', 'work-life balance', 'their marriage', 'the golf industry', 'founder mental health', 'common sense']),
    preferred_pitch_length: pick(['under 60 seconds', 'a single tweet', 'vibes only', '3 slides max', 'the napkin sketch is enough', 'just the deck title']),
    out_of_office: pick(['Burning Man', 'Sun Valley', 'Jackson Hole', 'Davos', 'another LP meeting', 'their Napa house'])
  };
}

function pivots(id) {
  seed(id);
  return {
    id,
    startup: startupName(),
    from: pick(w.PIVOT_FROMS),
    to: pick(w.PIVOT_TOS),
    reason: pick(w.PIVOT_REASONS),
    announced_via: pick(w.PIVOT_ANNOUNCEMENTS),
    days_since_last_pivot: int(1, 90),
    synergy_increase: `${int(50, 500)}%`,
    users_lost: int(0, 47),
    team_reaction: pick(['excited', 'confused', 'already resigned', 'they found out via tweet', 'cautiously on board', 'indifferent (used to it)'])
  };
}

function products(id) {
  seed(id);
  const industry = pick(w.INDUSTRIES);
  const techStack = pickN(w.TECH_STACKS, int(2, 4));
  return {
    id,
    name: startupName(),
    tagline: tagline(industry),
    problem_statement: `The ${industry} industry is broken. We're fixing it with ${techStack[0]}.`,
    tech: techStack,
    market_size: `$${int(1, 999)}T (our estimate)`,
    mvp_status: pick(w.PRODUCT_STATUSES),
    app_store_rating: pick(['not on app store yet', '2.1 stars', '4.9 stars (rated by founders)', 'removed for ToS violation', 'N/A (MVP is a spreadsheet)']),
    waitlist_signups: int(3, 9999),
    paying_customers: int(0, 3),
    monthly_recurring_revenue: pick(['$0', '$12', '$420', '$0 (pre-revenue by choice)', 'negative (long story)']),
    competitors: pick(['none (we checked LinkedIn)', 'technically Google', 'a startup that raised $200M last week', 'ourselves, from last pivot', 'irrelevant — different category'])
  };
}

function standups(id) {
  seed(id);
  return {
    id,
    employee: faker.person.fullName(),
    title: pick(w.FANCY_TITLES),
    yesterday: pick(w.STANDUP_YESTERDAY),
    today: pick(w.STANDUP_TODAY),
    blockers: pick(w.BLOCKERS),
    actually_did_yesterday: pick(w.ACTUALLY_DID),
    zoom_background: pick(['fake Maldives beach', 'fake office (they\'re in bed)', 'default bokeh blur', 'company branded (ironically)', 'unmuted cat chaos', 'their living room (unintentional)']),
    attendance: pick(['camera on, mic on', 'camera off, mic on', 'camera off, mic off (ghosting)', 'multitasking openly', 'replied with a Loom video instead'])
  };
}

module.exports = { startups, employees, investors, pivots, products, standups };
