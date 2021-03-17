const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

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
            const mainEntryBox = document.querySelector('journal message-box')
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
            expect(button.textContent.toLowerCase()).toContain('click')
        })

        // journal entries //

        describe('journal entries', () => {

            test('there are journal entries', () => {
                const journalEntryExists = document.querySelector('#entries')
                expect(journalEntryExists).toBeTruthy()
            })
            
            test('there is a date', () => {
                const entryDate = document.querySelector('#entries')
                expect(entryDate).toBeTruthy()
            })

            test('there is an Anonymous name tag', () => {
                const anonymousTag = document.querySelectorAll('#entries')
                expect(anonymousTag[1]).toBeTruthy()
            })

            // test('there is a GIPHY or a comment', () => {
            //     const giphyContent = ''
            //     const commentContent = ''
            //     expect(giphyContent || commentContent).toBeTruthy()
            // })

        })
    })
    
    })
})