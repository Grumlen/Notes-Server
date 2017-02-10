function retrieve(id) {
  return JSON.parse(localStorage.getItem(id));
}

function retrieveAll() {
  var notes = [];
  if (localStorage.length>0) {
    for (let i=1; i<localStorage.length;i++) {
      notes.push(retrieve(localStorage.key(i)));
    }
  }
  return notes;
}

function remove(id) {
  localStorage.removeItem(id);
}

function save(note) {
  localStorage.setItem(note.id, JSON.stringify(note));
}

export { save, retrieve, retrieveAll, remove };
