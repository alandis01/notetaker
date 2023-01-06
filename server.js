const fs = require('fs');
const express = require('express');
const PORT = process.env.PORT || 3001;
const path = require('path');
const app = express();

const recorded = require("./db/db.json")

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use (apiRoutes);



app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/', (req,res) => {
res.sendFile(path.join(__dirname, '/public/notes.html'))
});




// const readAndAppend = (content, file) => {
//     fs.readFile(file, 'utf8', (err, data) => {
//       if (err) {
//         console.error(err);
//       } else {
//         const parsedData = JSON.parse(data);
//         parsedData.push(content);
//         writeToFile(file, parsedData);
//       }
//     });
//   };

// GIVEN a note-taking application
// WHEN I open the Note Taker
// THEN I am presented with a landing page with a link to a notes page
// WHEN I click on the link to the notes page
// THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
// WHEN I enter a new note title and the note’s text
// THEN a Save icon appears in the navigation at the top of the page
// WHEN I click on the Save icon
// THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
// WHEN I click on an existing note in the list in the left-hand column
// THEN that note appears in the right-hand column
// WHEN I click on the Write icon in the navigation at the top of the page
// THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
// GET /notes should return the notes.html file 
// get * should return the index.html file 
// GET /api/notes should read the db.json file and return all saved notes as JSON
// POST /api/notes should receive a new note to save on teh requst body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages taht could do this for you).
app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} :rocket:`)
});