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

module.exports = {
  handleJournalSubmit,
  submitJournal,
  appendEntry,
  appendEntries,
  requestEntries,
};
