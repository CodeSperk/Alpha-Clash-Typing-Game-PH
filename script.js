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

  //game over if pressed esc
  if(pressedKey === 'Escape'){
    gameOver();
  }
  
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

    if(updatedLife === 0){
      gameOver();
    }
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
  hideElementById('score-section');
  showElementById('playground-section');

  //reset Life & Score
  setElementValue('current-score', 0);
  setElementValue('current-life', 5);

  continueGame();
}

function gameOver(){
  hideElementById('playground-section');
  showElementById('score-section');

  //get final score
  const finalScore = getElementValueById('current-score');
  //set final score
  setElementValue('final-score', finalScore);

  //clear the last selected alphabet
  const currentAlphabet = getElementTextById('displayed-alphabet');
  const lowerAlphabet = currentAlphabet.toLocaleLowerCase();
  removeBgById(lowerAlphabet);
}

