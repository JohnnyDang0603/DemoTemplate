let slideindex = 0;
let slidess = document.getElementsByClassName('testmonial-al');
showautoslide();
///auto
function showautoslide() {
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = 'none';
  }
  slideindex++;
  if (slideindex > slidess.length) {
    slideindex = 1;
  }
  slidess[slideindex - 1].style.display = 'block';
  setTimeout(showautoslide, 10000);
}
///noauto
function plusSlides(n) {
  showslide((slideindex += n));
}
function showslide(n) {
  let i;
  if (n > slidess.length) {
    slideindex = 1;
  }
  if (n < 1) {
    slideindex = slidess.length;
  }
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = 'none';
  }
  slidess[slideindex - 1].style.display = 'block';
}

let btn = document.getElementById('popup');
let bck = document.getElementById('overlay');
function openPopup() {
  btn.classList.add('open-popup');
  bck.style.display = 'block';
}
function closePopup() {
  btn.classList.remove('open-popup');
}
let lis1 = document.getElementById('idul');

let lis = lis1.getElementsByClassName('idli');

function changbr(p) {
  for (let i = 0; i < lis.length; i++) {
    lis[i].style.backgroundColor = 'white';
  }
  lis[p].style.backgroundColor = '#5eb6e1';
}
