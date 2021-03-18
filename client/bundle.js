(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

// Message box char check
messageBox.addEventListener("keyup", function() {
  let characters = messageBox.value.split('');
  wordCount.innerText = characters.length;
  if(characters.length > 150){
    messageBox.value = messageBox.value.substring(0,150);
    alert('You have gone over the character limit of 150 characters.');
    wordCount.innerText = 150; 
  }
})




},{"./journal":2}],2:[function(require,module,exports){
// Variables to switch between Production server and Testing locally
const herokuURL = "https://chirper-uk.herokuapp.com"
const testingURL = "http://localhost:3000"

// Submit Journal Function
function submitJournal(e) {
  e.preventDefault();

  let entryMessage = e.target.message.value;
  if(entryMessage > 150){
    entryMessage = entryMessage.substring(0,150);
  }

  const currentDate = new Date();
  const dateTime = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()} @ ${currentDate.getHours()}:${currentDate.getMinutes()}`;

  const journalData = {
    entry: entryMessage,
    date: dateTime,
  };

  console.log(journalData);

  const options = {
    method: 'POST',
    body: JSON.stringify(journalData),
    headers: {
      'Content-Type': 'application/json',
    },
  };
<<<<<<< HEAD

=======
  
>>>>>>> upstream/staging
  fetch(`${testingURL}/entry`, options)
    .then((r) => r.json())
    .then(appendEntry)
    .catch(console.warn);
}

// Append a array of entries
function appendEntries(entries) {
  entries.forEach((entry) => appendEntry(entry));
}

<<<<<<< HEAD
function findReactions() {
  const getReactions = document.querySelector('body');
  getReactions.addEventListener('click', registerReactions)
}

function registerReactions(e) {
  let anchor = e.target.closest('a');
  if(anchor !== null) {
    if (anchor.id != "comment"){
    submitReaction(anchor.name, anchor.id)
    }
    else {
      console.log('comment clicked')
      commentBox(anchor.name)
      
      
    }
  } else {
    
    // do nothing
  }
}

function submitReaction(id, reaction) {
  console.log(id);
  console.log(reaction);
  const reactionData = {
    id: id,
    reaction: reaction,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(reactionData),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch(`${testingURL}/entry/reaction`, options)
    .then((r) => r.json())
    .then(updateReaction)
    .catch(console.warn);
}

function updateReaction(data) {
  let parent = document.getElementById(data.id);
  let like = parent.querySelector('#like p')
  let dislike = parent.querySelector('#dislike p')
  let tree = parent.querySelector('#tree p')

  like.textContent = data.reaction[0].like
  dislike.textContent = data.reaction[1].dislike
  tree.textContent = data.reaction[2].tree
  
}

=======
// Append a single entry
>>>>>>> upstream/staging
function appendEntry(data) {
  const allEntries = document.getElementById('entries');

  const entryDiv = document.createElement('div');
  const date = document.createElement('p');
  const name = document.createElement('h5');

  const reactionDiv = document.createElement('div');
  const like = document.createElement('a');
  const dislike = document.createElement('a');
  const tree = document.createElement('a');
  const comment = document.createElement('a');

  like.id = `like`
  dislike.id = `dislike`
  tree.id = `tree`
  comment.id = `comment`

  like.name = `${data.id}`
  dislike.name = `${data.id}`
  tree.name = `${data.id}`
  comment.name = `${data.id}`

  reactionDiv.className += 'd-flex justify-content-end text-center';

  entryDiv.className += 'entry-box';

  like.className += 'px-3 reaction';
  dislike.className += 'px-3 reaction';
  tree.className += 'px-3 reaction';
  comment.className += 'px-3 reaction';

  like.innerHTML = `<i class="fas fa-thumbs-up fa-2x"></i><p>${data.reaction[0].like}</p>`;
  dislike.innerHTML = `<i class="fas fa-thumbs-down fa-2x"></i><p>${data.reaction[1].dislike}</p>`;
  tree.innerHTML = `<i class="fab fa-pagelines fa-2x"></i><p>${data.reaction[2].tree}</p>`;
  comment.innerHTML = `<i class="fas fa-comment fa-2x"></i>`

  reactionDiv.appendChild(like);
  reactionDiv.appendChild(dislike);
  reactionDiv.appendChild(tree);
  reactionDiv.appendChild(comment);

  entryDiv.id = data.id;
  date.textContent = data.date;
  date.className += 'entry-date';
  name.textContent = 'Anonymous';

  const commentHolder = document.createElement('div');
  commentHolder.id = `comments-${data.id}`
  commentHolder.className = 'comments';
  if (data.comment !== null) {
    const comments = data.comments;
    comments.forEach((comment) => {
      const commentBox = document.createElement('div');
      commentBox.className = 'comment-box';
      const commentUser = document.createElement('h5');
      const theComment = document.createElement('p');

      commentUser.textContent = 'Anonymous';
      theComment.textContent = `"${comment}"`
      commentBox.appendChild(commentUser);
      commentBox.appendChild(theComment);
      commentHolder.appendChild(commentBox);
    });
  }

  entryDiv.appendChild(date);
  entryDiv.appendChild(name);
  const urlCheck = data.entry;
  if (urlCheck.startsWith('https://')) {
    const image = document.createElement('img');
    image.src = data.entry;
    entryDiv.appendChild(image);
  } else {
    const entry = document.createElement('p');
    entry.textContent = `"${data.entry}"`;
    entry.className += 'entry-message';
    entryDiv.appendChild(entry);
  }
  entryDiv.appendChild(reactionDiv);
  entryDiv.appendChild(commentHolder)
  allEntries.appendChild(entryDiv);
  findReactions();
}

// Find reactions
function findReactions() {
  const getReactions = document.querySelector('body');
  getReactions.addEventListener('click', registerReactions)
}

// Register Reaction
function registerReactions(e) {
  let anchor = e.target.closest('a');
  if(anchor !== null) {
    if (anchor.id != "comment"){
    submitReaction(anchor.name, anchor.id)
    }
    else {
      console.log('comment clicked')
      commentBox(anchor.name)
      
      
    }
  }
}

// Submit a reaction
function submitReaction(id, reaction) {
  console.log(id);
  console.log(reaction);
  const reactionData = {
    id: id,
    reaction: reaction,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(reactionData),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch(`${testingURL}/entry/reaction`, options)
    .then((r) => r.json())
    .then(updateReaction)
    .catch(console.warn);
}

// Update reaction count
function updateReaction(data) {
  let parent = document.getElementById(data.id);
  let like = parent.querySelector('#like p')
  let dislike = parent.querySelector('#dislike p')
  let tree = parent.querySelector('#tree p')

  like.textContent = data.reaction[0].like
  dislike.textContent = data.reaction[1].dislike
  tree.textContent = data.reaction[2].tree
}

// Request an entry
function requestEntries() {
  fetch(`${testingURL}/entry`)
    .then((r) => r.json())
    .then(appendEntries)
    .catch(console.warn);
}

// Create comment box
function commentBox(id) {
  const checkCommentBox = document.getElementById('commentForm');
  if (checkCommentBox) {
    checkCommentBox.remove();
  }

  const commentForm = document.createElement('form');
  const commentBox = document.createElement('textarea');
  const entryBox = document.getElementById(id)
  const submitBtn = document.createElement('input')
  
  commentForm.id = 'commentForm'
  commentForm.name = id

  commentBox.id = 'comment'
  commentBox.name = id
  commentBox.className = 'form-control'

  submitBtn.id = 'submitBtn'
  submitBtn.name = id
  submitBtn.type = 'submit'
  submitBtn.value = 'Submit Comment'

  commentForm.className += 'd-flex justify-content-start text-center';

  entryBox.appendChild(commentForm);

  commentForm.appendChild(commentBox);
  commentForm.appendChild(submitBtn); 
  commentForm.addEventListener('submit', submitComment)

}

// Submit comment box
function submitComment(e) {
  e.preventDefault();
  
  const commentData = {
    id: e.submitter.name,
    comment: e.target.comment.value,
  };

  console.log(commentData);

  const options = {
    method: 'PATCH',
    body: JSON.stringify(commentData),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch(`${testingURL}/entry/comment`, options)
    .then((r) => r.json())
    .then(updateComment)
    .catch(console.warn);
}

// Update comment section
function updateComment(data) {
  const commentHolder = document.getElementById(`comments-${data.id}`);
  commentHolder.innerHTML = '';
  if (data.comment !== null) {
    const comments = data.comments;
    comments.forEach((comment) => {
      const commentBox = document.createElement('div');
      commentBox.className = 'comment-box';
      const commentUser = document.createElement('h5');
      const theComment = document.createElement('p');

      commentUser.textContent = 'Anonymous';
      theComment.textContent = `"${comment}"`
      commentBox.appendChild(commentUser);
      commentBox.appendChild(theComment);
      commentHolder.appendChild(commentBox);
    });
  }
}

// Add Giphy
function addGiphy() {
  console.log('test')
  // get search term //
  let userInput = document.getElementById("giphytwo").value

  // our api key //
  let giphyAPIkey = "9Cizm4XVM8GvD62i82DS39y9oGEE9ERK"

  // overall giphy url using apikey and search term//
  let giphyAPIurl = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyAPIkey}&limit=3`

  // fetch data from api and work with json // 
  fetch(giphyAPIurl)
  .then((r) => r.json())
  .then(displayGifs)
}

// Display the returned Gifs
function displayGifs(gifs) {
    const giphyArea = document.getElementById('giphy-form');
    giphyArea.className = '';
    console.log(gifs)
    // receives the first img path with fixed height //
    let imageData = gifs.data;
    for (let i = 0; i < imageData.length; i++) {
      let selectImage = imageData[i];
      let imgURL = selectImage.images.fixed_height.url;

      let button = document.getElementById(`giphy-${i + 1}`);
      let radio = document.getElementById(`${i + 1}-gif`);
      radio.value = imgURL;

      button.innerHTML = `<img src="${imgURL}">`;
    }
}

// Handle the submitted Gif
function handleGifs(e) {
  e.preventDefault();
  let radio;
  let url;
  const firstRadio = e.target[0].checked;
  const secondRadio = e.target[1].checked;
  const thirdRadio = e.target[2].checked;
  if (firstRadio) {
    radio = document.getElementById('1-gif');
    url = radio.value;
  } else if (secondRadio) {
    radio = document.getElementById('2-gif');
    url = radio.value;
  } else if (thirdRadio) {
    radio = document.getElementById('3-gif');
    url = radio.value;
  } else {
    alert('oi');
    return
  }

  submitGif(url);
}

// Submit the gif as a new entry
function submitGif(url) {
  const currentDate = new Date();
  const dateTime = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()} @ ${currentDate.getHours()}:${currentDate.getMinutes()}`;

  const journalData = {
    entry: url,
    date: dateTime,
  };

  console.log(journalData);

  const options = {
    method: 'POST',
    body: JSON.stringify(journalData),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch(`${testingURL}/entry`, options)
    .then((r) => r.json())
    .then(appendEntry)
    .catch(console.warn);

  
  const giphyArea = document.getElementById('giphy-form');
  giphyArea.className = 'd-none';
}

// Exports
module.exports = {
  submitJournal,
  appendEntry,
  appendEntries,
  requestEntries,
  commentBox,
  addGiphy,
  handleGifs,
  displayGifs
};

},{}]},{},[1]);
