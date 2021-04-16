const mongoose = require('mongoose');

const TransactionModel = mongoose.Schema({
  date:{
    type: Date,
    required: '{PATH} is required!'
  },
customerId:{
  type: Number,
},
id:{
  type: Number,
  unique:true,
  required: '{PATH} is required!'
},
}, {
  timestamps: true,
  versionKey:false
});

module.exports = mongoose.model('Transaction', TransactionModel);