const {Entry, read} = require('../models/entry');

const DB = require('../db.json');

describe('JSON file access', () => {
    it('should read all the objects from JSON database', () => {
        const allEntries = read(); 
        expect(allEntries.length).toBe(DB.length)
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
describe('Entry model tests', () => {
   
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
    });

    


    
});