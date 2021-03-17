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
            const mainEntryBox = document.querySelector('.container #journal #messageBox')
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

                console.log(entryDate.textContent)
            })

            test('there is an Anonymous name tag', () => {
                const anonymousTag = document.querySelectorAll('#entries h5')[0].innerHTML
                expect(anonymousTag).toBe("Anonymous")
            })

            test('there is a GIPHY', () => {
                const giphyContent = document.querySelectorAll('#entries img')
                expect(giphyContent).toEqualTag('img')
            })

            // test('there is a GIPHY or a comment', () => {
            //     const giphyContent = document.document.querySelectorAll('#entries p #5')
            //     expect(giphyContent || commentContent).toBeTruthy()
            // })

        })
    })
    
    })
})