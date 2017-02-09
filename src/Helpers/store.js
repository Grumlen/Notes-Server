function retrieve() {
  if(localStorage.getItem("myReactNotes")) {
    return JSON.parse(localStorage.getItem("myReactNotes"));
  } else {
    return [];
  }
}

function save(notes) {
  localStorage.setItem("myReactNotes", JSON.stringify(notes));
}

export { save, retrieve };
