const users = require('./users/users.service.js');
const userRoles = require('./user-roles/user-roles.service.js');
const comments = require('./comments/comments.service.js');
const pages = require('./pages/pages.service.js');
const posts = require('./posts/posts.service.js');
const categories = require('./categories/categories.service.js');
const tags = require('./tags/tags.service.js');
const settings = require('./settings/settings.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(userRoles);
  app.configure(comments);
  app.configure(pages);
  app.configure(posts);
  app.configure(categories);
  app.configure(tags);
  app.configure(settings);
};
