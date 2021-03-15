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

// console.log("entries data: ")
// console.log(entriesData)

class Entry { 

    constructor(data){
        this.id = data.id;
        this.entry = data.entry;
        this.date = data.date; 
        this.reaction = [{like: data.reaction['like'] || 0}, {dislike: 0}, {tree: 0}]; 
        this.comments = 0;
    }

    static create(data){
        //date with time as a string
        let count = entriesData.length;
        // console.log(data)
        const newEntry = new Entry({id: count, ...data}); 
        entriesData.push(newEntry);
        // console.log(entriesData)
        write(entriesData);
        return newEntry;
    }

    static get all(){
        const allEntries = entriesData.map((entry) => new Entry(entry));
        return allEntries;
    }

    static findById(id){
        try{
            const entry = entriesData.filter((e) => e.id === id)[0];
            // console.log(entry)
            console.log(`ID CHECK: ${entry.id}`)
            // if(entry.id === id){
                return entry;
            // }
        } catch(err){
            let errorStr = `Entry by ${id} does not exist!`;
            throw new Error(errorStr);
        }
    }

    //add reaction 
    static addReaction(id, reaction){
        try {
            console.log("entering switch.")
            let entry = Entry.findById(id);
            let count;
            switch(reaction) {
                case 'like': 
                    count = Object.values(entry.reaction[0])
                    count++;
                    // entry.reaction[0] = count;
                    entry.reaction[0].like = count++
                    // console.log(entry)
                    // console.log(count)
                    // console.log(entriesData)

                    break;
                case 'dislike':
                    count = Object.values(entry.reaction[1])
                    count++;
                    // entry.reaction[0] = count;
                    entry.reaction[1].dislike = count++
                    console.log(entry)
                    break
                case 'tree':
                    count = Object.values(entry.reaction[2])
                    count++;
                    // entry.reaction[0] = count;
                    entry.reaction[2].tree = count++
                    console.log(entry)
                    break
                default:
                    console.log("error! not a valid reaction");
                    break;
                
            } 
            entriesData[id] = entry
            console.log(entriesData[id])
            write(entriesData)
        }
            catch(error) {
                console.warn()
            
        }
    }

    //add comment

    //add giphy

   
}


// let firstEntry = Entry.create({message: 'Yo whats up lets save the planet', date: '25/04/2373'})

module.exports = Entry;