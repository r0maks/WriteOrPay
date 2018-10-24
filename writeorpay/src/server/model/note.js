const mongoose = require('mongoose');
constMoment = require('moment');
const Schema = mongoose.Schema;
 
// create a schema
const notesSchema = new Schema({
  id: { type: String, required: true, unique: true },
  content: { type: String, required: false },
  title: { type: String, required: false },
  createdDate: { type: String, required: false },
  updatedDate: { type: String, required: false },

}, { collection : 'note' });
 
const note = mongoose.model('note', userSchema);
 
module.exports = note;