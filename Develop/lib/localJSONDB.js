const fs = require('fs')



function readFromJsonDB(filepath) {
    const data =  fs.readFileSync(filepath,'utf8')
            console.log(data)
            console.log(JSON.parse(data))
            return JSON.parse(data)
        }
 
    //".\db\db.json"
    

 function writeToJsonDB(filepath, jsonContent){

    const data = fs.writeFileSync(filepath, jsonContent, 'utf8')
        return  JSON.parse(jsonContent)
  }

 

 
 function AppendJsonDB(filepath, data){

     const readData = readFromJsonDB(filepath)
     let newJson = readData.concat(data)
     console.log(newJson)
            console.log("new JSON-stringify: \n"+JSON.stringify(newJson))
           
           return writeToJsonDB(filepath, JSON.stringify(newJson))
           

     }
     

 

 module.exports = {readFromJsonDB, writeToJsonDB, AppendJsonDB}


