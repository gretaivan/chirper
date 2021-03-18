const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const journal = require('../js/journal')

describe('index.html', () => {

    // before each test convert document element to a string 
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    })

    // check to see if the app has an image logo called "chirper"
    describe('header', () => {
        test('it has an image title called chirper', () => {
            const logoTitle = document.querySelector('header img');
            expect(logoTitle).toBeTruthy();
        })
    
    describe('body', () => {

        // check there is a messagebox //
        test('it has a message box with a placeholder', () => {
            const mainEntryBox = document.querySelector('#journal #messageBox')
            expect(mainEntryBox).toBeTruthy() 
        })

        // check buttons work // 
        beforeEach(() => {
            button = document.querySelector('button')
        })

        test('it exists', () => {
            expect(button).toBeTruthy();
        })

        test('it has a call to action', () => {
            expect(button.textContent.toLowerCase()).toContain('giphy!')
        })

        // journal entries //

        describe('journal entries', () => {

            test('there are journal entries', () => {
                const journalEntryExists = document.querySelector('#entries')
                expect(journalEntryExists).toBeTruthy()
            })
            
            test('there is a date', () => {
                
                journal.appendEntry({id:0,entry:"Yo whats up lets save the planet",date:"25/04/2373",reaction:[{like:0},{dislike:0},{tree:0}],comments:["first comment"]});

                let entryDate = document.querySelector('.entry-date');
                expect(entryDate.textContent).toEqual("25/04/2373");
            })

            test('there is an Anonymous name tag', () => {
                journal.appendEntry({id:0,entry:"Yo whats up lets save the planet",date:"25/04/2373",reaction:[{like:0},{dislike:0},{tree:0}],comments:["first comment"]});

                let anonymousTag = document.querySelector('.comment-box')
                expect(anonymousTag.textContent).toContain("Anonymous")
            })

            test('there is a comment', () => {
                journal.appendEntry({id:0,entry:"Yo whats up lets save the planet",date:"25/04/2373",reaction:[{like:0},{dislike:0},{tree:0}],comments:["first comment"]});

                let commentContent = document.querySelector('.comment-box')
                expect(commentContent.textContent).toContain('first comment')

            })

            test('there is a giphy', () => {
                let key = "9Cizm4XVM8GvD62i82DS39y9oGEE9ERK"
                let userInput = 'hello'
                journal.appendEntry({id:0,entry:"Yo whats up lets save the planet",date:"25/04/2373",reaction:[{like:0},{dislike:0},{tree:0}],comments:[`https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${key}&limit=3`]})

                let giphyContent = document.querySelector('.comment-box')
                expect(giphyContent.textContent).toContain(key)
                expect(giphyContent.textContent).toContain(userInput)
            })

        })
    })
    
    })
})