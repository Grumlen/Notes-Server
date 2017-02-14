import mongoose from 'mongoose';

var notesSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    required: false,
  },
  created: {
    type: String,
    required: true,
  },
  lastEdit: {
    type: String,
    required: false,
  },
});

var Notes = mongoose.model('Notes',notesSchema);

export default Notes;
