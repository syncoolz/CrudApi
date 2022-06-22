const monitorBuilder = require('../controllers/monitorController');
module.exports = app => {
  app
    .route('/monitor')
    .get(monitorBuilder.list_all_monitors)
    .post(monitorBuilder.create_a_monitor);
  app
    .route('/monitor/:monitorId')
    .get(monitorBuilder.read_a_monitor)
    .put(monitorBuilder.update_a_monitor)
    .delete(monitorBuilder.delete_a_monitor);
};