// copies text to clipboard
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);

  // renders temporary alert
  const alertPlaceholder = document.querySelector('#alertPlaceholder')
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div id="copy-alert" style="display: block;">`,
    `   <div class="alert-text">Copied email address to clipboard!</div>`,
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)

  // which disappears after 2.5 secs
  setTimeout(()=> document.querySelector('#copy-alert').style.display = 'none', 2500);
}


function randomDimensions() {
  return String(Math.floor(Math.random() * 5 + 1)) + "px";
}
function randomPosition() {
  return String(Math.floor(Math.random() * 100 + 1)) + "%";
}
function randomDelay() {
  return String(Math.floor(Math.random() * 2000 + 1)) + "ms";

}


function generateStars() {
  const numStars = 40;
  const stars = [];
  const starContainer = document.querySelector('#star-container');
  console.log(starContainer)
  for (let i = 0; i < numStars; i++) {
    const dim = randomDimensions()
    const randomStyle = `height:${dim}; width:${dim}; left:${randomPosition()}; top:${randomPosition()}; animation-delay:${randomDelay()};`;
    const className = `star star-${i}`;
    const star = document.createElement('span');
    star.setAttribute('class', className);
    star.setAttribute('style', randomStyle);
    starContainer.appendChild(star);
    setTimeout(() => {}, 1000);
  }
}

const shootingStarInterval = 5000; // Interval between shooting stars in milliseconds
const rocketInterval = 10000;

window.onload = (event) => {
  generateStars();
  randomizeShootingStarInterval();
  randomizeRocketInterval();
};



function createShootingStar() {
  const shootingStar = document.createElement("div");
  shootingStar.className = "shooting-star";
  shootingStar.style.top = `${Math.random() * 100}%`;
  shootingStar.style.left = `${Math.random() * 100}%`;
  document.body.appendChild(shootingStar);
  setTimeout(() => {
    document.body.removeChild(shootingStar);
  }, 3000);
}

 // Randomize shooting star interval
 function randomizeShootingStarInterval() {
  const interval = Math.random() * shootingStarInterval;
  setTimeout(function() {
    createShootingStar();
    randomizeShootingStarInterval();
  }, interval);
}

function createRocket() {
  const rocket = document.createElement("img");
  rocket.src = 'assets/rocket.png';
  rocket.className = 'rocket'
  rocket.style.top = `${Math.random() * 60 + 20}%`;
  document.body.appendChild(rocket);
  setTimeout(() => {
    document.body.removeChild(rocket);
  }, 20000);
}

function randomizeRocketInterval() {
  const interval = (Math.random() * rocketInterval) + 3000;
  setTimeout(function() {
    createRocket();
    randomizeRocketInterval();
  }, interval );
}

