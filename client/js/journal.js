function handleJournalSubmit(e) {
  submitJournal(e);
}

function submitJournal(e) {
  e.preventDefault();
  const currentDate = new Date();
  const dateTime = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentdate.getFullYear()} @ ${currentdate.getHours()}:${currentdate.getMinutes()}`;

  const journalData = {
    entry: e.target.message.value,
    date: dateTime,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify(journalData),
    headers: {
      'Content-Type': 'application/json',
    },
  };

  fetch('http://localhost:3000/journal', options)
    .then((r) => r.json())
    .then(appendEntry)
    .catch(console.warn);
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
