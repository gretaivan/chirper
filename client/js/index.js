const { requestEntries, handleGifs, submitJournal, addGiphy } = require('./journal');

// Setup querySelectors
const formJournal = document.querySelector('#journal');
const giphyButton = document.querySelector('button');
const giphyForm = document.querySelector('#giphy-form');
console.log(giphyButton)

// Setup event listeners
formJournal.addEventListener('submit', submitJournal);
giphyForm.addEventListener('submit', handleGifs);
giphyButton.addEventListener('click', addGiphy)

document.onload = requestEntries();

let messageBox = document.getElementById("messageBox");
let wordCount = document.getElementById("wordCount");

messageBox.addEventListener("keyup", function(){
  console.log('key pressed')
  let characters = messageBox.value.split('');
  wordCount.innerText = characters.length;
  if(characters.length > 150){
    messageBox.value = messageBox.value.substring(0,150);
    alert('You have gone over the character limit of 150 characters.');
    wordCount.innerText = 150; 
  }
})



