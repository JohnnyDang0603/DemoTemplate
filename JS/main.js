let slideindex = 0;
let slidess = document.getElementsByClassName('testmonial-al');
///auto
const showautoslide = () => {
  for (i = 0; i < slidess.length; i++) {
    slidess[i].style.display = 'none';
  }
  slideindex++;
  if (slideindex > slidess.length) {
    slideindex = 1;
  }
  slidess[slideindex - 1].style.display = 'block';
  setTimeout(showautoslide, 10000);
};
///noauto
const plusSlides = (n) => {
  showslide((slideindex += n));
};

const showslide = (n) => {
  if (n > slidess.length) {
    slideindex = 1;
  }
  if (n < 1) {
    slideindex = slidess.length;
  }
  for (let i = 0; i < slidess.length; i++) {
    slidess[i].style.display = 'none';
  }
  slidess[slideindex - 1].style.display = 'block';
};
showautoslide();

//////////////
let btn = document.getElementById('popup');
// let bck = document.getElementById('overlay');

const openPopup = () => {
  btn.classList.add('open-popup');
  // bck.style.display = 'block';
};

const closePopup = () => {
  btn.classList.remove('open-popup');
};

let lis = document.getElementsByClassName('idli');
document.querySelectorAll('.idli').forEach((item) => {
  item.addEventListener('click', (event) => {
    let part = parseInt(item.value);
    changbr(part);
  });
});

function changbr(p) {
  Array.from(lis).map((l) => {
    l.classList.remove('bg-blue');
  });

  lis[p].classList.add('bg-blue');
}
$(function () {
  $('#testmonialid').slick({
    slidesToShow: 3,
    // initialSlide: 2,
    centerMode: true,
    centerPadding: '53px',
    arrows: true,
    dots: false,
    infinite: true,
    cssEase: 'linear',
  });
});
