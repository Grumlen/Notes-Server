#Notes-React App w/ Server
##Description
Notes-React Application with Server was built using Node, React, Redux, React-Redux, Redux-Thunk, Uuid, Mongoose, MongoDB, and Semantic UI, and allows a user to create, edit, and delete notes.

Each note is a separate entity that is in either a display or editing state. The first note window is always the "Add Note" window, which will generate new notes when the user clicks "Add". In the display state a note may be toggled to the edit state or deleted. In the editing state a note may be modified and saved or canceled, which returns the note to its previous form.

This app differs from Notes-React in that it integrates a server created with Mongoose and MongoDB.
***
##How to Run the App
1. Download the repository.
###Installing Dependencies
2. Navigate to the main project folder and run the command: `npm install`
3. Navigate to the 'client' folder of the project and run the command: `npm install`
###MongoDB shell
4. Ensure MongoDB is installed and running.
###Running the Server and Client
4. In a terminal, navigate to the main project folder and run the command: `npm start`
5. In another terminal, navigate to the main project folder and run the command: `npm install`
6. If a browser does not automatically open the app, navigate to 'localhost:3000' in your browser.
