const express = require('express');
const path = require('path');
let { readFromJsonDB, AppendJsonDB, RemoveItemFromJsonDB } = require('./lib/localJSONDB');

const PORT = process.env.PORT || 4501;
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

app.get('/api/notes',(req, res) => {

    const JsonDB = readFromJsonDB("./db/db.json")
    res.status(200).json(JsonDB)

    } );



//api route to save notes
app.post('/api/notes',(req, res) => {
    
    res.status(200).json(AppendJsonDB("./db/db.json", req.body ))
    
  
    
} );


//api route to delete notes for bonus
app.delete('/api/notes/:id',(req, res) => {
  
// console.log(req.params.id)
res.json(RemoveItemFromJsonDB("./db/db.json", req.params.id))
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