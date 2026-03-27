# grpc-fakeverse

A free, fake-data gRPC server for testing and learning. Four themed services, 40 RPCs, fully typed protobuf contracts, and gRPC reflection enabled — so you can call it with no proto files at all.

> **Interactive docs & live data preview →** [fakeverse-grpc.vercel.app](https://fakeverse-grpc.vercel.app)

---

## Quick start

```bash
git clone https://github.com/shahsamip/grpc-fakeverse && cd grpc-fakeverse
npm install
node src/server.js
```

Server starts on `localhost:50051`. That's it.

---

## Try it immediately (no client code needed)

Install [grpcurl](https://github.com/fullstorydev/grpcurl#installation), then:

```bash
# List all available services
grpcurl -plaintext localhost:50051 list

# List RPCs on a service
grpcurl -plaintext localhost:50051 describe fakeverse.silicon_valley.SiliconValley

# Get 5 startups
grpcurl -plaintext \
  -d '{"page_size": 5, "page": 1}' \
  localhost:50051 \
  fakeverse.silicon_valley.SiliconValley/ListStartups

# Get a single startup by ID (same ID always returns same data)
grpcurl -plaintext \
  -d '{"id": 42}' \
  localhost:50051 \
  fakeverse.silicon_valley.SiliconValley/GetStartup
```

---

## Services

| Service | Package | RPCs |
|---|---|---|
| 🚀 Silicon Valley BS | `fakeverse.silicon_valley` | Startups, Employees, Investors, Pivots, Products, Standups |
| 🦹 Villain HQ | `fakeverse.villain_hq` | Villains, Henchmen, Heists, Lairs, Heroes |
| 📊 Corporate Hell | `fakeverse.corporate_hell` | Meetings, Emails, OKRs, Employees, Expenses |
| 🌌 Multiverse | `fakeverse.multiverse` | Persons, Universes, Timelines, Anomalies |

Each service exposes a `List<Resource>` (paginated) and `Get<Resource>` (by ID) RPC for every resource — 40 RPCs total.

### Request messages

```protobuf
// For List* RPCs
message ListRequest {
  int32 page_size = 1;  // default: 10, max: 100
  int32 page      = 2;  // default: 1
  optional int32 seed = 3;  // fix the seed for deterministic results
}

// For Get* RPCs
message GetByIdRequest {
  int32 id = 1;  // any integer — same ID always returns the same item
}
```

---

## Connecting from code

### Node.js

```js
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const pkgDef = protoLoader.loadSync('proto/silicon_valley.proto', {
  keepCase: true,
  defaults: true,
  includeDirs: ['./proto']
});
const proto = grpc.loadPackageDefinition(pkgDef);

const client = new proto.fakeverse.silicon_valley
  .SiliconValley('localhost:50051', grpc.credentials.createInsecure());

client.ListStartups({ page_size: 5, page: 1 }, (err, res) => {
  console.log(JSON.stringify(res, null, 2));
});
```

### Python

```python
import grpc
from silicon_valley_pb2 import ListRequest
from silicon_valley_pb2_grpc import SiliconValleyStub

channel = grpc.insecure_channel('localhost:50051')
stub = SiliconValleyStub(channel)

response = stub.ListStartups(ListRequest(page_size=5, page=1))
print(response)
```

### Go

```go
import (
    "context"
    "google.golang.org/grpc"
    "google.golang.org/grpc/credentials/insecure"
    pb "your-module/proto/silicon_valley"
)

conn, _ := grpc.NewClient("localhost:50051",
    grpc.WithTransportCredentials(insecure.NewCredentials()),
)
client := pb.NewSiliconValleyClient(conn)

resp, _ := client.ListStartups(context.Background(),
    &pb.ListRequest{PageSize: 5, Page: 1},
)
```

---

## How data works

- **Deterministic by ID** — `GetStartup({id: 7})` always returns the same startup. Safe to hardcode in tests.
- **Paginated lists** — use `page_size` and `page` to paginate. Default page size is 10.
- **Seeded lists** — pass `seed` in a `ListRequest` for fully reproducible list results.
- **No database** — everything is generated on the fly using [`@faker-js/faker`](https://fakerjs.dev).

---

## Project structure

```
proto/          # .proto definitions for all 4 services
src/
  server.js     # gRPC server entry point (port 50051)
  services/     # RPC handler implementations
  util/         # Pagination helper
lib/
  generators/   # Faker-based data generators per theme
  wordlists/    # Theme-specific vocabulary
```

---

## Proto files

The `.proto` files are in the `proto/` directory. Because the server has **gRPC reflection** enabled, you don't need them to make calls — tools like `grpcurl`, Postman, and Kreya will auto-discover all services and message shapes.

---

## License

MIT
