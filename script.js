function copyToClipboard(text) {
  navigator.clipboard.writeText(text);

  const alertPlaceholder = document.querySelector('#alertPlaceholder')
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div id="copy-alert" style="display: block;">`,
    `   <div class="alert-text">Copied email address to clipboard!</div>`,
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)

  setTimeout(()=> document.querySelector('#copy-alert').style.display = 'none', 2500);
}

function toggleMenu() {
  const hamburger = document.querySelector("#hamburger")
  hamburger.style.display = 'none'
  const navbar = document.querySelector("#navbarNav")
  navbar.style.display = 'block!important'
}