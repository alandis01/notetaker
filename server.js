const fs = require('fs');
const express = require('express');
const PORT = process.env.PORT || 3001;
const path = require('path');
const app = express();

const notes = require("./db/db.json");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const uniqueId = require('unique-id');

function newNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, './db/db.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
};

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/notes.html'))
});

app.get('/api/notes', (req, res) => {
  fs.readFile(path.join(__dirname, "/db/db.json"), (err, data) => {
    if (err)throw err;
    res.json(JSON.parse(data).notes);
  });
});

app.post('/api/notes', (req, res) => {
  req.body.id = uniqueId();
  const note = newNote(req.body, notes);
  res.json(note);
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT} :rocket:`)
});