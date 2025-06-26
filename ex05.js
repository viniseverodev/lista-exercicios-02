// Função debounce
function debounce(fn, delay) {
  let timerId;

  return function(...args) {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function ola() {
  console.log('Olá! Função executada após o debounce.')
}

const olaDebounce = debounce(ola, 1000)

olaDebounce()
olaDebounce()
olaDebounce()

