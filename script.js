function hideElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}
function showElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}
function setBgById(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('bg-orange-500');
}
function removeBgById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('bg-orange-500');
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
function getElementTextById(elementId){
  const element = document.getElementById(elementId);
  const content =  element.innerText;
  return content;
}
function getElementValueById(elementId){
  const element = document.getElementById(elementId);
  const elementValue =  element.innerText;
  const value = parseInt(elementValue);
  return value;
}
function setElementValue(elementId, value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}



function handleGamePlay(event){
  const pressedKey = event.key;
  
  //get the expected key to be pressed
  const currentAlphabet = getElementTextById('displayed-alphabet');
  const lowerAlphabet = currentAlphabet.toLowerCase();

  if(lowerAlphabet === pressedKey){
    //update score
    const currentScore = getElementValueById('current-score');
    const updatedScore = currentScore + 1;
    setElementValue('current-score', updatedScore)

    removeBgById(pressedKey);
    continueGame();
  }else{
    //update life
    const currentLife = getElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setElementValue('current-life', updatedLife);
  }

}document.addEventListener('keyup', handleGamePlay);



function continueGame(){
  const alphabet = generateARandomAlphabet();
  //set random alphabet
  const alphaElement = document.getElementById('displayed-alphabet');
  alphaElement.innerText = alphabet;

  setBgById(alphabet);
}


function playNow(){
  hideElementById('home-section');
  showElementById('playground-section');

  continueGame();
}

