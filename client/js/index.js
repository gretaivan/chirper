const { handleJournalSubmit, requestEntries } = require('./journal');

// Setup querySelectors
const formJournal = document.querySelector('#journal');

// Setup event listeners
formJournal.addEventListener('submit', handleJournalSubmit);

document.onload = requestEntries;
