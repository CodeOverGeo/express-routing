const { getMean, getMedian, getMode } = require('./computations');

describe('getMean', function () {
  it('finds the mean of a set of numbers', function () {
    expect(getMean([1, 3, 5, 7, -9])).toEqual(1.4);
  });
});

describe('getMedian', function () {
  it('finds the median of a set of numbers', function () {
    expect(getMedian([1, 3, 5, 7, -9])).toEqual(3);
  });
});

describe('getMode', function () {
  it('finds the mode of a set of numbers', function () {
    expect(getMode([7, 1, 3, 3, 7, 7, -9, -9])).toEqual([7]);
  });
  it('finds multiple mode of a set of numbers', function () {
    expect(getMode([7, 1, 3, 3, 3, 7, 7, -9, -9])).toEqual([3, 7]);
  });
});
