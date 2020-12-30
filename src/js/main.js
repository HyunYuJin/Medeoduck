// progress-bar
(function() {
  const barElem = document.querySelector('.progress-bar');
  const logoElem = document.querySelector('.main-logo');
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
    logoElem.style.transform = 'rotateX(' + (mousePos.y * 30) + 'deg) rotateY(' + (mousePos.x * 30) + 'deg)';
  })

  resizeHandler();
})();


// Menu
var theToggle = document.getElementById('toggle');

// hasClass
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

// addClass
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}

// removeClass
function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

// toggleClass
function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, " ") + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0) {
            newClass = newClass.replace(" " + className + " ", " ");
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function () {
    toggleClass(this, 'on');
    return false;
}

// Canvas
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var maxRadius = 60;
var minRadius = 20;
var mouse = {
    x: undefined,
    y: undefined
}

// Add Image
const imgElem = document.querySelector('.medeoduck');
imgElem.addEventListener('load', function () {
    context.drawImage(imgElem, canvas.width, canvas.height); // drawImage('이미지객체', x좌표, y좌표)
});

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

var circleArray = [];

for (var i = 0; i < 200; i++) {
    var radius = (Math.random() * 30) + 3;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 5;
    var dy = (Math.random() - 0.5) * 5;
    var color = randomColor();
    circleArray.push(new Circle(x, y, dx, dy, radius, color));
    // console.log(circleArray);
}

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);
    for (var j = 0; j < circleArray.length; j++) {
        circleArray[j].update();
    }
}

animate();

function randomColor() {
    var color = "rgba(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.random() * 0.2 + ")";
    // console.log(color);
    return color;
}
