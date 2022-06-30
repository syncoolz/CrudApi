const mongoose = require('mongoose');
// A Mongoose schema defines the structure of the document, 
// default values, validators, etc.
const { Schema } = mongoose;
const configSchema = new Schema(
  {
    uid: {
      type: String,
      required: 'uid cannot be blank'
    },
    waxAccount: {
      type: String,
      required: 'waxAccount cannot be blank'
    },
    switchBot: {
      type: Boolean,
      required: 'switchBot cannot be blank'
    },
    auto_sowing: {
      type: Boolean,
      required: 'lastupdate cannot be blank'
    },
    auto_unbox: {
      type: Boolean,
      required: 'auto_unbox  cannot be blank'
    },
    auto_buy_cbit: {
      type: Boolean,
      required: 'auto_buy_cbit cannot be blank'
    },
    auto_sell_cbit: {
      type: Boolean,
      required: 'auto_sell_cbit cannot be blank'
    },
    auto_sell_sest: {
      type: Boolean,
      required: 'auto_sell_sest cannot be blank'
    },
     auto_sell_products: {
      type: Boolean,
      required: 'auto_sell_products cannot be blank'
    },
    auto_stake_sest: {
      type: Boolean,
      required: 'auto_stake_sest cannot be blank'
    },
    when_stake_sest: {
      type: Number,
      required: 'when_stake_sest cannot be blank'
    },
    when_buy_cbit: {
      type: Number,
      required: 'when_buy_cbit cannot be blank'
    },
    when_sell_cbit: {
      type: Number,
      required: 'when_sell_cbit cannot be blank'
    },
    when_sell_sest: {
      type: Number,
      required: 'when_sell_sest cannot be blank'
    },    
    amount_stake_sest: {
      type: Number,
      required: 'amount_stake_sest cannot be blank'
    },
    amount_cbit_buy: {
      type: Number,
      required: 'amount_cbit_buy cannot be blank'
    },
    amount_sell_cbit: {
      type: Number,
      required: 'amount_sell_cbit cannot be blank'
    },
    amount_sell_sest: {
      type: Number,
      required: 'amount_sell_sest cannot be blank'
    },
    maxlimit_stake_sest: {
      type: Number,
      required: 'maxlimit_stake_sest cannot be blank'
    },
    products_locked: {
      type: Array,
      required: 'products_locked cannot be blank'
    }
  },
  { collection: 'config-farmingtales' }
);

module.exports = mongoose.model('farmingtales-config', configSchema);
