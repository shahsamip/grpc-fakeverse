const gen = require('../../lib/generators/silicon-valley');
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
  ListStartups: (call, cb) => listResponse(call, cb, gen.startups),
  GetStartup: (call, cb) => getResponse(call, cb, gen.startups),
  ListEmployees: (call, cb) => listResponse(call, cb, gen.employees),
  GetEmployee: (call, cb) => getResponse(call, cb, gen.employees),
  ListInvestors: (call, cb) => listResponse(call, cb, gen.investors),
  GetInvestor: (call, cb) => getResponse(call, cb, gen.investors),
  ListPivots: (call, cb) => listResponse(call, cb, gen.pivots),
  GetPivot: (call, cb) => getResponse(call, cb, gen.pivots),
  ListProducts: (call, cb) => listResponse(call, cb, gen.products),
  GetProduct: (call, cb) => getResponse(call, cb, gen.products),
  ListStandups: (call, cb) => listResponse(call, cb, gen.standups),
  GetStandup: (call, cb) => getResponse(call, cb, gen.standups),
};
