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
                const entryDate = document.querySelector('#entries').innerText
                expect(entryDate.getAttribute('type')).toBe('date')
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