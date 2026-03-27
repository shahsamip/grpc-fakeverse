const { faker } = require('@faker-js/faker');
const w = require('../wordlists/multiverse');

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

function universeId(numericSeed) {
  const letter = w.UNIVERSE_LETTERS[numericSeed % w.UNIVERSE_LETTERS.length];
  const number = (numericSeed % 99) + 1;
  const variant = w.UNIVERSE_VARIANTS[numericSeed % w.UNIVERSE_VARIANTS.length];
  return `Universe-${number}${letter}${variant}`;
}

function persons(id) {
  seed(id);
  const numericId = typeof id === 'number' ? id : simpleHash(String(id));
  const uId = universeId(numericId);
  return {
    id,
    name: faker.person.fullName(),
    universe: uId,
    occupation: pick(w.OCCUPATIONS),
    universe_divergence: `${int(1945, 2020)} — ${pick(w.DIVERGENCE_EVENTS)}`,
    fun_fact: pick([
      `In this timeline, ${faker.person.firstName()} invented the semicolon`,
      `${uId} is the only universe where Comic Sans is considered tasteful`,
      `This version of them has never experienced a Monday`,
      `They hold the world record for longest time spent in a loading screen`,
      `In their universe, the printer always works`,
      `They once read the full iTunes terms and conditions`,
      `They are the reason \'Reply All\' was briefly banned in their universe`,
      `Their doppelganger in Universe-Prime is an Excel influencer`
    ]),
    nemesis: `${faker.person.firstName()} (${universeId(numericId + 7)})`,
    current_mood: pick(['suspiciously cheerful', 'cautiously optimistic', 'existentially fine', 'confused but coping', 'deja vu (constant)', 'phasing in and out slightly', 'fine for someone in a deprecated timeline']),
    timeline_stability: pick(w.UNIVERSE_STABILITIES)
  };
}

function universes(id) {
  seed(id);
  const numericId = typeof id === 'number' ? id : simpleHash(String(id));
  const uId = universeId(numericId);
  return {
    id,
    universe_id: uId,
    key_difference: pick(w.UNIVERSE_KEY_DIFFERENCES),
    stability: pick(w.UNIVERSE_STABILITIES),
    population: `${(int(1, 999) / 100).toFixed(2)}B (approximate)`,
    age_in_years: int(4, 14) + ' billion',
    known_anomalies: int(0, 7),
    diverged_from: `Universe-${int(1, 99)}${pick(w.UNIVERSE_LETTERS)}`,
    divergence_year: int(1940, 2020),
    recommended_for_visiting: faker.datatype.boolean(),
    travel_advisory: pick([
      'safe for most travelers',
      'causality loops present — bring a notebook',
      'Tuesday is unreliable — plan accordingly',
      'do not make eye contact with your doppelganger',
      'printers are sentient — be respectful',
      'closed to visitors (under renovation)',
      'no known issues, which is itself suspicious'
    ])
  };
}

function timelines(id) {
  seed(id);
  return {
    id,
    timeline_id: `TL-${String(id).padStart(5, '0')}`,
    divergence_year: int(1900, 2024),
    caused_by: pick(w.DIVERGENCE_EVENTS),
    consequence: pick(w.TIMELINE_CONSEQUENCES),
    affected_universe_count: int(1, 47),
    resolved: faker.datatype.boolean(),
    resolution_method: pick([
      'spontaneous recalibration',
      'a very strongly worded memo',
      'still unresolved (ticket open since 2017)',
      'the universe sort of agreed to disagree',
      'intervention by temporal HR',
      'patched in v2.3 of the timeline',
      'unresolved but everyone adapted',
      null
    ]),
    paradox_risk: pick(['none', 'low', 'moderate', 'high', 'already happened', 'technically paradox-proof by design', 'yes'])
  };
}

function anomalies(id) {
  seed(id);
  return {
    id,
    type: pick(w.ANOMALY_TYPES),
    affected_area: pick(w.ANOMALY_AFFECTED_AREAS),
    threat_to_fabric_of_reality: faker.datatype.boolean(),
    discovered_by: pick(['a very confused barista', 'an astronomer who didn\'t believe it', 'the IT department (unrelated ticket)', 'a dog', 'routine audit', 'somebody\'s grandmother', 'a LinkedIn notification']),
    duration: pick(['3 minutes', '47 hours', 'ongoing', '2 days and a Tuesday', 'instantaneous but felt long', 'unclear — time was also affected', 'still calculating']),
    severity: pick(['minor', 'moderate', 'severe', 'theatrical', 'comic', 'technically fine but emotionally not']),
    recommended_action: pick([
      'wait and see',
      'do not look directly at it',
      'fill out form B-47 (temporal incident report)',
      'ignore it and hope it resolves',
      'contact your nearest timeline technician',
      'avoid Tuesdays for the next 2 weeks',
      'turn it off and on again'
    ]),
    currently_contained: faker.datatype.boolean()
  };
}

module.exports = { persons, universes, timelines, anomalies };
