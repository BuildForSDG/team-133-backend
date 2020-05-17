const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  text: { type: String, required: true },
  post: {
 type: mongoose.Schema.Types.ObjectId, ref:"Post", required:true
  },
  dateCreated: { type:Date, required: true}

  
});

module.exports = mongoose.model('Comment', commentSchema);