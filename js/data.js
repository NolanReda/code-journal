/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

// var $title = document.querySelector('#title');
// var $urlInput = document.querySelector('#URL-input');
// var $notes = document.querySelector('#notes');
// var $imgBox = document.querySelector('#img-box');
// var $save = document.querySelector('.save');

// function renderEntry(entry) {
//   var newDiv = document.createElement('div');
// }

var previousEntriesJSON = localStorage.getItem('journal');

if (previousEntriesJSON !== null) {
  data = (JSON.parse(previousEntriesJSON));
}

function handleUnload(event) {
  var jsonEntry = JSON.stringify(data);
  localStorage.setItem('journal', jsonEntry);
}

window.addEventListener('beforeunload', handleUnload);
