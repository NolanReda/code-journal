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

function view(viewName) {
  for (let i = 0; i < $allView.length; i++) {
    if ($allView[i].getAttribute('data-view') === viewName) {
      $allView[i].className = 'view';
    } else if ($allView[i].getAttribute('data-view') !== viewName) {
      $allView[i].className = 'view hidden';
    }
  }
}

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
  view('entries');
  $ul.prepend(renderEntry(newEntry));
  $imgBox.setAttribute('src', 'images/placeholder-image-square.jpg');
}

/*
DOM model
<li>
  <div class="entry-container">
    <div class="row entry">
      <div class="column-half">
        <img class="img-box" src="images/placeholder-image-square.jpg">
      </div>
      <div class="column-half">
        <h2>title</h2>
        <p class="entry-notes">
          text content
        </p>
      </div>
    </div>
  </div>
</li>
*/

function renderEntry(entry) {
  var li = document.createElement('li');
  var newEntry = document.createElement('div');
  newEntry.setAttribute('class', 'entry-container');
  li.appendChild(newEntry);
  var entryRow = document.createElement('div');
  entryRow.setAttribute('class', 'row entry');
  newEntry.appendChild(entryRow);

  var colHalf1 = document.createElement('div');
  colHalf1.setAttribute('class', 'column-half');
  entryRow.appendChild(colHalf1);
  var img = document.createElement('img');
  img.setAttribute('class', 'img-box');
  img.setAttribute('src', entry.image);
  colHalf1.appendChild(img);

  var colHalf2 = document.createElement('div');
  colHalf2.setAttribute('class', 'column-half');
  entryRow.appendChild(colHalf2);
  var title = document.createElement('h2');
  var titleText = document.createTextNode(entry.title);
  title.appendChild(titleText);
  colHalf2.appendChild(title);
  var notes = document.createElement('p');
  var notesText = document.createTextNode(entry.notes);
  notes.appendChild(notesText);
  colHalf2.appendChild(notes);

  return li;
}

var $ul = document.querySelector('ul');

for (let i = 0; i < data.entries.length; i++) {
  var entry = renderEntry(data.entries[i]);
  $ul.prepend(entry);
}

$form.addEventListener('submit', handleSubmit);

var $allView = document.querySelectorAll('.view');
var $entries = document.querySelector('#entries');
var $new = document.querySelector('#new');

function switchView(event) {
  var $dataView = event.target.getAttribute('data-view');
  for (let i = 0; i < $allView.length; i++) {
    if ($allView[i].getAttribute('data-view') === event.target.getAttribute('data-view')) {
      $allView[i].className = 'view';
    } else if ($allView[i].getAttribute($dataView) !== event.target.$dataView) {
      $allView[i].className = 'view hidden';
    }
  }
}

$entries.addEventListener('click', switchView);
$new.addEventListener('click', switchView);
