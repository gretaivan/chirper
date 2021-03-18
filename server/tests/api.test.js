const fs = require('fs');
const request = require("supertest");
const server = require('../server');
const Entry = require('../models/entry');
jest.mock('../controllers/utils', () => jest.requireActual('../controllers/__mocks__/utils'))
const utils = require('../controllers/utils');
//test data
let testEntries =  fs.readFileSync('db.json', 'utf-8');
testEntries = JSON.parse(testEntries);
const DB = require('../db');
const { response } = require('../server');

let port = 5000;

describe('API server test', () => {
    let apiServer;
    const allEntries = utils.read();

    beforeAll(() => {   
        apiServer = server.listen(port, () => console.log(`Test server is running on port ${port}`));
    });

    afterAll(done => {
        apiServer.close(done);
    });

    describe('Route "/" ', () => { 
        it('should GET with status code 200', done => { 
            request(apiServer)
                .get('/')
                .expect(200, done) 
        });
        it('shoul GET and return message', done => { 
            request(apiServer)
                .get('/')
                .expect("Hello there!", done)
        });
    });  

    describe('Route "/entry" ', () => { 

        it('should POST with status 201', (done) => {
            //test object
            let testEntry = {
                "entry":"Planet saving test",
                "date":"25/04/2373"
            }

            request(apiServer)
                .post('/entry') 
                .send(testEntry) 
                .expect(201, done) 

        });
        it('should POST and return a new entry', (done) => {

            let testEntry = testEntries[1];

            request(apiServer)
                .post('/entry') 
                .send(testEntries[1]) 
                .expect(testEntry, done) 
        });

        it('should GET with status 200', (done) => {
            request(apiServer)
                .get('/entry') 
                .expect(200, done) 
        });
        
        it('should GET and return a new entry', (done) => {

            let str = Entry.all
            str = JSON.stringify(str)

            request(apiServer)
                .get('/entry') 
                .expect(str, done)
        });
    });  
        

    describe('Route "/entry/reaction" ', () => { 
        it('should POST with status 201', (done) => {
        
            request(apiServer)
                .post('/entry/reaction') 
                .send({id: 5, reaction: 'like'}) 
                .expect(201, done) 
        })
        it('should POST and returns the object', (done) => {

            request(apiServer)
                .post('/entry/reaction') 
                .send({id: 5, reaction: 'like'}) 
                .expect(Entry.findById(5), done) 
        })
    })

    describe('Route "/entry/comment" ', () => { 
        it('should PATCH with status 201 ', (done) => {

            request(apiServer)
                .patch('/entry/comment')
                .send({id: 5, comment: "hello"})
                .expect(Entry.findById(5), done)
        })
    })

});

