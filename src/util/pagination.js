/**
 * Shared pagination logic — mirrors the REST API exactly.
 * See: demo/api/[theme]/[resource].js lines 47-59
 */
function paginate(request, generatorFn) {
  const limit = Math.min(Math.max(request.page_size || 10, 1), 100);
  const page = Math.max(request.page || 1, 1);
  const seed = request.seed;

  return Array.from({ length: limit }, (_, i) => {
    const itemId = seed != null
      ? seed * 10000 + (page - 1) * limit + i + 1
      : (page - 1) * limit + i + 1;
    return clean(generatorFn(itemId));
  });
}

/**
 * Coerce null values to empty strings (proto3 can't send null).
 * Coerce non-string booleans in string fields to their string representation.
 */
function clean(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value === null || value === undefined) {
      result[key] = '';
    } else if (Array.isArray(value)) {
      result[key] = value.map(v => v === null ? '' : v);
    } else {
      result[key] = value;
    }
  }
  return result;
}

module.exports = { paginate, clean };
