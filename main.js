const $ = s => document.querySelector(s)
const $$ = s => document.querySelectorAll(s)

let text = ''

$('.input').onclick = function(e) {
  this.classList.add('focus')
  $('.keyboard').classList.add('show')
  e.stopPropagation()
}

document.onclick = function() {
  $('.input').classList.remove('focus')
  $('.keyboard').classList.remove('show')
}

$('.keyboard').onclick = function(e) {
  e.stopPropagation() 
}

$$('.keyboard .row > span').forEach($key => {
  $key.onclick = function(e) {
    let type = this.dataset.type
    console.log(type)
    switch(type) {
      case 'char':
        text += this.innerText
        $('.input').innerText = text
        break;
      case 'uppercase':
        setPage('uppercase')
        break;
      case 'lowercase':
        setPage('lowercase')
        break;
      case 'number':
        setPage('number')
        break;
      case 'symbol':
        setPage('symbol')
        break;
      case 'backspace':
        text = text.substr(0, text.length - 1)
        $('.input').innerText = text
        break;
      case 'space':
        text += ' '
        $('.input').innerText = text
        break;
      case 'return':
        text += '\n'
        $('.input').innerText = text
        break;
    }
  }
})

function setPage(name) {
  $$('.keyboard .page').forEach($page => $page.style.display = 'none')
  $('.keyboard .page-' + name).style.display = 'block'
}

