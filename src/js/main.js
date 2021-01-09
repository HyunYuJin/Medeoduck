// progress-bar
(function() {
  const barElem = document.querySelector('.progress-bar');
  const titleElem = document.querySelector('.site-title');
  let maxScrollValue;
  let mousePos = { x: 0, y: 0 };

  function resizeHandler() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener('scroll', function() {
    let scrollPer = pageYOffset / maxScrollValue;
    barElem.style.width = scrollPer * 100 + '%';
  });

  window.addEventListener('resize', resizeHandler);

  window.addEventListener('mousemove', function(e) {
    mousePos.x = -1 + (e.clientX / window.innerWidth) * 2;
    mousePos.y = 1 - (e.clientY / window.innerHeight) * 2;
    titleElem.style.transform = 'rotateX(' + (mousePos.y * 10) + 'deg) rotateY(' + (mousePos.x * 10) + 'deg)';
  })

  resizeHandler();
})();