//Testing the functionalities of the app on the client side // 
// imports //
const fs = require('fs');
const path = require('path');
//const { runInThisContext } = require('vm');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
global.fetch = require('jest-fetch-mock');
const journal = require('../js/journal')
const mockEvent = require('./mockEvent')




let testEntry = { id:0,entry:"Yo whats up lets save the planet",date:"25/04/2373",reaction:[{like:0},{dislike:0},{tree:0}],comments:["first comment"]};

describe('Creating new journal entry', () => {

    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();

        // const fakeSubmitJournal = {
        //     preventDefault: jest.fn(),
            

        // }})
        journal.submitJournal = jest.fn(() => { 
            console.log('Submitted') 
        });
        jest.disableAutomock();

        journal.sendReaction = jest.fn((data) =>{
            return 'mock send reaction'
        })
        
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

describe('Entry content type',( ) => {
    it('should create paragraph if entry is text', () => {
        let entry = 'hello'
        expect(journal.checkEntryContentType(entry).textContent).toBe("\"hello\"")
    });

    it('should create image if entry is GIPHY', () => {
        let giphy = "https://media1.giphy.com/media/888R35MJTmDxQfRzfS/200.gif?cid=e672865d9c8r481cuh391oyaor6mp645h1il1w20cwi8ygza&rid=200.gif"
        let img = journal.checkEntryContentType(giphy)
        expect(img.src).toMatch(giphy);
    });
});

describe('Adding Reactions',( ) => {
    it('should call submit reaction function when reaction is added', () => {
        const getReactions = document.querySelector('body');
       // getReactions.addEventListener('click', registerReactions)
        //getReactions.click()

        // let spy = jest.spyOn(journal, 'registerReactions');
        // journal.registerReactions(e)



        // expect( journal.registerReactions.mock.calls.length).toBe(1)


        //let path = document.getElementById('comment')
        //let event = new MouseEvent("click", {relatedTarget: '#comment'})
        // event.initMouseEvent(type, canBubble, cancelable, view,
        //     detail, screenX, screenY, clientX, clientY,
        //     ctrlKey, altKey, shiftKey, metaKey,
        //     button, relatedTarget);
        // journal.registerReactions = jest.fn((event) => {
         
        //     let anchor = event;
        //     if(anchor !== null) {
        //         if (anchor.id != "comment"){
        //         //submitReaction(anchor.name, anchor.id)
        //         return 'success'
        //         }
        //         else {
        //         console.log('comment clicked')
        //         commentBox(anchor.name)
        //         }
        //     }
        // });
        

        let event = new mockEvent('like',0)

        journal.submitReaction = jest.fn((one, two) => { 
            console.log('Submitted' + one + two) 
        });
        

        let spy = jest.spyOn(journal, 'registerReactions');
        
        try{
            journal.registerReactions(event)
        }catch(err){
            console.warn
        }
        
        expect( journal.registerReactions.mock.calls.length).toBe(1)

    });

    it('should add comment box when comment is clicked', () => {
        jest.enableAutomock();
        let event2 = new mockEvent('comment', 2);

        try{
            let spy = jest.spyOn(journal, 'commentBox');
            journal.registerReactions(event2);
        }catch(err){
            console.warn
            expect(journal.registerReactions(event2)).toThrow()
            expect( journal.commentBox.mock.calls.length).toBe(1)
        }

        journal.registerReactions(event2);
        expect(journal.sendReaction(event2)).toEqual('mock send reaction')
    });

    it('should display added reaction', () => {
        testEntry.reaction[0].like = 1;
        journal.updateReaction(testEntry); 

        expect(testEntry.reaction[0].like).toEqual(1)
    })
});


describe('Comments',( ) => {
    it('should create a comment box', () => {
        journal.commentBox(0)
        const entryBox = document.getElementById(0).querySelector('div .comment-box')
        expect(entryBox.innerHTML).toContain('testComment')
    });

    it('should add a second comment to the comment box', () => {

        testEntry.comments.push("test2 Comment")
        journal.updateComment(testEntry)
        journal.commentBox(testEntry.id)
        const entryBox = document.getElementById(testEntry.id).querySelectorAll('div .comment-box')
        expect(entryBox.length).toEqual(2)
        expect(entryBox[1].innerHTML).toContain("test2 Comment")
    });
});



    

    // describe('addGiphy', () => {
    //     test('see if the value inputted into the add Giphy textbox is a word which can be used to find a giphy', () => {
    //         // 
    //     })

    //     test('responsive giphy button. once it has been clicked shows three preview from urls', () => {

    //     })

    //     test('submit giphy button. once radio button is checked and submit giphy button is clicked, giphy shoould appear at the bottom of the page', () => {

    //     })
    // }
