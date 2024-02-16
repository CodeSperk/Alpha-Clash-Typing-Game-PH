function hideElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}
function showElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}
function setElementTextById(elementId, value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function generateARandomAlphabet(){
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabets.split('');

  //random number index from 1 to 26
  const randomNumber = Math.random()*26;
  const index = Math.round(randomNumber);
  const randomAlphabet = alphabetArray[index];

  //set random alphabet in the display
  setElementTextById("displayed-alphabet", randomAlphabet)
  return randomAlphabet;
}
generateARandomAlphabet()




function playNow(){
  hideElementById('home-section');
  showElementById('playground-section');
}