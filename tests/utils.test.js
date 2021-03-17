const DB = require('../db.json');
//const utils = require('../controllers/utils')
// const utils = jest.createMockFromModule('../controllers/utils').default;
// jest.mock('utils')
jest.mock('../controllers/utils', () => jest.requireActual('../controllers/__mocks__/utils'))
const utils = require('../controllers/utils')


describe('JSON file access', () => {
    
    // const MOCK_FILE_INFO = {
    //     '/path/to/utils.js': 'console.log("file1 contents");',
    //   };

    // beforeEach(() => {
    //     // Set up some mocked out file info before each test
    //     require('utils').__setMockFiles(MOCK_FILE_INFO);
    //   });

    let allEntries = utils.read(); 

    let testEntry = {"entry":"Model saving test","date":"17/03/2021"}

    it('should read all the entries from JSON file', () => {
       // const allEntries = utils.read(); 
        expect(allEntries.length).toBe(DB.length)
    });

    it('should write the given object to the JSON file', () => {

        // utils.write = jest.fn((obj) => {
        //     console.log(obj);
        //     console.log("mocked JSON file update");
        // });
        //console.log(utils.write);
        let writtenObj = utils.write(testEntry)
        expect(writtenObj).toEqual(JSON.stringify(testEntry));


        //Supposed to cover lines 15 - 18 but does not cover in coverage
        let spy = jest.spyOn( utils, 'message' );
        utils.message();
        expect(spy).toHaveBeenCalled();
        // let spy = jest.spyOn(utils.write, 'message'); 
        // console.log(spy)
    });
    

});