const { handleJournalSubmit, requestEntries, addGiphy } = require('./journal');

// Setup querySelectors
const formJournal = document.querySelector('#journal');
const giphyButton = document.querySelector('button');
const giphyForm = document.querySelector('#giphy-form');
console.log(giphyButton)

// Setup event listeners
formJournal.addEventListener('submit', handleJournalSubmit);
giphyForm.addEventListener('submit', handleJournalSubmit);

document.onload = requestEntries();



