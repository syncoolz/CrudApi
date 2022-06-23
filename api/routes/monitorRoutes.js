const farmingtalesBuilder = require('../controllers/farmingtalesController');
const goldmandBuilder = require('../controllers/goldmandController');
module.exports = app => {
  app
    .route('/monitor/farmingtales')
    .get(farmingtalesBuilder.list_all_monitors)
    .post(farmingtalesBuilder.create_a_monitor);
  app
    .route('/monitor/farmingtales/:waxid')
    .get(farmingtalesBuilder.read_a_monitor)
    .put(farmingtalesBuilder.update_a_monitor)
    .delete(farmingtalesBuilder.delete_a_monitor);
  app
    .route('/monitor/farmingtales/uid/:uid')
    .get(farmingtalesBuilder.read_all_uid_monitor)
  app
    .route('/monitor/farmingtales/bulkwrite')
    .post(farmingtalesBuilder.updatebulk_monitor)
  app
    .route('/monitor/goldmand')
    .get(goldmandBuilder.list_all_monitors)
    .post(goldmandBuilder.create_a_monitor);
  app
    .route('/monitor/goldmand/:waxid')
    .get(goldmandBuilder.read_a_monitor)
    .put(goldmandBuilder.update_a_monitor)
    .delete(goldmandBuilder.delete_a_monitor);
  app
    .route('/monitor/goldmand/uid/:uid')
    .get(goldmandBuilder.read_all_uid_monitor)
  app
    .route('/monitor/goldmand/bulkwrite')
    .post(goldmandBuilder.updatebulk_monitor)
};
