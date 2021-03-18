const DB = require('../db.json');
const utils = require('../controllers/utils')
const fs = require('fs');

describe('JSON file access', () => {

    let allEntries = utils.read(); 
    let testEntry = {"entry":"Model saving test","date":"17/03/2021"}

    describe('write to JSON file', () => {
        it('should write the given object to the JSON file', () => {

            fs.writeFile = jest.fn(() => {
                console.log('called fn')
                utils.message();
            })

            let spyWrite = jest.spyOn(utils, 'write'); 
            utils.write(testEntry)
            expect(utils.write.mock.calls.length).toBe(1)
        });
        it('test should not add the written result to JSON file', () => {
            let preWriteLength = DB.length;
            let spyWrite = jest.spyOn(utils, 'write'); 
            utils.write(testEntry);
            expect(DB.length).toEqual(preWriteLength)

        })
    })

    describe('read JSON file', () => {
        it('should call utils read function', () => {
            let spyRead = jest.spyOn(utils, 'read'); 
            utils.read(testEntry)
            expect(utils.read.mock.calls.length).toBe(1)
         });
        it('should read all the entries from JSON file', () => {
             expect(allEntries.length).toBe(DB.length)
         });
    })
});