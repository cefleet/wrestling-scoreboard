let red = 0;
let green = 0;

document.getElementById('red-score').innerHTML = red;
document.getElementById('green-score').innerHTML = green;

document.getElementById('set-match-number').addEventListener('click',()=>{
  document.getElementById('match-number').innerHTML=document.getElementById('match-number-input').value;
  document.getElementById('match-number-input').value = '';
});

document.getElementById('reset-score').addEventListener('click', ()=>{
  red = 0;
  green = 0;
  document.getElementById('red-score').innerHTML = red;
  document.getElementById('green-score').innerHTML = green;
});

document.getElementById('red-add').addEventListener('click', ()=>{
  red++;
  document.getElementById('red-score').innerHTML = red;
});

document.getElementById('red-minus').addEventListener('click', ()=>{
  red--;
  document.getElementById('red-score').innerHTML = red;
});

document.getElementById('green-add').addEventListener('click', ()=>{
  green++;
  document.getElementById('green-score').innerHTML = green;
});

document.getElementById('green-minus').addEventListener('click', ()=>{
  green--;
  document.getElementById('green-score').innerHTML = green;
});