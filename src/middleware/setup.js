module.exports = function (options = {}) {
  return function setup(req, res, next) {
    console.log('setup middleware is running');
    next();
  };
};
