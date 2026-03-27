const gen = require('../../lib/generators/villain-hq');
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
  ListVillains: (call, cb) => listResponse(call, cb, gen.villains),
  GetVillain: (call, cb) => getResponse(call, cb, gen.villains),
  ListHenchmen: (call, cb) => listResponse(call, cb, gen.henchmen),
  GetHenchman: (call, cb) => getResponse(call, cb, gen.henchmen),
  ListHeists: (call, cb) => listResponse(call, cb, gen.heists),
  GetHeist: (call, cb) => getResponse(call, cb, gen.heists),
  ListLairs: (call, cb) => listResponse(call, cb, gen.lairs),
  GetLair: (call, cb) => getResponse(call, cb, gen.lairs),
  ListHeroes: (call, cb) => listResponse(call, cb, gen.heroes),
  GetHero: (call, cb) => getResponse(call, cb, gen.heroes),
};
