// const DB = require('../../db.json');
const fs = require('fs');

//READ JSON file
function read(){
    let entries = fs.readFileSync('../db.json', 'utf-8');
    entries = JSON.parse(entries);
    return entries;
}

//WRITE instance to the JSON file
function write(obj ){
    function message(){
        console.log("json file has been updated")
    }
    let stringified = JSON.stringify(obj);
    fs.writeFile('../db.json', stringified, 'utf8', message);
}

let entriesData = read();

console.log("entries data: ")
console.log(entriesData)

class Entry { 

    constructor(data){
        this.id = data.id;
        this.entry = data.entry;
        this.date = data.date; 
        this.reaction = 0; 
        this.comments = 0;
    }

    //create method??? 
    static create(data){
        //date with time as a string
        let count = entriesData.length;
        console.log(data)
        const newEntry = new Entry(count, data.message, data.date); 
        entriesData.push(newEntry);
        console.log(entriesData)
        write(entriesData);
        return newEntry;
    }

    //static get all
    static get all(){
        const allEntries = entriesData.map((entry) => new Entry(entry));
        return allEntries;
    }

    //add reaction 

    //add comment

    //add giphy

   
}


// let firstEntry = Entry.create({message: 'Yo whats up lets save the planet', date: '25/04/2373'})
console.log(Entry.all)


// let newEntry = ;
// console.log(newEntry.length);
// let ID = newEntry.length + 1;
// let newData = { id: ID, ...obj };
// newEntry.push(newData);
// entries = JSON.stringify(newEntry);
// ​
// fs.writeFileSync('test.json', entries, 'utf-8');


 

// let ex = new Test("testofTEsts", "surnameTEst");

// console.log("db file data: ")
// console.log(DB)

// let json = DB.data;
// console.log(json)




//CONVERT OBJECT TO ARRAY OF OBJECTS
// let mainData = DB ; 


// ex = JSON.stringify(ex);
// ex = JSON.parse(ex);



// let count = read().length
// let str = `test${count}`
// mainData[str] = ex

// let newObj = {}

// newObj[str] = ex;


// mainData.push(newObj)
// console.log(mainData)


// write(mainData);

// console.log(DB.length)
