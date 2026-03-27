const { faker } = require('@faker-js/faker');
const w = require('../wordlists/corporate-hell');

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

function meetings(id) {
  seed(id);
  const attendees = int(3, 22);
  const duration = pick([30, 45, 60, 90, 120]);
  return {
    id,
    title: pick(w.MEETING_TITLES),
    organizer: faker.person.fullName(),
    attendees_invited: attendees,
    attendees_who_knew_why: int(0, Math.min(2, attendees)),
    duration_minutes: duration,
    could_have_been_email: int(0, 10) > 1,
    decisions_made: int(0, 1),
    action_items: pickN(w.ACTION_ITEMS, int(2, 6)),
    follow_up_meetings_scheduled: int(0, 4),
    someone_joined_late: true,
    someone_left_early: faker.datatype.boolean(),
    recurring: faker.datatype.boolean(),
    recurring_reason: pick(['accountability', 'tradition at this point', 'nobody cancelled it', 'fear', 'the calendar just kept generating it'])
  };
}

function emails(id) {
  seed(id);
  return {
    id,
    subject: pick(w.EMAIL_SUBJECTS),
    sender: faker.person.fullName(),
    recipients_to: int(1, 3),
    recipients_cc: int(2, 15),
    recipients_bcc: int(0, 2),
    reply_number_in_chain: int(1, 47),
    passive_aggression_level: pick(w.PASSIVE_AGGRESSION_LEVELS),
    actual_point: pick(['unclear', 'could have been a Slack message', 'could have been a phone call', 'exists only to establish a paper trail', 'no discernible point', 'a passive request disguised as an FYI']),
    closing: pick(w.EMAIL_CLOSINGS),
    time_sent: pick(['8:47am (before you even arrived)', '11:59pm (message received)', '2:14am (they are not okay)', 'exactly 30 seconds after their last email']),
    read_receipts_requested: faker.datatype.boolean(),
    contains_the_phrase: pick(['"per my last email"', '"as discussed"', '"just to clarify"', '"friendly reminder"', '"looping in leadership"', '"going forward"', '"circling back"'])
  };
}

function okrs(id) {
  seed(id);
  return {
    id,
    quarter: pick(['Q1', 'Q2', 'Q3', 'Q4']),
    year: int(2022, 2026),
    objective: pick(w.OKR_OBJECTIVES),
    key_result: pick(w.OKR_KEY_RESULTS),
    owner: faker.person.fullName(),
    progress: `${int(0, 40)}%`,
    achieved: false,
    excuse: pick(w.OKR_EXCUSES),
    carried_forward_count: int(1, 6),
    confidence_level: pick(['high (at the start of quarter)', 'medium (now)', 'low (honestly)', 'it depends', 'define confidence', 'green (we color-coded without defining green)']),
    last_reviewed: pick(['the last all-hands', 'never', 'Q1 (it\'s Q4)', 'whenever HR asked', 'unclear — it\'s in a Notion page somewhere'])
  };
}

function employees(id) {
  seed(id);
  const years = int(1, 20);
  const soulIndex = Math.min(Math.floor(years / 2), 9);
  const soulLeft = w.SOUL_DESCRIPTORS[soulIndex];
  return {
    id,
    name: faker.person.fullName(),
    title: pick(w.EMPLOYEE_TITLES),
    years_at_company: years,
    direct_reports: int(0, 12),
    manager: faker.person.fullName(),
    skip_level_manager: faker.person.fullName(),
    soul_remaining: soulLeft,
    hours_per_week_in_meetings: int(20, 55),
    vacation_days_used_this_year: int(0, 3),
    vacation_days_accrued: int(15, 30),
    linkedin_looking: faker.datatype.boolean(),
    last_genuine_laugh_at_work: pick(['last Tuesday', '2019', 'unclear', 'the holiday party (open bar)', 'never (but smiled once)', 'Q3, the meme in the all-hands']),
    favorite_meeting_excuse: pick(['I have a hard stop', 'Can we take this offline?', 'I\'ll have to check my calendar', 'Can someone send me the recording?', 'I\'m on mute'])
  };
}

function expenses(id) {
  seed(id);
  const amount = int(47, 8400);
  return {
    id,
    submitted_by: faker.person.fullName(),
    category: pick(w.EXPENSE_CATEGORIES),
    amount: `$${amount.toLocaleString()}`,
    description: `${pick(['strategic', 'essential', 'team-building-related', 'technically business', 'leadership-approved (verbally)'])} expense`,
    receipt_attached: faker.datatype.boolean(),
    approved: pick([true, true, false, 'pending (90 days)', 'under review', 'approved with note', false]),
    approver_comment: pick([
      'Approved. No further questions.',
      'Can you clarify why this was in Vegas?',
      'Please resubmit with receipt.',
      'Denied. Spa is not a business expense. (Yet.)',
      'Approved. I was there.',
      '"Team building" is vague. Approved anyway.',
      'This is the 4th "client lunch" this week.',
      null
    ]),
    days_in_reimbursement_purgatory: int(0, 180)
  };
}

module.exports = { meetings, emails, okrs, employees, expenses };
