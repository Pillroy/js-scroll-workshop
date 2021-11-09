var firstsec = document.getElementById('first-section');
var secondsec = document.getElementById('second-section');
var lastScrollTop = 0;
window.onscroll = function () {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    secondsec.scrollIntoView({ behavior: 'smooth' });
  } else {
    firstsec.scrollIntoView({ behavior: 'smooth' });
  }
  lastScrollTop = st <= 0 ? 0 : st;
};
