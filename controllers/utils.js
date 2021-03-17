const fs = require('fs');

module.exports = {

//READ from JSON file
    read: function () {
        let entries = fs.readFileSync('db.json', 'utf-8');
        entries = JSON.parse(entries);
        return entries;
    },

    //WRITE instance to the JSON file
    write: function (obj){
        function message(){
            console.log("json file has been updated")
        }
        let stringified = JSON.stringify(obj);
        fs.writeFile('db.json', stringified, 'utf8', message);
    }

}