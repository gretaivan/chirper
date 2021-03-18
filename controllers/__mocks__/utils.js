//'use strict'
const fs = require('fs');

module.exports = {

//READ from JSON file
    read: function () {
        let entries = fs.readFileSync('db.json', 'utf-8');
        entries = JSON.parse(entries);
        return entries;
    },

    message: function(){
        console.log("json file has been updated")
    },

    //WRITE instance to the JSON file
    // write: function (obj){
    //     this.message;
    //     let stringified = JSON.stringify(obj);
    //     return stringified;
    //     //fs.writeFile('db.json', stringified, 'utf8', message);
    // }
    write: function (obj){
        // function message(){
        //     console.log("json file has been updated")
        // }
        let stringified = JSON.stringify(obj);

        fs.writeFile = jest.fn(message())
        //fs.writeFile('db.json', stringified, 'utf8', message);
        return stringified;
    }

 

}