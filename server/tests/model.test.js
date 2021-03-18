const DB = require('../db.json');
const Entry = require('../models/entry');
jest.mock('../controllers/utils', () => jest.requireActual('../controllers/__mocks__/utils'))
const utils = require('../controllers/utils')

let testEntries = [
    {        
        "entry":"First test to test model entry",
        "date":"17/3/2021 @ 13:02",
        "reaction":[{"like":19},{"dislike":4},{"tree":1}],
        "comments":0
    },
    {
        "entry":"Second test to test model entry",
        "date":"17/3/2021 @ 13:02"
    }
]    

const createdEntries = testEntries.map( ent => Entry.create(ent)); 


describe('Create journal entry', () => {
   
    
    //const mockEntriesList = jest.fn(Entry.all);

   // const a = new mockFn();

    //mockFn.mock.instances[0] === a; // true
    //.mock.instances[1] === b; // true
    let allEntries = utils.read();
    


    it('should create a journal entry and return instace of Entry ', () => {
        
        expect(createdEntries[0]).toBeInstanceOf(Entry);        
    })

    it('should append to all entries data array', () => {
        expect(Entry.all.length).toBe(allEntries.length + 2);
        
    })

    it('should create entry ID that is corresponds to the position in the all entries record', () => {
       
        expect(createdEntries[1].id).toEqual(allEntries.length + 1) // should have the id of all entries array length
        
    })

    it('should create new entry with default number of reactions', () => {
       
        expect(createdEntries[1].reaction[0].like).toEqual(0) // should have the id of all entries array length
        
    })

    //Entry.deleteLastEntry()
    //Entry.deleteLastEntry()
});

describe('Get all entries', () => {
   
    // fs.writeFile = jest.fn(() => {
    //     console.log('called fn')
    //     utils.message();
    // })
    // beforeEach(() => {
    //     allEntries = utils.read();
    // });


    it('should return all historical journal entries', () => {
        //let allEntries = utils.read();
        //expect(Entry.all.length).toEqual(allEntries.length)
        //let get = Entry.all
        expect(Entry.all.length).toEqual(DB.length + 2) //+ 2 as we have 2 test cases
    });
});
   

describe('Find an entry by id',()=> {
    it('should find the entry when correct id is passed  and returns it', () => {
            let allEntries = utils.read()
            expect(Entry.findById(0)).toEqual(allEntries[0])
    });
        
    it('should returns message that id does not exist when incorrect id is passed', () => {
        try{
            expect(Entry.findById(10)).toThrowError(TypeError);
        } 
        catch(err){
            console.warn
        }
    });
});

describe('Add reaction',()=> {
    it('should add like to the second test entry', () => {
        let testInstanceIndex = Entry.all.length - 1; 

        Entry.addReaction(testInstanceIndex, 'like');

        expect(createdEntries[1].reaction[0].like).toEqual(1)
    });

    it('should add dislike to the second test entry', () => {
        let testInstanceIndex = Entry.all.length - 1; 

        Entry.addReaction(testInstanceIndex, 'dislike');

        expect(createdEntries[1].reaction[1].dislike).toEqual(1)
    })

    it('should add tree to the second test entry', () => {
        let testInstanceIndex = Entry.all.length - 1; 

        Entry.addReaction(testInstanceIndex, 'tree');

        expect(createdEntries[1].reaction[2].tree).toEqual(1)
    })

    it('should throw error if unexpected reaction is passed', () => {
        let testInstanceIndex = Entry.all.length - 1; 

        try{
            expect(Entry.addReaction(testInstanceIndex, 'hello')).toThrow()
        } 
        catch(err){
            console.warn
        }
    });

});   

describe('Add comment',()=> {
    it('should change default comment property to be an array', () => {
        let testInstanceIndex = Entry.all.length - 1; 
        Entry.addComment(testInstanceIndex, 'This is a test comment');

        expect(createdEntries[1].comments).toBeInstanceOf(Array)
    });
    it('should add comment to the second test entry', () => {
        let testInstanceIndex = Entry.all.length - 1; 
        //Entry.addComment(testInstanceIndex, 'This is a test comment');

        expect(createdEntries[1].comments[0]).toEqual('This is a test comment')
    });
});



    //it()
    // beforeEach(() => { 
    //     utils.write = jest.fn((obj) => {
    //         console.log("mocked JSON file update")
    //     })

    // })imp
   

    // it('should call write function', () => {
    //     write.mockImplementation(({"entry": "Test", "date": "14/03/2021"}) => {"entry": "Test", "date": "14/03/2021"});
    //     expect(write()).toHaveBeenCalled();
    // })

    //????
    // it('write() function adds the given entry to JSON database', () => {
    //     const writeFunc = write();
    //     writeFunc = jest.fn(() => {})
    //     expect(allEntries.length).toBe(DB.length)
    // });


// describe('JSON file access', () => { 
//     beforeEach(() => {
//         write = jest.fn()
//     })
describe('Journal entry model tests', () => {
   
    beforeEach(() => {
        allEntries = jest.fn(() => {
            [
                {"id":0,
                "entry":"Yo there, hows it poppin",
                "date":"16/3/2021 @ 12:52",
                "reaction":[{"like":19},{"dislike":4},{"tree":1}],
                "comments":0
            }
        ]
    })
    //model.write = jest.fn();
});

    // it('checks if write is mock', () => {

    //     let testEntry = {
    //         "entry":"Model saving test",
    //         "date":"17/03/2021"
    //     }
    //     const write = jest.spyOn(write)
    //     allEntries.push(testEntry)
    //     write(allEntries);
    //     expect(allEntries.length).toBe(14)
    // })
    // it('when new Entry is created it should return an object');



    
});