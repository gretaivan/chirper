// Testing the functionalities of the app on the client side // 

// imports //
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
global.fetch = require('jest-fetch-mock');
let app;

// app functions 

describe('app', () => {

    beforeEach(() => {
        fetch.resetMocks()
      })

    describe('submitMessage', () => {
        test('submit button makes a post request to the route ./controllers/entries', () => {
            const fakeSubmitEvent = {
                preventDefault: jest.fn(),
                
            }})
    
    describe('appendEntry', () => {
        test('adds a new journal entry to the bottom of the existing entries')
        const liCount = document.querySelectorAll('li').length;
                app.appendEntry("test entry"); // convert this into a mock function
                const newLiCount = document.querySelectorAll('li').length;
                expect(newLiCount).toEqual(liCount + 1)
                expect() 
    })

    describe('characterLength', () => {
        test('check if character length is less than 140 characters', () => {
            const charLength = document.querySelector('#wordCount').innerHTML
            expect(charLength < 140)
        })

        test('check if character length is equal to word count', () => {
            const // lengthTyped = length of text typed into the box
            const // valueCount = value from wordCount function
            // expect("lengthTyped").toEqual(valueCount)
        })
    })

    describe('reactionCount', () => {
        test('on click of the emoji icon, the number of reactions should increase (below)', () => {
            const clickTimes = document.querySelector('#2 #like p').innerHTML
            expect(clickTimes).toEqual("") // clickTimes === number that appears on the screen
        })
    })

    describe('addGiphy', () => {
        test('see if the value inputted into the add Giphy textbox is a word which can be used to find a giphy', () => {

        })

        test('responsive giphy button. once it has been clicked shows three preview from urls', () => {

        })

        test('submit giphy button. once radio button is checked and submit giphy button is clicked, giphy shoould appear at the bottom of the page')
    })


})})
