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
  var newEntry = {};
  newEntry.image = $urlInput.value;
  newEntry.title = $title.value;
  newEntry.notes = $notes.value;
  newEntry.nextEntryId = data.nextEntryId;
  data.entries.push(newEntry);
  data.nextEntryId++;
}

$form.addEventListener('submit', handleSubmit);

/*
<div class="entry-container"
  <div class="row">
    <h1>Entries</h1>
    <button class="new color-purple" value="new">NEW</button>
  </div>
  <div class="row entry">
    <div class="coulumn-half"
      <img class="img-box" src="data.entries.image">
    </div>
    <div class="column-half">
      <h2>title</h2>
      <p class="entry-notes">
        entry notes
      </p>
    </div>
  </div>
</div>
*/

// function renderEntry(entry) {
//   var newDiv = document.createElement('div');
//   newDiv.setAttribute('class', 'entry-container');

//   var row = document.createElement('div');
//   row.setAttribute('class', 'row');
//   newDiv.appendChild(row);
//   var heading = document.createElementNS('h1');
//   var h1 = document.createTextNode('Entries');
//   heading.appendChild(h1);
//   row.appendChild(heading);
//   var newButton = document.createElement('button');
//   newButton.setAttribute('class', 'new color-purple');
//   var buttonText = document.createTextNode('NEW');
//   newButton.appendChild(buttonText);
//   row.appendChild(newButton);

//   var newEntry = document.createElement('div');
//   newEntry.setAttribute('class', 'row entry');
//   newDiv.appendChild(newEntry);
//   var twoColumns = document.createElement('div');
//   twoColumns.setAttribute('class', 'column-half');
//   newEntry.appendChild(twoColumns);
//   var img = document.createElement('img');
//   img.setAttribute('src', data.entries.image);
//   twoColumns.appendChild(img);
//   var text = document.createElement('div');
//   text.setAttribute('class', 'column-half');
//   var title = document.createElement('h2');
//   var h2 = createTextNode(data.entries.title);
//   title.appendChild(h2);
//   var notes = document.createElement('p');
//   var p = document.createTextNode(data.entries.notes);
//   notes.appendChild(p);
// }

// var div = document.querySelector('main');
