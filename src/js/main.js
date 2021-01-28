(function() {
  const barElem = document.querySelector('.progress-bar');
  let maxScrollValue;

  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  // progress-bar
  window.addEventListener('scroll', function() {
    let scrollPer = pageYOffset / maxScrollValue;
    barElem.style.width = scrollPer * 100 + '%';
  });

  window.addEventListener('resize', resizeHandler);
  resizeHandler();
})();
