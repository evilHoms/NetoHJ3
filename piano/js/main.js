'use strict';

const set = document.getElementsByClassName(`set`)[0];
const keys = set.getElementsByTagName(`li`);
const notes = set.getElementsByTagName(`audio`);

const middleNotes = [
  `./sounds/middle/first.mp3`,
  `./sounds/middle/second.mp3`,
  `./sounds/middle/third.mp3`,
  `./sounds/middle/fourth.mp3`,
  `./sounds/middle/fifth.mp3`
];
const lowerNotes = [
  `./sounds/lower/first.mp3`,
  `./sounds/lower/second.mp3`,
  `./sounds/lower/third.mp3`,
  `./sounds/lower/fourth.mp3`,
  `./sounds/lower/fifth.mp3`
];
const higherNotes = [
  `./sounds/higher/first.mp3`,
  `./sounds/higher/second.mp3`,
  `./sounds/higher/third.mp3`,
  `./sounds/higher/fourth.mp3`,
  `./sounds/higher/fifth.mp3`
];



window.addEventListener(`keydown`, handleModifiersDown);
window.addEventListener(`keyup`, handleModifiersUp);

for (const key of keys) {
  key.addEventListener(`click`, playNote);
}



function playNote(e) {
  for (let i = 0; i < keys.length; i++) { 
    if (keys[i] === this) {
      if (set.classList.contains(`middle`)) {
        notes[i].src = middleNotes[i];
      }
      else if(set.classList.contains(`higher`)) {
        notes[i].src = higherNotes[i];
      }
      else if(set.classList.contains(`lower`)) {
        notes[i].src = lowerNotes[i];
      }
      notes[i].currentTime = 0;
      notes[i].play();
    }
  }
}

function handleModifiersDown(e) {
  switch (e.keyCode) {
    case 16:
      set.classList.remove(`middle`);
      set.classList.remove(`higher`);
      set.classList.add(`lower`);
      break;
    case 18:
      set.classList.remove(`middle`);
      set.classList.remove(`lower`);
      set.classList.add(`higher`);
      break;
  }
}

function handleModifiersUp(e) {
  switch (e.keyCode) {
    case 16:
    case 18:
      set.classList.remove(`higher`);
      set.classList.remove(`lower`);
      set.classList.add(`middle`);
      break;
  }
}