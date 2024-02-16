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



function handleGamePlay(event){
  const pressedKey = event.key;
  
  //get the expected key to be pressed
  const currentAlphabet = getElementTextById('displayed-alphabet');
  const lowerAlphabet = currentAlphabet.toLowerCase();
  console.log(pressedKey, lowerAlphabet);

  if(lowerAlphabet === pressedKey){
    console.log('pressed right key');

    removeBgById(pressedKey);
    playNow();
  }else{
    console.log('pressed wrong key');
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

