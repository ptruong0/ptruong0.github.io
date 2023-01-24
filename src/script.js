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