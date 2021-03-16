const request = require("supertest");
const server = require('../server');
const controller = require('../controllers/entries')
const DB = require('../db')
jest.mock('controller');

let port = 6000;

describe('API server test',() => {
    let apiServer;
    //test object
    let testEntry = {
        "entry":"Planet saving test",
        "date":"25/04/2373"
    }

    beforeAll(() => {   
        apiServer = server.listen(port, () => console.log(`Test server is running on port ${port}`));
    });

    afterAll( done => {
        console.log(`Closing test server on port ${port}`);
        apiServer.close(done);
    })



    test('responds to get /  with status code 200', done => {
        request(apiServer)
            .get('/')
            .expect(200, done);
    })  
    test('responds to post / with status 201 and returns a new entry', done => {
        request(apiServer)
            .post('/')
            .send(testEntry)
            .expect(201)
            .expect({id: DB.length, ...testEntry}, done)
    })

});

