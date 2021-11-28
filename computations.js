const { mean, mode, median } = require('mathjs');

function stringsToNumsArray(numsAsStrings) {
  let result = [];

  for (let i = 0; i < numsAsStrings.length; i++) {
    let convertedNumber = Number(numsAsStrings[i]);

    if (Number.isNaN(convertedNumber)) {
      return new Error(
        `The value '${numsAsStrings}' at index ${i} is not a valid number`
      );
    }
    result.push(convertedNumber);
  }
  return result;
}

function getMean(nums) {
  return mean(nums);
}

function getMode(nums) {
  return mode(nums);
}

function getMedian(nums) {
  return median(nums);
}

module.exports = {
  stringsToNumsArray,
  getMean,
  getMode,
  getMedian,
};
