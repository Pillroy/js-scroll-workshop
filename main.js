const firstsec = document.getElementById('first-section');
const secondsec = document.getElementById('second-section');
const lastScrollTop = 0;
window.onscroll = function () {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    secondsec.scrollIntoView(node, {
      behavior: 'smooth',
      scrollMode: 'if-needed',
    });
  } else {
    firstsec.scrollIntoView(node, {
      behavior: 'smooth',
      scrollMode: 'if-needed',
    });
  }
  lastScrollTop = st <= 0 ? 0 : st;
};
