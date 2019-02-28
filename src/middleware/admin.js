module.exports = function (options = {}) {
  return function admin(req, res, next) {
    console.log('admin middleware is running');
    next();
  };
};
