'use strict';

const eggCode = /.*KeyYKeyTKeyNKeyJKeyKKeyJKeyUKeyBKeyZ/;
let code = '';

const secret = document.getElementsByClassName(`secret`)[0];

window.addEventListener(`keydown`, togglePanel);
window.addEventListener(`keyup`, easterEgg);

function togglePanel(e) {
  if (e.ctrlKey && e.altKey && e.keyCode == 84)
    document.getElementsByTagName(`nav`)[0].classList.toggle(`visible`);
}

function easterEgg(e) {
  
  code += e.code;
  
  if (e.code === 'KeyZ') {
    if (eggCode.test(code)) {
      secret.classList.add(`visible`);
    } 
    else {
      code = '';
    }
  }
}