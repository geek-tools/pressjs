const schema01 = require('./db_schema_01');
module.exports = {
  seedDB: (app) => {
    const setup = app.get('setup');
    if( setup.db == false ) {
      const settings = schema01.settings;
      settings.forEach( s => {
        app.service('settings').create(s);
      });
      setup.db = true;
      app.set('setup', setup)
    }
  }
};