const gen = require('../../lib/generators/multiverse');
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
  ListPersons: (call, cb) => listResponse(call, cb, gen.persons),
  GetPerson: (call, cb) => getResponse(call, cb, gen.persons),
  ListUniverses: (call, cb) => listResponse(call, cb, gen.universes),
  GetUniverse: (call, cb) => getResponse(call, cb, gen.universes),
  ListTimelines: (call, cb) => listResponse(call, cb, gen.timelines),
  GetTimeline: (call, cb) => getResponse(call, cb, gen.timelines),
  ListAnomalies: (call, cb) => listResponse(call, cb, gen.anomalies),
  GetAnomaly: (call, cb) => getResponse(call, cb, gen.anomalies),
};
