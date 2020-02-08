let toggle = document.getElementById('toggle')
let menuNav = document.getElementById('menuNav');
let logo = document.querySelector('#logo');
let closeToggle = document.querySelector('#close_toggle');
let displayInput = document.querySelector('#displayInput');
let inputField = document.querySelector('input');

//function to reveal menuNav
function reveal(){
menuNav.style.display="block";
logo.style.display="none";
toggle.style.display="none";
closeToggle.style.display="inline";
}

//function to hide menuNav
function unreveal(){
  menuNav.style.display="none";
  logo.style.display="inline";
  toggle.style.display="inline";
  closeToggle.style.display="none";
}

function showInput(){
  inputField.style.display='inline';
  displayInput.style.display='none';
}
//event listeners
toggle.addEventListener('click', reveal);
closeToggle.addEventListener('click', unreveal);
displayInput.addEventListener('click', showInput);
