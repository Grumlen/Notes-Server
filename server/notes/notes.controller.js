import Notes from './notes.model';

function getNotes(req,res,next) {
  Notes.find({})
    .then((notes) => res.send(notes))
    .catch((err) => next(err));
}

function createNote(req,res,next) {
  Notes.create(req.body)
    .then((notes) => res.send(notes))
    .catch((err) => next(err))
}

function updateNote(req,res,next) {
  Notes.findOneAndUpdate(req.params.id,req.body)
    .then((notes) => res.send(notes))
    .catch((err) => next(err))
}

function deleteNote(req,res,next) {
  Notes.remove(req.body)
    .then((notes) => res.send(notes))
    .catch((err) => next(err))
}

export { getNotes, createNote, updateNote, deleteNote };
