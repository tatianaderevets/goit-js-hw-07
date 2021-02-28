const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

const onInput = e => { 
 spanRef.style.fontSize = `${e.target.value}px`;
}

inputRef.addEventListener('input', onInput)