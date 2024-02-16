function hideElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}
function showElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}


function generateARandomAlphabet(){
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabetArray = alphabets.split('');

  //random number index from 0 to 25
  const randomNumber = Math.random()*25;
  const index = Math.round(randomNumber);
  const randomAlphabet = alphabetArray[index];

  //set random alphabet in the display
  return randomAlphabet;
}

function continueGame(){
  const alphabet = generateARandomAlphabet();

  //set random alphabet
  const alphaElement = document.getElementById('displayed-alphabet');
  alphaElement.innerText = alphabet;
}


function playNow(){
  hideElementById('home-section');
  showElementById('playground-section');

  continueGame();
}

