const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  article: { type: String, required: true },
  imageUrl: { type: String, required: true },
  author: { type: String, required: true },
  category: { type: String, required: true },
  comments: [{
type:mongoose.Schema.Types.ObjectId,
ref:'Comment',
required:true
  }],
  dateCreated: { type:Date, required: true}
});

module.exports = mongoose.model('Post', postSchema);