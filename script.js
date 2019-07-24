const buttons = document.querySelectorAll('.button');
const screen = document.querySelector('.screen');
const equalButton = document.querySelector('.button-equal');
const clearButton = document.querySelector('.button-clear');


for (let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener('click', function(){
    let number = buttons[i].getAttribute('data-num');
    screen.value += number
  })
}

equalButton.addEventListener('click', function(){
  if (screen.value === ''){
    screen.value = '';
  }else {
  let value = eval(screen.value);
  screen.value = value;
  }
})

clearButton.addEventListener('click', function(){
  screen.value = '';
})
