(function() {
  const barElem = document.querySelector('.progress-bar');
  let maxScrollValue;
  const date = new Date();
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayElem = document.querySelector('.day');
  const monthElem = document.querySelector('.month');
  const dateElem = document.querySelector('.mon-date');
  const yearElem = document.querySelector('.year');

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

  // date
  dayElem.innerHTML = days[date.getDay()] + ",";
  monthElem.innerHTML = months[date.getMonth()];
  dateElem.innerHTML = date.getDate() + ",";
  yearElem.innerHTML = date.getFullYear();
})();
