// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js
// It manages relationships between data, provides schema validation, 
// and is used to translate between objects in code and the representation of those objects in MongoDB.
const mongoose = require('mongoose');
// Mongoose model provides an interface to the database 
// for creating, querying, updating, deleting records, etc.
const config = mongoose.model('farmingtales-config');


exports.list_all_configs = (req, res) => {
  config.find({}, (err, configs) => {
    if (err) res.send(err);
    res.json(configs);
  });
};
exports.create_a_config = (req, res) => {
  const newconfig = new config(req.body);
  newconfig.save((err, config) => {
    if (err) res.send(err);
    res.json(config);
  });
};
exports.read_a_config = (req, res) => {
  config.findOne({ waxAccount: req.params.waxAccount }, (err, config) => {
    if (err) res.send(err);
    res.json(config);
  });
};
exports.read_all_uid_config = (req, res) => {
  config.find({ uid: req.params.uid }, (err, config) => {
    if (err) res.send(err);
    res.json(config);
  });
};
exports.updatebulk_config = (req, res) => {
  config.bulkWrite(req.body, (err, config) => {
    if (err) res.send(err);
    res.json(config);
  });
};
exports.update_a_config = (req, res) => {
  config.findOneAndUpdate(
    { waxAccount: req.params.waxAccount },
    req.body,
    { new: true },
    (err, config) => {
      if (err) res.send(err);
      res.json(config);
    }
  );
};
exports.delete_a_config = (req, res) => {
  config.deleteOne({ waxAccount: req.params.waxAccount }, err => {
    if (err) res.send(err);
    res.json({
      message: 'config successfully deleted',
      waxAccount: req.params.waxAccount
    });
  });
};
