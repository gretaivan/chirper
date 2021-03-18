//Testing the functionalities of the app on the client side // 

// imports //
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
//global.fetch = require('jest-fetch-mock');
const journal = require('../js/journal')

let testEntry = { id:0,entry:"Yo whats up lets save the planet",date:"25/04/2373",reaction:[{like:0},{dislike:0},{tree:0}],comments:["first comment"]};
// app functions 

describe('app', () => {

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();

        // const fakeSubmitJournal = {
        //     preventDefault: jest.fn(),
            
        // }})
        journal.submitJournal = jest.fn(() => { console.log('Submitted') });
        
    })

    // describe('submitMessage', () => {
    //     test('submit button makes a post request to the route ./controllers/entries', () => {


    //         // Here is a VERY basic generic trigger method
    //         function triggerEvent(el, type)
    //         {
    //             if ((el[type] || false) && typeof el[type] == 'function')
    //             {
    //                 el[type](el);
    //             }
    //         }
        
    //         // We could call this on multiple objects at any time
    //         function resetFields()
    //         {
    //             //triggerEvent(document.getElementById('has-email'), 'onchange');
    //             triggerEvent(journal.handleJournalSubmit, 'submit');

    //         }
    //         journal.submitJournal = jest.fn(() => 'Submitted');

    //         let formJournal = document.querySelector('#journal');
    //         // resetFields(); 
    //         //document.getElementById('link')
    //         formJournal.addEventListener('click', journal.handleJournalSubmit2);
    //         document.getElementById('entry').click();

    //        // expect().toEqual('Submitted')


          
        
    //         // journal.handleJournalSubmit()
    //     })
    // })





    describe('appendEntry', () => {
        test('adds a new journal entry to the bottom of the existing entries', () => {
            //get the entry-box classes count
            const originalEntryDivCount = document.querySelectorAll('.entry-box').length;
            
            //add new entry
            journal.appendEntry(testEntry)

            //get the entry-box classes count post new entry
            let postAddEntryDivCount = document.querySelectorAll('.entry-box').length;
         
            //compare
            expect(postAddEntryDivCount).toEqual(originalEntryDivCount+1);
        })
    });

describe('characterLength', () => {
    test('should throw an error when character length when over 150 characters', () => {
        let entry = 'test'.repeat(150);

        // text with over 150 character should test as having only 150 characters as this is the limit'
        try{
            expect(journal.appendEntry({id:0,entry:entry,date:"25/04/2373",reaction:[{like:0},{dislike:0},{tree:0}],comments:[entry]})).toThrowError(Error)
        } catch(err){
            console.warn
        } 
    })
    test('should append entry with correct character length', () => {

        let entry = 'test'.repeat(34);
        let testEntry = {id:0,entry:entry,date:"25/04/2373",reaction:[{like:0},{dislike:0},{tree:0}], comments: ["testComment1"]}
        journal.appendEntry(testEntry)

        const charLength = document.querySelector('.entry-message')

        expect(charLength.textContent).toEqual(`"${entry}"`); 
    });
})});

describe('',( ) => {

})
 //     test('check if character length is equal to word count', () => {
    //         const // lengthTyped = length of text typed into the box
    //         const // valueCount = value from wordCount function
    //         // expect("lengthTyped").toEqual(valueCount)
    //     })
    // })

    // describe('reactionCount', () => {
    //     test('on click of the emoji icon, the number of reactions should increase (below)', () => {
    //         const clickTimes = document.querySelector('#2 #like p').innerHTML
    //         expect(clickTimes).toEqual("") // clickTimes === number that appears on the screen
    //     })
    // })

    // describe('addGiphy', () => {
    //     test('see if the value inputted into the add Giphy textbox is a word which can be used to find a giphy', () => {
    //         // 
    //     })

    //     test('responsive giphy button. once it has been clicked shows three preview from urls', () => {

    //     })

    //     test('submit giphy button. once radio button is checked and submit giphy button is clicked, giphy shoould appear at the bottom of the page', () => {

    //     })
    // })


