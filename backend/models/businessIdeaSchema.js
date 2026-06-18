const mongoose = require('mongoose');

const businessIdeaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  fundingRequired: {
    type: Number,
    required: true,
  },
  industry: {
    type: String,
    required: true,
  },

  //Entrepreneur refrence
  entrepreneurId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  // investorsId
  intrestedInvestors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }]
}, {
  timestamps: true
});

module.exports = mongoose.model('BusinessIdea', businessIdeaSchema);