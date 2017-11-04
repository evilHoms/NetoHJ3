'use strict';

const galleryView = document.getElementsByClassName(`gallery-view`)[0];
const galleryMini = document.getElementsByTagName(`nav`)[0].getElementsByTagName(`a`);
const galleryMiniImgs = document.getElementsByTagName(`nav`)[0].getElementsByTagName(`img`);

for (const img of galleryMini) {
  img.addEventListener(`click`, clickImg);
}

function clickImg(e) {
  e.preventDefault();
  
  for (const img of galleryMini) {
    img.classList.remove(`gallery-current`);
  }
  this.classList.add(`gallery-current`);
  
  for (let i = 0; i < galleryMini.length; i++) {
    if (galleryMini[i].classList.contains(`gallery-current`))
      galleryView.src = galleryMini[i].href;
  }
}