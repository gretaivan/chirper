const request = require("supertest");
const server = require('../server');
// const controller = require('../controllers/entries')
// const DB = require('../db')
// jest.mock('../controllers/entries');

let port = 5000;

describe('API server test', () => {
    let apiServer;

    beforeAll(() => {   
        apiServer = server.listen(port, () => console.log(`Test server is running on port ${port}`));
    });

    afterAll(done => {
        //console.log(`Closing test server on port ${port}`);
        apiServer.close(done);
    });

    beforeEach(() => {
        jest.setTimeout(10000);
    });

    test('responds to request get /  with status code 200', done => { 
        request(apiServer)
            .get('/')
            .expect(200)
            .expect("Hello there!", done)
    });
   
    
    //Something wrong with callback function here? 
    test('responds to request post /entry with status 201 and returns a new entry', (done) => {
        //test object
        let testEntry = {
            "entry":"Planet saving test",
            "date":"25/04/2373"
        }
        //jest.setTimeout(30000);
        request(apiServer)
            .post('/entry') 
            .send(testEntry) 
            .expect(201, done) 
            // .expect({id: 4, ...testEntry}, done) 
    });

    test('responds to request get /entry  with status code 200', (done) => {
        request(apiServer)
            .get('/entry')
            .expect(200, done)
            //.expect(DB, done)
    });  

});

