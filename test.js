const test = require("flug")

const delta = require("./index.js")
const nums = require("./test-data/epsg-codes.json")

test("example", ({ eq }) => {
  const sample = nums.slice(0, 10);
  const encoded = delta.encode(sample);
  eq(encoded, [4326,1,2,10,2,2,2,2,2,2]);
  eq(delta.decode(encoded), sample);
});

test('no nums', ({ eq }) => {
  eq(delta.encode([]), []);
  eq(delta.decode([]), []);
});

test("round trip", ({ eq }) => {
  const encoded = delta.encode(nums);
  eq(encoded.slice(0, 50), [4326,1,2,10,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
  eq(delta.decode(encoded), nums);
});