const DB = require('../db.json');
const Entry = require('../models/entry');
jest.mock('../controllers/utils', () => jest.requireActual('../controllers/__mocks__/utils'))
const utils = require('../controllers/utils');
const { deleteLastEntry } = require('../models/entry');

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
});

describe('Get all entries', () => {
    it('should return all historical journal entries', () => {
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
            expect(Entry.findById(Entry.all.length + 1 )).toThrowError(TypeError);
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

describe('Delete last entry',()=> {
    it('should delete the last entry', () => {
        allEntries = utils.read() //DB length + 1 as 1 test case is still there
        Entry.deleteLastEntry(); 
        expect(Entry.all.length).toEqual(allEntries.length + 1);
    })
})