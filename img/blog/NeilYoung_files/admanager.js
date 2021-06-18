import gpt from './gpt-generator.js'

let is_called = false;

window.gpt_enable = function () {
  gpt.init('21870649235');
  is_called = true;
}

window.gpt_disable = function () {
  is_called = true;
  let ads = document.querySelectorAll('.gpt-new');
  ads.forEach(e => e.parentNode.removeChild(e));
}

setTimeout(function () {
  if (! is_called) {
    gpt_enable();
  }
}, 6000);