// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js
// It manages relationships between data, provides schema validation, 
// and is used to translate between objects in code and the representation of those objects in MongoDB.
const mongoose = require('mongoose');
// Mongoose model provides an interface to the database 
// for creating, querying, updating, deleting records, etc.
const monitor = mongoose.model('farmingtales-monitor');

exports.list_all_monitors = (req, res) => {
  monitor.find({}, (err, monitors) => {
    if (err) res.send(err);
    res.json(monitors);
  });
};
exports.create_a_monitor = (req, res) => {
  const newMonitor = new monitor(req.body);
  newMonitor.save((err, monitor) => {
    if (err) res.send(err);
    res.json(monitor);
  });
};
exports.read_a_monitor = (req, res) => {
  monitor.findOne({ waxid: req.params.waxid }, (err, monitor) => {
    if (err) res.send(err);
    res.json(monitor);
  });
};
exports.read_all_uid_monitor = (req, res) => {
  monitor.find({ uid: req.params.uid }, (err, monitor) => {
    if (err) res.send(err);
    res.json(monitor);
  });
};
exports.updatebulk_monitor = (req, res) => {
  monitor.bulkWrite(req.body, (err, monitor) => {
    if (err) res.send(err);
    res.json(monitor);
  });
};
exports.update_a_monitor = (req, res) => {
  monitor.findOneAndUpdate(
    { waxid: req.params.waxid },
    req.body,
    { new: true },
    (err, monitor) => {
      if (err) res.send(err);
      res.json(monitor);
    }
  );
};
exports.delete_a_monitor = (req, res) => {
  monitor.deleteOne({ waxid: req.params.waxid }, err => {
    if (err) res.send(err);
    res.json({
      message: 'monitor successfully deleted',
      waxid: req.params.waxid
    });
  });
};
