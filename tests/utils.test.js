const DB = require('../db.json');
//const utils = require('../controllers/utils')
// const utils = jest.createMockFromModule('../controllers/utils').default;
// jest.mock('utils')
//jest.mock('../controllers/utils', () => jest.requireActual('../controllers/__mocks__/utils'))
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

            
           // expect(utils.write(testEntry)).toEqual(true)//toEqual(JSON.stringify(testEntry));

           
            //let writtenObj = utils.write(testEntry)
           //    expect(spyWrite).toHaveBeenCalled()//toEqual(JSON.stringify(testEntry));
    


            // utils.write = jest.fn((o) => utils.write(o))
            
    
            //Supposed to cover lines 15 - 18 but does not cover in coverage
          //  let spy = jest.spyOn( utils, 'message' );
           // utils.message();
            // utils.write(testEntry);
           //    expect(spy).toHaveBeenCalled();
            // let spy = jest.spyOn(utils.write, 'message'); 
            // console.log(spy)
        });
    })



  

    describe('read JSON file', () => {
        it('should read all the entries from JSON file', () => {
            // const allEntries = utils.read(); 
             expect(allEntries.length).toBe(DB.length)
         });
    })


 
   
    // const MOCK_FILE_INFO = {
    //     '/path/to/utils.js': 'console.log("file1 contents");',
    //   };

    // beforeEach(() => {
    //     // Set up some mocked out file info before each test
    //     require('utils').__setMockFiles(MOCK_FILE_INFO);
    //   });

   
   
});