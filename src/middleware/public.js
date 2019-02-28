module.exports = {
  home: () => {
    return async (req, res) => {
      const { app } = req;
      const setup_status = app.service('settings').get('setup_status');
    };
  }
};