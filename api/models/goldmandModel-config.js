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
    autoBuy: {
      type: Boolean,
      required: 'autoBuy cannot be blank'
    },
    autoSell: {
      type: Boolean,
      required: 'autoSell cannot be blank'
    },
    auto_recharge_amulet: {
      type: Boolean,
      required: 'auto_recharge_amulet cannot be blank'
    },
    auto_future_buy: {
      type: Boolean,
      required: 'auto_future_buy cannot be blank'
    },
    auto_future_sell: {
      type: Boolean,
      required: 'auto_future_sell cannot be blank'
    },
    auto_refill_stamina: {
      type: Boolean,
      required: 'auto_refill_stamina cannot be blank'
    },
    auto_cancel_limit: {
      type: Boolean,
      required: 'auto_cancel_limit cannot be blank'
    },
    auto_rent_slot: {
      type: Boolean,
      required: 'auto_rent_slot cannot be blank'
    },
    supply_mode: {
      type: Boolean,
      required: 'supply_mode cannot be blank'
    },
    auto_cancel_limit: {
      type: Boolean,
      required: 'auto_cancel_limit cannot be blank'
    },
    auto_change_land: {
      type: Boolean,
      required: 'auto_change_land cannot be blank'
    },
    auto_reward_swap_consum:{
      type: Boolean,
      required: 'auto_reward_swap_consum cannot be blank'
    },
    auto_curse_stop:{
      type: Boolean,
      required: 'auto_curse_stop cannot be blank'
    },
    usedGMF: {
      type: Number,
      required: 'usedGMF cannot be blank'
    },
    usedGME: {
      type: Number,
      required: 'usedGME cannot be blank'
    },
    usedGMM: {
      type: Number,
      required: 'usedGMM cannot be blank'
    },
    buyStack: {
      type: Number,
      required: 'buyStack cannot be blank'
    },
    sellGMF: {
      type: Number,
      required: 'sellGMF cannot be blank'
    },
    sellGME: {
      type: Number,
      required: 'sellGME cannot be blank'
    },
    sellGMM: {
      type: Number,
      required: 'sellGMM cannot be blank'
    },
    sellGMD: {
      type: Number,
      required: 'sellGMD cannot be blank'
    },
    amountSell: {
      type: Number,
      required: 'amountSell cannot be blank'
    },
    usedHour: {
      type: Number,
      required: 'usedHour cannot be blank'
    },
    usedMinute: {
      type: Number,
      required: 'usedMinute cannot be blank'
    },
    usedSecond: {
      type: Number,
      required: 'usedSecond cannot be blank'
    },
    per_recharge_amulet: {
      type: Number,
      required: 'per_recharge_amulet cannot be blank'
    },
    per_future_buy: {
      type: Number,
      required: 'per_future_buy cannot be blank'
    },
    per_future_sell: {
      type: Number,
      required: 'per_future_sell cannot be blank'
    },
    per_refill_stamina: {
      type: Number,
      required: 'per_refill_stamina cannot be blank'
    },
    per_cancel_limit:{
      type: Number,
      required: 'per_cancel_limit cannot be blank'
    },
  },
  { collection: 'config-goldmand' }
);

module.exports = mongoose.model('goldmand-config', configSchema);
