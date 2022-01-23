const fs = require('fs')
const { v4: uuidv4 } = require('uuid');


function readFromJsonDB(filepath) {
    const data = fs.readFileSync(filepath, 'utf8')
    console.log(data)
    console.log(JSON.parse(data))
    return JSON.parse(data)
}

//".\db\db.json"


function writeToJsonDB(filepath, jsonContent) {

    const data = fs.writeFileSync(filepath, jsonContent, 'utf8')
    return JSON.parse(jsonContent)
}


function AppendJsonDB(filepath, data) {
    console.log(data)

    let title = data.title
    let text = data.text
    const readData = readFromJsonDB(filepath);
    let newNoteData = { title, text, id: uuidv4() };
    let newJson = readData.concat(newNoteData)

    console.log(newJson)
    console.log("new JSON-stringify: \n" + JSON.stringify(newJson))

    return writeToJsonDB(filepath, JSON.stringify(newJson))


}

function RemoveItemFromJsonDB(filepath, id) {
    const readData = readFromJsonDB(filepath);
    let newData = readData.filter(val => val.id !== id);

    return writeToJsonDB(filepath, JSON.stringify(newData))
}



module.exports = { readFromJsonDB, writeToJsonDB, AppendJsonDB, RemoveItemFromJsonDB }


