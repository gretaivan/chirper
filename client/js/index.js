const { handleJournalSubmit, requestEntries, addGiphy } = require('./journal');

// Setup querySelectors
const formJournal = document.querySelector('#journal');
const giphyButton = document.querySelector('button');
console.log(giphyButton)

// Setup event listeners
formJournal.addEventListener('submit', handleJournalSubmit);

document.onload = requestEntries();

// GIPHY event listeners 

let APIkey = "";
giphyButton.addEventListener('click', addGiphy);


