/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

var previousEntriesJSON = localStorage.getItem('journal');

if (previousEntriesJSON !== null) {
  data = (JSON.parse(previousEntriesJSON));
}

function handleUnload(event) {
  var jsonEntry = JSON.stringify(data);
  localStorage.setItem('journal', jsonEntry);
}

window.addEventListener('beforeunload', handleUnload);
