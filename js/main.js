/* global data */

var $title = document.querySelector('#title');
var $urlInput = document.querySelector('#URL-input');
var $notes = document.querySelector('#notes');
var $imgBox = document.querySelector('#img-box');
var $form = document.querySelector('form');

function changeSrc(event) {
  $imgBox.src = $urlInput.value;
}

$urlInput.addEventListener('input', changeSrc);

function handleSubmit(event) {
  event.preventDefault();
  var newEntry = {};
  newEntry.image = $urlInput.value;
  newEntry.title = $title.value;
  newEntry.notes = $notes.value;
  newEntry.nextEntryId = data.nextEntryId;
  data.entries.push(newEntry);
  data.nextEntryId++;
  $form.reset();
}

$form.addEventListener('submit', handleSubmit);
