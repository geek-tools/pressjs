// Initializes the `user-roles` service on path `/user-roles`
const createService = require('feathers-nedb');
const createModel = require('../../models/user-roles.model');
const hooks = require('./user-roles.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/user-roles', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-roles');

  service.hooks(hooks);
};
