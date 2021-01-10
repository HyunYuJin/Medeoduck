// progress-bar
(function() {
  const barElem = document.querySelector('.progress-bar');
  const titleElem = document.querySelector('.site-title');
  let maxScrollValue;
  let mousePos = { x: 0, y: 0 };
  const selectElem1 = document.querySelector('.cate-input');
  const selectElem2 = document.querySelector('.skill-input');
  const selectDropElem1 = document.querySelector('.cate-dropdown');
  const selectDropElem2 = document.querySelector('.skill-dropdown');
  const modalElem = document.querySelector('.modal-dim');

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

  // dropdown
  function dropdown1() {
    if (!selectElem1.classList.contains('dropdown-active')) {
      selectDropElem1.style.display = 'block';
    } else {
      selectDropElem1.style.display = 'none';
    }

    selectElem1.classList.toggle('dropdown-active');
  }

  function dropdown2() {
    if (!selectElem2.classList.contains('dropdown-active')) {
      selectDropElem2.style.display = 'block';
    } else {
      selectDropElem2.style.display = 'none';
    }

    selectElem2.classList.toggle('dropdown-active');
  }

  selectElem1.addEventListener('click', dropdown1);
  selectElem2.addEventListener('click', dropdown2);

  window.addEventListener('click', function(e) {
    if (e.target.className == 'explanation') {
      modalElem.style.display = 'flex';
    }

    if (e.target.className == 'modal-dim') {
      modalElem.style.display = 'none';
    }
  });
})();
