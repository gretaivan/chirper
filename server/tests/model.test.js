const DB = require('../db.json');
const Entry = require('../models/entry');
jest.mock('../controllers/utils', () => jest.requireActual('../controllers/__mocks__/utils'))
const utils = require('../controllers/utils')




describe('Entry model tests', () => {
    // let testEntry = jest.fn(() => {
    let testEntry = {        
            "entry":"Tests model entries",
            "date":"17/3/2021 @ 13:02",
            "reaction":[{"like":19},{"dislike":4},{"tree":1}],
            "comments":0
        } 

    let allEntries = utils.read();
    it('should return all historical journal entries', () => {
        allEntries = utils.read();
        expect(Entry.all.length).toBe(allEntries.length)
    });

    //model.write = jest.fn();
    it('should create a journal entry, generate id, append the all entries data array and return it ', () => {
        const createdEntry = Entry.create(testEntry); 
        //correct id generated
        expect(createdEntry.id).toEqual(allEntries.length) // should have the id of all entries array length
        //check if new element is added to the all entries array
        expect(Entry.all.length).toBe(allEntries.length + 1)
    })

    describe('should find an entry by id',()=> {
        it('when correct id is passed it finds the entry and returns it', () => {
           // try{
                expect(Entry.findById(0)).toEqual(allEntries[0])
               // expect(Entry.findById(10)).toEqual(allEntries[allEntries.length])
          //  } catch { console.warn }
        });
            
        it('when incorrect id is passed it returns message that id does not exist', () => {
           try{
                expect(Entry.findById(10)).toThrowError(TypeError);
                expect(drinkOctopus).toThrowError(/^ID is out of bounds$/);
           } 
           catch(err){
               console.warn
           }
           
           
           
        //    function checkId() {
        //         Entry.findById(10);
        //       }
        //     console.log( Entry.findById(10))
            //expect(Entry.findById(10))
            //expect(checkId)
           
            // expect(Entry.findById(allEntries.length+1)).toTrow();
        });
    });
        
    it()
    // beforeEach(() => { 
    //     utils.write = jest.fn((obj) => {
    //         console.log("mocked JSON file update")
    //     })

    // })
   

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
});

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