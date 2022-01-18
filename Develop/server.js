const express = require('express');
const path = require('path');
const db = require('./db/db.json')

const PORT = process.env.port || 4500;
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

//api route to get notes
app.get('/api/notes',(req, res) => {

res.json(db)

} );

//api route to save notes
app.post('/api/notes',(req, res) => {



} );


//api route to delete notes for bonus
app.delete('/api/notes/:id',(req, res) => {



} );


//HTML routes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () => console.log(`App listening on port ${PORT}`));