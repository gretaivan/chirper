const DB = require('../db.json');
const Entry = require('../models/entry');
const utils = require('../controllers/utils')




describe('JSON file access', () => {
    beforeEach(() => { 
        utils.write = jest.fn((obj) => {
            console.log("mocked JSON file update")
        })

    })
    it('should read all the objects from JSON database', () => {
        expect(Entry.all.length).toBe(DB.length)
    });

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