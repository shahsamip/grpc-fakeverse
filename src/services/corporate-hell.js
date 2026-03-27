const gen = require('../../lib/generators/corporate-hell');
const { paginate, clean } = require('../util/pagination');

function listResponse(call, callback, genFn) {
  const items = paginate(call.request, genFn);
  callback(null, {
    items,
    page: call.request.page || 1,
    page_size: call.request.page_size || 10
  });
}

function getResponse(call, callback, genFn) {
  callback(null, clean(genFn(call.request.id)));
}

module.exports = {
  ListMeetings: (call, cb) => listResponse(call, cb, gen.meetings),
  GetMeeting: (call, cb) => getResponse(call, cb, gen.meetings),
  ListEmails: (call, cb) => listResponse(call, cb, gen.emails),
  GetEmail: (call, cb) => getResponse(call, cb, gen.emails),
  ListOkrs: (call, cb) => listResponse(call, cb, gen.okrs),
  GetOkr: (call, cb) => getResponse(call, cb, gen.okrs),
  ListEmployees: (call, cb) => listResponse(call, cb, gen.employees),
  GetEmployee: (call, cb) => getResponse(call, cb, gen.employees),
  ListExpenses: (call, cb) => listResponse(call, cb, gen.expenses),
  GetExpense: (call, cb) => getResponse(call, cb, gen.expenses),
};
