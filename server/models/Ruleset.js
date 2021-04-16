const mongoose = require('mongoose');

const RulesetModel = mongoose.Schema({
  startDate: { 
  	type: mongoose.Schema.Types.Date, 
  	required: '{PATH} is required!'
  },
endDate:{ 
  type: mongoose.Schema.Types.Date,
  required: '{PATH} is required!'
},
cashback:{ 
  type: mongoose.Schema.Types.Number,
  required: '{PATH} is required!'
},
redemptionLimit:{ 
  type: mongoose.Schema.Types.Number, 
  required: '{PATH} is required!'
},
}, {
  timestamps: true,
  versionKey:false
});

module.exports = mongoose.model('Ruleset', RulesetModel);