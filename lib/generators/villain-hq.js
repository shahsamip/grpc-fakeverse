const { faker } = require('@faker-js/faker');
const w = require('../wordlists/villain-hq');

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

function villains(id) {
  seed(id);
  return {
    id,
    name: pick(w.VILLAIN_NAMES),
    evil_plan: pick(w.EVIL_PLANS),
    evil_plan_status: pick(w.EVIL_PLAN_STATUSES),
    lair: pick(w.LAIR_LOCATIONS),
    henchmen_count: int(3, 200),
    threat_level: pick(w.THREAT_LEVELS),
    weakness: pick(w.WEAKNESSES),
    arch_nemesis: `Agent ${faker.person.lastName()} (${pick(['retired', 'on vacation', 'dealing with a thing', 'suspiciously unavailable'])})`,
    success_probability: `${int(3, 31)}%`,
    previous_plans_foiled: int(1, 23),
    motivation: pick([
      'revenge for a slight in 1987',
      'was told they couldn\'t do it',
      'misread a LinkedIn DM as a threat',
      'the economy, honestly',
      'a bad performance review',
      'genuinely just bored',
      'a MySpace grudge that escalated'
    ])
  };
}

function henchmen(id) {
  seed(id);
  return {
    id,
    name: faker.person.fullName(),
    disguise: pick(w.HENCHMEN_DISGUISES),
    loyalty_score: int(12, 98),
    days_employed: int(1, 1200),
    last_betrayal: pick(['never (suspicious)', 'once, apologized with a fruit basket', 'technically it was a misunderstanding', 'the incident of 2019 (sealed records)', 'N/A (too new to have had opportunity)']),
    skills: pickN(['disappearing into crowds', 'driving getaway vehicles (badly)', 'carrying heavy equipment', 'looking vaguely suspicious', 'forgetting important codes', 'locking the wrong person in the cell', 'impeccable PowerPoint skills'], int(2, 4)),
    hourly_rate: `$${int(12, 35)}/hr (no benefits)`,
    uniform_complaint: pick(['too tight', 'too itchy', 'doesn\'t come in my size', 'the cape is impractical', 'masks fog up', 'no pockets', 'fine actually, quite comfortable'])
  };
}

function heists(id) {
  seed(id);
  return {
    id,
    target: pick(w.HEIST_TARGETS),
    mastermind: pick(w.VILLAIN_NAMES),
    henchmen_deployed: int(2, 30),
    estimated_value: pick(['priceless', '$12M', '$4B (estimated)', '$0 (moral victory)', 'unclear — we didn\'t think that far ahead', '$47 and a bus pass']),
    success_probability: `${int(5, 45)}%`,
    actual_outcome: pick(['success (technically)', 'partial success', 'spectacular failure', 'abandoned halfway', 'foiled by a dog', 'foiled by a spreadsheet', 'still in progress (2nd year running)']),
    went_wrong: pick(w.HEIST_WENT_WRONG),
    escape_vehicle: pick(['black SUV', 'a Prius (stealth mode)', 'public transit', 'stolen golf cart', 'got an Uber', 'had to walk', 'getaway blimp (signature move)']),
    duration_minutes: int(8, 480)
  };
}

function lairs(id) {
  seed(id);
  return {
    id,
    location: pick(w.LAIR_LOCATIONS),
    codename: `Operation ${faker.word.adjective().toUpperCase()} ${faker.word.noun().toUpperCase()}`,
    square_footage: int(800, 85000),
    amenities: pickN(w.LAIR_AMENITIES, int(2, 5)),
    security_rating: pick(['impenetrable (self-assessed)', 'moderate', 'surprisingly weak', 'under renovation', 'secured by a golden retriever', 'relies heavily on "Do Not Enter" sign']),
    ikea_furnished: faker.datatype.boolean(),
    self_destruct_button: faker.datatype.boolean(),
    monthly_rent: pick(['classified', '$12,000', '$4,200', 'own it outright', 'still arguing with landlord', '$0 (subletting from another villain)']),
    lair_rating: pick(['4.2/5 (Google Maps)', '3.1/5 (too evil per reviewer)', '5/5 (self-reviewed)', 'not listed (keeps a low profile)'])
  };
}

function heroes(id) {
  seed(id);
  return {
    id,
    name: `${faker.person.prefix()} ${faker.person.lastName()} (The ${faker.word.adjective()} ${faker.word.noun()})`,
    catchphrase: pick(w.HERO_CATCHPHRASES),
    superpower: pick(['aggressive optimism', 'being in the right place', 'spreadsheet mastery', 'remembering everyone\'s name', 'fixing the printer', 'reading terms and conditions', 'showing up on time', 'polite but firm emails']),
    weakness: pick(['dad jokes', 'being asked to pick a restaurant', 'CAPTCHA challenges', 'parallel parking', 'opening blister packaging', 'remembering passwords']),
    arch_nemesis: pick(w.VILLAIN_NAMES),
    cases_solved: int(2, 89),
    win_rate: `${int(55, 94)}%`,
    preferred_entry: pick(['dramatic window smash', 'through the front door (politely)', 'elevator (takes a while)', 'wrong building first (Google Maps again)', 'was already inside, waiting']),
    day_job: pick(['accountant', 'substitute teacher', 'Uber driver', 'barista', 'freelance web developer', 'HR manager', 'dental hygienist', 'parking enforcement'])
  };
}

module.exports = { villains, henchmen, heists, lairs, heroes };
