// JSON.parse() - Converts a JSON string into a JavaScript object.
// JSON.stringify() - Converts a JavaScript object into a JSON string.

const DB = require('./db.json');
const fs = require('fs');


class Entry { 

    // static count = 0; 

    constructor(entry, date, reaction = 0, comments = 0){
        this.entry = entry;
        this.date = date; 
        this.reaction = reaction; 
        this.comments = comments;
        //
        // this.count = count + 1; //this.count++ 
    }

    //create method??? 
    static create(data){
        //entry
        //date with time as a string

        let count = DB.length -1;
        const newEntry = new Entry({}) 
        
    }

    
  
}



class Test { 

    // static count = 0; 

    constructor(name, surname){
        this.name = name;
        this.surname = surname; 
     
        // this.count = count + 1; //this.count++ 
    }
    
  
}

 //WRITE instance to the file
function write(obj ){
    function message(){
        console.log("json file updated")
    }
    let stringified = JSON.stringify(obj);
    fs.writeFile('db.json', stringified, 'utf8', message);
}

let ex = new Test("helloTest", "surnameTEst");


// DB.append(ex)
 
// console.log(DB);

// myJSON = JSON.stringify(ex);
// localStorage.setItem("DB", myJSON);
// console.log(ex);


// var json = '{"data":{"test1":{},"test2":{}}}';
console.log("db file data: ")
console.log(DB)

let json = DB.data;
console.log(json)


//CONVERT OBJECT TO ARRAY OF OBJECTS
let mainData = DB ; 


ex = JSON.stringify(ex);
ex = JSON.parse(ex);



let count = 4
let str = `test${count}`
// mainData[str] = ex

let newObj = {}

newObj[str] = ex;


mainData.push(newObj)
console.log(mainData)


write(mainData);

console.log(DB.length)


//READ FILE


// fs.readFile('./db.json', 'utf8', (err, data) => {

//     if (err) {
//         console.log(`Error reading file from disk: ${err}`);
//     } else {

//         // parse JSON string to JSON object
//         const databases = JSON.parse(data);

//         // print all databases
//         databases.forEach(db => {
//             console.log(`${db.name}: ${db.type}`);
//         });
//     }

   


// });