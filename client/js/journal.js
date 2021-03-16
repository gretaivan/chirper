function handleJournalSubmit(e) {
  console.log(e);
  const button = e.submitter.name;
  if (button === 'entry') {
    submitJournal(e);
  } else if (button === 'giphy') {
    // run giphy request
  } else {
    // do nothing
  }
}

function submitJournal(e) {
  e.preventDefault();
  const currentDate = new Date();
  const dateTime = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()} @ ${currentDate.getHours()}:${currentDate.getMinutes()}`;

  const journalData = {
    entry: e.target.message.value,
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

  fetch('http://localhost:3000/entry', options)
    .then((r) => r.json())
    .then(appendEntry)
    .catch(console.warn);
}

function appendEntries(entries) {
  entries.forEach((entry) => appendEntry(entry));
}

function appendEntry(data) {
  const allEntries = document.getElementById('entries');

  const entryDiv = document.createElement('div');
  const date = document.createElement('p');
  const name = document.createElement('h5');
  const entry = document.createElement('p');

  date.textContent = data.date;
  name.textContent = 'Anonymous';
  entry.textContent = `"${data.entry}"`;

  entryDiv.appendChild(date);
  entryDiv.appendChild(name);
  entryDiv.appendChild(entry);

  allEntries.appendChild(entryDiv);
}

function requestEntries() {
  fetch('http://localhost:3000/entry')
    .then((r) => r.json())
    .then(appendEntries)
    .catch(console.warn);
}

function addGiphy() {
  // get search term //
  let userInput = document.getElementByClass("giphytwo").value

  // our api key //
  let giphyAPIkey = "9Cizm4XVM8GvD62i82DS39y9oGEE9ERK"

  // overall giphy url using apikey and search term//
  let giphyAPIurl = `https://api.giphy.com/v1/gifs/seach?q=${userInput}&rating=g&api_key=${giphyAPIkey}`

  // fetch data from api and work with json // 
  fetch(giphyAPIurl)
  .then(function(data) {
    return data.json
  })
  .then(function(json) {
    // receives the first img path with fixed height //
    let imgPath = json.data[0].images.fixed_height.url
    // create //
    let image = document.createElement("img")
    image.setAttribute("src", imgPath)
    document.body.appendChild(img)
  })
}

module.exports = {
  handleJournalSubmit,
  submitJournal,
  appendEntry,
  appendEntries,
  requestEntries,
  addGiphy
};
