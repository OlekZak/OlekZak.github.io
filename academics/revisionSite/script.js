//hide header and footer on scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("topnav").style.top = "0";
    document.getElementById("bottomNav").style.bottom = "0";
  } else {
    document.getElementById("topnav").style.top = "-82px";
    document.getElementById("bottomNav").style.bottom = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


//flip card functionality
const cards = document.querySelectorAll('.flip-card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    const cardInner = card.querySelector('.flip-card-inner');
    cardInner.classList.toggle('flipped');
  });
});


//hover card functionality
const hovers = document.querySelectorAll('.hover-card');
const distanceThreshold = 210;
const hoverStates = new Map();

function boxToMouse(event) {
  const { clientX, clientY } = event;

  hovers.forEach(hover => {
    const bounds = hover.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height / 2;

    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);

    if (distance < distanceThreshold) {
      const rotationX = (deltaY / bounds.height) * 30;
      const rotationY = (deltaX / bounds.width) * -30;

      const key = `${rotationX.toFixed(1)},${rotationY.toFixed(1)}`;
      if (hoverStates.get(hover) !== key) {
        hover.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        hoverStates.set(hover, key);
      }
    } else if (hoverStates.get(hover) !== "0,0") {
      hover.style.transform = `rotateX(0deg) rotateY(0deg)`;
      hoverStates.set(hover, "0,0");
    }

  });
}

document.addEventListener('mouseover', boxToMouse);