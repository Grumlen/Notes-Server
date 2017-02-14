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
  console.log(req.params.id)
  Notes.updateOne({id:req.params.id},req.body)
    .then((result) => {
      if(result.nModified===1){
        res.send(req.body)
      }else{
        res.status(400).send({message:"something wrong"})
      }

    })
    .catch((err) => next(err))
}

function deleteNote(req,res,next) {
  Notes.remove(req.body)
    .then((notes) => res.send(notes))
    .catch((err) => next(err))
}

export { getNotes, createNote, updateNote, deleteNote };
