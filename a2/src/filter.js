function getObservationsByPositionalAccuracy(data, options = {}) {
  if (!options || Object.keys(options).length === 0) {
    return data.results;
  }
  // destruction
  const { lessThan, greaterThan, equal } = options;

  return data.results.filter((item) => {
    if (lessThan !== undefined && greaterThan !== undefined && equal !== undefined) {
      return item.positional_accuracy === equal;
    }

    if (lessThan !== undefined && greaterThan !== undefined) {
      return item.positional_accuracy > greaterThan && item.positional_accuracy < lessThan;
    }
    if (equal !== undefined) {
      return item.positional_accuracy === equal;
    }
    if (greaterThan !== undefined) {
      return item.positional_accuracy > greaterThan;
    }
    if (lessThan !== undefined) {
      return item.positional_accuracy < lessThan;
    }

    return true;
  });
}
