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

    static get all(){
        const allEntries = entriesData.map((entry) => new Entry(entry));
        return allEntries;
    }

    static findById(id){
        try{
            const entry = entriesData.filter((e) => e.id === id);
            if(entry.id.includes(id)){
                return entry;
            }
        } catch(err){
            let errorStr = `Entry by ${id} does not exist!`;
            throw new Error(errorStr);
        }
    }

    //add reaction 
    addReaction(){

    }

    //add comment

    //add giphy

   
}


// let firstEntry = Entry.create({message: 'Yo whats up lets save the planet', date: '25/04/2373'})
console.log("The found element is ")
console.log(Entry.findById(2))
