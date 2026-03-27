const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { ReflectionService } = require('@grpc/reflection');

const PROTO_DIR = path.join(__dirname, '..', 'proto');

const LOADER_OPTIONS = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
  includeDirs: [PROTO_DIR]
};

// Load all protos in one call so reflection gets a single merged definition
const allProtoFiles = [
  'silicon_valley.proto',
  'villain_hq.proto',
  'corporate_hell.proto',
  'multiverse.proto'
].map(f => path.join(PROTO_DIR, f));

const pkgDef = protoLoader.loadSync(allProtoFiles, LOADER_OPTIONS);
const grpcObj = grpc.loadPackageDefinition(pkgDef);

// Load service handlers
const siliconValleyHandlers = require('./services/silicon-valley');
const villainHqHandlers = require('./services/villain-hq');
const corporateHellHandlers = require('./services/corporate-hell');
const multiverseHandlers = require('./services/multiverse');

// Create server
const server = new grpc.Server();

// Add services
server.addService(grpcObj.fakeverse.silicon_valley.SiliconValley.service, siliconValleyHandlers);
server.addService(grpcObj.fakeverse.villain_hq.VillainHQ.service, villainHqHandlers);
server.addService(grpcObj.fakeverse.corporate_hell.CorporateHell.service, corporateHellHandlers);
server.addService(grpcObj.fakeverse.multiverse.Multiverse.service, multiverseHandlers);

// Add reflection
const reflection = new ReflectionService(pkgDef);
reflection.addToServer(server);

// Start
const PORT = process.env.PORT || '50051';
const HOST = process.env.HOST || '0.0.0.0';

server.bindAsync(`${HOST}:${PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }

  console.log(`
  🚀 Fakeverse gRPC Server running on port ${port}

  Services:
    fakeverse.silicon_valley.SiliconValley  — startups, employees, investors, pivots, products, standups
    fakeverse.villain_hq.VillainHQ          — villains, henchmen, heists, lairs, heroes
    fakeverse.corporate_hell.CorporateHell  — meetings, emails, okrs, employees, expenses
    fakeverse.multiverse.Multiverse         — persons, universes, timelines, anomalies

  Try it:
    grpcurl -plaintext localhost:${port} list
    grpcurl -plaintext -d '{"id": 1}' localhost:${port} fakeverse.silicon_valley.SiliconValley/GetStartup
    grpcurl -plaintext -d '{"page_size": 5}' localhost:${port} fakeverse.villain_hq.VillainHQ/ListVillains
  `);
});
