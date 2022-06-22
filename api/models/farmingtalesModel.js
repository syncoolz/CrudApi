const mongoose = require('mongoose');
// A Mongoose schema defines the structure of the document, 
// default values, validators, etc.
const { Schema } = mongoose;
const monitorSchema = new Schema(
  {
    uid: {
      type: String,
      required: 'waxid cannot be blank'
    },
    waxid: {
      type: String,
      required: 'waxid cannot be blank'
    },
    game: {
      type: String,
      required: 'waxid cannot be blank'
    },
    lastupdate: {
      type: Number,
      required: 'lastupdate cannot be blank'
    },
    status: {
      type: String,
      required: 'status  cannot be blank'
    },
    working: {
      type: String,
      required: 'working cannot be blank'
    }
  },
  { collection: 'farmingtales' }
);

module.exports = mongoose.model('farmingtales', monitorSchema);
