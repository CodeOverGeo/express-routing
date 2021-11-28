const express = require('express');
const app = express();

const ExpressError = require('./expressError');

const {
  stringsToNumsArray,
  getMean,
  getMode,
  getMedian,
} = require('./computations');

app.get('/mean', function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      'Proper query needed, key of nums and comma separted list of numbers required',
      400
    );
  }
  let numsAsStrings = req.query.nums.split(',');

  let nums = stringsToNumsArray(numsAsStrings);

  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: 'mean',
    value: getMean(nums),
  };

  return res.send(result);
});

app.get('/mode', function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      'Proper query needed, key of nums and comma separted list of numbers required',
      400
    );
  }
  let numsAsStrings = req.query.nums.split(',');

  let nums = stringsToNumsArray(numsAsStrings);

  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: 'mode',
    value: getMode(nums),
  };

  return res.send(result);
});

app.get('/median', function (req, res, next) {
  if (!req.query.nums) {
    throw new ExpressError(
      'Proper query needed, key of nums and comma separted list of numbers required',
      400
    );
  }
  let numsAsStrings = req.query.nums.split(',');

  let nums = stringsToNumsArray(numsAsStrings);

  if (nums instanceof Error) {
    throw new ExpressError(nums.message);
  }

  let result = {
    operation: 'median',
    value: getMedian(nums),
  };

  return res.send(result);
});

// Put 404 handling at the end of the routes

app.use(function (req, res, next) {
  const err = new ExpressError('Page not found', 404);

  return next(err);
});

//process any errors

app.use(function (err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message,
    status_code: err.status,
  });
});

app.listen(3000, function () {
  console.log(`Server started on port 3000`);
});
